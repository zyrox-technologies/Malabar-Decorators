"use client";

import { motion } from "motion/react";
import { heroData } from "@/data/hero";
import Button from "@/components/ui/Button";
import { useParallax } from "@/hooks/useScrollAnimation";

export default function Hero() {
  const { ref: imgRef, y } = useParallax(0.12);

  return (
    <section
      className="relative pt-space-xl pb-space-3xl md:pt-space-2xl md:pb-space-4xl overflow-hidden bg-surface"
      id="hero"
    >
      <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
        {/* Hero Top Editorial Content */}
        <div className="text-center max-w-3xl mx-auto mb-space-2xl">
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container rounded-lg border border-surface-variant mb-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">
              {heroData.overline}
            </span>
          </motion.div>

          <motion.h1
            className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface tracking-tight mb-6"
            dangerouslySetInnerHTML={{ __html: heroData.headline }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.p
            className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {heroData.description}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3, ease: "easeOut" }}
          >
            <Button href={heroData.primaryCta.href} className="w-full sm:w-auto">
              {heroData.primaryCta.label}
            </Button>
            <Button href={heroData.secondaryCta.href} variant="outline" className="w-full sm:w-auto">
              {heroData.secondaryCta.label}
            </Button>
          </motion.div>
        </div>

        {/* Hero Featured Media Showcase – parallax image */}
        <motion.div
          className="relative w-full rounded-xl overflow-hidden border border-surface-variant shadow-sm group"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="overflow-hidden">
            <motion.img
              ref={imgRef as React.RefObject<HTMLImageElement>}
              alt="Cinematic luxury wedding banquet under pavilion with bespoke chandeliers and floral arrangements"
              className="w-full h-[380px] sm:h-[500px] lg:h-[620px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
              src={heroData.featured.image}
              style={{ y }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 flex flex-col sm:flex-row justify-between sm:items-end text-surface-bright">
            <div className="max-w-md">
              <span className="font-label-caps text-label-caps text-tertiary-fixed tracking-widest uppercase">
                {heroData.featured.overline}
              </span>
              <p className="font-headline-md text-headline-md text-surface-bright mt-1">
                {heroData.featured.title}
              </p>
            </div>
            <div className="hidden md:flex items-center gap-3 text-surface-bright/80 font-label-sm text-label-sm">
              {heroData.featured.tags.map((tag, index) => (
                <span key={index}>
                  {tag}
                  {index < heroData.featured.tags.length - 1 && (
                    <span className="mx-3">•</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
