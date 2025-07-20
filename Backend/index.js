const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/UserRoutes');
// const { generalLimiter } = require('./middleware/rateLimiter');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Rate limiting - temporarily disabled
// app.use(generalLimiter);

// Routes
app.use('/api/auth', userRoutes);

// Health check
app.get('/api/health', (req, res) => {
    res.status(200).json({ 
        message: 'Server is running',
        timestamp: new Date().toISOString()
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({ 
        message: 'Route not found' 
    });
});

// Global error handler
app.use((error, req, res, next) => {
    console.error('Global error:', error);
    res.status(500).json({
        message: 'Something went wrong!',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
});

// Database connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('✅ Database connected successfully');
        
        app.listen(port, () => {
            console.log(`🚀 Server is running on port ${port}`);
            console.log(`📍 API Health: http://localhost:${port}/api/health`);
        });
    })
    .catch((err) => {
        console.error('❌ Database connection failed:', err);
        process.exit(1);
    });

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('👋 SIGTERM received, shutting down gracefully');
    mongoose.connection.close(() => {
        console.log('📦 Database connection closed');
        process.exit(0);
    });
});