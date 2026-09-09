"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { galleryData, GalleryVideo } from "@/data/gallery";

export default function MomentsInMotion() {
  const [activeCategory, setActiveCategory] = useState("All Videos");
  const [selectedVideo, setSelectedVideo] = useState<GalleryVideo | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const gridContainerRef = useRef<HTMLDivElement>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedVideo(null);
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
  }, [selectedVideo]);

  // Filter videos based on active category
  const filteredVideos =
    activeCategory === "All Videos"
      ? galleryData.videos
      : galleryData.videos.filter((v) => v.category === activeCategory);

  // Top row (first 3) and bottom row (remaining up to 4) when showing all or filtered
  const topRowVideos = filteredVideos.slice(0, 3);
  const bottomRowVideos = filteredVideos.slice(3, 7);

  const handlePrev = () => {
    const catIndex = galleryData.categories.indexOf(activeCategory);
    const prevIndex =
      (catIndex - 1 + galleryData.categories.length) %
      galleryData.categories.length;
    setActiveCategory(galleryData.categories[prevIndex]);
  };

  const handleNext = () => {
    const catIndex = galleryData.categories.indexOf(activeCategory);
    const nextIndex = (catIndex + 1) % galleryData.categories.length;
    setActiveCategory(galleryData.categories[nextIndex]);
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
              <span className="italic font-serif text-secondary font-medium">
                {galleryData.headlineHighlight}
              </span>
            </h2>

            <p className="font-body-sm text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto mt-3.5 leading-relaxed">
              {galleryData.subheadline}
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mt-8 md:mt-10">
            {galleryData.categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
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
        </div>

        {/* Video Cards Grid */}
        <div ref={gridContainerRef} className="space-y-4 md:space-y-6">
          
          {/* Top Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {topRowVideos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onPlay={() => setSelectedVideo(video)}
              />
            ))}
          </div>

          {/* Bottom Row - 4 Cards */}
          {bottomRowVideos.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {bottomRowVideos.map((video) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  onPlay={() => setSelectedVideo(video)}
                />
              ))}
            </div>
          )}

          {/* If filtered has no videos */}
          {filteredVideos.length === 0 && (
            <div className="text-center py-16 bg-surface-container-low rounded-2xl border border-outline-variant/20">
              <p className="text-on-surface-variant text-sm">
                No videos found in this category.
              </p>
              <button
                onClick={() => setActiveCategory("All Videos")}
                className="mt-3 text-secondary text-xs uppercase tracking-widest font-semibold underline underline-offset-4"
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

      {/* Video Modal / Lightbox Dialog */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6 md:p-8 animate-in fade-in duration-300"
          onClick={() => setSelectedVideo(null)}
        >
          {/* Modal Container */}
          <div
            className="relative w-full max-w-4xl bg-stone-950 rounded-2xl overflow-hidden shadow-2xl border border-white/15 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 px-5 bg-stone-900/90 border-b border-white/10 flex items-center justify-between text-white">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-secondary-fixed-dim block">
                  {selectedVideo.categoryLabel}
                </span>
                <h4 className="font-serif text-lg font-medium text-white">
                  {selectedVideo.title}
                </h4>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                aria-label="Close video player"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Video Player Area */}
            <div className="relative flex items-center justify-center bg-black min-h-[300px] max-h-[75vh] overflow-hidden">
              <video
                className="max-h-[75vh] w-auto max-w-full object-contain"
                src={selectedVideo.src}
                controls
                autoPlay
                playsInline
              />
            </div>

            {/* Modal Footer */}
            <div className="p-3.5 px-5 bg-stone-900/90 flex items-center justify-between text-xs text-white/70">
              <span>Duration: {selectedVideo.duration}</span>
              <button
                onClick={() => setSelectedVideo(null)}
                className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
              >
                Done
              </button>
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
