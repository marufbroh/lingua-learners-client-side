import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import SocialLogin from '../Shared/SocialLogin';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import axios from 'axios';

const Register = () => {
    const { createUser, updateUserProfile } = useAuth();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const password = watch("password");

    const onSubmit = (data) => {
        // Handle form submission logic here
        // console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                // const user = result.user;
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, image: data.photoURL, email: data.email, role: "student" };
                        axios.post("https://ph-assignment-12-server-endgame.vercel.app/users", saveUser)
                            .then(data => {
                                // console.log(data.data);
                                if (data.data.insertedId) {
                                    reset()
                                    toast.success("User created successfully")
                                    navigate("/")
                                }
                            })
                    })
                    .catch(error => {
                        console.log(error);
                        toast.error(error.message)
                    })
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message)
            })
    };


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md py-4 px-8 bg-white rounded-md shadow-md">
                <h2 className="mb-6 text-3xl font-bold text-center">Registration</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block mb-2 font-medium text-gray-800">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black"
                            {...register("name", { required: true })}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 font-medium text-gray-800">
                            Photo URL
                        </label>
                        <input
                            type="url"
                            id="photoURL"
                            className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black"
                            {...register("photoURL", { required: true })}
                        />
                    </div>
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
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*()])/
                                })}
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
                        {errors.password && (
                            <p className="text-red-500">The password must be at least 6 characters long and contain a capital letter and a special character.</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 font-medium text-gray-800">
                            Confirm Password
                        </label>
                        <div className="relative">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                id="confirmPassword"
                                className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black"
                                {...register("confirmPassword", {
                                    required: true,
                                    validate: (value) => value === password || "Passwords do not match"
                                })}
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
                        {errors.confirmPassword && (
                            <p className="text-red-500">{errors.confirmPassword.message}</p>
                        )}
                    </div>

                    <div className="flex items-center justify-center mb-4">
                        <button
                            type="submit"
                            className="btn btn-block btn-outline border-gray-300"
                        >
                            Create an account
                        </button>
                    </div>

                    <div className="divider mt-8">
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400 mb-4">
                            Already have an account? <Link to={"/login"} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                        </p>
                    </div>
                </form>
                <SocialLogin />
            </div>
        </div>
    );
};

export default Register;