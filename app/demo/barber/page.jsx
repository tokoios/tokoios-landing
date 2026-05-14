"use client";

export default function BarberProDemo() {
  // Icon components
  const ScissorsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" x2="8.12" y1="4" y2="15.88"/><line x1="14.47" x2="20" y1="14.48" y2="20"/><line x1="8.12" x2="12" y1="8.12" y2="12"/></svg>
  );
  
  const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
  );
  
  const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
  );
  
  const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  );
  
  const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
  );
  
  const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
  );

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* NAVBAR */}
      <nav className="bg-slate-950 py-4 px-6 sticky top-0 z-50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ScissorsIcon />
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
              <StarIcon />
              <span>500+ Customers</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full">
              <ScissorsIcon />
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
                  <ScissorsIcon />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{service.desc}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <ClockIcon />
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
                  <ScissorsIcon />
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
              <MapPinIcon />
              <h3 className="font-bold text-lg mb-2 mt-2">Lokasi</h3>
              <p className="text-gray-400">Jl. Gatot Subroto No. 45<br/>Bandung, Jawa Barat</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700">
              <ClockIcon />
              <h3 className="font-bold text-lg mb-2 mt-2">Jam Operasional</h3>
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
          <PhoneIcon /> Booking via WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 py-8 px-6 text-center text-gray-400">
        <div className="flex justify-center gap-4 mb-4">
          <InstagramIcon />
        </div>
        <p className="text-sm">© 2024 BarberPro. Demo by TokoiOS</p>
      </footer>
    </div>
  );
}