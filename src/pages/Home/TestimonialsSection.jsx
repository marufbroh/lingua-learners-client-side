import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TestimonialsSection = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 1000,
            easing: 'ease-in-out',
            delay: 150,
        });
    }, [])

    return (
        <div data-aos="fade-up" className="bg-white py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Student Testimonials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="max-w-sm mx-auto bg-gray-100 rounded-lg shadow-lg p-6">
                        <div className="mb-4">
                            <img className="w-12 h-12 rounded-full mx-auto" src={"https://images.unsplash.com/photo-1568392021577-fad7eb6efba1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=729&q=80"} alt="Student" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">John Doe</h3>
                        <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mollis quam id leo dignissim placerat.</p>
                        <p className="text-gray-500">- Spanish Course</p>
                    </div>

                    <div className="max-w-sm mx-auto bg-gray-100 rounded-lg shadow-lg p-6">
                        <div className="mb-4">
                            <img className="w-12 h-12 rounded-full mx-auto" src={"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"} alt="Student" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
                        <p className="text-gray-700 mb-4">Nullam dictum mauris id lectus volutpat, eget faucibus eros condimentum. Aliquam eu risus eu mi finibus consectetur vitae vitae est.</p>
                        <p className="text-gray-500">- French Course</p>
                    </div>

                    <div className="max-w-sm mx-auto bg-gray-100 rounded-lg shadow-lg p-6">
                        <div className="mb-4">
                            <img className="w-12 h-12 rounded-full mx-auto" src={"https://images.unsplash.com/photo-1562246229-37b3aca47e18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"} alt="Student" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Sarah Johnson</h3>
                        <p className="text-gray-700 mb-4">Fusce eu tincidunt elit, ac rutrum elit. Sed ullamcorper magna et dolor scelerisque, sed fermentum ligula mattis.</p>
                        <p className="text-gray-500">- German Course</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsSection;