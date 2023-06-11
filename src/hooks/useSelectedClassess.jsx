import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useSelectedClassess = () => {
    const { user } = useAuth();
    const token = localStorage.getItem("access-token")
    const [axiosSecure] = useAxiosSecure();

    const { data: selectedClasses = [], refetch, isLoading: selectedClassesLoading } = useQuery({
        queryKey: ["selectedClasses", user?.email],
        enabled: !!user?.email && !!token,
        queryFn: async () => {
            const response = await axiosSecure(`/selected-classess?email=${user?.email}`)
            // console.log(response)
            return response.data;
        }
    })
    return [selectedClasses, refetch, selectedClassesLoading]
};

export default useSelectedClassess;