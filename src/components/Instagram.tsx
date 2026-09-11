"use client";

import { useState, useEffect } from "react";
import { instagramData, InstagramPost } from "@/data/instagram";
import Reveal from "@/components/ui/Reveal";

export default function Instagram() {
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll on mobile
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % instagramData.posts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-16 md:py-24 bg-surface relative overflow-hidden border-t border-outline-variant/30" id="social">
      {/* Decorative subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop relative z-10">
        
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row items-center justify-between mb-10 md:mb-12 gap-5 text-center md:text-left">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                {/* Instagram Gradient Icon */}
                <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-xs">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-secondary">
                  INSTAGRAM FEED
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-on-surface font-normal">
                {instagramData.handle}
              </h2>
              <p className="font-body-sm text-sm text-on-surface-variant mt-1.5 max-w-xl">
                {instagramData.description}
              </p>
            </div>

            {/* Follow Button */}
            <a
              href={instagramData.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-secondary to-primary hover:opacity-95 text-white text-xs font-semibold uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 shrink-0"
            >
              {/* Instagram camera icon */}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span>Follow On Instagram</span>
            </a>
          </div>
        </Reveal>

        {/* Desktop View: Full 4-Column Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {instagramData.posts.map((post, i) => (
            <Reveal key={post.id} delay={i * 0.08} from="up">
              <InstagramCard post={post} />
            </Reveal>
          ))}
        </div>

        {/* Mobile View: Single Card Auto-Scroll Carousel */}
        <div
          className="block md:hidden relative overflow-hidden"
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-600 ease-in-out"
            style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
          >
            {instagramData.posts.map((post) => (
              <div key={post.id} className="w-full shrink-0 px-2">
                <InstagramCard post={post} />
              </div>
            ))}
          </div>

          {/* Mobile Dot Indicators & Prev/Next */}
          <div className="flex items-center justify-between px-4 mt-5">
            <button
              type="button"
              onClick={() =>
                setMobileIndex(
                  (prev) =>
                    (prev - 1 + instagramData.posts.length) %
                    instagramData.posts.length
                )
              }
              aria-label="Previous post"
              className="w-8 h-8 rounded-full border border-outline-variant/50 flex items-center justify-center text-on-surface-variant hover:text-on-surface bg-surface-container-lowest"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Indicator Dots */}
            <div className="flex items-center gap-1.5">
              {instagramData.posts.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setMobileIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    mobileIndex === i ? "w-6 bg-secondary" : "w-1.5 bg-outline-variant/60"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() =>
                setMobileIndex((prev) => (prev + 1) % instagramData.posts.length)
              }
              aria-label="Next post"
              className="w-8 h-8 rounded-full border border-outline-variant/50 flex items-center justify-center text-on-surface-variant hover:text-on-surface bg-surface-container-lowest"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

// Interactive Instagram Post Card
function InstagramCard({ post }: { post: InstagramPost }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);
  const [isSaved, setIsSaved] = useState(false);
  const [showHeartPop, setShowHeartPop] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleLike = () => {
    if (isLiked) {
      setIsLiked(false);
      setLikeCount((prev) => prev - 1);
    } else {
      setIsLiked(true);
      setLikeCount((prev) => prev + 1);
      triggerHeartAnimation();
    }
  };

  const handleDoubleTap = () => {
    if (!isLiked) {
      setIsLiked(true);
      setLikeCount((prev) => prev + 1);
    }
    triggerHeartAnimation();
  };

  const triggerHeartAnimation = () => {
    setShowHeartPop(true);
    setTimeout(() => {
      setShowHeartPop(false);
    }, 900);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(post.link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } else {
      window.open(post.link, "_blank");
    }
  };

  return (
    <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      
      {/* 1. Header (Profile, Username, Location, Dots) */}
      <div className="p-3.5 flex items-center justify-between border-b border-outline-variant/20">
        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 group/user"
        >
          {/* Story Ring Avatar */}
          <div className="p-[2px] rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 shrink-0">
            <div className="w-8 h-8 rounded-full bg-white p-[1.5px] overflow-hidden flex items-center justify-center">
              <img
                src={instagramData.avatar}
                alt={instagramData.handle}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          <div className="text-left leading-tight">
            <div className="flex items-center gap-1">
              <span className="text-xs font-semibold text-on-surface group-hover/user:text-secondary transition-colors">
                {instagramData.handle.replace("@", "")}
              </span>
              {/* Blue Verified Badge */}
              <svg className="w-3.5 h-3.5 text-sky-500 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <span className="text-[10px] text-on-surface-variant block truncate max-w-[130px]">
              {post.location}
            </span>
          </div>
        </a>

        {/* More Options / Instagram Icon */}
        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View on Instagram"
          className="text-on-surface-variant hover:text-on-surface transition-colors p-1"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="6" cy="12" r="1.5" />
            <circle cx="18" cy="12" r="1.5" />
          </svg>
        </a>
      </div>

      {/* 2. Post Image with Double-Tap Heart Animation */}
      <div
        className="relative w-full aspect-square bg-surface-container overflow-hidden cursor-pointer select-none"
        onDoubleClick={handleDoubleTap}
      >
        <img
          src={post.image}
          alt={post.alt}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Double-Tap Heart Pop Overlay */}
        {showHeartPop && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 animate-in zoom-in-50 fade-in duration-300">
            <svg
              className="w-20 h-20 text-white fill-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.45)] transform scale-110"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        )}

        {/* Floating Share Feedback Tag */}
        {copied && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[10px] font-medium tracking-wide px-3 py-1 rounded-full backdrop-blur-xs z-20">
            Link copied!
          </div>
        )}
      </div>

      {/* 3. Interactive Action Icons (Like, Comment, Share, Save) */}
      <div className="p-3.5 pb-2 flex items-center justify-between">
        <div className="flex items-center gap-3.5">
          {/* Like Button */}
          <button
            type="button"
            onClick={toggleLike}
            aria-label="Like post"
            className="transition-transform active:scale-125 focus:outline-none"
          >
            {isLiked ? (
              <svg className="w-5 h-5 text-rose-600 fill-rose-600 animate-in zoom-in-75 duration-200" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-on-surface hover:text-rose-600 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            )}
          </button>

          {/* Comment Button */}
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Comment on post"
            className="text-on-surface hover:text-secondary transition-colors"
          >
            <svg className="w-5 h-5 -rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </a>

          {/* Share / Send Button */}
          <button
            type="button"
            onClick={handleShare}
            aria-label="Share post"
            className="text-on-surface hover:text-secondary transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>

        {/* Save / Bookmark Button */}
        <button
          type="button"
          onClick={() => setIsSaved(!isSaved)}
          aria-label="Save post"
          className="text-on-surface hover:text-secondary transition-colors focus:outline-none"
        >
          {isSaved ? (
            <svg className="w-5 h-5 text-on-surface fill-on-surface animate-in zoom-in-75 duration-200" viewBox="0 0 24 24">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
          )}
        </button>
      </div>

      {/* 4. Likes & Engagement */}
      <div className="px-3.5 text-left">
        <p className="text-xs font-semibold text-on-surface">
          Liked by <span className="font-bold">{post.likedBy}</span> and{" "}
          <span className="font-bold">{likeCount.toLocaleString()}</span> others
        </p>
      </div>

      {/* 5. Caption & Hashtags */}
      <div className="p-3.5 pt-1 text-left flex-1">
        <p className="text-xs text-on-surface leading-relaxed">
          <span className="font-bold mr-1.5 text-on-surface">
            {instagramData.handle.replace("@", "")}
          </span>
          {isExpanded ? (
            post.caption
          ) : (
            <>
              {post.caption.slice(0, 85)}...
              <button
                type="button"
                onClick={() => setIsExpanded(true)}
                className="text-on-surface-variant hover:text-on-surface ml-1 font-medium text-[11px]"
              >
                more
              </button>
            </>
          )}
        </p>

        {/* Hashtags */}
        <div className="flex flex-wrap gap-1 mt-1.5">
          {post.hashtags.map((tag, i) => (
            <span key={i} className="text-[10px] text-secondary font-medium hover:underline cursor-pointer">
              {tag}
            </span>
          ))}
        </div>

        {/* Comments Link */}
        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-[11px] text-on-surface-variant hover:text-on-surface mt-2 transition-colors"
        >
          View all {post.commentsCount} comments
        </a>

        {/* Timestamp */}
        <span className="block text-[9px] uppercase tracking-widest text-on-surface-variant/70 mt-1 font-medium">
          {post.timeAgo}
        </span>
      </div>

    </div>
  );
}
