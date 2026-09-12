"use client";

import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";

interface ShowcaseCard {
  id: number;
  title: string;
  tag: string;
  image: string;
}

const showcaseCards: ShowcaseCard[] = [
  {
    id: 1,
    title: "Grand Royal Wedding Stage",
    tag: "Royal Stage",
    image: "/images/gallery/malabar-decorators-karandakkad-kasaragod-flower-decorators-vajfq0rkn4.jpg",
  },
  {
    id: 2,
    title: "Traditional Ceremony & Floral Mandap",
    tag: "Ceremony & Mandap",
    image: "/images/gallery/malabar-decorators-kasaragod-flower-decorators-1lepi60kot.jpg",
  },
  {
    id: 3,
    title: "Enchanted Floral Arch Reception",
    tag: "Reception Art",
    image: "/images/gallery/malabar-decorators-karandakkad-kasaragod-flower-decorators-3gfqv2nr6m.jpg",
  },
  {
    id: 4,
    title: "Chandelier Illuminated Pavilion",
    tag: "Floral Pavilion",
    image: "/images/gallery/malabar-decorators-kasaragod-flower-decorators-c0b95t3sru.jpg",
  },
];

export default function HomeGalleryShowcase() {
  return (
    <section className="bg-primary-container py-16 md:py-20 lg:py-24 relative overflow-hidden select-none border-y border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute -left-20 -top-20 w-96 h-96 bg-white/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-12 xl:gap-16">
          
          {/* Left Column: Editorial Headings & Call to Action */}
          <div className="w-full lg:w-[32%] xl:w-[30%] shrink-0 text-left">
            <Reveal from="left">
              <div>
                {/* Overline */}
                <span className="block text-xs sm:text-[13px] font-semibold tracking-[0.22em] uppercase text-white/80 mb-3 md:mb-4">
                  OUR PORTFOLIO
                </span>

                {/* Main Heading */}
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.6rem] font-medium text-white leading-[1.12] tracking-tight mb-6 md:mb-8">
                  Moments We&apos;ve <br />
                  Beautifully{" "}
                  <span className="text-white font-bold">Crafted</span>
                </h2>

                {/* View Full Gallery Button */}
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/60 text-white hover:bg-white hover:text-primary-container font-semibold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-sm hover:shadow-lg group"
                >
                  <span>View Full Gallery</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Column: 4 Vertical Showcase Cards */}
          <div className="w-full lg:w-[68%] xl:w-[70%]">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5">
              {showcaseCards.map((card, idx) => (
                <Reveal key={card.id} delay={idx * 0.1} from="up">
                  <Link
                    href="/gallery"
                    className="group relative block aspect-[3/4.3] rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 bg-black/20 border border-white/10"
                  >
                    {/* Image */}
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Subtle Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4 text-white">
                      <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-white/80 font-medium block mb-1">
                        {card.tag}
                      </span>
                      <p className="text-xs sm:text-sm font-serif font-medium line-clamp-2 text-white">
                        {card.title}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
