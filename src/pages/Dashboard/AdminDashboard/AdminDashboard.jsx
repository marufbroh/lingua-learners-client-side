import React from 'react';
import useAuth from '../../../hooks/useAuth';

const AdminDashboard = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1 className='font-bold text-2xl lg:text-6xl'>Hello, {user.displayName}</h1>
        </div>
    );
};

export default AdminDashboard;