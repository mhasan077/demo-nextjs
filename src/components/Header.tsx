"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <div className="flex items-center gap-4 bg-[#174d65]/80 backdrop-blur-md px-6 py-3 rounded-full">
          <Link href="/" className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" fill="white"/>
            </svg>
            <span className="font-cal text-white text-xl tracking-wide">Traavellio</span>
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white ml-4"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl p-6 min-w-[200px]">
          <nav className="flex flex-col gap-4">
            <Link href="/" className="text-[#0b1110] hover:text-[#174d65] font-medium">Ana Səhifə</Link>
            <Link href="/about" className="text-[#0b1110] hover:text-[#174d65] font-medium">Haqqımızda</Link>
            <Link href="/tours" className="text-[#0b1110] hover:text-[#174d65] font-medium">Turlar</Link>
            <Link href="/book" className="text-[#0b1110] hover:text-[#174d65] font-medium">Səyahət Bron Et</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
