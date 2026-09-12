import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";
import Menu from "@/components/Menu";

export const metadata: Metadata = {
  title: "Event Catering Menu & Kerala Sadya | Malabar Decorators",
  description:
    "Explore our royal wedding feast menus, live cooking counters, traditional Malabar biriyanis, curries, and authentic 21+ item Kerala Sadya catering in Kasaragod and across Kerala.",
  keywords: [
    "Event Catering",
    "Wedding Catering",
    "Kerala Sadya",
    "Event Menu",
    "Malabar Dum Biriyani",
    "Live Counter Catering",
    "Malabar Decorators Kasaragod",
  ],
};

export default function MenuPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-on-background selection:bg-primary selection:text-on-primary">
      <Navbar />

      <main className="flex-1">
        {/* Exact Menu UI matching reference */}
        <Menu />

        {/* Existing Website Contact Section */}
        <div id="contact-section">
          <Contact />
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
