import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const useClasses = () => {
    const { data: classes = [] } = useQuery({
        queryKey: ["classes"],
        queryFn: async () => {
            const response = await axios.get("http://localhost:5000/classes");
            // console.log(response.data);
            return response.data;
        }
    })
    return [classes]
};

export default useClasses;