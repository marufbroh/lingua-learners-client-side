import React from 'react';
import useAllUsers from '../../../hooks/useAllUsers';

const ManageUsers = () => {
    const [allUsers, refetch] = useAllUsers();
    console.log(allUsers)
    return (
        <div>
            manage users
        </div>
    );
};

export default ManageUsers;