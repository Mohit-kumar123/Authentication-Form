import React from 'react'
import {BrowserRouter as Router, Routes,Route,Link }from 'react-router-dom';
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import './App.css'

function App() {
  return (
    <>
    <Router>
      <header>
        <h1>Authentication App</h1>
      </header>

      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />

      </Routes>
    </Router>
    </>
  )
}

export default App
