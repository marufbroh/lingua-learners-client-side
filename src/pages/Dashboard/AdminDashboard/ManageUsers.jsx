import React from 'react';
import useAllUsers from '../../../hooks/useAllUsers';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast } from 'react-hot-toast';
import useAdmin from '../../../hooks/useAdmin';

const ManageUsers = () => {
    const [allUsers, refetch] = useAllUsers();
    // console.log(allUsers)
    const [axiosSecure] = useAxiosSecure();
    const [isAdmin] = useAdmin();

    const handleMakeInstructor = (user) => {
        axiosSecure.patch(`/users/instructor/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    toast.success(`${user.name} is instructor now`)
                    refetch();
                }
            })
    }

    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    toast.success(`${user.name} is admin now`)
                    refetch();
                }
            })
    }

    return (
        <div className='container lg:w-3/4 mx-auto'>
            <h3 className='text-3xl font-bold'>All users here</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th className='text-lg font-semibold'>#</th>
                            <th className='text-lg font-semibold'>User Image</th>
                            <th className='text-lg font-semibold'>User Name</th>
                            <th className='text-lg font-semibold'>Email</th>
                            <th className='text-lg font-semibold'>Role</th>
                            <th className='text-lg font-semibold'>Make Instructor</th>
                            <th className='text-lg font-semibold'>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUsers?.map((user, index) => <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user?.image} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <button disabled={user.role === "instructor"} onClick={() => handleMakeInstructor(user)} className="btn text-lg">Instructor</button>
                                </td>
                                <td>
                                    <button disabled={user.role === "admin"} onClick={() => handleMakeAdmin(user)} className="btn text-lg">Admin</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;