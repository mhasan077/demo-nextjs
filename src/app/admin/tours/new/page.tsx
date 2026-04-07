"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function TourForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isEditing = searchParams.get('edit') !== null;
  
  // Basic states for a massive form feeling fast
  const [isActive, setIsActive] = useState(true);
  const [inclusions, setInclusions] = useState(["Gecələmə (4 ulduzlu otellər)", "Səhər yeməyi"]);
  const [exclusions, setExclusions] = useState(["Uçuş bileti", "Şəxsi xərclər"]);
  const [itinerary, setItinerary] = useState([
    { day: "1", title: "Gəliş və yerləşmə", content: "Hava limanından qarşılanma, otelə transfer və asudə vaxt." }
  ]);

  const [saving, setSaving] = useState(false);

  const addNewInclusion = () => setInclusions([...inclusions, ""]);
  const updateInclusion = (index: number, val: string) => {
    const nw = [...inclusions]; nw[index] = val; setInclusions(nw);
  };

  const addNewExclusion = () => setExclusions([...exclusions, ""]);
  const updateExclusion = (index: number, val: string) => {
    const nw = [...exclusions]; nw[index] = val; setExclusions(nw);
  };

  const addNewDay = () => setItinerary([...itinerary, { day: String(itinerary.length + 1), title: "", content: "" }]);
  const updateDay = (index: number, field: string, val: string) => {
    const nw = [...itinerary]; nw[index] = { ...nw[index], [field]: val }; setItinerary(nw);
  };

  const saveTour = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      router.push('/admin/tours');
    }, 800);
  };

  return (
    <div className="animate-in fade-in duration-500 pb-32"> {/* extra padding for sticky footer */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/tours" className="w-10 h-10 bg-white border border-gray-200 text-gray-500 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
        </Link>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
            {isEditing ? "Turu Redaktə Et" : "Yeni Tur Yarat"}
          </h1>
          <p className="text-gray-500 mt-1">Müştəriləriniz bu məlumatları görəcək. Mümkün olduqca sadə və aydın yazın.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column (Main Specs) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Header Info */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-[#174d65]">1.</span> Təməl Məlumatlar
            </h2>
            <div className="space-y-6">
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Tur Adı</label>
                <input 
                  type="text" 
                  autoFocus
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-lg px-4 py-3.5 rounded-xl outline-none focus:border-[#174d65] focus:bg-white transition-all font-bold placeholder:font-normal placeholder:text-gray-400"
                  placeholder="Məs: Dubay - 5 gün..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Gösteriləcək Qiymət (AZN)</label>
                  <input 
                    type="number" 
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-lg px-4 py-3 rounded-xl outline-none focus:border-[#174d65] focus:bg-white transition-all font-medium placeholder:font-normal placeholder:text-gray-400"
                    placeholder="1,400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Müddət</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-lg px-4 py-3 rounded-xl outline-none focus:border-[#174d65] focus:bg-white transition-all font-medium placeholder:font-normal placeholder:text-gray-400"
                    placeholder="Məs: 7 Gün / 6 Gecə"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Qısa İcmal (Overview)</label>
                <textarea 
                  rows={4}
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-lg px-4 py-3 1 rounded-xl outline-none focus:border-[#174d65] focus:bg-white transition-all font-medium placeholder:font-normal resize-none"
                  placeholder="Səyahət haqqında ümumi və cəlbedici bir abzas..."
                ></textarea>
              </div>
            </div>
          </div>

          {/* Itinerary */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-[#174d65]">2.</span> Dəqiq Marşrut (Günlər)
            </h2>
            <div className="space-y-4">
              {itinerary.map((it, idx) => (
                <div key={idx} className="p-4 bg-gray-50 rounded-xl border border-gray-100 relative group">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="bg-[#174d65]/10 text-[#174d65] font-bold px-3 py-1 rounded-lg text-sm shrink-0">Gün {it.day}</span>
                    <input 
                      type="text" 
                      value={it.title}
                      onChange={(e) => updateDay(idx, 'title', e.target.value)}
                      placeholder="Günün başlığı (məs: Gəliş & Yerləşmə)"
                      className="bg-transparent font-bold text-gray-900 w-full outline-none placeholder:font-normal placeholder:text-gray-400 text-lg"
                    />
                  </div>
                  <textarea 
                    rows={2}
                    value={it.content}
                    onChange={(e) => updateDay(idx, 'content', e.target.value)}
                    placeholder="Gün ərzində nələr baş verəcək?"
                    className="w-full bg-white border border-gray-200 text-gray-700 px-3 py-2 rounded-lg outline-none focus:border-[#174d65] transition-all"
                  ></textarea>
                </div>
              ))}
              <button 
                onClick={addNewDay}
                className="w-full mt-2 py-3 border-2 border-dashed border-gray-200 rounded-xl text-gray-500 font-bold hover:bg-gray-50 hover:text-[#174d65] hover:border-[#174d65]/30 transition-all"
              >
                + Yeni Gün Əlavə Et
              </button>
            </div>
          </div>

          {/* Inclusions & Exclusions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-emerald-500">☑</span> Daxildir
              </h2>
              <div className="space-y-3">
                {inclusions.map((inc, i) => (
                  <input key={i} type="text" value={inc} onChange={(e) => updateInclusion(i, e.target.value)} className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-2.5 rounded-lg outline-none focus:border-[#174d65]" placeholder="Nə daxildir?" />
                ))}
                <button onClick={addNewInclusion} className="text-sm font-bold text-[#174d65] hover:underline mt-2">+ Bənd əlavə et</button>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-gray-400">☒</span> Daxil Deyil
              </h2>
              <div className="space-y-3">
                {exclusions.map((exc, i) => (
                  <input key={i} type="text" value={exc} onChange={(e) => updateExclusion(i, e.target.value)} className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-2.5 rounded-lg outline-none focus:border-gray-400" placeholder="Nə daxil deyil?" />
                ))}
                <button onClick={addNewExclusion} className="text-sm font-bold text-[#174d65] hover:underline mt-2">+ Bənd əlavə et</button>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column (Side Specs) */}
        <div className="space-y-8">
          
          {/* Status Panel */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center justify-between">
            <div>
              <p className="font-bold text-gray-900 text-lg">Görünürlük</p>
              <p className="text-gray-500 text-sm mt-0.5">{isActive ? 'Tur saytda görünür' : 'Tur gizlədilib'}</p>
            </div>
            <button 
              onClick={() => setIsActive(!isActive)}
              className={`w-14 h-8 rounded-full relative transition-colors ${isActive ? 'bg-emerald-500' : 'bg-gray-300'}`}
            >
              <div className={`w-6 h-6 rounded-full bg-white absolute top-1 transition-transform ${isActive ? 'left-7' : 'left-1'}`}></div>
            </button>
          </div>

          {/* Media */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Şəkillər</h2>
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer group">
               <div className="w-12 h-12 bg-[#174d65]/10 rounded-full flex items-center justify-center text-[#174d65] mx-auto mb-3 group-hover:scale-110 transition-transform">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
               </div>
               <p className="font-bold text-gray-900 mb-1">Şəkli bura sürüşdürün</p>
               <p className="text-sm text-gray-500">və ya klikləyib faylı seçin</p>
               <p className="text-xs text-gray-400 mt-4">Tövsiyə edilən ölçü: 1200x800px</p>
            </div>
          </div>
          
        </div>
      </div>

      {/* Sticky Save Bar */}
      <div className="fixed bottom-0 left-0 md:left-64 right-0 bg-white border-t border-gray-200 p-4 md:px-8 flex items-center justify-between shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)] z-20">
        <p className="text-gray-500 font-medium hidden sm:block">Bütün məlumatların düzgünlüyünü yoxlayın.</p>
        <div className="flex gap-4 w-full sm:w-auto">
          <Link href="/admin/tours" className="px-6 py-3 rounded-xl font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors flex-1 text-center">İmtina et</Link>
          <button onClick={saveTour} disabled={saving} className="px-10 py-3 rounded-xl font-bold tracking-wide text-white bg-[#174d65] hover:bg-[#113a4d] transition-colors shadow-md flex-1 text-center">
            {saving ? "Yadda saxlanılır..." : "Yadda Saxla"}
          </button>
        </div>
      </div>

    </div>
  )
}

export default function TourFormPage() {
  return (
    <Suspense fallback={<div className="p-8 text-gray-500">Yüklənir...</div>}>
      <TourForm />
    </Suspense>
  );
}
