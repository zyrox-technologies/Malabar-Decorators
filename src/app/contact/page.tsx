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

        {/* Quick Contact Cards */}
        <section className="py-12 bg-surface">
          <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Call Us */}
              <a
                href={`tel:${cleanPhone}`}
                className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 hover:border-secondary/50 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-4 group"
              >
                <div className="p-3.5 rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-on-surface mb-0.5">Call Us</h3>
                  <p className="text-xs text-on-surface-variant mb-2">Direct consultation line</p>
                  <span className="text-xs font-semibold text-secondary group-hover:underline">
                    {contactData.phoneDisplay}
                  </span>
                </div>
              </a>

              {/* Card 2: Email Us */}
              <a
                href={`mailto:${contactData.email}`}
                className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 hover:border-secondary/50 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-4 group"
              >
                <div className="p-3.5 rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-on-surface mb-0.5">Email Us</h3>
                  <p className="text-xs text-on-surface-variant mb-2">Send event brief & dates</p>
                  <span className="text-xs font-semibold text-secondary group-hover:underline">
                    {contactData.email}
                  </span>
                </div>
              </a>

              {/* Card 3: Visit Studio */}
              <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-xs flex items-start gap-4">
                <div className="p-3.5 rounded-xl bg-secondary/10 text-secondary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-on-surface mb-0.5">Design Studio</h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {contactData.address[0]}<br />
                    {contactData.address[1]}
                  </p>
                </div>
              </div>

            </div>
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
