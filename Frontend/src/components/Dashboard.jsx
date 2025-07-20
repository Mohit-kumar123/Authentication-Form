import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authApi } from '../services/api';

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Try to get user from localStorage first
        const userData = localStorage.getItem('user');
        if (userData) {
            const parsedUser = JSON.parse(userData);
            setUser(parsedUser);
            setName(parsedUser.name || '');
        } else {
            // If no user data, try to fetch from API
            fetchUserProfile();
        }
    }, [navigate]);

    const fetchUserProfile = async () => {
        try {
            const token = localStorage.getItem('accessToken');
            if (!token) {
                navigate('/login');
                return;
            }

            const response = await authApi.getProfile();
            setUser(response.data.user);
            setName(response.data.user.name || '');
            localStorage.setItem('user', JSON.stringify(response.data.user));
        } catch (error) {
            console.error('Failed to fetch profile:', error);
            // If token is invalid, redirect to login
            if (error.response?.status === 401) {
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                localStorage.removeItem('user');
                navigate('/login');
            }
        }
    };

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');

        try {
            const response = await authApi.updateProfile({ name });
            setMessage(response.data.message);
            setUser(response.data.user);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            setIsEditing(false);
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Update failed';
            setMessage(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            await authApi.logout();
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            // Clear all stored data
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('user');
            navigate('/login');
        }
    };

    if (!user) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="dashboard-container">
            <div className="dashboard-card">
                <div className="dashboard-header">
                    <h2>Welcome to Dashboard</h2>
                    <p>Manage your account</p>
                    <button onClick={handleLogout} className="logout-button">
                        Logout
                    </button>
                </div>

                <div className="profile-section">
                    <h3>Profile Information</h3>
                    
                    {!isEditing ? (
                        <div className="profile-view">
                            <div className="profile-item">
                                <label>Name:</label>
                                <span>{user.name}</span>
                            </div>
                            <div className="profile-item">
                                <label>Email:</label>
                                <span>{user.email}</span>
                            </div>
                            <div className="profile-item">
                                <label>Role:</label>
                                <span className="role-badge">{user.role}</span>
                            </div>
                            <div className="profile-item">
                                <label>User ID:</label>
                                <span>{user._id}</span>
                            </div>
                            <div className="profile-item">
                                <label>Member Since:</label>
                                <span>{new Date(user.createdAt).toLocaleDateString()}</span>
                            </div>
                            <div className="profile-item">
                                <label>Last Login:</label>
                                <span>{user.lastLogin ? new Date(user.lastLogin).toLocaleString() : 'N/A'}</span>
                            </div>
                            
                            <button 
                                onClick={() => setIsEditing(true)}
                                className="edit-button"
                            >
                                Edit Profile
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleUpdateProfile} className="profile-edit">
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    minLength={2}
                                    maxLength={50}
                                />
                            </div>
                            
                            <div className="form-actions">
                                <button 
                                    type="submit" 
                                    disabled={isLoading}
                                    className="save-button"
                                >
                                    {isLoading ? 'Updating...' : 'Save Changes'}
                                </button>
                                <button 
                                    type="button" 
                                    onClick={() => {
                                        setIsEditing(false);
                                        setName(user?.name || '');
                                        setMessage('');
                                    }}
                                    className="cancel-button"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    )}

                    {message && (
                        <div className={`message ${message.includes('success') ? 'success' : 'error'}`}>
                            {message}
                        </div>
                    )}
                </div>

                <div className="stats-section">
                    <h3>Account Stats</h3>
                    <div className="stats-grid">
                        <div className="stat-item">
                            <div className="stat-value">{user.isActive ? 'Active' : 'Inactive'}</div>
                            <div className="stat-label">Account Status</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-value">{user.role === 'admin' ? 'Admin' : 'User'}</div>
                            <div className="stat-label">Access Level</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-value">
                                {Math.floor((new Date() - new Date(user.createdAt)) / (1000 * 60 * 60 * 24))}
                            </div>
                            <div className="stat-label">Days Active</div>
                        </div>
                    </div>
                </div>

                <div className="welcome-section">
                    <h3>Welcome Message</h3>
                    <div className="welcome-card">
                        <p>🎉 Congratulations! You have successfully logged in with JWT authentication.</p>
                        <p>Your enhanced authentication system is working perfectly!</p>
                        <p>✅ JWT Tokens ✅ Auto Refresh ✅ Secure API ✅ Protected Routes</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;