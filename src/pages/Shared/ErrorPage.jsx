import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'
import errorImg from '../../assets/error-img.png'

const ErrorPage = () => {
    const { error, status } = useRouteError();
    const navigate = useNavigate()
    return (
        <div className='flex items-center h-screen p-4 lg:p-16 bg-gray-100 text-gray-900'>
            <div className='container flex flex-col items-center justify-center mx-auto my-8'>
                <div className='max-w-md text-center'>
                    <img src={errorImg} alt="404" />
                    <p className='text-2xl font-semibold md:text-3xl mt-4 mb-8'>
                        {error?.message}
                    </p>
                    <button
                        onClick={() => navigate(-1)}
                        className='btn btn-outline border-b-4 border-base-content'
                    >
                        Back to previous
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage