import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Pillars from "@/components/Pillars";
import Storytelling from "@/components/Storytelling";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function AboutStudioPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background selection:bg-primary selection:text-on-primary">
      <Navbar />

      <main className="flex-1">
        {/* Page Banner Header */}
        <section className="pt-12 pb-8 bg-surface-container-low border-b border-surface-variant text-center">
          <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
            <span className="font-label-caps text-label-caps text-secondary tracking-[0.16em] uppercase block mb-3">
              ABOUT MALABAR DECORATORS • EST. 2008
            </span>
            <h1 className="font-headline-xl text-headline-xl text-on-surface max-w-3xl mx-auto leading-tight mb-4">
              Crafting Environments Where Celebrations Unfold with Artistry & Soul.
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Transforming grand halls, coastal estates, and ancestral courtyards into architectural compositions of warmth, sculptural florals, and uncompromised ceremonial dignity.
            </p>
          </div>
        </section>

        <About />
        <Pillars />
        <Storytelling />
        <Team />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
