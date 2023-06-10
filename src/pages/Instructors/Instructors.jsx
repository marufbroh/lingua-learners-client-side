import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        axios("http://localhost:5000/users/instructors")
            .then(res => {
                console.log(res.data)
                setInstructors(res.data)
            })
    }, [])

    return (
        <div className='container mx-auto'>
            <h3 className='font-bold text-3xl text-center'>Top Instructors</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {
                    instructors.map(instructorItem => <div key={instructorItem._id} className="w-full rounded-lg overflow-hidden shadow-lg">
                        <img className="w-full" src={instructorItem.image} alt={instructorItem.name} />
                        <div className="px-6 py-4">
                            <h3 className="font-bold text-2xl mb-2">{instructorItem.name}</h3>
                            <p className="text-gray-700 text-base font-semibold">Email: {instructorItem.email}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Instructors;