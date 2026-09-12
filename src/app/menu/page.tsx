import type { Metadata } from "next";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";
import Contact from "@/components/contact/Contact";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import Menu from "@/components/menu/Menu";

export const metadata: Metadata = {
  title: "Event Catering Menu & Kerala Sadya",
  description:
    "Explore our royal wedding feast menus, live cooking counters, traditional Malabar biriyanis, curries, and authentic 21+ item Kerala Sadya catering across North Kerala.",
  keywords: [
    "Event Catering",
    "Wedding Catering",
    "Kerala Sadya",
    "Event Menu",
    "Malabar Dum Biriyani",
    "Live Counter Catering",
    "Malabar Decorators",
  ],
  openGraph: {
    title: "Event Catering Menu & Kerala Sadya | Malabar Decorators",
    description:
      "Royal wedding feast menus, live counters, traditional Malabar Dum Biryani, and authentic 21+ item Kerala Sadya.",
  },
};

export default function MenuPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-on-background selection:bg-primary selection:text-on-primary">
      <Navbar />

      <main className="flex-1">
        <Menu />

        <div id="contact-section">
          <Contact />
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
