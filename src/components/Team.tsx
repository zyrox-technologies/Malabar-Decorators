"use client";

import Link from "next/link";
import { teamData } from "@/data/team";

export default function Team() {
  const { founder } = teamData;

  return (
    <section className="py-16 md:py-24 bg-surface relative overflow-hidden border-t border-outline-variant/30" id="founder">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-2.5">
            <span className="w-6 h-[1px] bg-secondary/60"></span>
            <span className="font-label-caps text-[11px] text-secondary uppercase tracking-[0.25em] font-semibold">
              {teamData.overline}
            </span>
            <span className="w-6 h-[1px] bg-secondary/60"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.75rem] text-on-surface font-normal leading-tight">
            {teamData.headline}
          </h2>

          <p className="font-body-sm text-sm md:text-base text-on-surface-variant max-w-xl mx-auto mt-3 leading-relaxed">
            {teamData.subheadline}
          </p>
        </div>

        {/* Founder Spotlight Card */}
        <div className="max-w-5xl mx-auto bg-surface-container-lowest border border-outline-variant/40 rounded-3xl p-6 sm:p-8 md:p-12 lg:p-14 shadow-sm hover:shadow-md transition-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Founder Portrait (Full Color, Premium Framed) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-outline-variant/30 group">
                <img
                  src={founder.image}
                  alt={`Portrait of ${founder.name}`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Subtle warm gradient vignette at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                {/* Floating Bottom Badge */}
                <div className="absolute bottom-4 inset-x-4 text-center">
                  <span className="inline-block px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-semibold tracking-widest text-primary-fixed uppercase shadow-md">
                    {founder.badge}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Founder Profile & Vision */}
            <div className="lg:col-span-7 flex flex-col text-left">
              
              {/* Overline & Role */}
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-[1.5px] bg-secondary"></span>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-secondary">
                  {founder.role}
                </span>
              </div>

              {/* Founder Name */}
              <h3 className="font-serif text-3xl sm:text-4xl text-on-surface font-medium leading-tight mb-4">
                {founder.name}
              </h3>

              {/* Founder Quote */}
              <div className="relative pl-6 py-2 my-2 border-l-2 border-secondary/60 bg-surface-container-low/40 rounded-r-xl">
                <span className="absolute -top-3 left-2 font-serif text-4xl text-secondary/30 select-none">
                  “
                </span>
                <p className="font-serif italic text-base sm:text-lg text-on-surface leading-relaxed">
                  {founder.quote}
                </p>
              </div>

              {/* Bio Description */}
              <p className="font-body-sm text-sm sm:text-base text-on-surface-variant leading-relaxed mt-4">
                {founder.bio}
              </p>

              {/* Highlights / Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-8 pt-6 border-t border-outline-variant/30">
                {founder.highlights.map((item, idx) => (
                  <div key={idx} className="text-left">
                    <span className="font-serif text-2xl sm:text-3xl text-primary font-medium block">
                      {item.number}
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-on-surface-variant uppercase tracking-wider font-semibold block mt-0.5">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-secondary hover:bg-secondary/90 text-white text-xs font-semibold uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <span>Plan Your Event With Us</span>
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
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
