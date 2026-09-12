"use client";

import { motion } from "motion/react";
import { aboutData } from "@/data/about";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { useParallax } from "@/hooks/useScrollAnimation";

export default function About() {
  const { ref: imgRef, y } = useParallax(0.1);

  return (
    <section
      className="py-space-3xl md:py-space-4xl bg-surface-container-low border-y border-surface-variant"
      id="about"
    >
      <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Column */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <SectionHeader
                overline={aboutData.overline}
                headline={aboutData.headline}
                size="xl"
                className="mb-8"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="w-12 h-0.5 bg-primary-container" />
            </Reveal>
            {aboutData.paragraphs.map((paragraph, index) => (
              <Reveal key={index} delay={0.15 + index * 0.08}>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {paragraph}
                </p>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <div className="pt-2">
                <Button href={aboutData.cta.href} variant="link">
                  <span>{aboutData.cta.label}</span>
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Visual Column with parallax */}
          <Reveal from="right" delay={0.1} className="lg:col-span-7">
            <div className="relative rounded-xl overflow-hidden border border-surface-variant bg-surface group">
              <div className="overflow-hidden w-full h-[420px] md:h-[520px]">
                <motion.img
                  ref={imgRef as React.RefObject<HTMLImageElement>}
                  alt={aboutData.image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={aboutData.image.src}
                  style={{ y }}
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-surface/90 backdrop-blur-md px-4 py-2.5 rounded-lg border border-surface-variant text-right">
                <span className="font-label-caps text-label-caps text-primary uppercase block">
                  {aboutData.image.captionOverline}
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  {aboutData.image.captionTitle}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
