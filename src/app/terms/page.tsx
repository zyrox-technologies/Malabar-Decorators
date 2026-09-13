import type { Metadata } from "next";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import Link from "next/link";
import { contactData } from "@/data/contact";
import { brandData } from "@/data/brand";

export const metadata: Metadata = {
  title: "Terms of Service | Malabar Decorators",
  description: "Terms of Service for Malabar Decorators - Event Decoration & Catering in Kasaragod, Kerala.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background selection:bg-primary selection:text-on-primary">
      <Navbar />

      <main className="flex-1">
        <section className="pt-16 pb-12 sm:pt-20 sm:pb-14 bg-[#FDFBF7] border-b border-[#790504]/10 text-center relative overflow-hidden">
          <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop relative z-10">
            <div className="inline-block mb-3">
              <span className="border border-[#790504]/30 text-[#790504] px-4 py-1 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase bg-white/60 shadow-xs">
                LEGAL & TERMS
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1E1B19] font-normal leading-tight max-w-3xl mx-auto">
              Terms of <span className="text-[#790504] font-bold">Service</span>
            </h1>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-gutter-mobile md:px-gutter-tablet leading-relaxed text-sm md:text-base text-[#59413D]/90 space-y-6">
            <p>
              Welcome to {brandData.name}. By accessing our website or booking our event decoration and catering services, you agree to the following terms and guidelines.
            </p>

            <h2 className="font-serif text-xl md:text-2xl text-[#1E1B19] font-semibold pt-4">
              Service Inquiries & Quotations
            </h2>
            <p>
              All event decoration, stage themes, and catering menus are customized based on client requirements, guest count, and venue specifications. Final pricing and service scopes are confirmed through direct discussion and formal quotations.
            </p>

            <h2 className="font-serif text-xl md:text-2xl text-[#1E1B19] font-semibold pt-4">
              Bookings & Event Logistics
            </h2>
            <p>
              Dates are reserved upon confirmation. Venue access times, power requirements, and catering setup logistics should be coordinated prior to the event date to ensure smooth execution.
            </p>

            <h2 className="font-serif text-xl md:text-2xl text-[#1E1B19] font-semibold pt-4">
              Contact & Inquiries
            </h2>
            <p>
              For booking confirmations or inquiries regarding these terms, please get in touch with our team:
            </p>
            <div className="bg-surface-container-low p-5 rounded-xl border border-surface-variant text-sm">
              <p className="font-semibold text-[#1E1B19]">{brandData.name}</p>
              <p>{contactData.address.join(", ")}</p>
              <p className="mt-2">Phone / WhatsApp: <a href={`tel:${contactData.phone.replace(/\s+/g, "")}`} className="text-secondary font-medium">{contactData.phoneDisplay}</a></p>
              <p>Email: <a href={`mailto:${contactData.email}`} className="text-secondary font-medium">{contactData.email}</a></p>
            </div>

            <div className="pt-6">
              <Link href="/" className="inline-flex items-center text-sm font-semibold text-[#790504] hover:underline">
                ← Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
