import React from 'react';
import '../App.css';
import { MapPin, Instagram, Music } from 'lucide-react';

function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-t from-rose-50 to-orange-50 border-t border-rose-200 mt-10 pt-4 text-sm text-zinc-700 py-8 w-full">
        <div className="flex flex-col items-center space-y-6 px-4">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-zinc-700">Temukan Kami</h3>
            <p className="text-zinc-600 text-lg mt-2">
              Kunjungi toko kami untuk melihat koleksi lengkap dan dapatkan pengalaman berbelanja yang menyenangkan.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex-1">
              <div className="mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1725.46374714693!2d107.14218176542572!3d-6.826744747865306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e685253f1426fcb%3A0x1163ab5c10f9ab61!2sRevaBajuAnak!5e0!3m2!1sen!2sid!4v1746173995842!5m2!1sen!2sid"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-1" />
                <p className="text-sm">
                  Jl. Prof. Moch Yamin, Sayang, Kec. Cianjur, Kabupaten Cianjur, Jawa Barat 43213
                </p>
              </div>
            </div>

            <div className="flex-1">
              <p className="text-lg font-semibold mb-4">Ikuti kami di media sosial juga</p>
              <p className="text-sm mb-6">
                Dapatkan update terbaru tentang koleksi dan promo dari Reva Baju Anak melalui media sosial kami:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
                <a
                  href="https://instagram.com/revabajuanak"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-pink-500 transition"
                >
                  <Instagram className="w-5 h-5" />
                  <span>@revabajuanak</span>
                </a>
                <a
                  href="https://www.tiktok.com/@reva.bajuanak?_t=zs-8sq66ku1fjn&_r=1"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-black transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16">
                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
                </svg>
                  <span>@revabajuanak</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-rose-200 mt-10 pt-4 text-center text-sm text-gray-600">
          © 2025 Reva Baju Anak. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;