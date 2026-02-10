import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Hearder = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed bg-black/60 backdrop-blur-md shadow-lg w-full top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 shadow-2xl' : ''
      }`}>
      <div className="container mx-auto px-4 flex items-center justify-between h-20">

        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="group">
            <div className="relative right-25 w-55  hover:scale-110 transition-all duration-300 ease-in-out">
              <img
                src="lgg.png"
                alt="Comfy Logo"
                className="h-30 w-600"
              />
            </div>
          </Link>
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex items-center space-x-12 text-white font-semibold tracking-wider">
          <Link
            to="/"
            className={`relative hover:text-yellow-600 transition-all duration-300 ease-in-out group ${isActive('/') ? 'text-yellow-600' : ''
              }`}
          >
            HOME
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/about"
            className={`relative hover:text-yellow-600 transition-all duration-300 ease-in-out group ${isActive('/about') ? 'text-yellow-600' : ''
              }`}
          >
            ABOUT
            <span className="absolute -bottom-1 left-0 h-0.5 bg-yellow-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/rooms"
            className={`relative hover:text-yellow-600 transition-all duration-300 ease-in-out group ${isActive('/rooms') ? 'text-yellow-600' : ''
              }`}
          >
            ROOMS
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
          <Link
            to="/contact"
            className={`relative hover:text-yellow-600 transition-all duration-300 ease-in-out group ${isActive('/contact') ? 'text-yellow-600' : ''
              }`}
          >
            CONTACT
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Login Button */}
          <Link to={"/login"} className="ml-4 px-6 py-2 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-600/50">
            LOGIN
          </Link>
          </div>

        </div>
    </nav>
  );
};

export default Hearder;