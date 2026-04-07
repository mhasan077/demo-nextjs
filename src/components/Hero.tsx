"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/herovideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Floating Images Removed */}

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-center pt-20">
        <h1 className="font-sans font-bold text-5xl md:text-7xl lg:text-[6rem] tracking-tight text-white leading-[1.05] max-w-5xl">
          Təkcə Xəritəni Deyil,<br />Dünyanı Kəşf Edin
        </h1>

        <p className="mt-8 text-white text-lg md:text-2xl font-medium max-w-3xl drop-shadow-md">
          Tələsmədən, Hiss Edilmək Üçün Hazırlanmış Özəl Səyahətlər.
        </p>

        <Link
          href="#book"
          className="mt-12 flex items-center justify-center gap-3"
        >
          <div className="bg-white text-black px-7 py-3.5 rounded-full font-semibold text-lg shadow-lg hover:bg-gray-100 transition-colors">
            Səyahət bron et
          </div>
          <div className="bg-white text-black w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
        </Link>

        {/* Stats */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-12 text-white pb-10">
          <div className="flex items-center gap-2 drop-shadow-md">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
              <text x="12" y="16" textAnchor="middle" fill="currentColor" fontSize="10" fontWeight="bold">G</text>
            </svg>
            <span className="text-sm md:text-base font-medium">4.9 ulduz (541k Rəy)</span>
          </div>

          <div className="flex items-center gap-2 drop-shadow-md">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
              <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="2"/>
              <circle cx="15" cy="7" r="3" stroke="currentColor" strokeWidth="2"/>
              <path d="M3 21v-2a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span className="text-sm md:text-base font-medium">50k səyahətçi</span>
          </div>

          <div className="flex items-center gap-2 drop-shadow-md">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
              <circle cx="18" cy="6" r="1.5" fill="currentColor"/>
            </svg>
            <span className="text-sm md:text-base font-medium">1+ milyon izləyici</span>
          </div>
        </div>
      </div>

    </section>
  );
}
