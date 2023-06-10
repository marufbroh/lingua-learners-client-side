import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';

const Dashboard = () => {
    return (
        <div>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Dashboard;