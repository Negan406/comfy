import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiUser, FiSettings, FiHelpCircle, FiLogOut } from 'react-icons/fi';
import { RiHomeHeartLine } from 'react-icons/ri';

const Header = ({ user, setUser }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  // Logout handler
  const handleLogout = () => {
    setUser(false); 
    setDropdownOpen(false);
    navigate("/login"); 
  };

  return (
    <nav className={`fixed bg-black/60 backdrop-blur-md shadow-lg w-full top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 shadow-2xl' : ''}`}>
      <div className="container mx-auto px-4 flex items-center justify-between h-20">

        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="group">
            <div className="relative right-25 w-55 hover:scale-110 transition-all duration-300 ease-in-out">
              <img src="lgg.png" alt="Comfy Logo" className="h-30 w-600" />
            </div>
          </Link>
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex items-center space-x-12 text-white font-semibold tracking-wider">
          <Link to="/" className={`relative hover:text-yellow-600 transition-all duration-300 ${isActive('/') ? 'text-yellow-600' : ''}`}>HOME</Link>
          <Link to="/about" className={`relative hover:text-yellow-600 transition-all duration-300 ${isActive('/about') ? 'text-yellow-600' : ''}`}>ABOUT</Link>
          <Link to="/rooms" className={`relative hover:text-yellow-600 transition-all duration-300 ${isActive('/rooms') ? 'text-yellow-600' : ''}`}>ROOMS</Link>
          <Link to="/contact" className={`relative hover:text-yellow-600 transition-all duration-300 ${isActive('/contact') ? 'text-yellow-600' : ''}`}>CONTACT</Link>

          {/* User / Login */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="ml-4 px-5 py-2 bg-yellow-600 text-white font-semibold rounded-full flex items-center gap-2 hover:bg-yellow-500 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <FiUser size={20} />
                
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg text-black py-2 flex flex-col z-50">
            
                 
                  <Link
                    to="/help"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <FiUser className="w-5 h-5" /> My Account
                  </Link>
                  {user?.role=="client" && (
                    <Link to="/Reservation" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition-colors">
                      <RiHomeHeartLine className="w-5 h-5" /> My Reservations
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition-colors w-full text-left"
                  >
                    <FiLogOut className="w-5 h-5" /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="ml-4 px-5 py-2 bg-yellow-600 text-white font-semibold rounded-full flex items-center gap-2 hover:bg-yellow-500 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <FiUser size={20} />
              Login
            </Link>
          )}  
        </div>
      </div>
    </nav>
  );
};

export default Header;
