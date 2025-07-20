# Full-Stack Authentication System

A modern, secure authentication system built with React frontend and Node.js/Express backend, featuring JWT tokens, password hashing, and comprehensive user management.

## Features

### Security Features
- JWT Authentication with access & refresh tokens
- Password Hashing using bcryptjs (12-round salt)
- Rate Limiting to prevent brute force attacks
- Input Validation with express-validator
- CORS Protection for cross-origin requests
- Environment Variables for sensitive data

### User Management
- User Registration with validation
- Secure Login/Logout
- Profile Management (view/edit)
- Password strength requirements
- Automatic token refresh
- Session management

### Frontend Features
- Modern React 19 with hooks
- React Router for navigation
- Responsive design with CSS Grid/Flexbox
- Form validation and error handling
- Loading states and user feedback
- Protected routes with authentication guards

### Developer Experience
- Hot reload with Nodemon & Vite
- Structured folder organization
- Clean API design
- Error handling and logging
- Development/Production configs

## Project Structure

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

## Technologies Used

### Backend Dependencies
- **bcryptjs** (^2.4.3) - Secure password hashing
- **cors** (^2.8.5) - Enable cross-origin requests
- **dotenv** (^17.2.0) - Environment variable management
- **express** (^4.21.2) - Web server framework
- **express-rate-limit** (^7.1.5) - Rate limiting middleware
- **express-validator** (^7.0.1) - Input validation
- **jsonwebtoken** (^9.0.2) - JWT token generation/verification
- **mongoose** (^8.16.4) - MongoDB object modeling
- **nodemon** (^3.1.10) - Development server auto-restart

### Frontend Dependencies
- **react** (^19.1.0) - UI library
- **react-dom** (^19.1.0) - React DOM rendering
- **react-router-dom** (^7.7.0) - Client-side routing
- **axios** (^1.6.2) - HTTP client for API calls
- **vite** (^7.0.4) - Build tool and development server

## Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local or cloud)
- Git

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd authentication
```

2. Backend setup
```bash
cd Backend
npm install
cp .env.example .env
# Edit .env with your database credentials
```

3. Frontend setup
```bash
cd ../Frontend
npm install
```

### Environment Variables

Create a `.env` file in the Backend directory:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/auth_db
JWT_SECRET=your-super-secret-key
JWT_REFRESH_SECRET=your-refresh-secret
JWT_EXPIRE=15m
JWT_REFRESH_EXPIRE=7d
```

### Running the Application

1. Start the backend server:
```bash
cd Backend
npm run dev
```

2. Start the frontend development server:
```bash
cd Frontend
npm run dev
```

The backend will run on `http://localhost:5000` and the frontend on `http://localhost:5173`.

## API Endpoints

### Public Routes
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/refresh-token` - Refresh access token

### Protected Routes (Require JWT)
- `POST /api/auth/logout` - User logout
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile

### Utility Routes
- `GET /api/health` - Health check

## Usage

### Registration
1. Navigate to `/register`
2. Fill in your name, email, and password
3. Submit the form
4. You'll be redirected to the dashboard upon successful registration

### Login
1. Navigate to `/login`
2. Enter your email and password
3. Submit the form
4. You'll be redirected to the dashboard upon successful login

### Dashboard
- View your profile information
- Edit your profile details
- Logout from the application

## Security Features

### Authentication & Authorization
- JWT tokens with 15-minute expiry
- Refresh tokens with 7-day expiry
- Automatic token refresh
- Secure logout with token blacklisting

### Password Security
- bcryptjs with 12-round salt hashing
- Password requirements:
  - Minimum 6 characters
  - At least 1 uppercase letter
  - At least 1 lowercase letter
  - At least 1 number

### Protection Mechanisms
- Rate limiting (5 authentication attempts per 15 minutes)
- Input validation and sanitization
- CORS protection for cross-origin requests
- Environment variable security

### Data Validation
- Email format validation
- Name length constraints (2-50 characters)
- Server-side and client-side validation

## Skills Demonstrated

### Backend Development
- RESTful API design and implementation
- JWT authentication and authorization
- Database modeling with MongoDB/Mongoose
- Custom middleware creation
- Comprehensive error handling
- Security best practices implementation

### Frontend Development
- Modern React 19 with functional components and hooks
- State management and context API
- Form validation and user experience
- API integration with axios
- React Router for client-side routing
- Responsive design with CSS

### Full-Stack Integration
- Frontend-backend communication
- Token-based authentication flow
- Error handling across the stack
- User experience optimization
- Security awareness and implementation
- Professional project structure

## Troubleshooting

### Common Issues

**Backend won't start:**
- Check if MongoDB is running
- Verify .env file exists and has correct values
- Ensure port 5000 is available
- Check Node.js version (requires v18+)

**CORS errors:**
- Verify backend CORS configuration
- Check if frontend URL is correctly configured in backend
- Ensure both frontend and backend servers are running

**Database connection issues:**
- Start MongoDB service
- Check MONGO_URI format in .env file
- Verify database permissions
- Test connection string separately

**Authentication not working:**
- Check JWT secrets in .env file
- Verify token expiry settings
- Clear browser localStorage/cookies
- Check network requests in browser DevTools

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Mohit Kumar**
- GitHub: [@Mohit-kumar123](https://github.com/Mohit-kumar123)
- LinkedIn: [Connect with me](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

## Acknowledgments

- Express.js for the robust web framework
- React for the powerful UI library
- MongoDB for the flexible database solution
- JWT.io for token standards
- bcrypt for secure password hashing
