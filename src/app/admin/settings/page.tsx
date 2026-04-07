"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const [phone, setPhone] = useState("+91 9730627087");
  const [message, setMessage] = useState("Salam! Mən vebsaytınızdakı turlarla maraqlanıram. Zəhmət olmasa mənə ətraflı məlumat verə bilərsinizmi?");
  const [saved, setSaved] = useState(false);
  
  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="animate-in fade-in duration-500">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Əlaqə Ayarları</h1>
          <p className="text-gray-500 mt-1">Səyahətçilərin sizinlə əlaqə saxlayacağı məlumatları idarə edin.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 max-w-2xl">
        <h2 className="text-xl font-bold text-gray-900 mb-6">WhatsApp Məlumatları</h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">WhatsApp Nömrəsi</label>
            <input 
              type="text" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-lg px-4 py-3.5 rounded-xl outline-none focus:border-[#174d65] focus:bg-white transition-all font-medium"
              placeholder="+994 (00) 000 00 00"
            />
            <p className="text-sm text-gray-400 mt-2">Müştərilərin müraciət edəcəyi rəsmi nömrəniz (ölkə kodu ilə birlikdə daxil edin).</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Avtomatik Başlanğıc Mesajı</label>
            <textarea 
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-lg px-4 py-3.5 rounded-xl outline-none focus:border-[#174d65] focus:bg-white transition-all font-medium resize-none"
              placeholder="Salam, turnuzla maraqlanıram..."
            ></textarea>
            <p className="text-sm text-gray-400 mt-2">İstifadəçi "Bron et" kliklədikdə WhatsApp-da sizin üçün yazılacaq hazır şablon cümlə.</p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100 flex items-center justify-end">
          <button 
            onClick={handleSave}
            className={`px-8 py-3.5 rounded-xl font-bold tracking-wide transition-all ${saved ? 'bg-emerald-500 text-white' : 'bg-[#174d65] hover:bg-[#113a4d] text-white shadow-md'}`}
          >
            {saved ? "Yadda Saxlanıldı ✓" : "Dəyişiklikləri Yadda Saxla"}
          </button>
        </div>
      </div>
    </div>
  )
}
