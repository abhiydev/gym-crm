'use client'
import React from 'react';
import { FaEnvelope, FaMapMarker } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const GoogleMaps = () => {

  const router = useRouter();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-gray-900 text-white">
      <div className="flex flex-col justify-center p-4 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaEnvelope className="mr-2" /> Contact Us
        </h2>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 rounded-md border border-gray-600 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="tel"
            placeholder="Contact Number"
            className="p-2 rounded-md border border-gray-600 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <textarea
            placeholder="Message"
            className="p-2 rounded-md border border-gray-600 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows={4}
            required
          />
          <button
            type="submit"
            className="bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-400 transition duration-300"
          >
            Send
          </button>
        </form>
      </div>
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509198!2d144.9537353153164!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11f3b3%3A0x5045675218ceed30!2sMelbourne%20CBD%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sus!4v1633031234567!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>

        <button 
        onClick={() => router.push("https://www.google.com/maps/place/Melbourne+CBD,+Victoria,+Australia")}
        className="bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-400 transition duration-300 flex justify-center items-center px-4 py-2 my-4 cursor-pointer">
            <FaMapMarker className="mr-2" /> 
            Open with Google Maps
        </button>
      </div>
    </div>
  );
}

export default GoogleMaps;