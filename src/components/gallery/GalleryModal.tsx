"use client";

import { useEffect } from "react";
import Image from "next/image";
import { WorkItem } from "@/data/gallery";
import { X, ChevronLeft, ChevronRight, MapPin, MessageCircle } from "lucide-react";

interface GalleryModalProps {
  selectedImage: WorkItem | null;
  onClose: () => void;
  filteredItems: WorkItem[];
  onSelectImage: (item: WorkItem) => void;
}

export default function GalleryModal({
  selectedImage,
  onClose,
  filteredItems,
  onSelectImage,
}: GalleryModalProps) {
  const currentImageIndex = selectedImage
    ? filteredItems.findIndex((item) => item.id === selectedImage.id)
    : -1;

  const handlePrev = () => {
    if (currentImageIndex > 0) {
      onSelectImage(filteredItems[currentImageIndex - 1]);
    } else if (filteredItems.length > 0) {
      onSelectImage(filteredItems[filteredItems.length - 1]);
    }
  };

  const handleNext = () => {
    if (currentImageIndex < filteredItems.length - 1) {
      onSelectImage(filteredItems[currentImageIndex + 1]);
    } else if (filteredItems.length > 0) {
      onSelectImage(filteredItems[0]);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    if (selectedImage) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, currentImageIndex, filteredItems]);

  if (!selectedImage) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-300"
      onClick={onClose}
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

          {/* Right Header Controls */}
          <div className="flex items-center gap-2.5 shrink-0">
            {currentImageIndex >= 0 && (
              <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-mono tracking-wider">
                {String(currentImageIndex + 1).padStart(2, "0")} / {String(filteredItems.length).padStart(2, "0")}
              </span>
            )}
            <button
              onClick={onClose}
              aria-label="Close image preview"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white/80 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Media Body */}
        <div className="relative flex-1 min-h-[42vh] max-h-[64vh] sm:max-h-[68vh] bg-black/60 flex items-center justify-center overflow-hidden">
          {/* Navigation Prev Button */}
          {filteredItems.length > 1 && (
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous Image"
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center shadow-xl border border-white/10 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer group"
            >
              <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
            </button>
          )}

          {/* Navigation Next Button */}
          {filteredItems.length > 1 && (
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next Image"
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center shadow-xl border border-white/10 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer group"
            >
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </button>
          )}

          {/* Main Image */}
          <div className="relative w-full h-full p-2 sm:p-4 flex items-center justify-center">
            <div className="relative w-full h-full max-h-[58vh] sm:max-h-[64vh] aspect-[4/3]">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                sizes="(max-width: 1024px) 95vw, 1000px"
                className="object-contain rounded-lg"
                priority
              />
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-4 sm:px-7 py-3 sm:py-3.5 bg-[#231e1a]/85 backdrop-blur-md border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs z-20">
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 font-mono text-[11px]">
              <MapPin className="w-3.5 h-3.5 text-white/70" />
              {selectedImage.location}
            </span>
            <span className="hidden sm:inline-flex items-center text-white/45 uppercase tracking-widest text-[10px] font-semibold">
              Malabar Decorators Kasaragod
            </span>
          </div>

          {/* Quick Enquire on WhatsApp */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <a
              href={`https://wa.me/919946692100?text=${encodeURIComponent(
                `Hi Malabar Decorators, I'm viewing your "${selectedImage.title}" (${selectedImage.categoryTag}) and would like to enquire about this setup for our upcoming event.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-[#790504] to-[#ab3600] hover:from-[#8f0605] hover:to-[#bd3c00] text-white text-[11px] font-bold tracking-wider uppercase shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 text-white" />
              <span>Enquire This Setup</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
