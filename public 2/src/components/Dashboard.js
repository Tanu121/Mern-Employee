import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [user, setUser] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // Fetch user details if needed
            setUser('Hukum Gupta'); // Set as per actual user data
        } else {
            window.location.href = '/login';
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    return (
        <div>
            <header>
                <img src="logo.png" alt="Logo" />
                <nav>
                    <a href="/">Home</a>
                    <a href="/employees">Employee List</a>
                    <span>{user} -</span>
                    <button onClick={handleLogout}>Logout</button>
                </nav>
            </header>
            <main>
                <h1>Welcome Admin Panel</h1>
                {/* Dashboard content goes here */}
            </main>
        </div>
    );
};

export default Dashboard;
