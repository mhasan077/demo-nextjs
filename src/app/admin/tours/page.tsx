"use client";

import { useState } from "react";
import Link from "next/link";
import { experiences } from "@/lib/data";

export default function ToursList() {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Fake state for showing deletion visually
  const [tours, setTours] = useState([...experiences]);

  const filtered = tours.filter(t => t.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const toggleStatus = (id: number) => {
    // In a real app this would trigger an API call. Here we just fake toggling Draft.
  };

  const deleteTour = (id: number) => {
    if(confirm("Turu silmək istədiyinizdən əminsiniz?")) {
      setTours(tours.filter(t => t.id !== id));
    }
  };

  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Turlar</h1>
          <p className="text-gray-500 mt-1">Bütün turları idarə edin. {tours.length} tur tapıldı.</p>
        </div>
        <Link 
          href="/admin/tours/new" 
          className="bg-[#174d65] hover:bg-[#113a4d] text-white px-5 py-2.5 rounded-xl font-medium tracking-wide shadow-sm transition-colors flex items-center justify-center gap-2"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          Tur Əlavə Et
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex mb-6 p-2">
        <div className="flex items-center gap-2 px-3 text-gray-400">
           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>
        <input 
          type="text" 
          placeholder="Tur adına görə axtarış..." 
          className="w-full py-3 bg-transparent outline-none text-gray-900 placeholder:text-gray-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {filtered.length === 0 ? (
          <div className="text-center py-20 px-4">
             <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
               <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
             </div>
             <h3 className="text-lg font-bold text-gray-900">Tur tapılmadı</h3>
             <p className="text-gray-500 mt-1 mb-6">Axtarışınıza uyğun tur yoxdur və ya hələ tur əlavə etməmisiniz.</p>
             <Link href="/admin/tours/new" className="text-[#174d65] font-semibold hover:underline">Yeni tur yarat</Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/80 border-b border-gray-100">
                  <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Tur Adı & Detallar</th>
                  <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Tarix / Müddət</th>
                  <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Qiymət</th>
                  <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="py-4 px-6 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Əməliyyatlar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filtered.map(tour => (
                  <tr key={tour.id} className="hover:bg-gray-50 transition-colors group">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                          <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 border-b border-transparent group-hover:border-gray-900 transition-colors inline-block">{tour.title}</p>
                          <p className="text-xs text-gray-500 mt-1">{tour.country}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <p className="text-gray-900 font-medium">{tour.duration}</p>
                    </td>
                    <td className="py-4 px-6 text-gray-900 font-bold">
                      {tour.price.toLocaleString("az-AZ")} AZN
                    </td>
                    <td className="py-4 px-6">
                      <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-100/50 inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Aktual
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link href={`/admin/tours/new?edit=${tour.id}`} className="p-2 text-gray-400 hover:text-[#174d65] hover:bg-[#174d65]/10 rounded-lg transition-colors" title="Redaktə et">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                        </Link>
                        <button onClick={() => deleteTour(tour.id)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Sil">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
