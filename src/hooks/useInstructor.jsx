import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useInstructor = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const token = localStorage.getItem("access-token")
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ["isInstructor", user?.email],
        enabled: !!user?.email && !!token,
        queryFn: async () => {
            const response = await axiosSecure.get(`/users/instructor/${user?.email}`);
            return response.data?.instructor;
        }
    })
    return [isInstructor, isInstructorLoading]
};

export default useInstructor;