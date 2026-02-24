import React from "react";
import { useParams , Link} from "react-router-dom";
import roomsData from "./data";
import { MdFamilyRestroom, MdOutlineSquareFoot, MdBed } from "react-icons/md";
import {  IoMdClose } from "react-icons/io";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { useState } from "react";
import Bookclient from "../Clients/Bookclient";
function Details({user,add}) {
  const [index, setIndex] = useState(0);
  const [openForm, setOpenForm] = useState(false);
  const [fade, setFade] = useState(false);
  const { id } = useParams();
  const room = roomsData.find((r) => r.id === parseInt(id));
 const nextImage = () => {
  setFade(true);
  setTimeout(() => {
    setIndex((prev) =>
      prev === room.gallery.length - 1 ? 0 : prev + 1
    );
    setFade(false);
  }, 300); // durée de l'animation
};
const ajt = (res) => {
  add(res);
};

const prevImage = () => {
  setFade(true);
  setTimeout(() => {
    setIndex((prev) =>
      prev === 0 ? room.gallery.length - 1 : prev - 1
    );
    setFade(false);
  }, 300);
};



  if (!room) {
    return (
      <p className="text-center mt-20 text-gray-500 text-xl">
        Room not found
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 ">
     
      <div className="max-w-6xl  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            
        {/* LEFT SIDE */}
       <div className="relative overflow-hidden">

  <img
    src={`../../../public${room.gallery[index]}`}
     alt={room.title}
    className={`w-full h-full object-cover hover:scale-105 transition-all duration-500 ${fade ? "opacity-0" : "opacity-100"}`}
  />

  {/* Left Arrow */}
  <button
    onClick={prevImage}
    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-3 rounded-full shadow-md transition"
  >
    <FaAngleDoubleLeft className="w-5 h-5" />
  </button>

  {/* Right Arrow */}
  <button
    onClick={nextImage}
    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-3 rounded-full shadow-md transition"
  >
    <FaAngleDoubleRight className="w-5 h-5" />
  </button>

  {/* Price Badge */}
  <div className="absolute top-6 right-6 bg-green-700 text-white px-6 py-2 rounded-full shadow-lg">
    ${room.price} / Night
  </div>

</div>

        {/* RIGHT SIDE */}
        <div className="p-10 space-y-8 relative">
          <Link to="/rooms" className="text-black hover:scale-105 transition-transform duration-300">
              <IoMdClose className="w-10 h-20 absolute top-4 right-4 hover:scale-105 transition-transform duration-300" />
             </Link>
          
          {/* Title */}
          <div>
              
            <h1 className="text-4xl font-serif mb-2 text-yellow-600">
              {room.title}
              
            </h1>
            <p className="text-gray-400 text-lg">
              {room.location}
            </p>
          </div>

          {/* Small Info */}
          <div className="flex gap-40 text-gray-600">
            <span><MdFamilyRestroom className="w-5 h-5"/> {room.capacity} Guests</span>
            <span><MdOutlineSquareFoot className="w-5 h-5"/> {room.size}</span>
            <span><MdBed className="w-5 h-5"/> {room.bed}</span>
          </div>

          {/* Tabs UI (static for now) */}
          <div className=" text-sm">
            <button className="font-semibold w-1/2 relative left-30 border-b-2 border-black pb-1 hover:text-yellow-600 hover:scale-101 transition-transform duration-initial">
              Overview
            </button>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-xl font-semibold mb-3 text-yellow-600">
              Overview
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {room.description}
            </p>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-yellow-600">
              Features
            </h2>

            <div className="flex flex-wrap gap-6">
              {room.features?.map((feature, index) => (
                <span
                  key={index}
                  className="bg-gray-100 px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Booking Button */}
          {user?.role === "client" && (
            <button onClick={() => setOpenForm(true)} className="w-90 bg-black mx-22 text-white py-3 rounded-2xl hover:bg-gray-800 hover:scale-101 transition-transform duration-500">
              Book Now
            </button>
          )}
          {openForm && (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
    
    <div className="bg-white p-8 rounded-2xl w-[500px] relative animate-scaleIn">

      {/* Close Button */}
      <button
        onClick={() => setOpenForm(false)}
        className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
      >
        <IoMdClose className="w-7 h-7" />
      </button>

      {/* Ton Formulaire */}
      <Bookclient ajouter={ajt} />

    </div>
  </div>
)}

        </div>
      </div>
    </div>
  );
}

export default Details;
