"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { servicesData, ServiceItem } from "@/data/services";
import Reveal from "@/components/ui/Reveal";

function ServiceBadgeIcon({ type }: { type: ServiceItem["iconType"] }) {
  switch (type) {
    case "wedding":
      return (
        <svg className="w-6 h-6 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="12" r="5" />
          <circle cx="15" cy="12" r="5" />
        </svg>
      );
    case "destination":
      return (
        <svg className="w-6 h-6 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 8c0-2.76-2.24-5-5-5-1.12 0-2.16.37-3 1 .84.63 2 1 3 1 2.21 0 4 1.79 4 4" />
          <path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c2.49 0 4.5 2.01 4.5 4.5 0 .88-.25 1.71-.7 2.41" />
          <path d="M11 15.5c-2.49 0-4.5-2.01-4.5-4.5 0-.88.25-1.71.7-2.41" />
          <path d="M13 14c0 2.21-1.79 4-4 4-1 0-2.16-.37-3-1 .84-.63 2-1 3-1 2.76 0 5-2.24 5-5" />
          <path d="M12 10v11" />
          <path d="M8 21h8" />
        </svg>
      );
    case "engagement":
      return (
        <svg className="w-6 h-6 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3l3 4H9l3-4z" />
          <circle cx="12" cy="14" r="6" />
        </svg>
      );
    case "reception":
      return (
        <svg className="w-6 h-6 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 18h16M5 14l3-7 4 5 4-5 3 7H5z" />
          <circle cx="8" cy="7" r="1" />
          <circle cx="12" cy="12" r="1" />
          <circle cx="16" cy="7" r="1" />
        </svg>
      );
    case "catering":
      return (
        <svg className="w-6 h-6 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2v8a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V2" />
          <path d="M15 12v10" />
          <path d="M6 2v20" />
          <path d="M9 2v4a3 3 0 0 1-6 0V2" />
        </svg>
      );
    case "haldi":
      return (
        <svg className="w-6 h-6 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
        </svg>
      );
  }
}

export default function Services() {
  return (
    <section
      className="py-space-3xl md:py-space-4xl bg-surface-container-low/70 border-t border-b border-surface-variant/40"
      id="services"
    >
      <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
            <div className="inline-flex items-center justify-center gap-3 mb-2">
              <span className="w-8 md:w-12 h-[1px] bg-secondary/50" />
              <span className="font-label-caps text-xs md:text-sm tracking-[0.25em] text-secondary uppercase font-medium">
                {servicesData.overline}
              </span>
              <span className="w-8 md:w-12 h-[1px] bg-secondary/50" />
            </div>
            <div className="flex justify-center mb-4">
              <div className="w-1.5 h-1.5 rotate-45 bg-secondary/70" />
            </div>
            <h2 className="font-headline-xl text-3xl md:text-5xl text-on-surface tracking-tight leading-tight mb-5">
              Crafting Extraordinary Experiences for{" "}
              <span className="text-secondary font-bold">Every Occasion</span>
            </h2>
            <p className="font-body-md text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              {servicesData.subtitle}
            </p>
          </div>
        </Reveal>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.items.map((service, index) => (
            <Reveal key={service.id} delay={(index % 3) * 0.1} from="up">
              <motion.div
                className="bg-white rounded-2xl border border-surface-variant/70 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_35px_rgba(171,54,0,0.08)] transition-shadow duration-300 flex flex-col overflow-hidden group h-full"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                {/* Image */}
                <div className="p-4 pb-0 relative">
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-surface-container">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute -bottom-5 right-4 z-10 w-12 h-12 md:w-13 md:h-13 rounded-full bg-white border border-surface-variant shadow-md flex items-center justify-center group-hover:scale-110 group-hover:bg-surface-container-low transition-transform duration-300">
                      <ServiceBadgeIcon type={service.iconType} />
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 pt-7 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-headline-sm text-xl md:text-2xl font-semibold text-on-surface mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-surface-variant/60 flex items-center justify-between mt-auto">
                    <Link
                      href={service.link}
                      className="text-xs uppercase tracking-wider font-semibold text-secondary inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300 group-hover:text-primary"
                    >
                      <span>Explore Service</span>
                      <span className="text-base leading-none">→</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
