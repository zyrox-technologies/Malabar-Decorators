"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { galleryWorkItems, galleryPhotoCategories, WorkItem } from "@/data/gallery";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { useResponsivePageSize } from "@/hooks/useResponsivePageSize";
import Pagination from "@/components/common/Pagination";
import GalleryModal from "@/components/gallery/GalleryModal";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<WorkItem | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const galleryContainerRef = useRef<HTMLDivElement>(null);
  const categorySliderRef = useRef<HTMLDivElement>(null);

  const pageSize = useResponsivePageSize(); // 10 mobile, 15 tablet, 18 laptop

  // Temporarily commented category sorting, showing all items directly:
  // const filteredItems =
  //   activeCategory === "All"
  //     ? galleryWorkItems
  //     : galleryWorkItems.filter((item) => item.category === activeCategory);
  const filteredItems = galleryWorkItems;

  const totalPages = Math.max(1, Math.ceil(filteredItems.length / pageSize));
  const safeCurrentPage = Math.min(Math.max(1, currentPage), totalPages);

  // Responsive device-based pagination:
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

  return (
    <section ref={galleryContainerRef} className="py-12 md:py-20 bg-[#FAF8F2] text-[#241B18]" id="photo-gallery">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center justify-center gap-3 mb-2.5">
            <span className="w-8 md:w-12 h-[1px] bg-[#790504]/50" />
            <span className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#790504]">
              PORTFOLIO ARCHITECTURE
            </span>
            <span className="w-8 md:w-12 h-[1px] bg-[#790504]/50" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#241B18] leading-[1.15]">
            Celebration <span className="font-medium italic">Scenography</span>
          </h2>

          <p className="text-sm md:text-base text-[#241B18]/70 mt-3 max-w-2xl mx-auto leading-relaxed font-light">
            Explore authentic wedding stages, royal Nikah backdrops, and illuminated banquet halls crafted with artisanal detail.
          </p>
        </div>

        {/* Scrollable Category Filter - Temporarily Commented Out */}
        {/*
        <div className="relative max-w-4xl mx-auto mb-10 sm:mb-14">
          <div className="relative flex items-center">
            <button
              type="button"
              onClick={() => scrollCategories("left")}
              aria-label="Scroll categories left"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-white border border-[#241B18]/15 flex items-center justify-center text-[#241B18] hover:bg-[#FAF8F2] hover:border-[#790504] hover:text-[#790504] shadow-xs transition-all cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>

            <div
              ref={categorySliderRef}
              className="flex items-center gap-2 overflow-x-auto scroll-smooth py-1 px-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden w-full"
            >
              {galleryPhotoCategories.map((cat) => (
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
        */}

        {/* 3-Column Image Grid - Only Images (Details Temporarily Commented Out) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#241B18]/5 border border-[#241B18]/10 cursor-pointer shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Tag and details temporarily commented out:
              <div className="absolute inset-0 bg-gradient-to-t from-[#14100E]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-semibold tracking-wider text-white uppercase">
                {item.categoryTag}
              </span>
              <div className="p-4 sm:p-5 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-medium text-[#241B18] group-hover:text-[#790504] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-2 text-xs text-[#241B18]/60">
                    <MapPin className="w-3.5 h-3.5 text-[#790504]" />
                    <span>{item.location}</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-[#241B18]/10 flex items-center justify-between text-xs">
                  <span className="text-[#241B18]/50 uppercase tracking-widest text-[10px] font-medium">
                    Malabar Decorators
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-[#790504] group-hover:translate-x-0.5 transition-transform">
                    <span>View Setup</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
              */}
            </div>
          ))}
        </div>

        {/* Reusable Responsive Pagination */}
        {totalPages > 1 && (
          <Pagination
            currentPage={safeCurrentPage}
            totalPages={totalPages}
            totalItems={filteredItems.length}
            pageSize={pageSize}
            onPageChange={handlePageChange}
            itemLabel="decor setups"
          />
        )}

        {/* Bottom Highlights */}
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

      {/* Lightbox Modal Sub-Component */}
      <GalleryModal
        selectedImage={selectedImage}
        onClose={() => setSelectedImage(null)}
        filteredItems={filteredItems}
        onSelectImage={(item) => setSelectedImage(item)}
      />
    </section>
  );
}
