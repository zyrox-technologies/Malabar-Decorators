import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Pillars from "@/components/Pillars";
import Services from "@/components/Services";
import Storytelling from "@/components/Storytelling";
import HomeGalleryShowcase from "@/components/HomeGalleryShowcase";
import MomentsInMotion from "@/components/MomentsInMotion";
import Instagram from "@/components/Instagram";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background selection:bg-primary selection:text-on-primary">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <About />
        <Pillars />
        <Services />
        <Storytelling />
        <HomeGalleryShowcase />
        <MomentsInMotion limit={6} />
        <Instagram />
        <Reviews />
      </main>

      <Footer />
    </div>
  );
}
