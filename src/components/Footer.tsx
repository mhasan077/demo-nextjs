"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0b1110] text-white py-16 px-4 pb-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-4">
          {/* Pages */}
          <div>
            <h4 className="text-gray-400 text-sm mb-4">Səhifələr</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-white hover:text-[#448ea0] transition-colors font-medium">Ana Səhifə</Link>
              <Link href="/about" className="text-white hover:text-[#448ea0] transition-colors font-medium">Haqqımızda</Link>
              <Link href="/tours" className="text-white hover:text-[#448ea0] transition-colors font-medium">Turlar</Link>
              <Link href="/book" className="text-white hover:text-[#448ea0] transition-colors font-medium">Səyahət Bron Et</Link>
            </nav>
          </div>

          {/* Documentation */}
          <div>
            <h4 className="text-gray-400 text-sm mb-4">Sənədlər</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/blogs" className="text-white hover:text-[#448ea0] transition-colors font-medium">Bloqlar</Link>
              <Link href="/privacy" className="text-white hover:text-[#448ea0] transition-colors font-medium">Məxfilik Siyasəti</Link>
              <Link href="/terms" className="text-white hover:text-[#448ea0] transition-colors font-medium">Qaydalar və Şərtlər</Link>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-gray-400 text-sm mb-4">Sosial Şəbəkələr</h4>
            <div className="flex items-center gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#448ea0] transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#448ea0] transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="18" cy="6" r="1.5" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#448ea0] transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="2"/>
                  <path d="M8 11v5M8 8v.01M12 16v-5a2 2 0 0 1 4 0v5"/>
                </svg>
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#448ea0] transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
