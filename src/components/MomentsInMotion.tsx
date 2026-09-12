"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { galleryData, GalleryVideo } from "@/data/gallery";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Clock,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { useResponsivePageSize } from "@/hooks/useResponsivePageSize";

interface MomentsInMotionProps {
  limit?: number;
}

export default function MomentsInMotion({ limit }: MomentsInMotionProps = {}) {
  const [activeCategory, setActiveCategory] = useState("All Videos");
  const [selectedVideo, setSelectedVideo] = useState<GalleryVideo | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const gridContainerRef = useRef<HTMLDivElement>(null);
  const categorySliderRef = useRef<HTMLDivElement>(null);

  const responsivePageSize = useResponsivePageSize({ laptop: 19 });
  const pageSize = limit ? limit : responsivePageSize;

  // Filter videos based on active category
  const filteredVideos =
    activeCategory === "All Videos"
      ? galleryData.videos
      : galleryData.videos.filter((v) => v.category === activeCategory);

  const totalPages = Math.max(1, Math.ceil(filteredVideos.length / pageSize));
  const safeCurrentPage = Math.min(Math.max(1, currentPage), totalPages);

  // Sliced video list:
  // If limit is set (e.g. homepage showing 6 videos), take first 6
  // If limit is not set (full gallery), use responsive pagination (10 mobile, 15 tablet, 20 laptop)
  const displayedVideos = limit
    ? filteredVideos.slice(0, limit)
    : filteredVideos.slice((safeCurrentPage - 1) * pageSize, safeCurrentPage * pageSize);

  const topRowVideos = displayedVideos.slice(0, 3);
  const remainingVideos = displayedVideos.slice(3);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    gridContainerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollCategories = (direction: "left" | "right") => {
    if (categorySliderRef.current) {
      const scrollAmount = direction === "left" ? -240 : 240;
      categorySliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Active playlist for modal navigation
  const activeVideoList =
    filteredVideos.length > 0 ? filteredVideos : galleryData.videos;
  const currentModalIndex = selectedVideo
    ? activeVideoList.findIndex((v) => v.id === selectedVideo.id)
    : -1;

  const handleModalPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentModalIndex > 0) {
      setSelectedVideo(activeVideoList[currentModalIndex - 1]);
    } else {
      setSelectedVideo(activeVideoList[activeVideoList.length - 1]);
    }
  };

  const handleModalNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentModalIndex < activeVideoList.length - 1) {
      setSelectedVideo(activeVideoList[currentModalIndex + 1]);
    } else {
      setSelectedVideo(activeVideoList[0]);
    }
  };

  // Keyboard navigation for modal (Escape, ArrowLeft, ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedVideo) return;
      if (e.key === "Escape") {
        setSelectedVideo(null);
      } else if (e.key === "ArrowLeft") {
        handleModalPrev();
      } else if (e.key === "ArrowRight") {
        handleModalNext();
      }
    };
    if (selectedVideo) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedVideo, currentModalIndex, activeVideoList]);

  const handlePrev = () => {
    const catIndex = galleryData.categories.indexOf(activeCategory);
    const prevIndex =
      (catIndex - 1 + galleryData.categories.length) %
      galleryData.categories.length;
    setActiveCategory(galleryData.categories[prevIndex]);
    setCurrentPage(1);
  };

  const handleNext = () => {
    const catIndex = galleryData.categories.indexOf(activeCategory);
    const nextIndex = (catIndex + 1) % galleryData.categories.length;
    setActiveCategory(galleryData.categories[nextIndex]);
    setCurrentPage(1);
  };

  return (
    <section
      className="py-16 md:py-24 bg-surface relative overflow-hidden select-none"
      id="gallery"
    >
      {/* Background Watermark Typography */}
      <div className="absolute right-0 top-6 select-none pointer-events-none opacity-[0.035] z-0 hidden lg:block overflow-hidden">
        <span className="font-serif text-[13rem] font-bold tracking-wider text-on-surface leading-none block transform translate-x-12 -translate-y-8">
          {galleryData.rightWatermark}
        </span>
      </div>

      <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop relative z-10">
        
        {/* Top Header Section with Left & Right Editorial Accents */}
        <div className="relative mb-10 md:mb-12">
          
          {/* Left Side Subtle Label */}
          <div className="hidden xl:flex flex-col items-start absolute left-0 top-2 text-[10px] font-bold tracking-[0.25em] uppercase text-on-surface-variant/60 leading-tight">
            <span className="w-6 h-[1.5px] bg-secondary/60 mb-2"></span>
            <span>EVENTS</span>
            <span>THAT CREATE</span>
            <span>STORIES</span>
          </div>

          {/* Right Side Editorial Steps */}
          <div className="hidden xl:flex flex-col items-end absolute right-0 top-2 text-[10px] font-bold tracking-[0.25em] uppercase text-on-surface-variant/60 leading-tight text-right">
            <span>PLAN</span>
            <span>DESIGN</span>
            <span>EXECUTE</span>
            <span>CELEBRATE</span>
            <span className="w-8 h-[1.5px] bg-secondary/60 mt-2"></span>
          </div>

          {/* Center Main Header */}
          <Reveal>
            <div className="max-w-3xl mx-auto text-center px-4">
              <div className="inline-flex items-center justify-center gap-3 mb-3">
                <span className="w-8 h-[1px] bg-secondary/50"></span>
                <span className="font-label-caps text-[11px] text-secondary uppercase tracking-[0.25em] font-semibold">
                  {galleryData.overline}
                </span>
                <span className="w-8 h-[1px] bg-secondary/50"></span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-on-surface font-normal leading-[1.15] tracking-tight">
                Moments That Speak Louder Than{" "}
                <span className="font-serif text-secondary font-bold">
                  {galleryData.headlineHighlight}
                </span>
              </h2>

              <p className="font-body-sm text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto mt-3.5 leading-relaxed">
                {galleryData.subheadline}
              </p>
            </div>
          </Reveal>

          {/* Category Filter Slider */}
          <div className="relative max-w-3xl mx-auto mt-8 md:mt-10 px-9 sm:px-10">
            {/* Left Scroll Arrow */}
            <button
              type="button"
              onClick={() => scrollCategories("left")}
              aria-label="Scroll categories left"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-surface-container border border-outline-variant/60 flex items-center justify-center text-on-surface hover:bg-surface hover:border-secondary hover:text-secondary shadow-xs transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Slider track */}
            <div
              ref={categorySliderRef}
              className="flex items-center gap-2 sm:gap-3 overflow-x-auto scroll-smooth py-1 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {galleryData.categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setCurrentPage(1);
                    }}
                    className={`shrink-0 px-4 sm:px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-secondary text-white shadow-md scale-105"
                        : "bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container border border-outline-variant/30"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Right Scroll Arrow */}
            <button
              type="button"
              onClick={() => scrollCategories("right")}
              aria-label="Scroll categories right"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-surface-container border border-outline-variant/60 flex items-center justify-center text-on-surface hover:bg-surface hover:border-secondary hover:text-secondary shadow-xs transition-all cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Video Cards Grid */}
        <div ref={gridContainerRef} className="space-y-4 md:space-y-6">
          
          {/* Top Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {topRowVideos.map((video, i) => (
              <Reveal key={video.id} delay={i * 0.1} from="up">
                <VideoCard
                  video={video}
                  onPlay={() => setSelectedVideo(video)}
                />
              </Reveal>
            ))}
          </div>

          {/* Grid of Remaining Videos */}
          {remainingVideos.length > 0 && (
            <div
              className={`grid gap-4 md:gap-6 ${
                limit
                  ? "grid-cols-1 md:grid-cols-3"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              }`}
            >
              {remainingVideos.map((video, i) => (
                <Reveal key={video.id} delay={Math.min(i * 0.04, 0.25)} from="up">
                  <VideoCard
                    video={video}
                    onPlay={() => setSelectedVideo(video)}
                  />
                </Reveal>
              ))}
            </div>
          )}

          {/* View Full Gallery Button below videos when limited on homepage */}
          {limit && filteredVideos.length > limit && (
            <Reveal delay={0.2} from="up">
              <div className="flex flex-col items-center justify-center pt-8 md:pt-10">
                <Link
                  href="/gallery"
                  className="group inline-flex items-center gap-3 px-8 py-3.5 sm:py-4 rounded-full bg-secondary hover:bg-secondary/90 text-white font-semibold text-xs sm:text-sm tracking-widest uppercase shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                >
                  <span>View All Videos in Gallery</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <p className="text-xs text-on-surface-variant/70 mt-2.5 font-medium">
                  Showing {displayedVideos.length} of {filteredVideos.length} videos • Click to explore full celebration collection
                </p>
              </div>
            </Reveal>
          )}

          {/* Pagination Controls for Full Gallery (Responsive: 10 mobile, 15 tablet, 20 laptop) */}
          {!limit && totalPages > 1 && (
            <div className="flex flex-col items-center justify-center pt-10 md:pt-12 gap-3.5">
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Previous Button */}
                <button
                  type="button"
                  onClick={() => handlePageChange(safeCurrentPage - 1)}
                  disabled={safeCurrentPage <= 1}
                  className="px-3.5 sm:px-4 py-2 rounded-full border border-outline-variant/50 text-xs uppercase font-semibold text-on-surface hover:border-secondary hover:text-secondary disabled:opacity-40 disabled:cursor-not-allowed transition-all inline-flex items-center gap-1 cursor-pointer"
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
                          ? "bg-secondary text-white shadow-md scale-105"
                          : "bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container border border-outline-variant/30"
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
                  className="px-3.5 sm:px-4 py-2 rounded-full border border-outline-variant/50 text-xs uppercase font-semibold text-on-surface hover:border-secondary hover:text-secondary disabled:opacity-40 disabled:cursor-not-allowed transition-all inline-flex items-center gap-1 cursor-pointer"
                  aria-label="Next page"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Status info */}
              <p className="text-xs text-on-surface-variant/70 font-medium">
                Showing {(safeCurrentPage - 1) * pageSize + 1}–
                {Math.min(safeCurrentPage * pageSize, filteredVideos.length)} of {filteredVideos.length} celebration videos
              </p>
            </div>
          )}

          {/* If filtered has no videos */}
          {filteredVideos.length === 0 && (
            <div className="text-center py-16 bg-surface-container-low rounded-2xl border border-outline-variant/20">
              <p className="text-on-surface-variant text-sm">
                No videos found in this category.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All Videos");
                  setCurrentPage(1);
                }}
                className="mt-3 text-secondary text-xs uppercase tracking-widest font-semibold underline underline-offset-4 cursor-pointer"
              >
                View All Videos
              </button>
            </div>
          )}
        </div>

        {/* Bottom Banner Bar */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-outline-variant/40">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">
            
            {/* Left Tagline & Description */}
            <div className="w-full lg:max-w-md text-left">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-6 h-[1.5px] bg-secondary"></span>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-secondary">
                  {galleryData.bottomBanner.tagline}
                </span>
              </div>
              <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed pl-8">
                {galleryData.bottomBanner.description}
              </p>
            </div>

            {/* Center Vision Callout */}
            <div className="flex items-center gap-3.5 bg-surface-container-low px-5 py-3 rounded-full border border-outline-variant/30 shadow-2xs">
              <div className="w-9 h-9 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                {/* Video Camera Icon */}
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="23 7 16 12 23 17 23 7" />
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
              </div>
              <div className="text-left">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-on-surface">
                  {galleryData.bottomBanner.ctaPrompt}
                </span>
                <span className="block text-[11px] text-on-surface-variant">
                  {galleryData.bottomBanner.ctaSubtext}
                </span>
              </div>
            </div>

            {/* Right CTA Button & Nav Controls */}
            <div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
              <Link
                href={galleryData.bottomBanner.buttonHref}
                className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-white text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
              >
                <span>{galleryData.bottomBanner.buttonText}</span>
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>

              {/* Prev / Next Category Carousel Buttons */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous Category"
                  className="w-10 h-10 rounded-full border border-outline-variant/50 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:border-secondary hover:bg-surface-container transition-all"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next Category"
                  className="w-10 h-10 rounded-full border border-outline-variant/50 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:border-secondary hover:bg-surface-container transition-all"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Video Modal / Cinema Lightbox Dialog */}
      {selectedVideo && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-2 sm:p-4 md:p-6 transition-all duration-300 animate-in fade-in"
          onClick={() => setSelectedVideo(null)}
        >
          {/* Modal Container */}
          <div
            className="relative w-full max-w-5xl max-h-[92vh] bg-gradient-to-b from-stone-900/95 via-stone-950/98 to-stone-950 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.95)] border border-white/15 flex flex-col transition-all duration-300 animate-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-4 sm:px-7 py-3.5 sm:py-4 bg-stone-900/80 backdrop-blur-md border-b border-white/[0.08] flex items-center justify-between gap-4 text-white z-20">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-[10px] font-bold tracking-[0.2em] uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
                    {selectedVideo.categoryLabel}
                  </span>
                </div>
                <h4 className="font-serif text-lg sm:text-2xl font-normal text-white tracking-tight truncate">
                  {selectedVideo.title}
                </h4>
              </div>

              {/* Right Header Controls (Counter + Close) */}
              <div className="flex items-center gap-2.5 shrink-0">
                {currentModalIndex >= 0 && (
                  <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-mono tracking-wider">
                    {String(currentModalIndex + 1).padStart(2, "0")} / {String(activeVideoList.length).padStart(2, "0")}
                  </span>
                )}
                
                <button
                  onClick={() => setSelectedVideo(null)}
                  aria-label="Close video player"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white/80 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Video Player Stage - Clean Solid Background */}
            <div className="relative flex-1 flex items-center justify-center bg-black min-h-[300px] max-h-[66vh] sm:max-h-[70vh] overflow-hidden">
              {/* In-Modal Prev Carousel Button */}
              {activeVideoList.length > 1 && (
                <button
                  type="button"
                  onClick={handleModalPrev}
                  aria-label="Previous Video"
                  className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center shadow-xl border border-white/10 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer group"
                >
                  <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
                </button>
              )}

              {/* In-Modal Next Carousel Button */}
              {activeVideoList.length > 1 && (
                <button
                  type="button"
                  onClick={handleModalNext}
                  aria-label="Next Video"
                  className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center shadow-xl border border-white/10 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer group"
                >
                  <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                </button>
              )}

              {/* Main Video Element */}
              <div className="relative z-10 max-h-[64vh] sm:max-h-[68vh] flex items-center justify-center p-2 sm:p-4">
                <video
                  key={selectedVideo.src}
                  className="max-h-[60vh] sm:max-h-[65vh] w-auto max-w-full rounded-xl shadow-2xl object-contain"
                  src={selectedVideo.src}
                  controls
                  autoPlay
                  playsInline
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-4 sm:px-7 py-3 sm:py-3.5 bg-stone-900/90 backdrop-blur-md border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs z-20">
              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 font-mono text-[11px]">
                  <Clock className="w-3.5 h-3.5 text-white/70" />
                  Duration: {selectedVideo.duration}
                </span>

                <span className="hidden sm:inline-flex items-center text-white/45 uppercase tracking-widest text-[10px] font-semibold">
                  Malabar Decorators Kasaragod
                </span>
              </div>

              {/* Quick Actions */}
              <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                <a
                  href={`https://wa.me/919946692100?text=${encodeURIComponent(
                    `Hi Malabar Decorators, I'm watching your video "${selectedVideo.title}" (${selectedVideo.categoryLabel}) and would like to enquire about this setup for our upcoming event.`
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
                  onClick={() => setSelectedVideo(null)}
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

// Single Video Card Component
function VideoCard({
  video,
  onPlay,
}: {
  video: GalleryVideo;
  onPlay: () => void;
}) {
  return (
    <div
      onClick={onPlay}
      className="group relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl cursor-pointer border border-outline-variant/30 bg-surface-container transition-all duration-500 hover:-translate-y-1"
    >
      {/* Thumbnail Image */}
      <img
        alt={video.title}
        src={video.thumbnail}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Cinematic Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 group-hover:from-black/90 group-hover:via-black/40 transition-colors duration-300" />

      {/* Center Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          type="button"
          aria-label={`Play ${video.title}`}
          className="w-13 h-13 md:w-15 md:h-15 rounded-full bg-white/95 backdrop-blur-md shadow-[0_8px_25px_rgba(0,0,0,0.35)] flex items-center justify-center group-hover:scale-110 group-hover:bg-white transition-all duration-300"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-stone-900 ml-0.5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>

      {/* Bottom Metadata Bar */}
      <div className="absolute bottom-0 inset-x-0 p-4 md:p-5 flex items-end justify-between z-10 pointer-events-none">
        <div className="max-w-[75%]">
          <span className="text-[10px] md:text-[11px] uppercase tracking-widest font-semibold text-primary-fixed-dim block mb-1">
            {video.categoryLabel}
          </span>
          <h3 className="text-sm md:text-base lg:text-lg font-serif font-medium text-white drop-shadow-sm truncate">
            {video.title}
          </h3>
        </div>

        {/* Duration Badge */}
        <span className="text-[10px] md:text-[11px] font-mono text-white/90 bg-black/50 px-2 py-0.5 rounded-full backdrop-blur-xs border border-white/10 shrink-0">
          {video.duration}
        </span>
      </div>
    </div>
  );
}
