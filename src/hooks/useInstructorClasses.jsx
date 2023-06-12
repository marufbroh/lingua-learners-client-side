import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useInstructorClasses = () => {
    const { user } = useAuth();
    const token = localStorage.getItem("access-token")
    const [axiosSecure] = useAxiosSecure();

    const { data: instructorClasses = [], refetch, isLoading: instructorClassesLoading } = useQuery({
        queryKey: ["instructorClasses", user?.email],
        enabled: !!user?.email && !!token,
        queryFn: async () => {
            const response = await axiosSecure(`/instructor-classess?email=${user?.email}`)
            // console.log(response)
            return response.data;
        }
    })
    return [instructorClasses, refetch, instructorClassesLoading]
};

export default useInstructorClasses;