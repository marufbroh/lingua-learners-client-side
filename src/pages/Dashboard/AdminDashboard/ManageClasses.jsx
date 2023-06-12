import React from 'react';
import useClasses from '../../../hooks/useClasses';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';

const ManageClasses = () => {
    const [classes, refetch] = useClasses();
    const [axiosSecure] = useAxiosSecure();

    const handleApprove = (id) => {
        axiosSecure.patch(`/classes/status/approve/${id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    toast.success("Class approved by you")
                    refetch();
                }
            })
    }

    const handleDeny = (id) => {
        axiosSecure.patch(`/classes/status/deny/${id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    toast.success("Class denied by you")
                    refetch();
                }
            })
    }

    const handleFeedback = (admClass) => {
        Swal.fire({
            title: 'Send feedback why you approved or denied',
            input: 'textarea',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Send',
            allowOutsideClick: false
        }).then((result) => {
            if (result.isConfirmed) {
                const feedback = result.value;
                axiosSecure.patch(`/classes/feedback/${admClass._id}`, { feedback })
                    .then(response => {
                        // console.log(response.data)
                        Swal.fire('Feedback Sent!', 'Thank you for your feedback.', 'success');
                    })
                    .catch(error => {
                        Swal.fire('Error', `Failed to send feedback: ${error}`, 'error');
                    });
            }
        });
    };



    return (
        <div className='container mx-auto my-12'>
            <h3 className='font-bold text-5xl text-center mb-6'>All classes here</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {
                    classes?.map(admClass => <div key={admClass._id} className="card bg-base-100 shadow-xl">
                        <figure><img src={admClass.class_image} alt={admClass.language} /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl">
                                {admClass.class_name}
                                <div className="badge badge-neutral badge-lg">{admClass.language}</div>
                            </h2>
                            <p className="text-gray-700 text-base font-semibold">Instructor: {admClass.instructor_name}</p>
                            <p className="text-gray-700 text-base font-semibold">Email: {admClass.instructor_email}</p>
                            <p className="text-gray-700 text-base font-semibold">Available Seats: {admClass.available_seats}</p>
                            <p className="text-gray-700 text-base font-semibold">Enrolled Students: {admClass?.enrolled_students}</p>
                            <p className="text-gray-700 text-base font-semibold">Price: ${admClass.price}</p>
                            <p className="text-gray-700 text-base font-semibold">Status: {admClass?.status}</p>
                            <div className="card-actions justify-end">
                                <div disabled={admClass.status !== "pending"} onClick={() => handleApprove(admClass._id)} className="btn btn-outline btn-sm">Approve</div>
                                <div disabled={admClass.status !== "pending"} onClick={() => handleDeny(admClass._id)} className="btn btn-outline btn-sm">Deny</div>
                                <div onClick={() => handleFeedback(admClass)} className="btn btn-outline btn-sm">Send feedback</div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageClasses;