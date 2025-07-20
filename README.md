# 🔐 Full-Stack Authentication System

A modern, secure authentication system built with **React** frontend and **Node.js/Express** backend, featuring JWT tokens, password hashing, and comprehensive user management.

![Authentication Flow](https://img.shields.io/badge/Auth-JWT%20Tokens-green)
![Frontend](https://img.shields.io/badge/Frontend-React%2019-blue)
![Backend](https://img.shields.io/badge/Backend-Node.js%20%7C%20Express-red)
![Database](https://img.shields.io/badge/Database-MongoDB-green)

## 🌟 Features

### 🔒 **Security Features**
- **JWT Authentication** with access & refresh tokens
- **Password Hashing** using bcryptjs (12-round salt)
- **Rate Limiting** to prevent brute force attacks
- **Input Validation** with express-validator
- **CORS Protection** for cross-origin requests
- **Environment Variables** for sensitive data

### 👤 **User Management**
- User Registration with validation
- Secure Login/Logout
- Profile Management (view/edit)
- Password strength requirements
- Automatic token refresh
- Session management

### 🎨 **Frontend Features**
- Modern React 19 with hooks
- React Router for navigation
- Responsive design with CSS Grid/Flexbox
- Form validation and error handling
- Loading states and user feedback
- Protected routes with authentication guards

### 🔧 **Developer Experience**
- Hot reload with Nodemon & Vite
- Structured folder organization
- Clean API design
- Error handling and logging
- Development/Production configs

## 🏗️ Project Structure

```
authentication/
├── README.md
├── .gitignore
├── Backend/                 # Node.js/Express API
│   ├── .env                # Environment variables
│   ├── package.json        # Backend dependencies
│   ├── index.js            # Main server file
│   ├── controllers/        # Business logic
│   │   └── UserController.js
│   ├── models/             # Database schemas
│   │   ├── UserSchema.js
│   │   └── TokenSchema.js
│   ├── routes/             # API endpoints
│   │   └── UserRoutes.js
│   ├── middleware/         # Custom middleware
│   │   ├── authMiddleware.js
│   │   ├── validation.js
│   │   └── rateLimiter.js
│   └── utils/              # Utility functions
│       └── generateToken.js
└── Frontend/               # React Application
    ├── package.json        # Frontend dependencies
    ├── index.html          # HTML template
    ├── vite.config.js      # Vite configuration
    └── src/
        ├── main.jsx        # React entry point
        ├── App.jsx         # Main App component
        ├── App.css         # Global styles
        ├── components/     # React components
        │   ├── Login.jsx
        │   ├── Register.jsx
        │   └── Dashboard.jsx
        └── services/       # API integration
            └── api.js
```

## 📦 Backend Dependencies Explained

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

## 🎨 Frontend Dependencies Explained

| Dependency | Version | What it Does | Restaurant Analogy |
|------------|---------|--------------|-------------------|
| **react** | ^19.1.0 | UI library for building interfaces | The dining room where customers interact 🪑 |
| **react-dom** | ^19.1.0 | Renders React to the browser | The service that brings food to tables 🍽️ |
| **react-router-dom** | ^7.7.0 | Navigation between pages | Restaurant floor plan with different sections 🗺️ |
| **axios** | ^1.6.2 | HTTP client for API calls | Waiter carrying orders to/from kitchen 👨‍🍳 |
| **vite** | ^7.0.4 | Fast build tool & dev server | Lightning-fast kitchen equipment ⚡ |

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **MongoDB** (local or cloud)
- **Git** for version control

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd authentication
```

### 2. Backend Setup
```bash
cd Backend
npm install

# Create .env file
cp .env.example .env
# Edit .env with your configurations
```

**Environment Variables (.env):**
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/auth_db
JWT_SECRET=your-super-secret-jwt-key-make-it-long-and-random
JWT_REFRESH_SECRET=your-refresh-token-secret-here
JWT_EXPIRE=15m
JWT_REFRESH_EXPIRE=7d
```

### 3. Frontend Setup
```bash
cd ../Frontend
npm install
```

### 4. Run the Application

**Terminal 1 - Backend:**
```bash
cd Backend
npm run dev    # Development with auto-reload
# or
npm start      # Production mode
```

**Terminal 2 - Frontend:**
```bash
cd Frontend
npm run dev    # Development server
```

## 🔌 API Endpoints

### Public Routes
```http
POST /api/auth/register     # User registration
POST /api/auth/login        # User login
POST /api/auth/refresh-token # Refresh access token
```

### Protected Routes (Require JWT)
```http
POST /api/auth/logout       # User logout
GET  /api/auth/profile      # Get user profile
PUT  /api/auth/profile      # Update user profile
```

### Utility Routes
```http
GET  /api/health           # Health check
```

## 🧪 Testing the Application

### Registration Flow
1. Navigate to `http://localhost:5173/register`
2. Fill in: Name, Email, Password
3. Submit → Auto-redirect to Dashboard

### Login Flow
1. Navigate to `http://localhost:5173/login`
2. Enter: Email, Password
3. Submit → Redirect to Dashboard

### Dashboard Features
1. View profile information
2. Edit profile (name)
3. Logout functionality
4. Token auto-refresh (behind the scenes)

## 🔒 Security Features Implemented

### 🛡️ **Authentication & Authorization**
- JWT tokens with short expiry (15 minutes)
- Refresh tokens for seamless experience (7 days)
- Automatic token refresh on API calls
- Secure logout with token blacklisting

### 🔐 **Password Security**
- bcryptjs with 12-round salt hashing
- Password strength requirements:
  - Minimum 6 characters
  - At least 1 uppercase letter
  - At least 1 lowercase letter
  - At least 1 number

### 🚦 **Rate Limiting**
- Authentication endpoints: 5 attempts per 15 minutes
- General API: 100 requests per 15 minutes
- Prevents brute force attacks

### ✅ **Input Validation**
- Server-side validation with express-validator
- Email format validation
- Name length constraints (2-50 characters)
- Sanitization of user inputs

### 🌐 **CORS Protection**
- Configured for specific frontend origin
- Credentials support for cookies/tokens
- Prevents unauthorized cross-origin requests

## 🎯 Interview Demo Points

This project demonstrates:

### **Backend Skills**
- RESTful API design
- JWT authentication implementation
- Database modeling with Mongoose
- Middleware creation and usage
- Error handling and validation
- Security best practices

### **Frontend Skills**
- Modern React with hooks
- State management without external libraries
- Form handling and validation
- API integration with axios
- Routing with React Router
- Responsive CSS design

### **Full-Stack Integration**
- Frontend-backend communication
- Token-based authentication flow
- Error handling across the stack
- User experience considerations

## 🐛 Common Issues & Solutions

### Backend Won't Start
```bash
# Check if MongoDB is running
# Verify .env file exists and has correct values
# Check if ports 5000 is available
```

### CORS Errors
```bash
# Ensure backend CORS is configured for frontend URL
# Check if both servers are running on correct ports
```

### Database Connection Issues
```bash
# Verify MongoDB is running
# Check MONGO_URI in .env file
# Ensure database permissions are correct
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- **Express.js** for the robust web framework
- **React** for the powerful UI library
- **MongoDB** for the flexible database
- **JWT.io** for token standards
- **bcrypt** for secure password hashing

---

⭐ **Star this repository if it helped you learn full-stack authentication!**

📫 **Questions?** Open an issue or reach out on LinkedIn!

🔥 **Perfect for showcasing in interviews and portfolios!**
#   A u t h e n t i c a t i o n - F o r m  
 