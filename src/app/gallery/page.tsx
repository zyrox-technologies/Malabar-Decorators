import type { Metadata } from "next";
import Navbar from "@/components/header/Navbar";
import Gallery from "@/components/gallery/Gallery";
import MomentsInMotion from "@/components/gallery/MomentsInMotion";
import Instagram from "@/components/social/Instagram";
import Footer from "@/components/footer/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export const metadata: Metadata = {
  title: "Celebration Gallery | Royal Weddings, Mandaps & Cinematic Moments",
  description:
    "Explore our portfolio of royal wedding stage setups, authentic Malabar feasts, custom floral arches, and luminous evening celebrations across Kerala.",
  openGraph: {
    title: "Celebration Gallery | Malabar Decorators",
    description:
      "Real Events. Real People. Real Happiness. Photos and moments in motion from our celebrations.",
  },
};

export default function CelebrationGalleryPage() {
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
                CELEBRATION GALLERY
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-[#1E1B19] font-normal leading-[1.14] tracking-tight max-w-4xl mx-auto mb-4">
              Real Events. Real People. <br className="hidden sm:inline" />
              <span className="text-[#790504] font-bold">Real Happiness</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-3 text-sm md:text-base text-[#59413D]/80 max-w-2xl mx-auto font-normal leading-relaxed">
              Explore our portfolio of royal wedding stage setups, authentic Malabar feasts, custom floral arches, and luminous evening celebrations.
            </p>
          </div>
        </section>

        <Gallery />
        <MomentsInMotion />
        <Instagram />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
