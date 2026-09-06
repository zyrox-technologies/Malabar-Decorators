import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Catering from "@/components/Catering";
import MomentsInMotion from "@/components/MomentsInMotion";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F2] selection:bg-[#A2272E] selection:text-[#FAF8F2]">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Catering />
        <MomentsInMotion />
        <Gallery />
        <Process />
        <Reviews />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
