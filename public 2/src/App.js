import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Employees from './components/Employees';
import './App.css';

const App = () => {
    const isAuthenticated = () => {
        return !!localStorage.getItem('token');
    };

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />} />
                    <Route path="/employees" element={isAuthenticated() ? <Employees /> : <Navigate to="/login" />} />
                    <Route path="/" element={isAuthenticated() ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
