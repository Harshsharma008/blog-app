import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'

function Page() {
    return (
        <>
            <Navbar />
            <div  className='p-10 bg-sky-100'>

                <section class="text-gray-600 body-font relative p-20">
                    <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                        
                        <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                            <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" ></iframe>
                            
                        </div>
                        {/* <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                        <p class="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                        <div class="relative mb-4">
                            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div class="relative mb-4">
                            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div class="relative mb-4">
                            <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                    </div> */}
                        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
                            <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
                            <form>
                                {/* First Name and Last Name in the same row */}
                                <div className="flex space-x-4 mb-4">
                                    <div className="w-1/2">
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            className="mt-1 block w-full p-2 border-b-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div className="w-1/2">
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            className="mt-1 block w-full p-2 border-b-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                {/* Contact Number and Email Address in the same row */}
                                <div className="flex space-x-4 mb-4">
                                    <div className="w-1/2">
                                        <label htmlFor="contactNo" className="block text-sm font-medium text-gray-700">
                                            Contact No.
                                        </label>
                                        <input
                                            type="text"
                                            id="contactNo"
                                            name="contactNo"
                                            className="mt-1 block w-full p-2 border-b-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            placeholder="+123456789"
                                        />
                                    </div>
                                    <div className="w-1/2">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="mt-1 block w-full p-2 border-b-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            placeholder="johndoe@example.com"
                                        />
                                    </div>
                                </div>

                                {/* Radio Buttons for Select Query */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Query Type</label>
                                    <div className="flex space-x-4">
                                        <div>
                                            <input
                                                type="radio"
                                                id="general"
                                                name="queryType"
                                                value="general"
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                            />
                                            <label htmlFor="general" className="ml-2 text-sm text-gray-700">
                                                General Query
                                            </label>
                                        </div>
                                        <div>
                                            <input
                                                type="radio"
                                                id="support"
                                                name="queryType"
                                                value="support"
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                            />
                                            <label htmlFor="support" className="ml-2 text-sm text-gray-700">
                                                Support
                                            </label>
                                        </div>
                                        <div>
                                            <input
                                                type="radio"
                                                id="sales"
                                                name="queryType"
                                                value="sales"
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                            />
                                            <label htmlFor="sales" className="ml-2 text-sm text-gray-700">
                                                Sales
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/* Message Input */}
                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Type your message here..."
                                    ></textarea>
                                </div>

                                {/* Send Message Button */}
                                <div className="text-center">
                                    <button class="inline-flex items-center bg-sky-500 p-5 text-white font-bold border-0 rounded-2xl py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Send

                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Page