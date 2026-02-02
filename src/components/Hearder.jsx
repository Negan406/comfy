import React from 'react';
import { Link } from 'react-router-dom';

const Hearder = () => {
    return (
        
        <nav className="bg-white/80 shadow-md w-full fixed top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        
        {/* Logo */}
        <div className="flex items-center relative right-30">
          <Link to="/">
            <img
              src="image.png"
              alt="Comfy Logo"
              className=" h-30 w-auto hover:scale-110 hover:rotate-0  " 
            />
          </Link>
        </div>

        {/* Menu Links */}
        <div className="hidden relative right-60 md:flex  space-x-36 text-black-700 font-bold">
          <Link to="/" className="hover:text-yellow-500 transition-colors">HOME</Link>
          <Link to="/rooms" className="hover:text-yellow-500 transition-colors">ROOMS</Link>
          <Link to="/about" className="hover:text-yellow-500 transition-colors">ABOUT</Link>
          <Link to="/contact" className="hover:text-yellow-500 transition-colors">CONTACT</Link>
       
        </div>

      </div>
    </nav>
         
    );
};

export default Hearder;