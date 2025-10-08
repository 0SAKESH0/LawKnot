const express = require('express');
const auth = require('../middleware/auth');
const axios = require('axios');

const router = express.Router();

// ✅ Flask AI endpoint
const AI_API_URL = 'https://meeting-julia-edmonton-gradually.trycloudflare.com/predict';

// ✅ Create a reusable Axios instance
const axiosInstance = axios.create({
  baseURL: AI_API_URL,
  timeout: 60000, // 60 seconds timeout
});

// ✅ Utility: Random delay (to simulate AI typing)
function simulateTypingDelay(min = 2000, max = 3000) {
  return new Promise((resolve) => setTimeout(resolve, Math.random() * (max - min) + min));
}

// ✅ Generate a unique conversation ID
function generateConversationId() {
  return 'conv_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// ✅ AI Chat endpoint
router.post('/chat', auth, async (req, res) => {
  try {
    const { message, conversationId } = req.body;

    // 🧩 Validate message
    if (!message || !message.trim()) {
      return res.status(400).json({ message: 'Message is required' });
    }

    console.log('💬 Received user message:', message);

    // ⏳ Send message to Flask AI model
    const response = await axiosInstance.post('', { message });
    const aiResponse = response.data.response || "Sorry, no response generated.";

    // 💬 Simulate typing delay (2–3 sec)
    await simulateTypingDelay();

    console.log('🤖 AI response ready:', aiResponse);

    // ✅ Send response back to frontend
    res.json({
      response: aiResponse,
      conversationId: conversationId || generateConversationId(),
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('❌ AI chat error:', error.message);

    // Flask not reachable
    if (error.code === 'ECONNREFUSED') {
      return res.status(500).json({ message: 'Cannot connect to AI model (Flask server).' });
    }

    res.status(500).json({ message: 'Error processing AI request' });
  }
});

module.exports = router;
