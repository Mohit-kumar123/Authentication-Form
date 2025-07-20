const jwt = require('jsonwebtoken');
const Token = require('../models/TokenSchema');

const generateTokens = async (userId) => {
    try {
        const payload = { userId, type: 'access' };
        
        const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRE || '15m'
        });
        
        const refreshToken = jwt.sign(
            { userId, type: 'refresh' }, 
            process.env.JWT_REFRESH_SECRET, 
            { expiresIn: process.env.JWT_REFRESH_EXPIRE || '7d' }
        );

        // Save refresh token to database
        await Token.create({
            userId,
            token: refreshToken,
            type: 'refresh',
            expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days
        });

        return { accessToken, refreshToken };
    } catch (error) {
        throw new Error('Token generation failed');
    }
};

const verifyToken = (token, secret) => {
    return jwt.verify(token, secret);
};

module.exports = { generateTokens, verifyToken };