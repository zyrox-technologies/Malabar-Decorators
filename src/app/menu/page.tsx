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
        <section className="pt-16 pb-12 bg-surface-container-low border-b border-outline-variant/30 text-center relative overflow-hidden">
          {/* Subtle Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[250px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop relative z-10">
            <div className="inline-flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-secondary/60"></span>
              <span className="font-label-caps text-[11px] text-secondary tracking-[0.25em] uppercase font-semibold">
                MALABAR CATERING & BANQUETS • CURATED FEASTS
              </span>
              <span className="w-8 h-[1px] bg-secondary/60"></span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-on-surface max-w-4xl mx-auto leading-tight mb-4 font-normal">
              Handcrafted Flavours For Every Celebration.
            </h1>
            
            <p className="font-body-sm text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed mb-6">
              From copper-cauldron Dum Biriyanis and live tawa stations to authentic 21+ item Kerala Sadyas, explore our handcrafted culinary offerings.
            </p>

            {/* Quick Feature Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-on-surface-variant font-medium">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-outline-variant/40 shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                Live Cooking Counters
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-outline-variant/40 shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                Authentic Kerala Sadya
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-outline-variant/40 shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                100% Customized Menus
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
