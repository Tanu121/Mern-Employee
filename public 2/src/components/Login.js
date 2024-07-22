import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!userName || !password) {
            alert('Username and password are required');
            return;
        }

        try {
            const response = await axios.post('/api/login', { f_userName: userName, f_Pwd: password });
            localStorage.setItem('token', response.data.token);
            window.location.href = '/dashboard';
        } catch (error) {
            alert('Invalid login details');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Username" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
