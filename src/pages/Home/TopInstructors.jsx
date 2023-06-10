import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TopInstructors = () => {
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
            <div className='flex items-center'>
                <div className='w-1/2'>
                    Will do picture latter
                </div>
                <div className='w-1/2 space-y-4'>
                    <h3 className='font-bold text-3xl'>Top Instructors</h3>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                        {
                            instructors.slice(0, 6).map(instructorItem => <div key={instructorItem._id} className="max-w-sm rounded-lg overflow-hidden shadow-lg">
                                <img className="w-full" src={instructorItem.image} alt={instructorItem.name} />
                                <div className="px-6 py-4">
                                    <h3 className="font-bold text-2xl mb-2">{instructorItem.name}</h3>
                                    <p className="text-gray-700 text-base font-semibold">Email: {instructorItem.email}</p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopInstructors;