import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Employees = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get('/api/employees', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setEmployees(response.data);
            } catch (error) {
                console.error('Error fetching employees', error);
            }
        };

        fetchEmployees();
    }, []);

    return (
        <div>
            <h1>Employee List</h1>
            <ul>
                {employees.map(employee => (
                    <li key={employee._id}>
                        {employee.f_Name} - {employee.f_Designation}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Employees;
