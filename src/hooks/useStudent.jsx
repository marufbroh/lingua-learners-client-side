import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useStudent = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const token = localStorage.getItem("access-token")
    const { data: isStudent, isLoading: isStudentLoading } = useQuery({
        queryKey: ["isStudent", user?.email],
        enabled: !!user?.email && !!token,
        queryFn: async () => {
            const response = await axiosSecure.get(`/users/student/${user?.email}`);
            return response.data?.student;
        }
    })
    return [isStudent, isStudentLoading]
};

export default useStudent;