import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { contactData } from "@/data/contact";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactInquirePage() {
  const cleanPhone = contactData.phone.replace(/\s+/g, "");

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background selection:bg-primary selection:text-on-primary">
      <Navbar />

      <main className="flex-1">
        {/* Page Banner Header */}
        <section className="pt-16 pb-12 sm:pt-20 sm:pb-14 bg-[#FDFBF7] border-b border-[#790504]/10 text-center relative overflow-hidden">
          <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop relative z-10">
            {/* Pill Label */}
            <div className="inline-block mb-3">
              <span className="border border-[#790504]/30 text-[#790504] px-4 py-1 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase bg-white/60 shadow-xs">
                PRIVATE CONSULTATIONS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-[#1E1B19] font-normal leading-[1.14] tracking-tight max-w-3xl mx-auto mb-4">
              Let&apos;s Plan Your <br className="hidden sm:inline" />
              <span className="text-[#790504] font-bold">Celebration Together</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-3 text-sm md:text-base text-[#59413D]/80 max-w-2xl mx-auto font-normal leading-relaxed">
              Have an upcoming wedding, reception, or bespoke family function? Connect directly with our event architects and culinary team today.
            </p>
          </div>
        </section>

        {/* Master Contact & Booking Pavilion */}
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
