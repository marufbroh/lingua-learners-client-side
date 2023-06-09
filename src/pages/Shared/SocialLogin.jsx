import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const SocialLogin = () => {
    const { googleSignIn } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                // console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, image: loggedInUser?.photoURL, email: loggedInUser.email }
                axios.post("http://localhost:5000/users", saveUser)
                    .then(data => {
                        // console.log(data.data);
                        if (data.data.insertedId) {
                            toast.success("User created successfully")
                            navigate(from, { replace: true })
                        }
                        else {
                            toast.success("User logged successfully")
                            navigate(from, { replace: true })
                        }
                    })

            })
            .catch(error => {
                console.log(error);
                toast.error(error.message)
            })
    }

    return (
        <button onClick={handleGoogleSignIn} className="btn btn-block btn-outline border-gray-300 my-4">
            <FaGoogle /> Google
        </button>
    );
};

export default SocialLogin;