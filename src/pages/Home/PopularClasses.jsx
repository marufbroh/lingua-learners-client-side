import React from 'react';
import useClasses from '../../hooks/useClasses';
import ClassCard from './ClassCard';

const PopularClasses = () => {
    const [classes] = useClasses();
    const approvedClasses = classes.filter(classItem => classItem.status === "approved");
    const sortedClasses = approvedClasses.sort((a, b) => b.enrolled_students - a.enrolled_students);
    // console.log(sortedClasses)
    return (
        <div className='container mx-auto'>
            <div className='flex items-center'>
                <div className='w-1/2 space-y-4'>
                    <h3 className='font-bold text-3xl'>Top Enrolled Classes</h3>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                        {
                            sortedClasses.slice(0, 6).map(classItem => <div key={classItem._id} className="max-w-sm rounded-lg overflow-hidden shadow-lg">
                                <img className="w-full" src={classItem.class_image} alt={classItem.language} />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-2xl mb-2">{classItem.language}</div>
                                    <p className="text-gray-700 text-base font-semibold">Instructor: {classItem.instructor_name}</p>
                                    <p className="text-gray-700 text-base font-semibold">Price: ${classItem.price}</p>
                                    <p className="text-gray-700 text-base font-semibold">Enrolled Students: {classItem.enrolled_students}</p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
                <div className='w-1/2'>
                    Will do picture latter
                </div>
            </div>
        </div>
    );
};

export default PopularClasses;
