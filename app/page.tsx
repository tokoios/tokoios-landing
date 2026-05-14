"use client";

import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle, Code, Smartphone, Zap, Menu, X } from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/6281230231233?text=Halo%20TokoiOS,%20saya%20tertarik%20konsultasi%20website.";

  const services = [
    {
      title: "Landing Page",
      price: "Mulai Rp299k",
      desc: "Satu halaman konversi tinggi untuk produk, jasa, atau kampanye.",
      features: ["Responsive Mobile", "WhatsApp CTA", "SEO Basic", "Deploy Cepat"],
    },
    {
      title: "Website UMKM",
      price: "Mulai Rp799k",
      desc: "Website multi-halaman profesional untuk bisnis lokal Anda.",
      features: ["Multi Page", "Galeri & Form", "Google Maps", "Admin Sederhana"],
    },
    {
      title: "SaaS Sederhana",
      price: "Mulai Rp1.5jt",
      desc: "Tools kustom: invoice, dashboard, booking system, dan lainnya.",
      features: ["Login System", "Database", "API Integration", "Maintenance Opsional"],
    },
  ];

  const portfolio = [
  { 
    name: "Kopi Kenangan", 
    category: "F&B • Landing Page", 
    color: "bg-amber-900",
    link: "/demo/kopi"  // ← TAMBAHKAN INI
  },
  { 
    name: "BarberPro", 
    category: "Jasa • Website Bisnis", 
    color: "bg-slate-800",
    link: "/demo/barber"  // ← TAMBAHKAN INI
  },
  { 
    name: "InvoiceKit", 
    category: "SaaS • Dashboard", 
    color: "bg-emerald-900",
    link: "/demo/invoice"  // ← TAMBAHKAN INI
  },
];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-lime-400 selection:text-black">
      {/* NAVBAR */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/90 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight">
            toko<span className="text-lime-400">ios</span>
          </a>
          
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
  <a href="#services" className="hover:text-lime-400 transition">Layanan</a>
  <a href="#portfolio" className="hover:text-lime-400 transition">Portfolio</a>
  <a href="#process" className="hover:text-lime-400 transition">Proses</a>
  
  <div className="flex items-center gap-3">
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="bg-lime-400 text-black px-5 py-2.5 rounded-full font-semibold hover:bg-lime-300 transition flex items-center gap-2"
    >
      Konsultasi WA <ArrowRight size={16} />
    </a>
    <a 
      href="mailto:hello@tokoios.com" 
      className="border border-white/20 px-5 py-2.5 rounded-full font-semibold hover:bg-white/5 transition flex items-center gap-2"
    >
      Email Kami <ArrowRight size={16} />
    </a>
  </div>
</div>
          
          <button 
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur border-b border-white/10 py-4 px-6 flex flex-col gap-4">
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="py-2">Layanan</a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="py-2">Portfolio</a>
            <a href="#process" onClick={() => setIsMenuOpen(false)} className="py-2">Proses</a>
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-lime-400 text-black px-5 py-3 rounded-full font-semibold text-center"
            >
              Konsultasi WhatsApp
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm mb-8">
            <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></span>
            Menerima project baru — Slot terbatas
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Bantu bisnis Anda <span className="text-lime-400">online lebih cepat</span>.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Landing page, website bisnis, dan tools sederhana untuk UMKM & creator. 
            Dibuat dengan teknologi modern, hasil maksimal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-lime-400 text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-lime-300 transition flex items-center justify-center gap-2"
            >
              Konsultasi WhatsApp <ArrowRight size={20} />
            </a>
            <a 
              href="#portfolio" 
              className="border border-white/20 px-8 py-4 rounded-full font-semibold hover:bg-white/5 transition"
            >
              Lihat Portfolio
            </a>
          </div>
          <div className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-lime-400" /> Next.js & Tailwind
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-lime-400" /> Mobile Responsive
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-lime-400" /> Deploy Cepat
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Layanan Kami</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Pilih paket yang sesuai dengan kebutuhan bisnis Anda.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((svc, idx) => (
              <div 
                key={idx} 
                className="bg-black border border-white/10 rounded-2xl p-6 hover:border-lime-400/50 transition group"
              >
                <div className="w-12 h-12 bg-lime-400/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-lime-400/20 transition">
                  {idx === 0 ? <Zap className="text-lime-400" /> : idx === 1 ? <Smartphone className="text-lime-400" /> : <Code className="text-lime-400" />}
                </div>
                <h3 className="text-xl font-bold mb-2">{svc.title}</h3>
                <p className="text-lime-400 font-semibold mb-3">{svc.price}</p>
                <p className="text-gray-400 text-sm mb-5">{svc.desc}</p>
                <ul className="space-y-2 mb-6">
                  {svc.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle size={14} className="text-lime-400" /> {f}
                    </li>
                  ))}
                </ul>
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-sm font-semibold hover:text-lime-400 transition"
                >
                  Pesan Sekarang <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio</h2>
            <p className="text-gray-400">Contoh project yang dapat kami buat untuk Anda.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((item, idx) => (
              <a 
                key={idx} 
                href={item.link} 
                className={`rounded-2xl overflow-hidden aspect-[4/3] ${item.color} relative group cursor-pointer block`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <span className="text-xs text-lime-400 font-medium mb-1">{item.category}</span>
                  <h3 className="text-xl font-bold">{item.name}</h3>
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <span className="bg-lime-400 text-black px-4 py-2 rounded-full text-sm font-semibold">Lihat Demo</span>
                </div>
              </a>
            ))}
          </div> 
          <p className="text-center text-gray-500 text-sm mt-8">
            * Demo project untuk showcase.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24 px-6 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Cara Kerja</h2>
          <p className="text-gray-400 mb-12">Proses sederhana, hasil maksimal.</p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Konsultasi", desc: "Diskusi kebutuhan via WhatsApp" },
              { step: "02", title: "Pengerjaan", desc: "Kami bangun dengan template teruji" },
              { step: "03", title: "Review", desc: "Anda cek & minta revisi jika perlu" },
              { step: "04", title: "Launch", desc: "Website live & siap pakai" },
            ].map((item, idx) => (
              <div key={idx} className="text-left">
                <div className="text-3xl font-bold text-lime-400 mb-2">{item.step}</div>
                <h4 className="font-semibold mb-1">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap membuat bisnis Anda lebih profesional?
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Konsultasi gratis via WhatsApp. Tidak ada kewajiban.
          </p>
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 bg-lime-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-lime-300 transition shadow-lg shadow-lime-400/20"
          >
            Chat WhatsApp Sekarang
          </a>
          <p className="text-gray-500 text-sm mt-4">
            ⚡ Respon cepat • Garansi revisi • Harga transparan
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-white/10 text-center text-sm text-gray-500">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <span className="font-bold text-white">
              toko<span className="text-lime-400">ios</span>
            </span>
            <span className="mx-2">•</span>
            © {new Date().getFullYear()} All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-lime-400 transition">Privacy</a>
            <a href="#" className="hover:text-lime-400 transition">Terms</a>
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-lime-400 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
