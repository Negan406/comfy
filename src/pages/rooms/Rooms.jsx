import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import roomsData from "./data";

const Rooms = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleDetailsClick = (e, id) => {
    e.preventDefault();
    setLoading(true);
    // Smooth transition delay to show the loader
    setTimeout(() => {
      navigate(`/rooms/${id}`);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gray-100 relative">
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm"
          >
            <div className="relative">
              <motion.div
                className="w-20 h-20 border-4 border-yellow-600/20 border-t-yellow-600 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-0 w-20 h-20 border-4 border-transparent border-b-yellow-400 rounded-full opacity-50"
                animate={{ rotate: -360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-yellow-800 font-serif tracking-widest text-sm uppercase"
            >
              Preparing Your Room...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <div className="relative h-[60vh] bg-[url('bg.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center">
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
            Discover comfort and elegance in every space. Select the perfect room that matches your style and needs.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {roomsData.map((room, i) => (
            <div
              key={room.id || i}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col"
            >
              <img
                src={room.image}
                alt={room.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-6 flex flex-col grow">

                <div>
                  <h3 className="text-2xl font-serif mb-2">
                    {room.title}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {room.description}
                  </p>
                </div>

                <Link
                  to={`/rooms/${room.id}`}
                  onClick={(e) => handleDetailsClick(e, room.id)}
                  className="mt-auto border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition text-center"
                >
                  Take Yours
                </Link>

              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Rooms;

