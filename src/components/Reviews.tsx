"use client";

import { useState, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, CheckCircle2, ExternalLink } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

// Official Google Multi-Color G Icon
function GoogleIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.93 6.72-4.93z"
      />
    </svg>
  );
}

export interface ReviewItem {
  id: number;
  name: string;
  role: string;
  event: string;
  rating: number;
  date: string;
  comment: string;
  initials: string;
  avatarColor: string;
}

const googleReviews: ReviewItem[] = [
  {
    id: 1,
    name: "Dr. Mohammed Shafi",
    role: "Groom's Family",
    event: "Royal Nikah & Stage Decor",
    rating: 5,
    date: "2 months ago",
    comment:
      "Outstanding stage presentation and very professional coordination! The floral craftsmanship and royal lighting ambiance transformed the entire hall. Malabar Dum Biriyani and live counter setups were thoroughly praised by all our guests.",
    initials: "MS",
    avatarColor: "bg-[#790504]",
  },
  {
    id: 2,
    name: "Anjali Nair",
    role: "Bride",
    event: "Outdoor Lawn Reception & Catering",
    rating: 5,
    date: "3 months ago",
    comment:
      "Malabar Decorators handled both our evening outdoor reception decoration and dinner banquet seamlessly. The fairy light canopy looked like something out of a fairytale! Binoy and his team paid attention to every micro-detail.",
    initials: "AN",
    avatarColor: "bg-[#AB3600]",
  },
  {
    id: 3,
    name: "Firoz Khan",
    role: "Client",
    event: "Haldi Stage & Marigold Floral Flow",
    rating: 5,
    date: "4 months ago",
    comment:
      "Punctual delivery, authentic traditional aesthetics, and very courteous staff. The Haldi stage setup with cascading fresh marigolds and brass lamps was breathtaking. Highly recommend them for premium celebrations in Malabar!",
    initials: "FK",
    avatarColor: "bg-[#922E23]",
  },
  {
    id: 4,
    name: "Suresh K. V.",
    role: "Host",
    event: "Kannur Wedding Banquet & SFX Entry",
    rating: 5,
    date: "5 months ago",
    comment:
      "Top-notch catering quality and stage setup! The couple entry with cold pyrotechnics and low fog entry was executed flawlessly without any delay. The Malabar Ghee Rice and Payasam were unforgettable.",
    initials: "SK",
    avatarColor: "bg-[#410001]",
  },
  {
    id: 5,
    name: "Aysha Rahiman",
    role: "Bride's Family",
    event: "Grand Reception & Stage Illumination",
    rating: 5,
    date: "6 months ago",
    comment:
      "Exceptional spatial design! Even with over 1,500 guests moving through the venue, the aesthetic stayed pristine and the food counters were well maintained. Truly the best event management in North Kerala.",
    initials: "AR",
    avatarColor: "bg-[#AB3600]",
  },
  {
    id: 6,
    name: "Nishat Shahriyar",
    role: "Corporate Client",
    event: "Annual Conclave & Gala Dinner",
    rating: 5,
    date: "8 months ago",
    comment:
      "Wonderful stage setup and top-tier catering arrangement for our regional conference. The acoustic ambiance, lighting, and hospitality exceeded our expectations. Great professionalism from the whole crew.",
    initials: "NS",
    avatarColor: "bg-[#790504]",
  },
];

export default function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 380;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 350);
    }
  };

  const googleReviewUrl = "https://maps.google.com/?q=Malabar+Decorators";

  return (
    <section
      className="py-16 md:py-24 bg-surface-container-low/40 relative overflow-hidden border-t border-outline-variant/30"
      id="reviews"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop relative z-10">
        
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
            <div>
              {/* Google Badge Overline */}
              <div className="inline-flex items-center gap-2 mb-2.5">
                <GoogleIcon className="w-4 h-4" />
                <span className="font-label-caps text-[11px] text-secondary uppercase tracking-[0.2em] font-semibold">
                  GOOGLE CUSTOMER REVIEWS
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-on-surface font-normal leading-tight">
                Loved by Families Across{" "}
                <span className="font-serif text-secondary font-bold">
                  Malabar
                </span>
              </h2>

              <p className="font-body-sm text-sm md:text-base text-on-surface-variant max-w-xl mt-2.5 leading-relaxed">
                Real celebrations, real testimonials. Read what our couples, families, and corporate hosts share about their experience with us.
              </p>
            </div>

            {/* Google Summary Score Card & Direct Button */}
            <div className="flex flex-wrap items-center gap-4 bg-surface-container-lowest p-4 sm:p-5 rounded-2xl border border-outline-variant/40 shadow-xs shrink-0">
              <div className="flex items-center gap-3 pr-4 sm:border-r border-outline-variant/30">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center shadow-xs">
                  <GoogleIcon className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-serif text-2xl font-bold text-on-surface">4.9</span>
                    <div className="flex gap-0.5 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-on-surface-variant block">
                    180+ Verified Reviews
                  </span>
                </div>
              </div>

              {/* Direct Google Reviews Link Button */}
              <a
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary hover:bg-secondary/90 text-white text-xs font-semibold uppercase tracking-wider shadow-xs hover:shadow-sm transition-all duration-300"
              >
                <span>Review Us on Google</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Carousel Container */}
        <div className="relative">
          
          {/* Review Cards Scroll Strip */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-5 overflow-x-auto no-scrollbar scroll-smooth pb-4 snap-x"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {googleReviews.map((review) => (
              <div
                key={review.id}
                className="w-[320px] sm:w-[380px] shrink-0 snap-start bg-surface-container-lowest rounded-2xl p-6 sm:p-7 border border-outline-variant/40 hover:border-secondary/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  
                  {/* Top Bar: Reviewer Avatar, Name, Google G */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {/* Avatar Circle */}
                      <div
                        className={`w-11 h-11 rounded-full ${review.avatarColor} text-white font-serif font-bold text-sm flex items-center justify-center shadow-xs shrink-0`}
                      >
                        {review.initials}
                      </div>

                      <div className="text-left">
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-serif text-base font-semibold text-on-surface leading-snug">
                            {review.name}
                          </h4>
                        </div>
                        <span className="text-[11px] text-on-surface-variant block">
                          {review.date}
                        </span>
                      </div>
                    </div>

                    {/* Google G Stamp */}
                    <div className="p-1.5 rounded-lg bg-surface-container/60">
                      <GoogleIcon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Star Rating & Event Tag */}
                  <div className="flex items-center justify-between mb-3.5 pb-3 border-b border-outline-variant/25">
                    <div className="flex gap-0.5 text-amber-500">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed line-clamp-5">
                    &ldquo;{review.comment}&rdquo;
                  </p>

                </div>

                {/* Footer: Verified Tag */}
                <div className="pt-4 mt-4 border-t border-outline-variant/20 flex items-center justify-between text-[11px] text-on-surface-variant/70">
                  <span className="inline-flex items-center gap-1">
                    <GoogleIcon className="w-3 h-3" />
                    <span>Posted on Google</span>
                  </span>
                 
                </div>

              </div>
            ))}
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center justify-between pt-6">

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Previous review"
                className="w-10 h-10 rounded-full border border-outline-variant/60 flex items-center justify-center text-on-surface bg-surface-container-lowest hover:border-secondary hover:text-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-xs"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label="Next review"
                className="w-10 h-10 rounded-full border border-outline-variant/60 flex items-center justify-center text-on-surface bg-surface-container-lowest hover:border-secondary hover:text-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-xs"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
