import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import useStudent from '../hooks/useStudent';

const Dashboard = () => {
    const { user, logOut } = useAuth();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const [isStudent] = useStudent();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-outline drawer-button lg:hidden">Open drawer</label>
                    <Outlet />

                </div>

                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <div className="w-80 h-full p-4 bg-slate-900 text-base-content">
                        {/* Sidebar content here */}
                        {
                            user && isStudent && (
                                <ul className='menu lg:space-y-6'>
                                    <li>
                                        <NavLink
                                            to='/dashboard/student'
                                            className="text-white font-bold text-lg lg:text-xl tracking-wider"
                                        >
                                            Dashboard
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
                            )
                        }
                        {
                            user && isInstructor && (
                                <ul className='menu lg:space-y-6'>
                                    <li>
                                        <NavLink
                                            to='/dashboard/instructor'
                                            className="text-white font-bold text-lg lg:text-xl tracking-wider"
                                        >
                                            Dashboard
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to='/dashboard/add-class'
                                            className="text-white font-bold text-lg lg:text-xl tracking-wider"
                                        >
                                            Add A Class
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to='/dashboard/my-classes'
                                            className="text-white font-bold text-lg lg:text-xl tracking-wider"
                                        >
                                            My Classes
                                        </NavLink>
                                    </li>
                                </ul>
                            )
                        }
                        <div className="divider bg-white rounded">or</div>
                        <ul className='menu lg:space-y-6'>
                            <li>
                                <Link
                                    to='/'
                                    className="text-white font-bold text-lg lg:text-xl tracking-wider border-b-2"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/classes'
                                    className="text-white font-bold text-lg lg:text-xl tracking-wider border-b-2"
                                >
                                    Classes
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/instructors'
                                    className="text-white font-bold text-lg lg:text-xl tracking-wider border-b-2"
                                >
                                    Instructors
                                </Link>
                            </li>
                            <li>
                                <button
                                    onClick={handleLogOut}
                                    className="text-white font-bold text-lg lg:text-xl tracking-wider border-b-2"
                                >
                                    Log out
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;