"use client";

import { useState, useEffect } from "react";
import { galleryData } from "@/data/gallery";
import SectionHeader from "@/components/ui/SectionHeader";

export default function MomentsInMotion() {
  const [isOpen, setIsOpen] = useState(false);
  const featuredVideo = galleryData.videos[1] || galleryData.videos[0];

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <section
      className="py-space-2xl md:py-space-3xl bg-surface relative overflow-hidden"
      id="gallery"
    >
      <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop mb-8 md:mb-12">
        <SectionHeader
          overline={galleryData.overline}
          headline={galleryData.headline}
          align="center"
          size="md"
        />
      </div>

      {/* Video Preview Banner */}
      <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
        <div
          onClick={() => setIsOpen(true)}
          className="group relative w-full h-[360px] sm:h-[460px] md:h-[540px] lg:h-[600px] 
                     overflow-hidden shadow-2xl cursor-pointer 
                     border border-outline-variant/30 
                     transition-transform duration-500 hover:scale-[1.005]"
        >
          {/* Static Preview Thumbnail */}
          <img
            alt={`Thumbnail of ${featuredVideo.title}`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={featuredVideo.thumbnail}
          />

          {/* Warm Cinematic Dark Overlay */}
          <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors duration-300" />

          {/* Center Play Button (Static, No Loop Animation) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              type="button"
              aria-label="Play video preview"
              className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/95 backdrop-blur-md 
                         shadow-[0_8px_30px_rgb(0,0,0,0.25)] flex items-center justify-center 
                         group-hover:scale-110 group-hover:bg-white transition-all duration-300"
            >
              {/* Custom Elegant Play Icon */}
              <svg
                className="w-7 h-7 md:w-8 md:h-8 text-secondary ml-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </button>
          </div>

          {/* Bottom Title Bar */}
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-10 text-white z-10 pointer-events-none">
            <span className="text-xs uppercase tracking-widest text-primary-fixed-dim block mb-1 font-medium">
              Featured Film
            </span>
            <h3 className="text-lg md:text-2xl font-serif font-semibold drop-shadow-md">
              {featuredVideo.title}
            </h3>
          </div>
        </div>
      </div>

      {/* Video Modal / Lightbox Dialog */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 md:p-8 animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Container */}
          <div
            className="relative w-full max-w-4xl max-h-[92vh] bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close video preview"
              className="absolute top-3 right-3 z-20 w-10 h-10 rounded-full bg-black/60 text-white/90 
                         hover:text-white hover:bg-black/90 border border-white/20 
                         flex items-center justify-center transition-all duration-200"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>

            {/* Video Player */}
            <div className="relative flex items-center justify-center bg-black flex-1 min-h-[300px] max-h-[78vh] overflow-hidden">
              <video
                className="max-h-[78vh] w-auto max-w-full object-contain"
                src={featuredVideo.src}
                controls
                autoPlay
                playsInline
              />
            </div>

            {/* Modal Footer with Video Details (Duration removed) */}
            <div className="p-4 md:px-6 bg-inverse-surface flex items-center justify-between text-surface-bright">
              <h4 className="font-headline-sm text-headline-sm text-surface-bright">
                {featuredVideo.title}
              </h4>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-sm font-medium rounded-lg bg-surface-variant/20 hover:bg-surface-variant/40 text-surface-bright transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
