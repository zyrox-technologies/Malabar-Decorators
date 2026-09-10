"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Maximize2,
  X,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  MapPin,
} from "lucide-react";

interface WorkItem {
  id: number;
  title: string;
  category: string;
  categoryTag: string;
  location: string;
  image: string;
}

const categories = [
  "All",
  "Royal Stages",
  "Floral Mandaps",
  "Reception Halls",
  "Walkways & Arches",
];

const workItems: WorkItem[] = [
  {
    id: 1,
    title: "Grand Royal Wedding Stage",
    category: "Royal Stages",
    categoryTag: "Stage Decor",
    location: "Karandakkad, Kasaragod",
    image: "/Malabar-imges/malabar-decorators-karandakkad-kasaragod-flower-decorators-vajfq0rkn4.jpg",
  },
  {
    id: 2,
    title: "Opulent Floral Mandap & Canopy",
    category: "Floral Mandaps",
    categoryTag: "Floral Art",
    location: "Kanhangad",
    image: "/Malabar-imges/malabar-decorators-kasaragod-flower-decorators-1lepi60kot.jpg",
  },
  {
    id: 3,
    title: "Chandelier Illuminated Pavilion",
    category: "Floral Mandaps",
    categoryTag: "Mandap Decor",
    location: "Uppala, Kasaragod",
    image: "/Malabar-imges/malabar-decorators-kasaragod-flower-decorators-c0b95t3sru.jpg",
  },
  {
    id: 4,
    title: "Luminous Banquet Reception Setup",
    category: "Reception Halls",
    categoryTag: "Reception",
    location: "Karandakkad",
    image: "/Malabar-imges/malabar-decorators-karandakkad-kasaragod-flower-decorators-3gfqv2nr6m.jpg",
  },
  {
    id: 5,
    title: "Golden Throne Nikah Setting",
    category: "Royal Stages",
    categoryTag: "Stage Decor",
    location: "Kasaragod Central",
    image: "/Malabar-imges/malabar-decorators-kasaragod-flower-decorators-lr5hqiduzn.jpg",
  },
  {
    id: 6,
    title: "Ceremonial Floral Entrance Walkway",
    category: "Walkways & Arches",
    categoryTag: "Entrance Arch",
    location: "Kasaragod",
    image: "/Malabar-imges/malabar-decorators-kasaragod-flower-decorators-zctu7alvqc.jpg",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<WorkItem | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? workItems
      : workItems.filter((item) => item.category === activeCategory);

  const currentImageIndex = selectedImage
    ? filteredItems.findIndex((item) => item.id === selectedImage.id)
    : -1;

  const handleModalPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentImageIndex > 0) {
      setSelectedImage(filteredItems[currentImageIndex - 1]);
    } else {
      setSelectedImage(filteredItems[filteredItems.length - 1]);
    }
  };

  const handleModalNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentImageIndex < filteredItems.length - 1) {
      setSelectedImage(filteredItems[currentImageIndex + 1]);
    } else {
      setSelectedImage(filteredItems[0]);
    }
  };

  // Close modal on Escape key & support Arrow Left / Right navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "ArrowLeft") {
        handleModalPrev();
      } else if (e.key === "ArrowRight") {
        handleModalNext();
      }
    };
    if (selectedImage) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, currentImageIndex, filteredItems]);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#FAF8F2] relative overflow-hidden">
      {/* Subtle Ambient Background Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#790504]/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#AB3600]/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        
        {/* Modern Minimal Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 md:mb-14 pb-8 border-b border-[#241B18]/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.2em] uppercase text-[#790504] bg-[#790504]/5 border border-[#790504]/15 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#790504] animate-pulse" />
              OUR WORK
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#241B18] tracking-tight leading-[1.15]">
              Real Events. Real People. <br className="hidden sm:inline" />
              <span className="text-[#790504] italic">Real Happiness.</span>
            </h2>

            <p className="mt-3 text-sm md:text-base text-[#241B18]/65 max-w-xl font-light leading-relaxed">
              Explore our curated portfolio of royal wedding stages, bespoke floral architectures, and grand celebration atmospheres crafted across Malabar.
            </p>
          </div>

          {/* Minimal Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none self-start lg:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-[#241B18] text-white shadow-sm"
                    : "bg-white/70 text-[#241B18]/70 hover:text-[#241B18] hover:bg-white border border-[#241B18]/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Curated Modern Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden bg-white/50 border border-[#241B18]/10 cursor-pointer shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image Container with Consistent Aspect Ratio */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#241B18]/5">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  priority={index < 3}
                />

                {/* Subtle Luxury Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-black/40 backdrop-blur-md text-white border border-white/15">
                    {item.categoryTag}
                  </span>
                </div>

                {/* Hover Quick Expand Button */}
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/25 flex items-center justify-center text-white group-hover:bg-[#790504] group-hover:border-[#790504] transition-colors">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Bottom Content Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-5 z-10 flex items-end justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-medium text-white/70 tracking-wider uppercase block mb-1">
                      {item.location}
                    </span>
                    <h3 className="font-serif text-lg md:text-xl font-medium text-white leading-snug drop-shadow-sm">
                      {item.title}
                    </h3>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shrink-0 group-hover:bg-white group-hover:text-[#241B18] transition-colors duration-300">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Bottom Summary Strip */}
        <div className="mt-14 pt-8 border-t border-[#241B18]/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-8 text-[#241B18]">
            <div className="flex items-center gap-3">
              <span className="font-serif text-2xl md:text-3xl font-light text-[#790504]">500+</span>
              <span className="text-xs tracking-wider uppercase text-[#241B18]/70 font-medium leading-tight">
                Weddings<br />Crafted
              </span>
            </div>
            <div className="w-px h-8 bg-[#241B18]/15" />
            <div className="flex items-center gap-3">
              <span className="font-serif text-2xl md:text-3xl font-light text-[#790504]">21+</span>
              <span className="text-xs tracking-wider uppercase text-[#241B18]/70 font-medium leading-tight">
                Unique Stage<br />Themes
              </span>
            </div>
            <div className="w-px h-8 bg-[#241B18]/15 hidden sm:block" />
            <div className="hidden sm:flex items-center gap-3">
              <span className="font-serif text-2xl md:text-3xl font-light text-[#790504]">25+</span>
              <span className="text-xs tracking-wider uppercase text-[#241B18]/70 font-medium leading-tight">
                Years of<br />Heritage
              </span>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase text-[#790504] hover:text-[#550302] transition-colors group"
          >
            <span>Plan Your Custom Stage Setup</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[92vh] bg-gradient-to-b from-[#1c1816]/95 via-[#14100e]/98 to-[#14100e] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-[0_25px_70px_rgba(0,0,0,0.85),0_0_50px_rgba(121,5,4,0.18)] flex flex-col animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Amber Accent Line */}
            <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent z-30" />

            {/* Modal Header */}
            <div className="px-4 sm:px-7 py-3.5 sm:py-4 bg-[#231e1a]/85 backdrop-blur-md border-b border-white/[0.08] flex items-center justify-between gap-4 z-20 text-white">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-[10px] font-bold tracking-[0.2em] uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    {selectedImage.categoryTag}
                  </span>
                  <span className="text-white/30 text-xs hidden sm:inline">•</span>
                  <span className="inline-flex items-center gap-1 text-[11px] text-white/60 tracking-wider uppercase">
                    <MapPin className="w-3 h-3 text-[#ffb59c]" />
                    {selectedImage.location}
                  </span>
                </div>
                <h4 className="font-serif text-lg sm:text-2xl font-normal text-white tracking-tight truncate">
                  {selectedImage.title}
                </h4>
              </div>

              {/* Right Header Controls (Counter + Close) */}
              <div className="flex items-center gap-2.5 shrink-0">
                {currentImageIndex >= 0 && (
                  <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-mono tracking-wider">
                    {String(currentImageIndex + 1).padStart(2, "0")} / {String(filteredItems.length).padStart(2, "0")}
                  </span>
                )}
                <button
                  onClick={() => setSelectedImage(null)}
                  aria-label="Close image preview"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white/80 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Stage with Ambient Backdrop Lighting */}
            <div className="relative flex-1 flex items-center justify-center bg-[#0d0a09] min-h-[300px] max-h-[66vh] sm:max-h-[70vh] overflow-hidden">
              {/* Ambient Glow: dynamic blurred background */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
                <Image
                  src={selectedImage.image}
                  alt=""
                  fill
                  className="object-cover filter blur-3xl opacity-30 scale-125 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-[#0d0a09]/60 backdrop-blur-2xl" />
                <div className="absolute inset-0 bg-radial from-transparent via-[#0d0a09]/70 to-[#0d0a09]" />
              </div>

              {/* In-Modal Prev Carousel Button */}
              {filteredItems.length > 1 && (
                <button
                  type="button"
                  onClick={handleModalPrev}
                  aria-label="Previous Image"
                  className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer group"
                >
                  <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
                </button>
              )}

              {/* In-Modal Next Carousel Button */}
              {filteredItems.length > 1 && (
                <button
                  type="button"
                  onClick={handleModalNext}
                  aria-label="Next Image"
                  className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer group"
                >
                  <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                </button>
              )}

              {/* Main Image Element */}
              <div className="relative z-10 w-full h-[55vh] sm:h-[65vh] p-2 sm:p-4 flex items-center justify-center">
                <Image
                  key={selectedImage.image}
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-contain p-2 sm:p-4 drop-shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-4 sm:px-7 py-3 sm:py-3.5 bg-[#231e1a]/90 backdrop-blur-md border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs z-20">
              <div className="flex items-center gap-2 text-white/70">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[11px] font-medium tracking-wider uppercase">Malabar Decorators Kasaragod</span>
              </div>

              {/* Quick Actions */}
              <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                <a
                  href={`https://wa.me/919946692100?text=${encodeURIComponent(
                    `Hi Malabar Decorators, I'm viewing "${selectedImage.title}" (${selectedImage.categoryTag}) from your gallery and would like to inquire about this setup for our upcoming event.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-[#790504] to-[#ab3600] hover:from-[#8f0605] hover:to-[#bd3c00] text-white text-[11px] font-bold tracking-wider uppercase shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-amber-300" />
                  <span>Enquire Setup</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-amber-300" />
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white/90 hover:text-white font-medium text-xs tracking-wider transition-all duration-200 cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
