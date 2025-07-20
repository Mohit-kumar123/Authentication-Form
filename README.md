# 🔐 Full-Stack Authentication System

<div align="center">

A modern, secure authentication system built with **React** frontend and **Node.js/Express** backend, featuring JWT tokens, password hashing, and comprehensive user management.

![Authentication Flow](https://img.shields.io/badge/Auth-JWT%20Tokens-green)
![Frontend](https://img.shields.io/badge/Frontend-React%2019-blue)
![Backend](https://img.shields.io/badge/Backend-Node.js%20%7C%20Express-red)
![Database](https://img.shields.io/badge/Database-MongoDB-green)

</div>

---

## 🌟 Features

<table>
<tr>
<td width="50%">

### 🔒 **Security Features**
- ✅ **JWT Authentication** with access & refresh tokens
- ✅ **Password Hashing** using bcryptjs (12-round salt)
- ✅ **Rate Limiting** to prevent brute force attacks
- ✅ **Input Validation** with express-validator
- ✅ **CORS Protection** for cross-origin requests
- ✅ **Environment Variables** for sensitive data

### 👤 **User Management**
- 📝 User Registration with validation
- 🔑 Secure Login/Logout
- 👤 Profile Management (view/edit)
- 💪 Password strength requirements
- 🔄 Automatic token refresh
- 📱 Session management

</td>
<td width="50%">

### 🎨 **Frontend Features**
- ⚛️ Modern React 19 with hooks
- 🛣️ React Router for navigation
- 📱 Responsive design with CSS Grid/Flexbox
- ✅ Form validation and error handling
- ⏳ Loading states and user feedback
- 🔒 Protected routes with authentication guards

### 🔧 **Developer Experience**
- 🔥 Hot reload with Nodemon & Vite
- 📁 Structured folder organization
- 🎯 Clean API design
- 🐛 Error handling and logging
- ⚙️ Development/Production configs

</td>
</tr>
</table>

## 🏗️ Project Structure

<details>
<summary><strong>📁 Click to expand project structure</strong></summary>

```
authentication/
├── 📄 README.md
├── 🚫 .gitignore
├── 📁 Backend/                 # Node.js/Express API
│   ├── 🔐 .env                # Environment variables
│   ├── 📦 package.json        # Backend dependencies
│   ├── 🚀 index.js            # Main server file
│   ├── 📁 controllers/        # Business logic
│   │   └── 👤 UserController.js
│   ├── 📁 models/             # Database schemas
│   │   ├── 👤 UserSchema.js
│   │   └── 🎫 TokenSchema.js
│   ├── 📁 routes/             # API endpoints
│   │   └── 🛣️ UserRoutes.js
│   ├── 📁 middleware/         # Custom middleware
│   │   ├── 🔒 authMiddleware.js
│   │   ├── ✅ validation.js
│   │   └── ⏱️ rateLimiter.js
│   └── 📁 utils/              # Utility functions
│       └── 🎫 generateToken.js
└── 📁 Frontend/               # React Application
    ├── 📦 package.json        # Frontend dependencies
    ├── 🌐 index.html          # HTML template
    ├── ⚡ vite.config.js      # Vite configuration
    └── 📁 src/
        ├── 🚀 main.jsx        # React entry point
        ├── 📱 App.jsx         # Main App component
        ├── 🎨 App.css         # Global styles
        ├── 📁 components/     # React components
        │   ├── 🔑 Login.jsx
        │   ├── 📝 Register.jsx
        │   └── 📊 Dashboard.jsx
        └── 📁 services/       # API integration
            └── 🌐 api.js
```

</details>

## 📦 Dependencies Explained

<details>
<summary><strong>🔧 Backend Dependencies (Click to expand)</strong></summary>

| Dependency | Version | What it Does | Kitchen Analogy |
|------------|---------|--------------|-----------------|
| **bcryptjs** | ^2.4.3 | Hashes passwords securely | Lock secret recipes in a reinforced vault 🔒 |
| **cors** | ^2.8.5 | Enables cross-origin requests | Allow orders from different cities worldwide 🌐 |
| **dotenv** | ^17.2.0 | Loads environment variables | Store secret ingredients in a digital safe 🗝️ |
| **express** | ^4.21.2 | Web server & API framework | The entire restaurant infrastructure 🏗️ |
| **express-rate-limit** | ^7.1.5 | Prevents spam/brute force | Allow only 5 orders per customer per 15 min ⏱️ |
| **express-validator** | ^7.0.1 | Validates incoming data | Quality inspector checking every ingredient ✅ |
| **jsonwebtoken** | ^9.0.2 | Creates/verifies JWT tokens | Issue VIP cards with expiry dates to regulars 🪪 |
| **mongoose** | ^8.16.4 | MongoDB object modeling | Advanced inventory management system 📦 |
| **nodemon** | ^3.1.10 | Auto-restarts server on changes | Smart assistant who refreshes the kitchen automatically 🔁 |

</details>

<details>
<summary><strong>⚛️ Frontend Dependencies (Click to expand)</strong></summary>

| Dependency | Version | What it Does | Restaurant Analogy |
|------------|---------|--------------|-------------------|
| **react** | ^19.1.0 | UI library for building interfaces | The dining room where customers interact 🪑 |
| **react-dom** | ^19.1.0 | Renders React to the browser | The service that brings food to tables 🍽️ |
| **react-router-dom** | ^7.7.0 | Navigation between pages | Restaurant floor plan with different sections 🗺️ |
| **axios** | ^1.6.2 | HTTP client for API calls | Waiter carrying orders to/from kitchen 👨‍🍳 |
| **vite** | ^7.0.4 | Fast build tool & dev server | Lightning-fast kitchen equipment ⚡ |

</details>

## 🚀 Quick Start

<table>
<tr>
<td width="50%">

### 📋 **Prerequisites**
- **Node.js** v18+
- **MongoDB** (local/cloud)
- **Git**

### 📥 **Installation**
```bash
# 1. Clone repository
git clone <your-repo-url>
cd authentication

# 2. Backend setup
cd Backend
npm install
cp .env.example .env
# Edit .env with your values

# 3. Frontend setup
cd ../Frontend
npm install
```

</td>
<td width="50%">

### ⚙️ **Environment Setup**
Create `Backend/.env`:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/auth_db
JWT_SECRET=your-super-secret-key
JWT_REFRESH_SECRET=your-refresh-secret
JWT_EXPIRE=15m
JWT_REFRESH_EXPIRE=7d
```

### 🏃‍♂️ **Run Application**
```bash
# Terminal 1 - Backend
cd Backend && npm run dev

# Terminal 2 - Frontend  
cd Frontend && npm run dev
```

</td>
</tr>
</table>

## 🔌 API Documentation

<details>
<summary><strong>📡 API Endpoints (Click to expand)</strong></summary>

### **Public Routes** 🌐
```http
POST /api/auth/register     # User registration
POST /api/auth/login        # User login  
POST /api/auth/refresh-token # Refresh access token
```

### **Protected Routes** 🔒 *(Require JWT)*
```http
POST /api/auth/logout       # User logout
GET  /api/auth/profile      # Get user profile
PUT  /api/auth/profile      # Update user profile
```

### **Utility Routes** ⚙️
```http
GET  /api/health           # Health check
```

</details>

---

## 🧪 Testing Guide

<table>
<tr>
<td width="33%">

### 📝 **Registration**
1. Go to `/register`
2. Fill: Name, Email, Password
3. Submit → Dashboard

</td>
<td width="33%">

### 🔑 **Login** 
1. Go to `/login`
2. Enter credentials
3. Submit → Dashboard

</td>
<td width="33%">

### 📊 **Dashboard**
1. View profile
2. Edit profile
3. Logout

</td>
</tr>
</table>

## 🔒 Security Implementation

<details>
<summary><strong>🛡️ Security Features (Click to expand)</strong></summary>

<table>
<tr>
<td width="50%">

### **🔐 Authentication & Authorization**
- ✅ JWT tokens (15 min expiry)
- ✅ Refresh tokens (7 days)
- ✅ Automatic token refresh
- ✅ Secure logout with blacklisting

### **🔒 Password Security**
- ✅ bcryptjs with 12-round salt
- ✅ Password requirements:
  - Min 6 characters
  - 1 uppercase letter
  - 1 lowercase letter  
  - 1 number

</td>
<td width="50%">

### **🚦 Protection Mechanisms**
- ✅ Rate limiting (5 auth attempts/15min)
- ✅ Input validation & sanitization
- ✅ CORS protection
- ✅ Environment variable security

### **✅ Data Validation**
- ✅ Email format validation
- ✅ Name length constraints (2-50 chars)
- ✅ Server-side validation
- ✅ Client-side form validation

</td>
</tr>
</table>

</details>

## 🎯 Interview Showcase

<table>
<tr>
<td width="33%">

### **💻 Backend Skills**
- ✅ RESTful API design
- ✅ JWT authentication
- ✅ Database modeling
- ✅ Middleware creation
- ✅ Error handling
- ✅ Security practices

</td>
<td width="33%">

### **⚛️ Frontend Skills**
- ✅ Modern React hooks
- ✅ State management
- ✅ Form validation
- ✅ API integration
- ✅ React Router
- ✅ Responsive design

</td>
<td width="33%">

### **🔗 Full-Stack**
- ✅ Frontend-backend communication
- ✅ Token-based auth flow
- ✅ Error handling
- ✅ User experience
- ✅ Security awareness
- ✅ Project structure

</td>
</tr>
</table>

---

## 🐛 Troubleshooting

<details>
<summary><strong>❗ Common Issues & Solutions</strong></summary>

### **Backend Won't Start**
```bash
# Check MongoDB connection
# Verify .env file exists
# Ensure port 5000 is available
# Check Node.js version (v18+)
```

### **CORS Errors**
```bash  
# Verify backend CORS config
# Check frontend URL in backend
# Ensure both servers running
```

### **Database Issues**
```bash
# Start MongoDB service
# Check MONGO_URI format
# Verify database permissions
```

</details>

## 🤝 Contributing

<div align="center">

### 🚀 **How to Contribute**

</div>

1. **🍴 Fork** the repository
2. **🌿 Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **💾 Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **📤 Push** to the branch (`git push origin feature/amazing-feature`)
5. **🔄 Open** a Pull Request

---

## 👨‍💻 Author

<div align="center">

**Mohit Kumar**

[![GitHub](https://img.shields.io/badge/GitHub-Mohit--kumar123-black?style=for-the-badge&logo=github)](https://github.com/Mohit-kumar123)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/yourprofile)
[![Email](https://img.shields.io/badge/Email-Contact-red?style=for-the-badge&logo=gmail)](mailto:your.email@example.com)

</div>

---

## 🙏 Acknowledgments

<div align="center">

**Built with ❤️ using amazing technologies**

| Technology | Purpose |
|------------|---------|
| **Express.js** | Robust web framework |
| **React** | Powerful UI library |
| **MongoDB** | Flexible database |
| **JWT.io** | Token standards |
| **bcrypt** | Secure password hashing |

</div>

---

<div align="center">

### 🌟 **Show Your Support**

⭐ **Star this repository if it helped you learn full-stack authentication!**

📫 **Questions?** Open an issue or reach out!

🔥 **Perfect for showcasing in interviews and portfolios!**

---

**Made with 💻 by developers, for developers**

</div>
#   A u t h e n t i c a t i o n - F o r m 
 
 