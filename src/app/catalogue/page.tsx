import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/header/Navbar";
import CatalogueGrid from "@/components/catalogue/CatalogueGrid";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Event Decor & Package Catalogue | Transparent Rates & Price List",
  description:
    "Transparent pricing and package catalog for wedding stage decor, mandap setups, outdoor lawn receptions, photo booths, and SFX lighting across Kerala.",
  openGraph: {
    title: "Event Decor & Package Catalogue | Malabar Decorators",
    description:
      "Explore full catalog with transparent estimates. Mandaps, reception backdrops, photo booths, and lighting packages.",
  },
};

export default function DecorCataloguePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F2] selection:bg-[#6F1014] selection:text-[#F2B93F]">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28">
        {/* HERO BANNER */}
        <section className="pt-16 pb-12 sm:pt-20 sm:pb-14 bg-[#FDFBF7] border-b border-[#790504]/10 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-medium text-[#59413D]/70 uppercase tracking-widest mb-5">
              <Link href="/" className="hover:text-[#790504] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#790504]/50" />
              <span className="text-[#1E1B19] font-semibold">Event Decor Catalogue</span>
            </div>

            <div className="max-w-3xl space-y-4">
              {/* Pill Label */}
              <div className="inline-block">
                <span className="border border-[#790504]/30 text-[#790504] px-4 py-1 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase bg-white/60 shadow-xs">
                  TRANSPARENT RATES & BESPOKE SETUPS
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-[#1E1B19] font-normal leading-[1.14] tracking-tight">
                Event Decor & <span className="text-[#790504] font-bold">Package Catalogue</span>
              </h1>

              {/* Subtitle */}
              <p className="mt-3 text-sm md:text-base text-[#59413D]/80 leading-relaxed font-normal">
                From budget-friendly home function decorations to opulent royal Nikah stages, outdoor lawn receptions, and custom photo booths — explore our full catalog with transparent estimates.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#full-table"
                  className="px-6 py-3 rounded-full bg-[#790504] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#8B1E23] transition-all"
                >
                  View Complete Pricing Table
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-full border border-[#790504]/30 bg-white text-[#790504] font-semibold text-xs uppercase tracking-wider hover:bg-[#FAF2EE] transition-all shadow-xs"
                >
                  Request Custom Quotation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* INTERACTIVE CATALOGUE GRID */}
        <CatalogueGrid />

        {/* INCLUDED CONTACT FORM */}
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
