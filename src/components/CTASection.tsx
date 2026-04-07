"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1540202404-a2f29016b523?w=1920&h=1080&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h2 className="font-sans font-bold text-4xl md:text-6xl text-white leading-tight max-w-3xl tracking-tight">
          Səyahət Xəyallarınızı Reallığa Çevirin
        </h2>
        <p className="mt-6 text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto drop-shadow">
          İlk ideyadan son detallara qədər, əbədi xatırlayacağınız səyahətlər hazırlayırıq.
        </p>
        <Link
          href="#book"
          className="mt-10 inline-flex items-center gap-3 bg-white text-[#0b1110] px-7 py-3.5 rounded-full font-bold shadow-xl hover:bg-gray-100 transition-colors"
        >
          <span>Səyahət bron et</span>
          <span className="w-8 h-8 bg-[#0b1110] rounded-full flex items-center justify-center text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}
