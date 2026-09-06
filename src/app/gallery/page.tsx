import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import MomentsInMotion from "@/components/MomentsInMotion";
import Instagram from "@/components/Instagram";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function CelebrationGalleryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background selection:bg-primary selection:text-on-primary">
      <Navbar />

      <main className="flex-1">
        {/* Page Banner Header */}
        <section className="pt-12 pb-8 bg-surface-container-low border-b border-surface-variant text-center">
          <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
            <span className="font-label-caps text-label-caps text-secondary tracking-[0.16em] uppercase block mb-3">
              CELEBRATION GALLERY • ARCHIVE OF CRAFT
            </span>
            <h1 className="font-headline-xl text-headline-xl text-on-surface max-w-3xl mx-auto leading-tight mb-4">
              Real Events. Real People. Real Happiness.
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
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
