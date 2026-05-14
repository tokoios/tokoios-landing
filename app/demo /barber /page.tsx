"use client";

import { Scissors, Calendar, Phone, MapPin, Clock, Instagram, Star } from "lucide-react";

export default function BarberProDemo() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* NAVBAR */}
      <nav className="bg-slate-950 py-4 px-6 sticky top-0 z-50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Scissors size={28} className="text-blue-500" />
            <span className="text-xl font-bold">Barber<span className="text-blue-500">Pro</span></span>
          </div>
          <a 
            href="https://wa.me/6281234567891" 
            className="bg-blue-600 px-4 py-2 rounded-full font-semibold text-sm hover:bg-blue-500 transition"
          >
            Booking Sekarang
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Tampil <span className="text-blue-500">Ganteng</span> Maximal
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Barber shop profesional dengan stylist berpengalaman
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full">
              <Star className="text-yellow-400" size={20} />
              <span>500+ Customers</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full">
              <Scissors size={20} />
              <span>5 Tahun Pengalaman</span>
            </div>
          </div>
        </div>
      </section>

      {/* LAYANAN */}
      <section className="py-16 px-6 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Layanan Kami</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Haircut Regular", price: "Rp50.000", desc: "Potong rambut + keramas + styling", time: "30 menit" },
              { name: "Haircut + Beard", price: "Rp75.000", desc: "Potong rambut + cukur jenggot", time: "45 menit" },
              { name: "Premium Package", price: "Rp120.000", desc: "Haircut + beard + facial + hair spa", time: "90 menit" },
            ].map((service, idx) => (
              <div key={idx} className="bg-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-blue-500 transition">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-4">
                  <Scissors className="text-blue-500" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{service.desc}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Clock size={16} />
                  <span>{service.time}</span>
                </div>
                <p className="text-blue-400 font-bold text-2xl">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Galeri Hasil</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square bg-slate-800 rounded-xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center">
                  <Scissors className="text-slate-500" size={48} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOKASI & JAM */}
      <section className="py-16 px-6 bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Informasi</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700">
              <MapPin className="text-blue-500 mb-3" size={32} />
              <h3 className="font-bold text-lg mb-2">Lokasi</h3>
              <p className="text-gray-400">Jl. Gatot Subroto No. 45<br/>Bandung, Jawa Barat</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700">
              <Clock className="text-blue-500 mb-3" size={32} />
              <h3 className="font-bold text-lg mb-2">Jam Operasional</h3>
              <p className="text-gray-400">Senin - Sabtu: 10:00 - 21:00<br/>Minggu: 12:00 - 18:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Booking Sekarang!</h2>
        <p className="text-gray-400 mb-8">Jangan sampai kehabisan slot. Booking via WhatsApp</p>
        <a 
          href="https://wa.me/6281234567891?text=Halo%20BarberPro,%20saya%20mau%20booking" 
          className="inline-flex items-center gap-2 bg-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-500 transition"
        >
          <Phone size={20} /> Booking via WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 py-8 px-6 text-center text-gray-400">
        <div className="flex justify-center gap-4 mb-4">
          <Instagram size={24} className="hover:text-white cursor-pointer" />
        </div>
        <p className="text-sm">© 2024 BarberPro. Demo by TokoiOS</p>
      </footer>
    </div>
  );
}
