import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ExperienceSection />
      <ContactSection />
      <CTASection />
      <Marquee />
      <Footer />
    </main>
  );
}
