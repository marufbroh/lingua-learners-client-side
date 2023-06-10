import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import useStudent from '../hooks/useStudent';

const Dashboard = () => {
    const { user } = useAuth();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const [isStudent] = useStudent();
    return (
        // <div>
        //     <Outlet />
        //     <Footer />
        // </div>

        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <div className='text-center'>
                        <label htmlFor="my-drawer-2" className="btn btn-outline drawer-button lg:hidden">Open drawer</label>
                    </div>
                    <Outlet />

                </div>
                {
                    user && isStudent && (
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 h-full lg:space-y-6 bg-slate-900 text-base-content">
                                {/* Sidebar content here */}
                                <li>
                                    <NavLink
                                        to='/dashboard/student'
                                        className="text-white font-bold text-lg lg:text-xl tracking-wider"
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/dashboard/my-selected-classes'
                                        className="text-white font-bold text-lg lg:text-xl tracking-wider"
                                    >
                                        My Selected Classes
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/dashboard/my-enrolled-classes'
                                        className="text-white font-bold text-lg lg:text-xl tracking-wider"
                                    >
                                        My Enrolled Classes
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/dashboard/payment-history'
                                        className="text-white font-bold text-lg lg:text-xl tracking-wider"
                                    >
                                        Paymnet History
                                    </NavLink>
                                </li>
                            </ul>

                        </div>
                    )
                }
            </div>
            <Footer />
        </div>

    );
};

export default Dashboard;