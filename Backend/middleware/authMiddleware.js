const jwt = require('jsonwebtoken');
const User = require('../models/UserSchema');
const Token = require('../models/TokenSchema');

const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.header('Authorization');
        
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ 
                message: 'Access denied. No token provided.' 
            });
        }

        const token = authHeader.substring(7);

        // Check if token is blacklisted
        const blacklistedToken = await Token.findOne({ 
            token, 
            type: 'blacklisted' 
        });
        
        if (blacklistedToken) {
            return res.status(401).json({ 
                message: 'Token is invalid.' 
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        const user = await User.findById(decoded.userId);
        if (!user || !user.isActive) {
            return res.status(401).json({ 
                message: 'User not found or inactive.' 
            });
        }

        req.user = user;
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ 
                message: 'Token expired.' 
            });
        }
        
        res.status(401).json({ 
            message: 'Invalid token.' 
        });
    }
};

const adminMiddleware = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ 
            message: 'Access denied. Admin privileges required.' 
        });
    }
    next();
};

module.exports = { authMiddleware, adminMiddleware };