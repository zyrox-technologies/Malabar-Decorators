"use client";

import Link from "next/link";
import Image from "next/image";
import { servicesData } from "@/data/services";
import Reveal from "@/components/ui/Reveal";

export default function ServicesHome() {
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
            <Reveal key={service.id} delay={index * 0.1} from="up">
              <Link
                href={service.link}
                className="group flex flex-col bg-surface border border-surface-variant/80 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-secondary/30 hover:-translate-y-1.5 h-full"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-variant/20">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1 justify-between bg-surface">
                  <div>
                    <h3 className="font-headline-sm text-xl text-on-surface mb-3 group-hover:text-secondary transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-surface-variant/60 flex items-center justify-between text-secondary">
                    <span className="font-label-caps text-xs tracking-wider uppercase font-semibold">
                      Explore Service
                    </span>
                    <span className="material-symbols-outlined text-base transition-transform duration-300 group-hover:translate-x-1.5">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
