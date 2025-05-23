import React, { useEffect, useState } from 'react';
import { getProduks, getImageUrl } from '../api/Produk';

function Galery() {
  const [produkList, setProdukList] = useState([]);

useEffect(() => {
  async function fetchProduk() {
    try {
      const produkData = await getProduks();

      const produkWithLayout = produkData.map((produk, index) => {
        return {
          ...produk,
          layoutType: index === 0 ? 'tall' : index === 4 ? 'wide' : 'normal'
        };
      });

      setProdukList(produkWithLayout);
    } catch (error) {
      console.error("Gagal mengambil produk:", error);
    }
  }

  fetchProduk();
}, []);


  const getLayoutClasses = (layoutType) => {
    switch (layoutType) {
      case 'tall':
        return 'md:col-span-2 lg:col-span-1 lg:row-span-2 h-full';
      case 'wide':
        return 'md:col-span-2 h-64';
      default:
        return 'h-64';
    }
  };

  if (!produkList.length) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <section id='galery' className="container mx-auto px-4 py-16 max-w-7xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Featured Products</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our carefully curated collection of premium products designed to enhance your lifestyle.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {produkList.map((produk) => {
          const layoutClass = getLayoutClasses(produk.layoutType);

          return (
            <div key={produk.id} className={`group ${layoutClass}`}>
              <div className="relative overflow-hidden rounded-lg shadow-md w-full h-full">
                <img
                  src={getImageUrl(produk.image)}
                  alt={produk.nama_produk}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full bg-white bg-opacity-90">
                    <h3 className="text-lg font-semibold text-gray-800">{produk.nama_produk}</h3>
                    <p className="text-gray-600">Rp{produk.harga.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Galery;
