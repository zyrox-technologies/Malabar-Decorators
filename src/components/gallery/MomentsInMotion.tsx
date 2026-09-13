"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { galleryData, GalleryVideo } from "@/data/gallery";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { useResponsivePageSize } from "@/hooks/useResponsivePageSize";
import Pagination from "@/components/common/Pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination as SwiperPagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

  // Filter videos based on active category - temporarily showing all videos:
  // const filteredVideos =
  //   activeCategory === "All Videos"
  //     ? galleryData.videos
  //     : galleryData.videos.filter((v) => v.category === activeCategory);
  const filteredVideos = galleryData.videos;

  const totalPages = Math.max(1, Math.ceil(filteredVideos.length / pageSize));
  const safeCurrentPage = Math.min(Math.max(1, currentPage), totalPages);

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

  return (
    <section
      className="py-16 md:py-24 bg-surface relative overflow-hidden select-none"
      id="gallery"
    >
      {/* Background Watermark */}
      <div className="absolute right-0 top-6 select-none pointer-events-none opacity-[0.035] z-0 hidden lg:block overflow-hidden">
        <span className="font-serif text-[13rem] font-bold tracking-wider text-on-surface leading-none block transform translate-x-12 -translate-y-8">
          {galleryData.rightWatermark}
        </span>
      </div>

      <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop relative z-10">
        {/* Header */}
        <div className="relative mb-10 md:mb-12">
          <div className="hidden xl:flex flex-col items-start absolute left-0 top-2 text-[10px] font-bold tracking-[0.25em] uppercase text-on-surface-variant/60 leading-tight">
            <span className="w-6 h-[1.5px] bg-secondary/60 mb-2"></span>
            <span>EVENTS</span>
            <span>THAT CREATE</span>
            <span>STORIES</span>
          </div>

          <div className="hidden xl:flex flex-col items-end absolute right-0 top-2 text-[10px] font-bold tracking-[0.25em] uppercase text-on-surface-variant/60 leading-tight text-right">
            <span>PLAN</span>
            <span>DESIGN</span>
            <span>EXECUTE</span>
            <span>CELEBRATE</span>
            <span className="w-8 h-[1.5px] bg-secondary/60 mt-2"></span>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <Reveal>
              <div className="inline-flex items-center justify-center gap-3 mb-2.5">
                <span className="w-6 h-[1px] bg-secondary/60"></span>
                <span className="font-label-caps text-[11px] text-secondary uppercase tracking-[0.25em] font-semibold">
                  {galleryData.overline}
                </span>
                <span className="w-6 h-[1px] bg-secondary/60"></span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.75rem] text-on-surface font-normal leading-tight">
                Moments That Speak Louder Than{" "}
                <span className="italic font-medium text-secondary">
                  {galleryData.headlineHighlight}
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="font-body-sm text-sm md:text-base text-on-surface-variant max-w-xl mx-auto mt-3 leading-relaxed">
                {galleryData.subheadline}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Categories Bar - Temporarily Commented Out */}
        {/*
        <div className="relative max-w-4xl mx-auto mb-10 md:mb-12">
          <div className="relative flex items-center">
            <button
              type="button"
              onClick={() => scrollCategories("left")}
              aria-label="Scroll categories left"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-surface-container-high border border-outline-variant/50 flex items-center justify-center text-on-surface hover:bg-surface hover:border-secondary hover:text-secondary shadow-xs transition-all cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>

            <div
              ref={categorySliderRef}
              className="flex items-center gap-2 overflow-x-auto scroll-smooth py-1 px-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden w-full"
            >
              {galleryData.categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    activeCategory === category
                      ? "bg-secondary text-white shadow-sm"
                      : "bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container border border-outline-variant/30"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollCategories("right")}
              aria-label="Scroll categories right"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-surface-container-high border border-outline-variant/50 flex items-center justify-center text-on-surface hover:bg-surface hover:border-secondary hover:text-secondary shadow-xs transition-all cursor-pointer"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
        */}

        {/* Mobile View: Single Row Auto-Sliding Swiper Slider */}
        <div className="block md:hidden">
          <Reveal from="up">
            <div className="relative">
              <Swiper
                modules={[Navigation, SwiperPagination, Autoplay]}
                spaceBetween={16}
                slidesPerView={1.12}
                loop={displayedVideos.length > 1}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                grabCursor={true}
                className="!pb-10"
              >
                {displayedVideos.map((video) => (
                  <SwiperSlide key={video.id} className="!h-auto">
                    <VideoCard
                      video={video}
                      onPlay={() => setSelectedVideo(video)}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Reveal>
        </div>

        {/* Desktop View: Multi-Column Video Grid */}
        <div ref={gridContainerRef} className="hidden md:block space-y-6 md:space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topRowVideos.map((video, i) => (
              <Reveal key={video.id} delay={i * 0.1} from="up">
                <VideoCard
                  video={video}
                  onPlay={() => setSelectedVideo(video)}
                />
              </Reveal>
            ))}
          </div>

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
        </div>

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

          {!limit && totalPages > 1 && (
            <Pagination
              currentPage={safeCurrentPage}
              totalPages={totalPages}
              totalItems={filteredVideos.length}
              pageSize={pageSize}
              onPageChange={handlePageChange}
              itemLabel="celebration videos"
            />
          )}
      </div>

      {/* Video Modal Lightbox */}
      {selectedVideo && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-300"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[92vh] bg-stone-950 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header (Counter & Close only - details temporarily commented out) */}
            <div className="px-4 sm:px-7 py-3 sm:py-3.5 bg-stone-900/90 backdrop-blur-md border-b border-white/[0.08] flex items-center justify-between gap-4 z-20">
              <div className="flex items-center gap-2">
                {currentModalIndex >= 0 && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/80 text-xs font-mono tracking-wider">
                    {String(currentModalIndex + 1).padStart(2, "0")} / {String(activeVideoList.length).padStart(2, "0")}
                  </span>
                )}
              </div>

              {/* Title & category details temporarily commented out:
              <div className="flex-1 min-w-0">
                <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-primary-fixed-dim mb-0.5">
                  {selectedVideo.categoryLabel}
                </span>
                <h4 className="font-serif text-base sm:text-xl font-medium text-white tracking-tight truncate">
                  {selectedVideo.title}
                </h4>
              </div>
              */}

              <button
                onClick={() => setSelectedVideo(null)}
                aria-label="Close video preview"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white/80 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative flex-1 min-h-[45vh] max-h-[75vh] bg-black flex items-center justify-center overflow-hidden">
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

              <div className="relative z-10 max-h-[72vh] flex items-center justify-center p-2 sm:p-4">
                <video
                  key={selectedVideo.src}
                  className="max-h-[68vh] w-auto max-w-full rounded-xl shadow-2xl object-contain"
                  src={selectedVideo.src}
                  controls
                  autoPlay
                  playsInline
                />
              </div>
            </div>

            {/* Modal Footer temporarily commented out:
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
                  <span>Enquire This Setup</span>
                </a>
              </div>
            </div>
            */}
          </div>
        </div>
      )}
    </section>
  );
}

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
      <img
        alt={video.title}
        src={video.thumbnail}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors duration-300" />

      <div className="absolute inset-0 flex items-center justify-center">
        <button
          type="button"
          aria-label={`Play video`}
          className="w-13 h-13 md:w-15 md:h-15 rounded-full bg-white/95 backdrop-blur-md shadow-[0_8px_25px_rgba(0,0,0,0.35)] flex items-center justify-center group-hover:scale-110 group-hover:bg-white transition-all duration-300 cursor-pointer"
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

      {/* Details (category, title, duration) temporarily commented out:
      <div className="absolute bottom-0 inset-x-0 p-4 md:p-5 flex items-end justify-between z-10 pointer-events-none">
        <div className="max-w-[75%]">
          <span className="text-[10px] md:text-[11px] uppercase tracking-widest font-semibold text-primary-fixed-dim block mb-1">
            {video.categoryLabel}
          </span>
          <h3 className="text-sm md:text-base lg:text-lg font-serif font-medium text-white drop-shadow-sm truncate">
            {video.title}
          </h3>
        </div>

        <span className="text-[10px] md:text-[11px] font-mono text-white/90 bg-black/50 px-2 py-0.5 rounded-full backdrop-blur-xs border border-white/10 shrink-0">
          {video.duration}
        </span>
      </div>
      */}
    </div>
  );
}
