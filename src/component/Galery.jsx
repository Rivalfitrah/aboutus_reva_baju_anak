import React from 'react';

function Galery() {
  return (
    <>
      <section className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Produk</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover our carefully curated collection of premium products designed to enhance your lifestyle.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="md:col-span-2 lg:col-span-1 lg:row-span-2 group">
            <div className="relative overflow-hidden rounded-lg shadow-md h-full">
              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="Premium Watch" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              </div>
            </div>
          </div>

          <div className="group">
            <div className="relative overflow-hidden rounded-lg shadow-md h-64">
              <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f" alt="Sunglasses" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">

              </div>
            </div>
          </div>

          <div className="group">
            <div className="relative overflow-hidden rounded-lg shadow-md h-64">
              <img src="https://images.unsplash.com/photo-1560343090-f0409e92791a" alt="Wireless Headphones" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">

              </div>
            </div>
          </div>

          <div className="group">
            <div className="relative overflow-hidden rounded-lg shadow-md h-64">
              <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d" alt="Sneakers" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Galery;