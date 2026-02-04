import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";

const Contact = () => {
  const [ref, visible] = useScrollAnimation(0.2);

  return (
    <div className="py-24 px-10 bg-gray-50">
      
      {/* Title */}
      <h1 className="text-4xl text-center text-yellow-600 font-bold mb-16">
        Contact Us
      </h1>

      {/* Column cards */}
      <div
        ref={ref}
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto
        transition-all duration-1000
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >

        {/* Phone */}
        <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
          <FiPhone className="text-yellow-600 text-4xl mb-4" />
          <h3 className="font-semibold text-xl mb-2">Phone</h3>
          <p className="text-gray-600 text-center">(+212) 767 273 10</p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
          <FiMail className="text-yellow-600 text-4xl mb-4" />
          <h3 className="font-semibold text-xl mb-2">Email</h3>
          <p className="text-gray-600 text-center">contact@comfyhotel.com</p>
        </div>

        {/* Open Time */}
        <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
          <FiClock className="text-yellow-600 text-4xl mb-4" />
          <h3 className="font-semibold text-xl mb-2">Open Time</h3>
          <p className="text-gray-600 text-center">24 / 7</p>
        </div>

        {/* Address */}
        <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
          <FiMapPin className="text-yellow-600 text-4xl mb-4" />
          <h3 className="font-semibold text-xl mb-2">Address</h3>
          <p className="text-gray-600 text-center">
            Marrakech, Morocco
          </p>
        </div>
   
      </div><br />
      <div>
        <img className="w-200 relative left-90 rounded-2xl " src="hd.jpg" alt="" />
    </div>
    </div>
  );
};

export default Contact;
