import React, { useState } from 'react';
import './Login.css'; // Create a CSS file for styling

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const result = await response.json();

        if (result.success) {
            localStorage.setItem('username', result.username);
            window.location.href = '/dashboard';
        } else {
            alert('Invalid login details');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>Login Page</h1>
                <div className="input-group">
                    <label>User Name</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
};

export default Login;
