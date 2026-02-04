import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black/90 text-white py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-start gap-8">

        {/* Logo */}
        <div className="flex items-center ">
          <Link to="/" className="hover:scale-105 transition-transform duration-300">
            <img src="lgg.png" alt="Comfy Logo" className="h-50 w-auto" />
          </Link>
        </div>

        {/* Info Section */}
        <div className="flex flex-col gap-2 text-sm">
          <h3 className="font-semibold text-lg mb-2">About Comfy</h3>
          <p className="text-gray-300 max-w-xs">
            Comfy is your go-to solution for relaxing stays and unforgettable experiences. We provide top-quality rooms and services to ensure your comfort.
          </p>

          <h3 className="font-semibold text-lg mt-4 mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-300">
            <li><Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-500 transition-colors">About</Link></li>
            <li><Link to="/rooms" className="hover:text-yellow-500 transition-colors">Rooms</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2 text-sm">
          <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt /> <span>123 Main Street, City</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone /> <span>+123 456 7890</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope /> <span>info@comfy.com</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-2 text-xl">
            <a href="#" className="hover:text-yellow-500 transition-colors"><FaFacebook /></a>
            <a href="#" className="hover:text-yellow-500 transition-colors"><FaTwitter /></a>
            <a href="#" className="hover:text-yellow-500 transition-colors"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Comfy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
