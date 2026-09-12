"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { servicesData } from "@/data/services";
import Reveal from "@/components/ui/Reveal";

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
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1 justify-between">
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
