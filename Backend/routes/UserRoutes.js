const express = require('express');
const {
    registerUser,
    loginUser,
    refreshToken,
    logoutUser,
    getProfile,
    updateProfile
} = require('../controllers/UserController');

const { authMiddleware } = require('../middleware/authMiddleware');
// const { authLimiter } = require('../middleware/rateLimiter');
// const {
//     validateRegistration,
//     validateLogin,
//     handleValidationErrors
// } = require('../middleware/validation');

const router = express.Router();

// Public routes
router.post('/register', 
    // authLimiter,
    // validateRegistration,
    // handleValidationErrors,
    registerUser
);

router.post('/login', 
    // authLimiter,
    // validateLogin,
    // handleValidationErrors,
    loginUser
);

router.post('/refresh-token', refreshToken);

// Protected routes
router.post('/logout', authMiddleware, logoutUser);
router.get('/profile', authMiddleware, getProfile);
router.put('/profile', authMiddleware, updateProfile);

module.exports = router;