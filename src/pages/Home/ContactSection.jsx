import React from 'react';

const ContactSection = () => {
    return (
        <section className="bg-gray-200 py-12 my-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
                <div className="max-w-lg mx-auto">
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block font-medium text-gray-800">Your Name</label>
                            <input type="text" id="name" className="input mt-1 block w-full" placeholder="John Doe" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block font-medium text-gray-800">Your Email</label>
                            <input type="email" id="email" className="input mt-1 block w-full" placeholder="example@example.com" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block font-medium text-gray-800">Message</label>
                            <textarea id="message" rows="4" className="textarea textarea-bordered mt-1 block w-full" placeholder="Enter your message"></textarea>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="btn btn-outline">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;