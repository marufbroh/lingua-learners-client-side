import React from 'react';

const ClassCard = ({ classItem }) => {
    // console.log(classItem)
    // const { class_image, class_name, instructor_name, language } = classItem;
    const { language, instructor_name, class_image, price, enrolled_students } = classItem;

    return (
        // <div className="card w-96 bg-base-100 shadow-xl image-full">
        //     <figure><img src={class_image} alt="Class Picture" /></figure>
        //     <div className="card-body">
        //         <h2 className="card-title">{class_name}</h2>
        //         <p>Language: {language}</p>
        //         <p>Instructor: {instructor_name}</p>
        //     </div>
        // </div>

        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
            <img className="w-full" src={class_image} alt={language} />
            <div className="px-6 py-4">
                <div className="font-bold text-2xl mb-2">{language}</div>
                <p className="text-gray-700 text-base font-semibold">Instructor: {instructor_name}</p>
                <p className="text-gray-700 text-base font-semibold">Price: ${price}</p>
                <p className="text-gray-700 text-base font-semibold">Enrolled Students: {enrolled_students}</p>
            </div>
        </div>
    );
};

export default ClassCard;