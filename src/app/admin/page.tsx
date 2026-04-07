"use client";

import Link from "next/link";
import { experiences } from "@/lib/data";

export default function AdminDashboard() {
  const activeTours = experiences.length;
  // Let's pretend a few recent ones
  const recentTours = experiences.slice(0, 4);

  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Ana Panel</h1>
          <p className="text-gray-500 mt-1">Xoş gəldiniz! İşləriniz necə gedir?</p>
        </div>
        <Link 
          href="/admin/tours/new" 
          className="bg-[#174d65] hover:bg-[#113a4d] text-white px-5 py-2.5 rounded-xl font-medium tracking-wide shadow-sm transition-colors flex items-center gap-2"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          Yeni Tur Yarat
        </Link>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5">
           <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path></svg>
           </div>
           <div>
             <p className="text-sm font-medium text-gray-500">Aktiv Turlar</p>
             <h3 className="text-3xl font-bold text-gray-900">{activeTours}</h3>
           </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5">
           <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
           </div>
           <div>
             <p className="text-sm font-medium text-gray-500">Müraciətlər</p>
             <h3 className="text-3xl font-bold text-gray-900">124</h3>
           </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5">
           <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
           </div>
           <div>
             <p className="text-sm font-medium text-gray-500">Uğurlu Satış (Bu ay)</p>
             <h3 className="text-3xl font-bold text-gray-900">42</h3>
           </div>
        </div>
      </div>

      {/* Recent Tours */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">Son Əlavə Olunan Turlar</h2>
          <Link href="/admin/tours" className="text-sm font-medium text-[#174d65] hover:underline">
            Hamısına bax
          </Link>
        </div>
        <div className="divide-y divide-gray-50">
          {recentTours.map((tour) => (
            <div key={tour.id} className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-16 h-12 rounded overflow-hidden">
                   <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{tour.title}</h4>
                  <p className="text-sm text-gray-500">{tour.duration} • {tour.price.toLocaleString("az-AZ")} AZN</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs font-semibold">Publish</span>
                <Link href={`/admin/tours/new?edit=${tour.id}`} className="p-2 text-gray-400 hover:text-[#174d65] hover:bg-gray-100 rounded-lg">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
