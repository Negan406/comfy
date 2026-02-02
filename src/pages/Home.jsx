import React from 'react';

const Home = () => {
  return (
    <div className="relative h-screen w-screen bg-[url('bg.jpeg')] bg-cover bg-center bg-no-repeat">
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65 flex flex-col items-center justify-center">
        
        <h4 className="text-white text-2xl font-semibold text-center tracking-widest mb-6">
          HOTEL & RESORT
        </h4>
        
        <h1 className="text-white text-8xl font-serif text-center mb-10">
          Welcome To Comfy
        </h1>
        
        <button className="text-white text-2xl font-extralight border-2 rounded-2xl hover:scale-110 w-60 p-5 transition-transform ">
          Discover Now
        </button>

      </div>

    </div>
  );
};

export default Home;
