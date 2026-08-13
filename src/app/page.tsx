import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Menu from "@/components/Menu";
import Catalogue from "@/components/Catalogue";
import Gallery from "@/components/Gallery";
import SocialMedia from "@/components/SocialMedia";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F2] selection:bg-[#6F1014] selection:text-[#F2B93F]">
      {/* 01 — NAVIGATION BAR */}
      <Navbar />

      <main className="flex-1">
        {/* 02 — HERO SECTION + 03 — HERO MERGED FEATURE CARD */}
        <Hero />

        {/* 04 — ABOUT SECTION */}
        <About />

        {/* 05 — SERVICES SECTION */}
        <Services />

        {/* 06 — MENU / CATALOGUE SECTION */}
        <Menu />

        {/* 07 — CATALOGUE / PRODUCT SERVICES */}
        <Catalogue />

        {/* 08 — GALLERY SECTION */}
        <Gallery />

        {/* 09 — SOCIAL MEDIA INTEGRATION */}
        <SocialMedia />

        {/* 10 — CUSTOMER REVIEWS */}
        <Reviews />

        {/* 11 — CONTACT FORM SECTION */}
        <Contact />
      </main>

      {/* 12 — FOOTER */}
      <Footer />
    </div>
  );
}
