# ⚖️ LawKnot

**Your AI-Powered Legal Assistant Platform**

LawKnot is a comprehensive legal technology platform that streamlines legal research, document analysis, and case management using advanced AI capabilities. Built for legal professionals, it provides intelligent tools to enhance productivity and deliver expert insights.

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=flat-square&logo=mongodb)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat-square&logo=vite)

---

## ✨ Features

### 📄 Document Analysis
Upload and analyze legal documents with AI-powered insights. Extract key information, identify clauses, and get summaries automatically.

### 🤖 AI Legal Assistant
Get instant answers to your legal questions powered by Google's Generative AI. The assistant understands legal context and provides relevant guidance.

### 💬 Legal Forum
Connect with legal professionals and discuss complex cases. Share knowledge, ask questions, and collaborate with the legal community.

### 🔍 Case Research
Search and research legal precedents and case histories. Find relevant case law quickly and efficiently.

### 🔐 User Authentication
Secure JWT-based authentication system with user registration and login functionality.

---

## 📸 Screenshots

### 🏠 Home Page
![Home Page](src/preview/home.png)

### 🤖 AI Legal Assistant
![AI Assistant](src/preview/AI-Assistant.png)

### 📄 Document Upload & Analysis
![Document Upload](src/preview/upload.png)

### 🔍 Case Research
![Case Research](src/preview/case-research.png)

### 💬 Legal Forum
![Legal Forum](src/preview/leagal%20forum.png)

### ℹ️ About Page
![About Page](src/preview/About.png)

### 🔑 Login & Signup
| Login | Signup |
|:-----:|:------:|
| ![Login](src/preview/login.png) | ![Signup](src/preview/signup.png) |

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library
- **React Router DOM** - Client-side routing
- **Vite** - Next-generation build tool
- **Axios** - HTTP client for API requests

### Backend
- **Node.js** - JavaScript runtime
- **Express 5** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM

### AI & Document Processing
- **Google Generative AI** - AI-powered responses
- **pdf-parse** - PDF document parsing
- **Multer** - File upload handling

### Security
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT authentication

---

## 📁 Project Structure

```
LawKnot/
├── src/                    # React frontend
│   ├── components/         # Reusable UI components
│   │   └── Navbar.jsx
│   ├── context/            # React context providers
│   │   └── AuthContext.jsx
│   ├── pages/              # Application pages
│   │   ├── Home.jsx
│   │   ├── AIAssistant.jsx
│   │   ├── DocumentAnalysis.jsx
│   │   ├── CaseResearch.jsx
│   │   ├── Forum.jsx
│   │   ├── Login.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── services/           # API service layer
│   ├── App.jsx
│   └── main.jsx
├── server/                 # Express backend
│   ├── models/             # Mongoose models
│   │   ├── User.js
│   │   ├── Case.js
│   │   ├── Document.js
│   │   └── ForumPost.js
│   ├── routes/             # API routes
│   │   ├── auth.js
│   │   ├── ai.js
│   │   ├── documents.js
│   │   ├── cases.js
│   │   └── forum.js
│   ├── middleware/         # Express middleware
│   ├── uploads/            # Uploaded files storage
│   └── server.js           # Server entry point
├── ai/                     # AI model scripts
│   └── ai_model.py
└── public/                 # Static assets
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **MongoDB** (local or Atlas)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/LawKnot.git
   cd LawKnot
   ```

2. **Install dependencies**
   ```bash
   # Install frontend dependencies
   npm install

   # Install server dependencies
   cd server
   npm install
   cd ..
   ```

3. **Environment Setup**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_API_URL=http://localhost:5000/api
   GEMINI_API_KEY=your_google_ai_api_key
   ```

   Create a `.env` file in the `server/` directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/lawknot
   JWT_SECRET=your_jwt_secret_key
   GEMINI_API_KEY=your_google_ai_api_key
   ```

4. **Seed the database (optional)**
   ```bash
   npm run seed
   ```

---

## 🏃‍♂️ Running the Application

### Development Mode

**Start the backend server:**
```bash
npm run server:dev
```

**Start the frontend (in a new terminal):**
```bash
npm run dev
```

The application will be available at:
- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:5000

### Production Build

```bash
# Build the frontend
npm run build

# Start the server
npm run server
```

---

## 📡 API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | User login |

### Documents
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/documents/upload` | Upload a document |
| GET | `/api/documents` | Get user's documents |
| POST | `/api/documents/analyze` | Analyze a document |

### AI Assistant
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/ai/query` | Send a query to AI assistant |

### Forum
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/forum/posts` | Get all forum posts |
| POST | `/api/forum/posts` | Create a new post |

### Cases
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/cases` | Get all cases |
| GET | `/api/cases/search` | Search cases |

### Health Check
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Server health status |

---

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run server` | Start backend server |
| `npm run server:dev` | Start backend with nodemon |
| `npm run seed` | Seed database with sample data |

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📧 Contact

For any questions or feedback, please reach out through the [Contact](http://localhost:5173/contact) page or create an issue in this repository.

---

<p align="center">
  Made with ❤️ for the Legal Community
</p>
