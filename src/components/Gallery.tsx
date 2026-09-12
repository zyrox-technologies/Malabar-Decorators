"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  MapPin,
} from "lucide-react";
import { useResponsivePageSize } from "@/hooks/useResponsivePageSize";

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
    title: "Royal Wedding Stage Architecture",
    category: "Royal Stages",
    categoryTag: "Stage Decor",
    location: "Karandakkad, Kasaragod",
    image: "/images/gallery/0f47fd29-e0f6-4aae-8ad8-2d8c8df2624f.png",
  },
  {
    id: 2,
    title: "Grand Nikah Floral Stage",
    category: "Royal Stages",
    categoryTag: "Nikah Stage",
    location: "Kasaragod Central",
    image: "/images/gallery/16a50fa3-f261-4bb7-ab80-e3f52d7faffc.png",
  },
  {
    id: 3,
    title: "Opulent Gold Backdrop Stage",
    category: "Royal Stages",
    categoryTag: "Stage Styling",
    location: "Valanchery",
    image: "/images/gallery/270bdc2b-4f05-47be-b369-fd3d4fc2274e.png",
  },
  {
    id: 4,
    title: "Majestic Couple Throne Setting",
    category: "Royal Stages",
    categoryTag: "Throne Seating",
    location: "Kanhangad",
    image: "/images/gallery/2baf72ba-15d3-4f93-8ebe-8b76a1bcbbfc.png",
  },
  {
    id: 5,
    title: "Royal Velvet & Floral Pavilion",
    category: "Royal Stages",
    categoryTag: "Pavilion Decor",
    location: "Malappuram",
    image: "/images/gallery/2f7be626-e525-4730-b1f8-9e502c79c9da.png",
  },
  {
    id: 6,
    title: "Contemporary Stage Illumination",
    category: "Royal Stages",
    categoryTag: "Stage Lights",
    location: "Uppala, Kasaragod",
    image: "/images/gallery/516eef83-df7a-4fc6-8e4b-ea1f4c7628cf.png",
  },
  {
    id: 7,
    title: "Intricate Floral Mandap Canopy",
    category: "Floral Mandaps",
    categoryTag: "Mandap Canopy",
    location: "Kanhangad",
    image: "/images/gallery/7326c7a8-b8e8-4d07-8eee-6a0dd643bc7e.png",
  },
  {
    id: 8,
    title: "Traditional Ceremonial Mandap",
    category: "Floral Mandaps",
    categoryTag: "Heritage Mandap",
    location: "Kozhikode",
    image: "/images/gallery/735b3aeb-edc6-42c5-a98b-37d2f0a1e765.png",
  },
  {
    id: 9,
    title: "Chandelier Suspended Floral Mandap",
    category: "Floral Mandaps",
    categoryTag: "Floral Art",
    location: "Karandakkad",
    image: "/images/gallery/777c9464-a49f-44dc-8d48-5795196b0011.png",
  },
  {
    id: 10,
    title: "Blossom Canopy Ceremony Arch",
    category: "Floral Mandaps",
    categoryTag: "Mandap Arch",
    location: "Kasaragod",
    image: "/images/gallery/7a3adcca-d113-4438-98c1-8c8f72812444.png",
  },
  {
    id: 11,
    title: "Temple Heritage Mandap Design",
    category: "Floral Mandaps",
    categoryTag: "Mandap Styling",
    location: "Valanchery",
    image: "/images/gallery/8dd82b12-b2fc-4aad-9a2b-dbe4d626f711.png",
  },
  {
    id: 12,
    title: "Bespoke Fresh Flower Dome",
    category: "Floral Mandaps",
    categoryTag: "Floral Dome",
    location: "Malappuram",
    image: "/images/gallery/923cdbe5-1b1d-4a1b-99bf-1369ba2be9fd.png",
  },
  {
    id: 13,
    title: "Grand Banquet Hall Illumination",
    category: "Reception Halls",
    categoryTag: "Banquet Hall",
    location: "Karandakkad, Kasaragod",
    image: "/images/gallery/a616594c-b7a5-4aef-b8ed-15ca99e5ca99.png",
  },
  {
    id: 14,
    title: "Evening Soirée Dining Experience",
    category: "Reception Halls",
    categoryTag: "Dining Hall",
    location: "Valanchery",
    image: "/images/gallery/a83b2d3e-b4fd-4727-8355-a36cf57f6033.png",
  },
  {
    id: 15,
    title: "Chandelier Draped Reception Hall",
    category: "Reception Halls",
    categoryTag: "Reception Art",
    location: "Kanhangad",
    image: "/images/gallery/ad024359-b131-44b4-9324-b1e780ca4569.png",
  },
  {
    id: 16,
    title: "Regal Reception Banqueting",
    category: "Reception Halls",
    categoryTag: "Banqueting",
    location: "Kozhikode",
    image: "/images/gallery/ba5a35c0-2bf1-4563-bb34-63040d32f85a.png",
  },
  {
    id: 17,
    title: "Opulent Evening Reception Decor",
    category: "Reception Halls",
    categoryTag: "Reception Hall",
    location: "Kasaragod Central",
    image: "/images/gallery/be074bc4-5529-461d-bece-b32c711a9b44.png",
  },
  {
    id: 18,
    title: "Ceremonial Floral Entrance Pathway",
    category: "Walkways & Arches",
    categoryTag: "Entrance Arch",
    location: "Kasaragod",
    image: "/images/gallery/d43d95d2-319c-4847-a78f-4aebc3325086.png",
  },
  {
    id: 19,
    title: "Luminous Tunnel & Archway",
    category: "Walkways & Arches",
    categoryTag: "Light Tunnel",
    location: "Valanchery",
    image: "/images/gallery/e8c359e5-a348-4e48-9b4f-8e8d7c032d46.png",
  },
  {
    id: 20,
    title: "Grand Flower-Lined Aisle",
    category: "Walkways & Arches",
    categoryTag: "Grand Walkway",
    location: "Karandakkad",
    image: "/images/gallery/ed304218-1597-4a6c-9fee-dec6632d3173.png",
  },
  {
    id: 21,
    title: "Romantic Fairy Light Entrance",
    category: "Walkways & Arches",
    categoryTag: "Fairy Lights",
    location: "Kanhangad",
    image: "/images/gallery/eec8a0ec-9fb6-48b8-8f85-ed4dad2282c2.png",
  },
  {
    id: 22,
    title: "Royal VIP Welcome Walkway",
    category: "Walkways & Arches",
    categoryTag: "VIP Entrance",
    location: "Malappuram",
    image: "/images/gallery/f41038df-027c-466c-b54f-e55151f3b5f8.png",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<WorkItem | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const galleryContainerRef = useRef<HTMLDivElement>(null);
  const categorySliderRef = useRef<HTMLDivElement>(null);

  const pageSize = useResponsivePageSize(); // 10 on mobile, 15 on tablet, 20 on laptop

  const filteredItems =
    activeCategory === "All"
      ? workItems
      : workItems.filter((item) => item.category === activeCategory);

  const totalPages = Math.max(1, Math.ceil(filteredItems.length / pageSize));
  const safeCurrentPage = Math.min(Math.max(1, currentPage), totalPages);

  const displayedItems = filteredItems.slice(
    (safeCurrentPage - 1) * pageSize,
    safeCurrentPage * pageSize
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    galleryContainerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollCategories = (direction: "left" | "right") => {
    if (categorySliderRef.current) {
      const scrollAmount = direction === "left" ? -220 : 220;
      categorySliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

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
    <section id="gallery" ref={galleryContainerRef} className="py-20 md:py-28 bg-[#FAF8F2] relative overflow-hidden">
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
              <span className="text-[#790504] font-bold">Real Happiness.</span>
            </h2>

            <p className="mt-3 text-sm md:text-base text-[#241B18]/65 max-w-xl font-light leading-relaxed">
              Explore our curated portfolio of royal wedding stages, bespoke floral architectures, and grand celebration atmospheres crafted across Malabar.
            </p>
          </div>

          {/* Category Sorting Slider */}
          <div className="relative max-w-xl w-full self-start lg:self-end px-7">
            {/* Left Scroll Arrow */}
            <button
              type="button"
              onClick={() => scrollCategories("left")}
              aria-label="Scroll categories left"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-white border border-[#241B18]/15 flex items-center justify-center text-[#241B18] hover:bg-[#FAF8F2] hover:border-[#790504] hover:text-[#790504] shadow-xs transition-all cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>

            {/* Slider track */}
            <div
              ref={categorySliderRef}
              className="flex items-center gap-2 overflow-x-auto scroll-smooth py-1 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setCurrentPage(1);
                  }}
                  className={`shrink-0 px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    activeCategory === cat
                      ? "bg-[#241B18] text-white shadow-sm"
                      : "bg-white/70 text-[#241B18]/70 hover:text-[#241B18] hover:bg-white border border-[#241B18]/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Right Scroll Arrow */}
            <button
              type="button"
              onClick={() => scrollCategories("right")}
              aria-label="Scroll categories right"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-white border border-[#241B18]/15 flex items-center justify-center text-[#241B18] hover:bg-[#FAF8F2] hover:border-[#790504] hover:text-[#790504] shadow-xs transition-all cursor-pointer"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Curated Modern Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedItems.map((item, index) => (
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

        {/* Pagination Controls for Image Gallery (Responsive: 10 mobile, 15 tablet, 20 laptop) */}
        {totalPages > 1 && (
          <div className="flex flex-col items-center justify-center pt-10 md:pt-12 gap-3.5">
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Previous Button */}
              <button
                type="button"
                onClick={() => handlePageChange(safeCurrentPage - 1)}
                disabled={safeCurrentPage <= 1}
                className="px-3.5 sm:px-4 py-2 rounded-full border border-[#241B18]/20 text-xs uppercase font-semibold text-[#241B18] hover:border-[#790504] hover:text-[#790504] disabled:opacity-40 disabled:cursor-not-allowed transition-all inline-flex items-center gap-1 cursor-pointer"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Previous</span>
              </button>

              {/* Page Number Buttons */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                      safeCurrentPage === pageNum
                        ? "bg-[#790504] text-white shadow-md scale-105"
                        : "bg-white/80 text-[#241B18]/80 hover:text-[#241B18] hover:bg-white border border-[#241B18]/15"
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={() => handlePageChange(safeCurrentPage + 1)}
                disabled={safeCurrentPage >= totalPages}
                className="px-3.5 sm:px-4 py-2 rounded-full border border-[#241B18]/20 text-xs uppercase font-semibold text-[#241B18] hover:border-[#790504] hover:text-[#790504] disabled:opacity-40 disabled:cursor-not-allowed transition-all inline-flex items-center gap-1 cursor-pointer"
                aria-label="Next page"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Status info */}
            <p className="text-xs text-[#241B18]/60 font-medium">
              Showing {(safeCurrentPage - 1) * pageSize + 1}–
              {Math.min(safeCurrentPage * pageSize, filteredItems.length)} of {filteredItems.length} images
            </p>
          </div>
        )}

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
            className="relative max-w-5xl w-full max-h-[92vh] bg-gradient-to-b from-[#1c1816]/95 via-[#14100e]/98 to-[#14100e] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-[0_25px_70px_rgba(0,0,0,0.95)] flex flex-col animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-4 sm:px-7 py-3.5 sm:py-4 bg-[#231e1a]/85 backdrop-blur-md border-b border-white/[0.08] flex items-center justify-between gap-4 z-20 text-white">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-bold tracking-[0.2em] uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
                    {selectedImage.categoryTag}
                  </span>
                  <span className="text-white/30 text-xs hidden sm:inline">•</span>
                  <span className="inline-flex items-center gap-1 text-[11px] text-white/60 tracking-wider uppercase">
                    <MapPin className="w-3 h-3 text-white/60" />
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
              <div className="flex items-center gap-2 text-white/60">
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
                  <MessageCircle className="w-3.5 h-3.5 text-white" />
                  <span>Enquire Setup</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white" />
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
