import React from 'react';
import useClasses from '../../hooks/useClasses';
import ClassCard from '../Home/ClassCard';

const Classes = () => {
    const [classes] = useClasses();
    const approvedClasses = classes.filter(classItem => classItem.status === "approved");
    const sortedClasses = approvedClasses.sort((a, b) => b.enrolled_students - a.enrolled_students);
    // console.log(sortedClasses)
    return (
        <div className='container mx-auto my-12'>
            <h3 className='font-bold text-5xl mb-6 text-center'>Classes Pages</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {
                    sortedClasses?.map(classItem => <ClassCard key={classItem._id} classItem={classItem} />)
                }
            </div>
        </div>
    );
};

export default Classes;