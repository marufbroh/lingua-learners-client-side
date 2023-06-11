import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';

const MyEnrolledClasses = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [enrolledClasses, setEnrolledClasses] = useState([]);
    useEffect(() => {
        axiosSecure(`/payment/enrolled-classess?email=${user?.email}`)
            .then(res => {
                // console.log(res.data)
                setEnrolledClasses(res.data)
            })
    }, [axiosSecure, user])
    // console.log(enrolledClasses)
    return (
        <div className='container lg:w-3/4 mx-auto'>
            <h3 className='text-3xl font-bold'>Your all enrolled classes</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th className='text-lg font-semibold'>#</th>
                            <th className='text-lg font-semibold'>Class Image</th>
                            <th className='text-lg font-semibold'>Class Name</th>
                            <th className='text-lg font-semibold'>Instructor Name</th>
                            <th className='text-lg font-semibold'>Price</th>
                            <th className='text-lg font-semibold'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrolledClasses.map((classItem, index) => <tr key={classItem._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={classItem.enrolledClass.class_image} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>{classItem.enrolledClass.class_name}</td>
                                <td>{classItem.enrolledClass.instructor_name}</td>
                                <td>${classItem.enrolledClass.price}</td>
                                <td className='font-bold'>Enrolled</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyEnrolledClasses;