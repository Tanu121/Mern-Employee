import React from 'react';

const Dashboard = () => {
    const username = localStorage.getItem('username');

    return (
        <div>
            <h1>Welcome to Admin Panel</h1>
            <p>Welcome, {username}</p>
        </div>
    );
};

export default Dashboard;
