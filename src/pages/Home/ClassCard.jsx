import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';
import { toast } from 'react-hot-toast';
import useStudent from '../../hooks/useStudent';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const ClassCard = ({ classItem }) => {
    const { user } = useAuth();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const [isStudent] = useStudent();
    const [axiosSecure] = useAxiosSecure();
    // console.log(classItem)
    // const { class_image, class_name, instructor_name, language } = classItem;
    const { language, instructor_name, class_image, price, available_seats, class_name } = classItem;

    const handleClassSelect = (selected) => {
        // console.log(selectedClass)
        if (!user) {
            return toast.error("Before selecting please login first")
        }
        if (!isStudent) {
            return toast.error("You are restricted student")
        }
        const { _id, class_image, class_name, instructor_name, price } = selected
        const selectedClass = { selectedClassId: _id, class_image, class_name, instructor_name, price, student_email: user?.email }
        axiosSecure.post("/selected-classess", selectedClass)
            .then(res => {
                // console.log(res.data)
                if (res.data.insertedId) {
                    toast.success("You successfully selected the class")
                }
            })
    }

    return (
        <div className={`card bg-base-100 shadow-xl ${available_seats === 0 ? 'bg-red-500' : ''}`}>
            <figure><img src={class_image} alt={language} /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{class_name} <div className="badge badge-neutral badge-lg">{language}</div></h2>
                <p className="text-gray-700 text-base font-semibold">Instructor: {instructor_name}</p>
                <p className="text-gray-700 text-base font-semibold">Available Seats: {available_seats}</p>
                <p className="text-gray-700 text-base font-semibold">Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button disabled={available_seats === 0 || isAdmin || isInstructor} onClick={() => handleClassSelect(classItem)} className="btn btn-outline border-b-4">Select Class</button>
                </div>
            </div>
        </div >

    );
};

export default ClassCard;



        // <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
        //     <img className="w-full" src={class_image} alt={language} />
        //     <div className="px-6 py-4">
        //         <div className="font-bold text-2xl mb-2">{language}</div>
        //         <p className="text-gray-700 text-base font-semibold">Instructor: {instructor_name}</p>
        //         <p className="text-gray-700 text-base font-semibold">Price: ${price}</p>
        //         <p className="text-gray-700 text-base font-semibold">Enrolled Students: {enrolled_students}</p>
        //     </div>
        // </div>