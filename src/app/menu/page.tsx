import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";
import MenuClient from "@/components/MenuClient";
import { Sparkles, Utensils, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Event Catering Menu & Kerala Sadya | Malabar Decorators",
  description:
    "Explore our royal wedding feast menus, live cooking counters, traditional Malabar biriyanis, curries, and authentic 21+ item Kerala Sadya catering in Kasaragod and across Kerala.",
  keywords: [
    "Event Catering",
    "Wedding Catering",
    "Kerala Sadya",
    "Event Menu",
    "Malabar Dum Biriyani",
    "Live Counter Catering",
    "Malabar Decorators Kasaragod",
  ],
};

export default function MenuPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background selection:bg-primary selection:text-on-primary">
      <Navbar />

      <main className="flex-1">
        {/* Premium Menu Hero Banner */}
        <section className="pt-16 sm:pt-20 pb-12 sm:pb-16 bg-[#FAF6F0] border-b border-[#EAE2D8] text-center relative overflow-hidden">
          {/* Subtle Ambient Glows */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#790504]/[0.03] rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#AB3600]/[0.03] rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop relative z-10">
            {/* Overline Capsule Badge */}
            <div className="inline-flex items-center justify-center gap-2.5 px-4 py-1.5 rounded-full bg-[#790504]/5 border border-[#790504]/15 mb-5 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#790504] animate-pulse" />
              <span className="text-[11px] font-bold text-[#790504] tracking-[0.25em] uppercase">
                MALABAR ROYAL BANQUETING & CATERING
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1E1B19] max-w-4xl mx-auto leading-[1.15] mb-4 font-normal tracking-tight">
              Culinary Artistry for Life&apos;s <br className="hidden sm:inline" />
              <span className="text-[#790504] font-bold">Grandest Celebrations.</span>
            </h1>
            
            <p className="text-sm md:text-base text-[#59413D] max-w-2xl mx-auto leading-relaxed mb-8 font-light">
              From slow-cooked Dum Biriyanis in copper cauldrons to live tawa flatbreads and the ceremonial 21-item Kerala Sadya — explore our curated event feast offerings.
            </p>

            {/* Quick Feature Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs text-[#59413D] font-medium">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#EAE2D8] shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#790504]" />
                Live Cooking Stations
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#EAE2D8] shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#790504]" />
                Authentic 21-Item Sadya
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#EAE2D8] shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#790504]" />
                100% Customized Feasts
              </span>
            </div>
          </div>
        </section>

        {/* Dynamic Menu Filtering & Search Component */}
        <MenuClient />

        {/* Existing Website Contact Section */}
        <div id="contact-section">
          <Contact />
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
