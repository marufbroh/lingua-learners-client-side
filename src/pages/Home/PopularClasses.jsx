import React from 'react';
import useClasses from '../../hooks/useClasses';
import ClassCard from './ClassCard';

const PopularClasses = () => {
    const [classes] = useClasses();
    const approvedClasses = classes.filter(classItem => classItem.status === "approved");
    const sortedClasses = approvedClasses.sort((a, b) => b.enrolled_students - a.enrolled_students);
    console.log(sortedClasses)
    return (
        <div className='container mx-auto'>
            <div className='flex items-center'>
                <div className='w-1/2 space-y-4'>
                    <h3 className='font-bold text-3xl'>Top Enrolled Classes</h3>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                        {
                            sortedClasses.slice(0, 6).map(classItem => <ClassCard key={classItem._id} classItem={classItem} />)
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
