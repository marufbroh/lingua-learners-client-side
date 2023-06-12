import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const useClasses = () => {
    const { data: classes = [], refetch } = useQuery({
        queryKey: ["classes"],
        queryFn: async () => {
            const response = await axios.get("https://ph-assignment-12-server-endgame.vercel.app/classes");
            // console.log(response.data);
            return response.data;
        }
    })
    return [classes, refetch]
};

export default useClasses;