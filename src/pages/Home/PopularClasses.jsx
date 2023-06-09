import React from 'react';
import useClasses from '../../hooks/useClasses';
import ClassCard from './ClassCard';

const PopularClasses = () => {
    const [classes] = useClasses();
    const sortedClasses = classes.sort((a, b) => b.enrolled_students - a.enrolled_students);
    return (
        <div className='container mx-auto'>
            <div className='flex'>
                <div className='w-1/2 space-y-4'>
                    <h3 className='font-bold text-3xl'>Top Enrolled Classes</h3>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                        {
                            sortedClasses.slice(0, 6).map(classItem => <ClassCard key={classItem._id} classItem={classItem} />)
                        }
                    </div>
                </div>
                <div className='w-1/2'>

                </div>
            </div>
        </div>
    );
};

export default PopularClasses;
