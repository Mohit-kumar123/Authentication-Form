const User = require('../models/UserSchema');
const Token = require('../models/TokenSchema');
const { generateTokens, verifyToken } = require('../utils/generateToken');

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ 
                message: 'User with this email already exists' 
            });
        }

        // Create new user
        const newUser = new User({ name, email, password });
        await newUser.save();

        // Generate tokens
        const { accessToken, refreshToken } = await generateTokens(newUser._id);

        res.status(201).json({
            message: 'User registered successfully',
            user: newUser,
            accessToken,
            refreshToken
        });

    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ 
            message: 'Internal server error',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user and include password field
        const user = await User.findOne({ email }).select('+password');
        if (!user) {
            return res.status(401).json({ 
                message: 'Invalid credentials' 
            });
        }

        // Check if user is active
        if (!user.isActive) {
            return res.status(401).json({ 
                message: 'Account is deactivated' 
            });
        }

        // Compare password
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(401).json({ 
                message: 'Invalid credentials' 
            });
        }

        // Update last login
        user.lastLogin = new Date();
        await user.save();

        // Generate tokens
        const { accessToken, refreshToken } = await generateTokens(user._id);

        res.status(200).json({
            message: 'Login successful',
            user: user.toJSON(),
            accessToken,
            refreshToken
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ 
            message: 'Internal server error',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
};

const refreshToken = async (req, res) => {
    try {
        const { refreshToken } = req.body;

        if (!refreshToken) {
            return res.status(401).json({ 
                message: 'Refresh token is required' 
            });
        }

        // Verify refresh token
        const decoded = verifyToken(refreshToken, process.env.JWT_REFRESH_SECRET);

        // Check if refresh token exists in database
        const tokenDoc = await Token.findOne({
            token: refreshToken,
            type: 'refresh',
            userId: decoded.userId
        });

        if (!tokenDoc) {
            return res.status(401).json({ 
                message: 'Invalid refresh token' 
            });
        }

        // Generate new tokens
        const { accessToken, refreshToken: newRefreshToken } = await generateTokens(decoded.userId);

        // Remove old refresh token
        await Token.deleteOne({ _id: tokenDoc._id });

        res.status(200).json({
            accessToken,
            refreshToken: newRefreshToken
        });

    } catch (error) {
        console.error('Token refresh error:', error);
        res.status(401).json({ 
            message: 'Invalid refresh token' 
        });
    }
};

const logoutUser = async (req, res) => {
    try {
        const authHeader = req.header('Authorization');
        const token = authHeader.substring(7);

        // Add current token to blacklist
        const decoded = verifyToken(token, process.env.JWT_SECRET);
        await Token.create({
            userId: decoded.userId,
            token,
            type: 'blacklisted',
            expiresAt: new Date(decoded.exp * 1000)
        });

        // Remove refresh tokens for this user
        await Token.deleteMany({
            userId: decoded.userId,
            type: 'refresh'
        });

        res.status(200).json({ 
            message: 'Logout successful' 
        });

    } catch (error) {
        console.error('Logout error:', error);
        res.status(500).json({ 
            message: 'Internal server error' 
        });
    }
};

const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        res.status(200).json({ 
            user 
        });
    } catch (error) {
        console.error('Get profile error:', error);
        res.status(500).json({ 
            message: 'Internal server error' 
        });
    }
};

const updateProfile = async (req, res) => {
    try {
        const { name } = req.body;
        const user = await User.findByIdAndUpdate(
            req.user._id,
            { name },
            { new: true, runValidators: true }
        );

        res.status(200).json({
            message: 'Profile updated successfully',
            user
        });
    } catch (error) {
        console.error('Update profile error:', error);
        res.status(500).json({ 
            message: 'Internal server error' 
        });
    }
};

module.exports = {
    registerUser,
    loginUser,
    refreshToken,
    logoutUser,
    getProfile,
    updateProfile
};