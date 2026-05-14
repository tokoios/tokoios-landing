"use client";

export default function KopiKenanganDemo() {
  // Icon components (tanpa lucide-react)
  const CoffeeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/><path d="M6 2v2"/><path d="M12 15h.01"/></svg>
  );
  
  const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
  );
  
  const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  );
  
  const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
  );
  
  const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
  );
  
  const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
  );

  return (
    <div className="min-h-screen bg-amber-50">
      {/* NAVBAR */}
      <nav className="bg-amber-900 text-white py-4 px-6 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CoffeeIcon />
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
              <StarIcon />
              <span>4.9 Rating</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <CoffeeIcon />
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
                  <CoffeeIcon />
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
              <MapPinIcon />
              <h3 className="font-bold mb-2 mt-2">Lokasi</h3>
              <p className="text-gray-600">Jl. Sudirman No. 123<br/>Jakarta Selatan</p>
            </div>
            <div className="p-6">
              <ClockIcon />
              <h3 className="font-bold mb-2 mt-2">Jam Buka</h3>
              <p className="text-gray-600">Senin - Minggu<br/>08:00 - 22:00</p>
            </div>
            <div className="p-6">
              <PhoneIcon />
              <h3 className="font-bold mb-2 mt-2">Kontak</h3>
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
          <PhoneIcon /> Order via WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-amber-950 text-amber-200 py-8 px-6 text-center">
        <div className="flex justify-center gap-4 mb-4">
          <InstagramIcon />
        </div>
        <p className="text-sm">© 2024 Kopi Kenangan. Demo by TokoiOS</p>
      </footer>
    </div>
  );
}