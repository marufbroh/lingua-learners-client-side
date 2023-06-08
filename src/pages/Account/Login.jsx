import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import SocialLogin from '../Shared/SocialLogin';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const onSubmit = (data) => {
        // Handle form submission logic here
        console.log(data);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md py-4 px-8 bg-white rounded-md shadow-md">
                <h2 className="mb-6 text-2xl font-bold text-center">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block mb-2 font-medium text-gray-800">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black"
                            {...register("email", { required: true })}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 font-medium text-gray-800">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                id="password"
                                className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black"
                                {...register("password", {required: true})}
                            />
                            <button
                                type="button"
                                className="absolute top-2 right-2 text-gray-500 focus:outline-none"
                                onClick={togglePasswordVisibility}
                            >
                                {passwordVisible ? (
                                    <FaEyeSlash className="w-5 h-5" />
                                ) : (
                                    <FaEye className="w-5 h-5" />
                                )}
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center mb-4">
                        <button
                            type="submit"
                            className="btn btn-block btn-outline border-gray-300"
                        >
                            Login
                        </button>
                    </div>
                    <div className="divider my-6">
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400 mb-4">
                            Don't have an account? <Link to={"/register"} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register here</Link>
                        </p>
                    </div>
                </form>
                <SocialLogin />
            </div>
        </div>
    );
};

export default Login;