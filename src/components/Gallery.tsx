"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Maximize2, X, Sparkles } from "lucide-react";

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

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
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
  }, [selectedImage]);

  const filteredItems =
    activeCategory === "All"
      ? workItems
      : workItems.filter((item) => item.category === activeCategory);

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
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#1e1b19] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div>
                <span className="text-[10px] font-semibold tracking-widest uppercase text-[#ffdad5] block">
                  {selectedImage.categoryTag} • {selectedImage.location}
                </span>
                <h4 className="font-serif text-lg font-medium text-white">
                  {selectedImage.title}
                </h4>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                aria-label="Close image preview"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 bg-black/40 flex items-center justify-between text-xs text-white/70">
              <div className="flex items-center gap-1.5 text-[#ffdad5]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Malabar Decorators Kasaragod</span>
              </div>
              <Link
                href="/contact"
                className="text-white hover:text-[#ffdad5] font-semibold tracking-wider uppercase transition-colors"
              >
                Inquire For This Theme →
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
