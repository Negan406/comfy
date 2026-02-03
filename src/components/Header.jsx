import React from 'react';
import { Link } from 'react-router-dom';

const Hearder = () => {
    return (

        <nav className=" bg-gray-200 shadow-md w-full  top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-20 ">
        
        {/* Logo */}
        <div className="flex items-center relative right-30">
          <Link to="/">
            <img
              src="image.png"
              alt="Comfy Logo"
              className=" h-30 w-auto hover:scale-110 transition-transform duration-300 ease-in-out" 
            />
          </Link>
        </div>

        {/* Menu Links */}
        <div className="hidden relative right-60 md:flex  space-x-20 text-black/70 font-bold">
          <Link to="/" className="hover:text-yellow-700 hover:scale-110 transition-transform duration-300 ease-in-out ">HOME</Link>
          <Link to="/rooms" className="hover:text-yellow-700 hover:scale-110 transition-transform duration-300 ease-in-out">ROOMS</Link>
          <Link to="/about" className="hover:text-yellow-700 hover:scale-110 transition-transform duration-300 ease-in-out">ABOUT</Link>
          <Link to="/contact" className="hover:text-yellow-700 hover:scale-110 transition-transform duration-300 ease-in-out">CONTACT</Link>
       
        </div>

      </div>
    </nav>
         
    );
};

export default Hearder;