import React from 'react'
import '../App.css'

function Navbar() {
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
                <nav className="space-x-4">
                    <a href="#" className="text-gray-600 hover:text-gray-800">Beranda</a>
                    <a href="#" className="text-gray-600 hover:text-gray-800">Produk</a>
                    <a href="#" className="text-gray-600 hover:text-gray-800">Reviews</a>
                    <button>
                        <a href="https://reva-baju.vercel.app/" className="bg-pink-500 text-white px-4 py-2 rounded-xl hover:bg-pink-600">Marketplace</a>
                    </button>
                </nav>
            </div>
        </div>

    </div>
  )
}

export default Navbar