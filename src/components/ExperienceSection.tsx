"use client";

import { useState } from "react";
import Link from "next/link";

import { experiences } from "@/lib/data";

export default function ExperienceSection() {
  const [filterCountry, setFilterCountry] = useState("Bütün");
  const [minDays, setMinDays] = useState("");
  const [maxDays, setMaxDays] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const uniqueCountries = ["Bütün", ...Array.from(new Set(experiences.map(e => e.country)))];

  const processedData = experiences
    .filter((e) => {
      if (filterCountry !== "Bütün" && e.country !== filterCountry) return false;
      if (minDays && e.days < Number(minDays)) return false;
      if (maxDays && e.days > Number(maxDays)) return false;
      if (minPrice && e.price < Number(minPrice)) return false;
      if (maxPrice && e.price > Number(maxPrice)) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "price_asc") return a.price - b.price;
      if (sortBy === "price_desc") return b.price - a.price;
      if (sortBy === "days_asc") return a.days - b.days;
      if (sortBy === "days_desc") return b.days - a.days;
      return 0; // Default ID sort
    });

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 text-[#174d65] mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
            <span className="text-sm font-medium">Təcrübəyə Görə Kəşf Edin</span>
          </div>
          <h2 className="font-sans font-bold text-3xl md:text-5xl tracking-tight text-[#0b1110]">
            Hər Səyahət Tərzinə Uyğun Hazırlanmış Səyahətlər
          </h2>
        </div>

        {/* Filter & Sort Bar */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-10 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Country */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase">Ölkə</label>
              <select
                className="w-full bg-gray-50 border border-gray-200 text-gray-700 px-4 py-2.5 rounded-xl outline-none focus:border-[#174d65] transition-colors"
                value={filterCountry}
                onChange={(e) => setFilterCountry(e.target.value)}
              >
                {uniqueCountries.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            {/* Days limit */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase">Müddət (Gün)</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-full bg-gray-50 border border-gray-200 text-gray-700 px-3 py-2.5 rounded-xl outline-none focus:border-[#174d65]"
                  value={minDays}
                  onChange={(e) => setMinDays(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="w-full bg-gray-50 border border-gray-200 text-gray-700 px-3 py-2.5 rounded-xl outline-none focus:border-[#174d65]"
                  value={maxDays}
                  onChange={(e) => setMaxDays(e.target.value)}
                />
              </div>
            </div>

            {/* Price Limit */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase">Qiymət (AZN)</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-full bg-gray-50 border border-gray-200 text-gray-700 px-3 py-2.5 rounded-xl outline-none focus:border-[#174d65]"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="w-full bg-gray-50 border border-gray-200 text-gray-700 px-3 py-2.5 rounded-xl outline-none focus:border-[#174d65]"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
            </div>

            {/* Sort By */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase">Sıralama</label>
              <select
                className="w-full bg-gray-50 border border-gray-200 text-gray-700 px-4 py-2.5 rounded-xl outline-none focus:border-[#174d65] transition-colors"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="default">Standart (Tövsiyə olunan)</option>
                <option value="price_asc">Qiymət (Artan)</option>
                <option value="price_desc">Qiymət (Azalan)</option>
                <option value="days_asc">Müddət (Gündən Çoxa)</option>
                <option value="days_desc">Müddət (Çoxdan Aza)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        {processedData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processedData.map((experience) => (
              <Link
                href={`/tours/${experience.id}`}
                key={experience.id}
                className="group rounded-2xl overflow-hidden bg-white hover:shadow-xl hover:shadow-[#174d65]/10 border border-gray-100 transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                <div className="relative h-[18rem] overflow-hidden rounded-t-2xl">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/40 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full">
                      {experience.duration}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col grow">
                  <h3 className="font-sans font-bold text-lg text-[#0b1110] mb-2">{experience.title}</h3>
                  <p className="text-sm text-gray-500 font-medium mb-4 flex items-center gap-1.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    {experience.country}
                  </p>
                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-end justify-between">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 font-medium tracking-wide uppercase">Başlayan Qiymət</span>
                      <p className="text-[#174d65] font-bold text-lg">
                        {experience.price.toLocaleString("az-AZ")} AZN
                      </p>
                    </div>
                    <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-1 bg-gray-50 px-2 py-1 rounded">/ Şəxs</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center flex flex-col items-center">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5" className="mb-4">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            </svg>
            <h3 className="text-xl font-bold text-gray-700">Heç bir tur tapılmadı</h3>
            <p className="text-gray-500 mt-2">Seçdiyiniz filtrlərə uyğun nəticə yoxdur. Zəhmət olmasa filtrləri dəyişin.</p>
          </div>
        )}

      </div>
    </section>
  );
}
