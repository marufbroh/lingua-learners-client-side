import React from 'react';
import useClasses from '../../hooks/useClasses';
import ClassCard from './ClassCard';
import classImg from '../../assets/class-img.svg'

const PopularClasses = () => {
    const [classes] = useClasses();
    const approvedClasses = classes.filter(classItem => classItem.status === "approved");
    const sortedClasses = approvedClasses.sort((a, b) => b.enrolled_students - a.enrolled_students);
    // console.log(sortedClasses)
    return (
        <div className='container mx-auto my-20'>
            <h2 className='font-bold text-5xl text-center mb-6'>Top Enrolled Classes</h2>
            <p className='text-xl font-bold mb-6 text-center'>Popular Language Classes for an Unforgettable Summer Camp Experience!!</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {
                    sortedClasses?.slice(0, 6).map(classItem => <div key={classItem._id} className="rounded-lg overflow-hidden shadow-lg">
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
    );
};

export default PopularClasses;
