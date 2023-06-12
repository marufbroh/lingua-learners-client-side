import React from 'react';
import useInstructorClasses from '../../../hooks/useInstructorClasses';

const MyClasses = () => {
    const [instructorClasses, refetch] = useInstructorClasses();
    console.log(instructorClasses)
    return (
        <div className='container mx-auto h-full'>
            <h3 className='font-bold text-3xl'>Your all classes</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {
                    instructorClasses.map(insClass => <div key={insClass._id} className="card bg-base-100 shadow-xl">
                        <figure><img src={insClass.class_image} alt={insClass.language} /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl">
                                {insClass.class_name}
                                <div className="badge badge-neutral badge-lg">{insClass.language}</div>
                            </h2>
                            <p className="text-gray-700 text-base font-semibold">Instructor: {insClass.instructor_name}</p>
                            <p className="text-gray-700 text-base font-semibold">Email: {insClass.instructor_email}</p>
                            <p className="text-gray-700 text-base font-semibold">Available Seats: {insClass.available_seats}</p>
                            <p className="text-gray-700 text-base font-semibold">Enrolled Students: {insClass?.enrolled_students}</p>
                            <p className="text-gray-700 text-base font-semibold">Price: ${insClass.price}</p>
                            <p className="text-gray-700 text-base font-semibold">Status: {insClass?.status}</p>
                            <div className="card-actions justify-end">
                                <div>
                                    <div className="btn btn-outline btn-sm" onClick={() => window.my_modal_2.showModal()}>see feedback</div>
                                    <dialog id="my_modal_2" className="modal">
                                        <form method="dialog" className="modal-box">
                                            <h3 className="font-bold text-lg">Admin Feedback!</h3>
                                            <p className="py-4">{insClass?.feedback ? insClass.feedback : "No feedback yet"}</p>
                                        </form>
                                        <form method="dialog" className="modal-backdrop">
                                            <button>close</button>
                                        </form>
                                    </dialog>
                                </div>
                                <div className="btn btn-outline btn-sm">Update</div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyClasses;