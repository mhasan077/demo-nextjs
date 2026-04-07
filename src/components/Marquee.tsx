"use client";

const services = [
  "Xüsusi Turlar",
  "Dünya Üzrə İstiqamətlər",
  "Lüks və Büdcəli Səyahət",
  "Viza Dəstəyi",
  "Otel Sifarişi",
  "Transfer və Avtomobil İcarəsi",
];

export default function Marquee() {
  return (
    <section className="bg-[#0b1110] py-6 overflow-hidden">
      <div className="flex whitespace-nowrap overflow-hidden">
        {/* We use shrink-0 to prevent flexbox from squishing, and w-full is unnecessary if it contains many items. */}
        <div className="animate-marquee flex items-center shrink-0">
          {[...services, ...services].map((service, index) => (
            <span
              key={index}
              className="font-sans font-medium text-white/80 text-lg md:text-xl mx-8 flex items-center gap-4"
            >
              <span className="text-white/40">✦</span>
              {service}
            </span>
          ))}
        </div>
        <div className="animate-marquee flex items-center shrink-0" aria-hidden="true">
          {[...services, ...services].map((service, index) => (
            <span
              key={`duplicate-${index}`}
              className="font-sans font-medium text-white/80 text-lg md:text-xl mx-8 flex items-center gap-4"
            >
              <span className="text-white/40">✦</span>
              {service}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
