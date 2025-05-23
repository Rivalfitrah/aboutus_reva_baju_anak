import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-scroll';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='fixed top-0 left-0 w-full z-50 bg-white shadow-md'>
      <div className="container mx-auto max-w-7xl px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              onClick={() => (window.location.href = "/")}
              src="/img/logo.png"
              alt="Logo"
              className="w-20 h-20 cursor-pointer"
            />
          </div>
          <div className="hidden md:flex space-x-4">
            <Link to="beranda" smooth={true} duration={500} className="cursor-pointer text-gray-600 hover:text-gray-800">
              Beranda
            </Link>
            <Link to="about" smooth={true} duration={500} className="cursor-pointer text-gray-600 hover:text-gray-800">
              Tentang kami
            </Link>
            <Link to="galery" smooth={true} duration={500} className="cursor-pointer text-gray-600 hover:text-gray-800">
              Galery
            </Link>
            <a href="https://reva-baju.vercel.app/" className="bg-pink-500 text-white px-4 py-2 rounded-xl hover:bg-pink-600">Marketplace</a>
          </div>
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <a href="#" className="block text-gray-600 hover:text-gray-800">Beranda</a>
            <a href="#" className="block text-gray-600 hover:text-gray-800">Produk</a>
            <a href="#" className="block text-gray-600 hover:text-gray-800">Reviews</a>
            <a href="https://reva-baju.vercel.app/" className="block bg-pink-500 text-white px-6 py-4 rounded-xl hover:bg-pink-600">Marketplace</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;