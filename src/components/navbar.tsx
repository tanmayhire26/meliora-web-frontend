import React from 'react';
import { Link } from 'react-router-dom';
import { HiUserCircle } from 'react-icons/hi'; // Import an icon for the account profile

const NavbarComp = () => {
  const logoUrl = 'https://static.vecteezy.com/system/resources/previews/008/165/790/large_2x/ai-logo-design-vector.jpg'; // Replace with your logo URL

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={logoUrl}
                alt="Logo"
                className="h-8 w-8 mr-2" // Adjust size as needed
              />
              <span className="text-white text-xl font-semibold">Meliora.ai</span>
            </Link>
          </div>
          <div className="hidden md:flex md:space-x-8">
            <Link to="/about" className="text-white hover:text-gray-200 transition duration-300">About</Link>
            <Link to="/signup" className="text-white hover:text-gray-200 transition duration-300">Sign Up/Login</Link>
            <Link to="/profile" className="text-white hover:text-gray-200 transition duration-300 flex items-center">
              <HiUserCircle className="text-xl" />
            </Link>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button */}
            <button className="text-white focus:outline-none focus:ring-2 focus:ring-white rounded-md p-2">
              {/* Hamburger icon can be added here */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComp;
