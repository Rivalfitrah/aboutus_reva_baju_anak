import { Heart, ShieldCheck, Shirt } from 'lucide-react'
import React from 'react'
import '../App.css'

function About() {
  return (
    <>
        <section id="about" className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 py-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="bg-light text-accent px-4 py-1 rounded-full text-sm font-medium">Tentang Kami</span>
                <h2 className="text-3xl font-bold mt-4 text-gray-800">Selamat Datang di Reva Baju Anak</h2>
                <p className="text-gray-600 mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab deserunt rerum rem, dolorem, ad mollitia facere fugiat debitis architecto quisquam, quia tempore quam eum. Mollitia quibusdam quo nisi unde aliquid?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

                <div className="bg-[#FFF0F3] rounded-xl p-8 text-center shadow-sm hover:shadow-md transition">
                    <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                        <ShieldCheck  className="h-8 w-8 text-[#FF7588]"></ShieldCheck>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Kualitas Terbaik</h3>
                    <p className="text-gray-700">Bahan berkualitas tinggi dan nyaman untuk kulit sensitif si kecil</p>
                </div>

                <div className="bg-[#FFF0F3] rounded-xl p-8 text-center shadow-sm hover:shadow-md transition">
                    <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                        <Shirt className="h-8 w-8 text-[#FF7588]"></Shirt>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Desain Trendy</h3>
                    <p className="text-gray-700">Beragam pilihan model yang trendy dan sesuai dengan perkembangan mode</p>
                </div>
                
                <div className="bg-[#FFF0F3] rounded-xl p-8 text-center shadow-sm hover:shadow-md transition">
                    <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                        <Heart className="h-8 w-8 text-[#FF7588]"></Heart>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Nyaman Dipakai</h3>
                    <p className="text-gray-700">Dirancang khusus agar nyaman dipakai untuk aktivitas si kecil sehari-hari</p>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default About