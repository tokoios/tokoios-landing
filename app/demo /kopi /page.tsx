"use client";

// Icon components sederhana (tanpa lucide-react)
const CoffeeIcon = () => <span className="text-2xl">☕</span>;
const MapPinIcon = () => <span className="text-2xl">📍</span>;
const ClockIcon = () => <span className="text-2xl">🕐</span>;
const PhoneIcon = () => <span className="text-2xl">📞</span>;
const InstagramIcon = () => <span className="text-2xl">📷</span>;
const StarIcon = () => <span className="text-2xl">⭐</span>;

export default function KopiKenanganDemo() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* NAVBAR */}
      <nav className="bg-amber-900 text-white py-4 px-6 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Coffee size={28} className="text-amber-400" />
            <span className="text-xl font-bold">Kopi Kenangan</span>
          </div>
          <a 
            href="https://wa.me/6281234567890" 
            className="bg-amber-400 text-amber-900 px-4 py-2 rounded-full font-semibold text-sm hover:bg-amber-300 transition"
          >
            Pesan Sekarang
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-amber-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Kopi Nikmat, Harga Sahabat
          </h1>
          <p className="text-xl text-amber-200 mb-8">
            Nikmati sensasi kopi nusantara dengan biji pilihan terbaik
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Star className="text-yellow-400" size={20} />
              <span>4.9 Rating</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Coffee size={20} />
              <span>100% Arabika</span>
            </div>
          </div>
        </div>
      </section>

      {/* MENU HIGHLIGHTS */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-900">
            Menu Andalan
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Kopi Susu Kenangan", price: "Rp18.000", desc: "Espresso + susu segar + gula aren" },
              { name: "Kopi Hitam Premium", price: "Rp15.000", desc: "Single origin dari Aceh Gayo" },
              { name: "Cappuccino Special", price: "Rp22.000", desc: "Espresso + steamed milk + foam" },
            ].map((menu, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-100">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <Coffee className="text-amber-900" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-amber-900">{menu.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{menu.desc}</p>
                <p className="text-amber-700 font-bold text-lg">{menu.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFO TOKO */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-900">
            Kunjungi Kami
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <MapPin className="mx-auto text-amber-700 mb-3" size={32} />
              <h3 className="font-bold mb-2">Lokasi</h3>
              <p className="text-gray-600">Jl. Sudirman No. 123<br/>Jakarta Selatan</p>
            </div>
            <div className="p-6">
              <Clock className="mx-auto text-amber-700 mb-3" size={32} />
              <h3 className="font-bold mb-2">Jam Buka</h3>
              <p className="text-gray-600">Senin - Minggu<br/>08:00 - 22:00</p>
            </div>
            <div className="p-6">
              <Phone className="mx-auto text-amber-700 mb-3" size={32} />
              <h3 className="font-bold mb-2">Kontak</h3>
              <p className="text-gray-600">0812-3456-7890<br/>halo@kopikenangan.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-900 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Pesan Sekarang!</h2>
        <p className="text-amber-200 mb-8">Dapatkan diskon 20% untuk pembelian pertama</p>
        <a 
          href="https://wa.me/6281234567890?text=Halo%20Kopi%20Kenangan" 
          className="inline-flex items-center gap-2 bg-amber-400 text-amber-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-300 transition"
        >
          <Phone size={20} /> Order via WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-amber-950 text-amber-200 py-8 px-6 text-center">
        <div className="flex justify-center gap-4 mb-4">
          <Instagram size={24} className="hover:text-white cursor-pointer" />
        </div>
        <p className="text-sm">© 2024 Kopi Kenangan. Demo by TokoiOS</p>
      </footer>
    </div>
  );
}
