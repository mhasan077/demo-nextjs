import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { experiences } from "@/lib/data";

// We can define static generic tour data or fetch based on params.id
const tours = {
  "2": {
    title: "Klassik İtaliya",
    overview: "Bu diqqətlə planlaşdırılmış səyahət İtaliyanın tarixi, mədəniyyəti və gündəlik həyatı arasında balans yaradır. Həm bələdçili turlar, həm də sərbəst istirahət üçün nəzərdə tutulmuş bu tur səyahətçiləri İtaliyanın zamansız cazibəsi ilə tanış edir.\n\nİtaliyanın zəngin irsi, sənət inciləri və canlı küçə həyatı immersiv və ifadəli bir səyahət təcrübəsi yaradır. Tarixi abidələrdən tutmuş yerli məhəllələrdəki sadə anlara qədər bu səyahət dərinlik, rahatlıq və yaddaqalan kəşflər təqdim edir.",
    heroImage: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1920&h=1080&fit=crop",
    mainImage: "https://images.unsplash.com/photo-1516483638261-f40af5bfca2e?w=1200&h=800&fit=crop",
    duration: "7 Gün / 6 Gecə",
    departure: "May 2026",
    groupSize: "10 Nəfər",
    price: "1,400 AZN",
    inclusionsShort: "Gecələmə, qidalanma, turlar",
    highlights: [
      "Tarixi abidələr və mədəniyyət mərkəzləri",
      "Sənət, memarlıq və irs gəzintiləri",
      "Orijinal yerli yemək təcrübələri",
      "Özəl seçilmiş mərkəzi otellər"
    ],
    itinerary: [
      { day: "Gün 1", title: "Gəliş & Xoş Gəldin Şam Yeməyi", content: "Hava limanından qarşılanma və otelə transfer. Axşam qrupla birlikdə ənənəvi italyan şam yeməyi." },
      { day: "Gün 2", title: "Klassik Abidələr", content: "Tarixi mərkəzin və memarlıq incilərinin bələdçili turu. Günortadan sonra sərbəst vaxt." },
      { day: "Gün 3", title: "İncəsənət, Tarix & Təcrübələr", content: "Yerli muzeylərə və qalereyalara səyahət. Ənənəvi mədəniyyətlə tanışlıq." },
      { day: "Gün 4", title: "Məhəllələr & Yerli Həyat", content: "Turistik mərkəzlərdən uzaq, yerli sakinlərin gündəlik yaşantısını hiss edəcəyiniz məhəllə gəzintiləri." },
      { day: "Gün 5", title: "İstirahət & Sərbəst Saatlar", content: "Öz sərbəst vaxtınızı dəyərləndirin, alış-veriş edin və ya kafelərdə vaxt keçirin." },
      { day: "Gün 6", title: "Gediş", content: "Otelden çıxış və hava limanına transfer." }
    ],
    included: [
      "Gecələmə (4 ulduzlu otellər)",
      "Seçilmiş yeməklər",
      "Yerli nəqliyyat",
      "Bələdçili turlar",
      "Tur rəhbərinin dəstəyi"
    ],
    excluded: [
      "Uçuşlar",
      "Şəxsi xərclər",
      "Könüllü fəaliyyətlər"
    ]
  }
};

export default async function TourPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  // Find the exact tour clicked from the main array
  const clickedExperience = experiences.find((e: { id: number | string }) => e.id.toString() === id);
  
  // Use Italy data as fallback/demo for all tours to match pixel-by-pixel request
  // but override the main title and dynamic images.
  const tourData = tours[id as keyof typeof tours] || {
    ...tours["2"],
    title: clickedExperience?.title || `Tur Detalları (ID: ${id})`,
    heroImage: clickedExperience?.image || tours["2"].heroImage,
    mainImage: clickedExperience?.image || tours["2"].mainImage,
    price: clickedExperience ? `${clickedExperience.price.toLocaleString("az-AZ")} AZN` : tours["2"].price,
    duration: clickedExperience?.duration || tours["2"].duration,
  };

  return (
    <div className="bg-[#f9fafb] min-h-screen text-[#0b1110]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[65vh] w-full">
        <div className="absolute inset-0 z-0">
          <img 
            src={tourData.heroImage} 
            alt={tourData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>
        <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-end pb-16">
          <h1 className="text-white text-5xl md:text-7xl font-sans tracking-tight font-bold">
            {tourData.title}
          </h1>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column - Details */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            
            {/* Overview */}
            <div>
              <h2 className="text-3xl font-bold font-sans tracking-tight mb-6 flex items-center gap-3">
                <span className="text-2xl">🧭</span> Səyahət İcmalı
              </h2>
              <div className="text-gray-600 text-lg leading-relaxed whitespace-pre-line space-y-6">
                {tourData.overview}
              </div>
            </div>

            {/* Main Image */}
            <div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-sm">
              <img 
                src={tourData.mainImage} 
                alt="Overview"
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
              />
            </div>

            {/* Highlights */}
            <div className="mt-8">
              <h2 className="text-3xl font-bold font-sans tracking-tight mb-6 flex items-center gap-3">
                <span className="text-2xl">✨</span> Səyahət Vurğuları
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
                {tourData.highlights.map((highlight, idx) => (
                  <li key={idx} className="pl-2">{highlight}</li>
                ))}
              </ul>
            </div>

            {/* Itinerary */}
            <div className="mt-8">
              <h2 className="text-3xl font-bold font-sans tracking-tight mb-8">Dəqiq Marşrut</h2>
              <div className="space-y-4">
                {tourData.itinerary.map((day, idx) => (
                  <details key={idx} className="group bg-gray-100 rounded-2xl open:bg-white open:shadow-md transition-all">
                    <summary className="flex items-center justify-between p-6 font-bold text-lg cursor-pointer list-none">
                      {day.day}: {day.title}
                      <span className="text-gray-400 group-open:rotate-45 transition-transform duration-300 text-2xl font-light">
                        +
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600 text-lg">
                      {day.content}
                    </div>
                  </details>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="mt-8">
              <h2 className="text-3xl font-bold font-sans tracking-tight mb-8 flex items-center gap-3">
                <span className="text-green-500 text-2xl">☑</span> Nələr Daxildir
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h3 className="font-bold text-xl mb-4">Daxildir</h3>
                  <ul className="space-y-3">
                    {tourData.included.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700 text-lg">
                        <span className="text-green-500 font-bold">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-4">Daxil deyil</h3>
                  <ul className="space-y-3">
                    {tourData.excluded.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700 text-lg">
                        <span className="text-gray-400 text-xs mt-1.5">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Sticky Card */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 bg-[#eeeff1] rounded-[2rem] p-8 md:p-10 flex flex-col gap-8">
              <h3 className="text-2xl font-bold tracking-tight">Səyahət Detalları</h3>
              
              <div className="flex justify-between items-center py-4 border-t border-gray-300">
                <div className="flex items-center gap-3 text-gray-600">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <span className="text-[15px] font-medium uppercase tracking-wide">Müddət:</span>
                </div>
                <span className="font-bold text-lg">{tourData.duration}</span>
              </div>

              <div className="flex justify-between items-center py-4 border-t border-gray-300">
                <div className="flex items-center gap-3 text-gray-600">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <span className="text-[15px] font-medium uppercase tracking-wide">Gediş:</span>
                </div>
                <span className="font-bold text-lg">{tourData.departure}</span>
              </div>

              <div className="flex justify-between items-center py-4 border-t border-gray-300">
                <div className="flex items-center gap-3 text-gray-600">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  <span className="text-[15px] font-medium uppercase tracking-wide">Qrup Sayı:</span>
                </div>
                <span className="font-bold text-lg">{tourData.groupSize}</span>
              </div>

              <div className="flex justify-between items-center py-4 border-t border-gray-300">
                <div className="flex items-center gap-3 text-gray-600">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
                  <span className="text-[15px] font-medium uppercase tracking-wide">Qiymət:</span>
                </div>
                <span className="font-bold text-lg">{tourData.price}</span>
              </div>

              <div className="flex justify-between items-center py-4 border-t border-gray-300">
                <div className="flex items-center gap-3 text-gray-600">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  <span className="text-[15px] font-medium uppercase tracking-wide">Daxildir:</span>
                </div>
                <span className="font-bold text-lg text-right w-1/2">{tourData.inclusionsShort}</span>
              </div>

              <Link
                href="#book"
                className="mt-6 flex items-center justify-center gap-3 bg-[#174d65] text-white py-4 rounded-full font-bold text-lg hover:bg-black transition-colors"
              >
                <span>Səyahət bron et</span>
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                </span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Footer Wrapper */}
      <Footer />
    </div>
  );
}
