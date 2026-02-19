import React from "react";
import { Link } from "react-router-dom";
import roomsData from "./data";

const Rooms = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-[url('bg.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0  bg-black/80 flex flex-col items-center justify-center">
          <h1 className="text-white text-6xl font-serif mb-4">
            Our Rooms
          </h1>
          <p className="text-white text-lg tracking-widest">
            COMFORT • LUXURY • RELAX
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        <div className="text-center mb-14">
          <h2 className="text-4xl font-serif mb-4">Choose Your Room</h2>
          <p className="text-gray-600 max-w-2xl font-serif mx-auto">
            
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Room Card */}
          {roomsData.map((im,i)=>(
                      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">

                <img
              src={im.image}
              alt="Luxury Room"
              className="h-60 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-serif mb-2">{im.title}</h3>
              <p className="text-gray-600 mb-4">
                {im.description}
              </p>
              <Link to={`/rooms/${im.id}`} className="border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition">
                Take Yours
              </Link>
            </div>
          </div>
        ))}
            
            
          </div>
 </div>
          {/* Duplicate cards later */}
        
      </div>

   
  );
};

export default Rooms;
