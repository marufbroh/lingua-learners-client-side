import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAllUsers = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const token = localStorage.getItem("access-token")
    const { data: allUsers, refetch } = useQuery({
        queryKey: ["allUsers"],
        enabled: !!user?.email && !!token,
        queryFn: async () => {
            const response = await axiosSecure.get("/users");
            return response.data;
        }
    })
    return [allUsers, refetch]
};

export default useAllUsers;