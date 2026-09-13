import Navbar from "@/components/header/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Pillars from "@/components/pillars/Pillars";
import Services from "@/components/services/ServicesHome";
import Storytelling from "@/components/about/Storytelling";
import Gallery from "@/components/gallery/Gallery";
import MomentsInMotion from "@/components/gallery/MomentsInMotion";
import Instagram from "@/components/social/Instagram";
import Reviews from "@/components/reviews/Reviews";
import Footer from "@/components/footer/Footer";
import HomeGalleryShowcase from "@/components/gallery/HomeGalleryShowcase";

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
        {/* <Gallery /> */}
        <MomentsInMotion limit={6} />
        <Instagram />
        <Reviews />
      </main>

      <Footer />
    </div>
  );
}
