"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    destination: "",
    dates: "",
    description: "",
  });

  return (
    <section id="book" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold tracking-tight text-3xl md:text-5xl text-[#0b1110]">
            Növbəti Səyahətinizi Bizimlə Planlayın
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto font-medium">
            Səyahət detallarınızı bizimlə bölüşün və səyahət mütəxəssislərimiz sizin üçün mükəmməl təcrübə dizayn etsin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative h-[400px] lg:h-full rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&h=1000&fit=crop"
              alt="Group of friends hiking"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Form */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <div className="mb-8">
              <h3 className="font-bold text-[#0b1110] mb-4 text-xl">Bizimlə əlaqə saxlayın.</h3>
              <div className="space-y-4">
                <a href="tel:+919730627087" className="flex items-center gap-3 text-gray-600 hover:text-[#174d65] font-medium">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>+91 9730627087</span>
                </a>
                <a href="mailto:info@traavellio.co" className="flex items-center gap-3 text-gray-600 hover:text-[#174d65] font-medium">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M22 7l-10 7L2 7"/>
                  </svg>
                  <span>info@traavellio.co</span>
                </a>
                <a href="https://maps.google.com" className="flex items-center gap-3 text-gray-600 hover:text-[#174d65] font-medium">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>Şəhər Meydanı, Bakı</span>
                </a>
              </div>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Ad, Soyad"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#174d65] transition-colors"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
                <input
                  type="tel"
                  placeholder="Əlaqə Nömrəsi"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#174d65] transition-colors"
                  value={formData.contactNumber}
                  onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                />
              </div>
              <input
                type="email"
                placeholder="E-poçt Ünvanı"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#174d65] transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#174d65] transition-colors text-gray-500"
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                >
                  <option value="">İstiqamət Seçin</option>
                  <option value="morocco">Mərakeş</option>
                  <option value="italy">İtaliya</option>
                  <option value="africa">Afrika</option>
                  <option value="japan">Yaponiya</option>
                </select>
                <input
                  type="date"
                  placeholder="Tarixləri Seçin"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#174d65] transition-colors text-gray-500"
                  value={formData.dates}
                  onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                />
              </div>
              <textarea
                placeholder="Əlavə Məlumat"
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#174d65] transition-colors resize-none"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
              <button
                type="submit"
                className="w-full bg-[#174d65] text-white py-3.5 rounded-xl font-bold tracking-wide hover:bg-[#1a717f] transition-colors"
              >
                Müraciəti Göndər
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
