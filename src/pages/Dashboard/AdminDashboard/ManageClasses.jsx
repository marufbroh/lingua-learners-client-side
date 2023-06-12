import React from 'react';
import useClasses from '../../../hooks/useClasses';

const ManageClasses = () => {
    const [classes, refetch] = useClasses();
    return (
        <div>
            mng classes
        </div>
    );
};

export default ManageClasses;