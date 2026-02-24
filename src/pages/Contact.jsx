import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import {BsSend} from "react-icons/bs";
import { space } from "postcss/lib/list";

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
      <div className="mt-20">
  <form className="bg-white/20 backdrop-blur-md shadow-2xl border border-white/20 p-8 rounded-2xl max-w-4xl mx-auto">
    
    <h1 className="text-4xl text-center text-yellow-600 font-serif mb-10">
      Leave a Message
    </h1>

    <div className="flex flex-col gap-6">

      <div>
        <label className="block text-black font-bold mb-2">
          Name
        </label>
        <input
          className="border rounded-xl w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          type="text"
          placeholder="Your Name"
        />
      </div>

      <div>
        <label className="block text-black font-bold mb-2">
          Email
        </label>
        <input
          className="border rounded-xl w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          type="email"
          placeholder="Your Email"
        />
      </div>

      <div>
        <label className="block text-black font-bold mb-2">
          Phone
        </label>
        <input
          className="border rounded-xl w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          type="tel"
          placeholder="Your Phone"
        />
      </div>

      <div>
        <label className="block text-black font-bold mb-2">
          Message
        </label>
        <textarea
          className="border rounded-xl w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          rows="4"
          placeholder="Your Message"
        />
      </div>

      <button
        className="bg-yellow-600 text-white font-serif py-3 w-80 mx-auto rounded-2xl hover:scale-102 transition-transform duration-300"
        type="submit"
      >
        <BsSend className="inline-block mr-2" />
        Send Message 
      </button>

    </div>
  </form>
</div>

    </div>
  );
};

export default Contact;
