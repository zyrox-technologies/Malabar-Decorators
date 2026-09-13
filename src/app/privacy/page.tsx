import type { Metadata } from "next";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import Link from "next/link";
import { contactData } from "@/data/contact";
import { brandData } from "@/data/brand";

export const metadata: Metadata = {
  title: "Privacy Policy | Malabar Decorators",
  description: "Privacy Policy for Malabar Decorators - Event Decoration & Catering in Kasaragod, Kerala.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background selection:bg-primary selection:text-on-primary">
      <Navbar />

      <main className="flex-1">
        <section className="pt-16 pb-12 sm:pt-20 sm:pb-14 bg-[#FDFBF7] border-b border-[#790504]/10 text-center relative overflow-hidden">
          <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop relative z-10">
            <div className="inline-block mb-3">
              <span className="border border-[#790504]/30 text-[#790504] px-4 py-1 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase bg-white/60 shadow-xs">
                LEGAL & PRIVACY
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1E1B19] font-normal leading-tight max-w-3xl mx-auto">
              Privacy <span className="text-[#790504] font-bold">Policy</span>
            </h1>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-gutter-mobile md:px-gutter-tablet leading-relaxed text-sm md:text-base text-[#59413D]/90 space-y-6">
            <p>
              At {brandData.name}, we value the privacy of our clients and visitors. This Privacy Policy outlines the types of information we collect and how it is used when you contact us or browse our website.
            </p>

            <h2 className="font-serif text-xl md:text-2xl text-[#1E1B19] font-semibold pt-4">
              Information We Collect
            </h2>
            <p>
              When you submit an enquiry form or message us via WhatsApp, we may collect your name, phone number, event date, venue location, and event requirements to prepare customized decoration or catering proposals.
            </p>

            <h2 className="font-serif text-xl md:text-2xl text-[#1E1B19] font-semibold pt-4">
              How We Use Your Information
            </h2>
            <p>
              Your contact information is used strictly to respond to your event enquiries, provide accurate quotes, coordinate event logistics, and follow up regarding your bookings. We do not sell or share your personal data with third-party marketers.
            </p>

            <h2 className="font-serif text-xl md:text-2xl text-[#1E1B19] font-semibold pt-4">
              Contact Us
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy or your information, please contact us at:
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
