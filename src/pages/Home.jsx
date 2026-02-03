import React from 'react';
import Formchekin from '../components/Formchekin';

const Home = () => {
  return (
    <div className=" relative h-screen w-screen
                    bg-[url('bg.jpeg')] bg-cover bg-center bg-no-repeat bottom-20 ">
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80
                      flex flex-col items-center justify-center gap-6 ">

        
        <h4 className="text-white text-2xl font-semibold tracking-widest relative top-7">
          HOTEL & RESORT
        </h4>
        
        <h1 className="text-white text-8xl font-serif text-center relative top-12">
          Welcome To <span className="text-yellow-600">C</span>omfy
        </h1>
          <button className="text-white text-2xl font-extralight border-2 rounded-2xl hover:cursor-pointer hover:bg-white hover:text-black hover:scale-110 transition-transform duration-700 ease-in-out w-60 p-5 relative top-18">
          Discover Now
        </button>
        <div className='relative top-48'>
        <Formchekin />
    </div>
       
      </div> 
       
    </div>
  );
};

export default Home;
