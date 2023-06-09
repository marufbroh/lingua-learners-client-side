import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Tooltip } from 'react-tooltip';
import { Link, NavLink } from 'react-router-dom';
import nonUser from '../../assets/nonuser.png'

const Navbar = () => {
    const { user, logOut } = useAuth();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='bg-slate-900'>
            <div className="navbar container mx-auto px-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link
                                    to='/'
                                >
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/instructors'
                                >
                                    Instructors
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/classes'
                                >
                                    Classes
                                </Link>
                            </li>
                            {!user ?
                                <li>
                                    <Link
                                        to='/login'
                                    >
                                        Login
                                    </Link>
                                </li> :
                                <li onClick={handleLogOut}>
                                    <Link
                                    >
                                        Logout
                                    </Link>
                                </li>
                            }
                        </ul>
                    </div>
                    <Link to='/' className='inline-flex items-center'>
                        <img alt="" />
                        <h1 className='text-2xl lg:text-4xl font-bold tracking-wide text-white cursor-pointer'>
                            LinguaLearners
                        </h1>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-6">
                        <li>
                            <NavLink
                                to='/'
                                className={({ isActive }) => (isActive ? 'text-white border-b-4 rounded' : 'text-white')}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/instructors'
                                className={({ isActive }) => (isActive ? 'text-white border-b-4 rounded' : 'text-white')}
                            >
                                Instructors
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/classes'
                                className={({ isActive }) => (isActive ? 'text-white border-b-4 rounded' : 'text-white')}
                            >
                                Classes
                            </NavLink>
                        </li>
                        {user && <li>
                            <NavLink
                                to='/v'
                                className={({ isActive }) => (isActive ? 'text-white border-b-4 rounded' : 'text-white')}
                            >
                                Dashboard
                            </NavLink>
                        </li>}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex items-center lg:gap-5">
                        {user ?
                            <button onClick={handleLogOut} type='button' className='btn btn-outline hidden lg:flex text-white'>
                                Log Out
                            </button> :
                            <Link to={"/login"}><button type='button' className='btn btn-outline hidden lg:flex text-white'>
                                Login
                            </button></Link>
                        }

                        {
                            user?.photoURL &&
                            <img
                                referrerPolicy="no-referrer"
                                src={user?.photoURL}
                                alt="User Profile"
                                className="w-10 h-10 rounded-full"
                                data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName} data-tooltip-place="right"
                            />
                        }

                        <Tooltip id="my-tooltip" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;