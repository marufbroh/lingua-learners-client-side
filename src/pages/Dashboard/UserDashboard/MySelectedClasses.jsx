import React from 'react';
import useSelectedClassess from '../../../hooks/useSelectedClassess';
import { FaTrashAlt } from 'react-icons/fa';

const MySelectedClasses = () => {
    const [selectedClasses, refetch] = useSelectedClassess();
    // console.log(selectedClasses)

    const handleDelete = () => {
        //tttt
    }

    const handlePayment = () => {
        //
    }
    return (
        <div className='container lg:w-3/4 mx-auto'>
            <h3 className='text-3xl font-bold'>Your all selected classes</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Price</th>
                            <th>Delete</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectedClasses.map((selectedClass, index) => <tr key={selectedClass._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={selectedClass.class_image} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>{selectedClass.class_name}</td>
                                <td>{selectedClass.instructor_name}</td>
                                <td>{selectedClass.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(selectedClass)} className="btn btn-error text-lg"><FaTrashAlt /></button>
                                </td>
                                <td>
                                    <button onClick={() => handlePayment(selectedClass)} className="btn btn-success">Pay</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClasses;