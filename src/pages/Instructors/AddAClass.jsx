import React from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
const AddAClass = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        // console.log(data)
        const formData = new FormData();
        formData.append("image", data.class_image[0]);

        fetch(img_hosting_url, {
            method: "POST",
            body: formData
        }).then(res => res.json())
            .then(imageResponse => {
                // console.log(imageResponse)
                if (imageResponse.success) {
                    const imgURL = imageResponse.data.display_url;
                    const { language, instructor_name, instructor_email, available_seats, class_name, price } = data;
                    const newClass = { language, instructor_name, instructor_email, class_image: imgURL, class_name, available_seats: parseInt(available_seats), enrolled_students: 0, price: parseFloat(price), status: "pending", feedback: "" }
                    // console.log(newClass)
                    axiosSecure.post("/classes", newClass)
                        .then(data => {
                            // console.log(data.data)
                            if (data.data.insertedId) {
                                toast.success("Class successfully added on database")
                                // reset()
                            }
                        }).catch(error => {
                            toast.error(error.message)
                        })
                }
            })

    };

    return (
        <div className="container mx-auto lg:bg-slate-800 lg:p-24 p-4 my-12 rounded-lg lg:w-2/3 text-white">
            <div className='text-center'>
                <h3 className='text-3xl font-bold mb-4'>Add A Class</h3>
            </div>
            <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
                <div className='lg:flex gap-3'>
                    <div className="form-control lg:w-1/2">
                        <label className="block font-semibold mb-2">Class name</label>
                        <input
                            type="text"
                            {...register('class_name', { required: true })}
                            className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                        />
                    </div>
                    <div className="form-control lg:w-1/2">
                        <label className="block font-semibold mb-2">Class Image</label>
                        <input
                            type="file"
                            {...register('class_image', { required: true })}
                            className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                        />
                    </div>
                </div>
                <div className='lg:flex gap-3'>
                    <div className="form-control lg:w-1/3">
                        <label className="block font-semibold mb-2">Instructor name</label>
                        <input
                            type="text"
                            {...register('instructor_name', { required: true })}
                            defaultValue={user?.displayName}
                            readOnly
                            className="w-full border border-gray-300 rounded px-3 py-2 text-black bg-gray-100"
                        />
                    </div>
                    <div className="form-control lg:w-1/3">
                        <label className="block font-semibold mb-2">Instructor email</label>
                        <input
                            type="text"
                            {...register('instructor_email', { required: true })}
                            defaultValue={user?.email}
                            readOnly
                            className="w-full border border-gray-300 rounded px-3 py-2 text-black bg-gray-100"
                        />
                    </div>
                    <div className="form-control lg:w-1/3">
                        <label className="block font-semibold mb-2">Language</label>
                        <input
                            type="text"
                            {...register('language', { required: true })}
                            className="w-full border border-gray-300 rounded px-3 py-2 text-black bg-gray-100"
                        />
                    </div>
                </div>
                <div className='lg:flex gap-3'>
                    <div className="form-control lg:w-1/2">
                        <label className="block font-semibold mb-2">Available seats</label>
                        <input
                            type="number"
                            {...register('available_seats', { required: true })}
                            className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                        />
                    </div>
                    <div className="form-control lg:w-1/2">
                        <label className="block font-semibold mb-2">Price</label>
                        <input
                            type="number"
                            {...register('price', { required: true })}
                            step="any"
                            placeholder="$"
                            className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="btn btn-block font-semibold"
                >
                    Add
                </button>
            </form>
        </div>
    );
};

export default AddAClass;