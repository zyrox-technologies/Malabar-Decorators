import type { Metadata } from "next";
import Navbar from "@/components/header/Navbar";
import ServicesDirectory from "@/components/services/ServicesDirectory";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export const metadata: Metadata = {
  title: "Event & Catering Services | Stage Decor, Sadya & SFX Entry",
  description:
    "Explore Malabar Decorators services: Royal Nikah stage decor, authentic Malabar Dum Biryani catering, traditional Kerala Sadhya feasts, and cold fire pyrotechnic entries across North Kerala.",
  openGraph: {
    title: "Event & Catering Services | Malabar Decorators",
    description:
      "Complete event & catering solutions in Kerala. Stage decoration, banquet catering, SFX, and traditional ceremonies.",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background selection:bg-primary selection:text-on-primary">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28">
        <ServicesDirectory />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
