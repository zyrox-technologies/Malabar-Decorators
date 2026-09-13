"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  UtensilsCrossed,
  ShieldCheck,
  Flame,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function MenuHook() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const menuHighlights = [
    {
      id: "sadhya",
      title: "Traditional Kerala Sadhya",
      malayalam: "കല്ല്യാണ സദ്യ",
      tag: "22+ Authentic Items",
      description:
        "Served with ceremonial reverence on fresh banana leaves. Features Parippu with pure cow ghee, Aviyal, Kootu Curry, Sambar, crispy Pappadam, Ada Pradhaman, and Palada Payasam.",
      image: "/images/menu/sadhya-feast.webp",
      dishPills: ["Ada Pradhaman", "Aviyal & Kootu Curry", "Pure Cow Ghee", "Fresh Banana Leaf"],
    },
    {
      id: "biryani",
      title: "Royal Malabar Dum Biryani",
      malayalam: "മലബാർ ദം ബിരിയാണി",
      tag: "Thalassery Heritage",
      description:
        "Prepared by master ustad chefs with fragrant Kaima rice, pure cow ghee, tender marinated chicken/mutton, fried onions (Bista), and accompanied by date pickle and mint raita.",
      image: "/images/menu/biryani-feast.webp",
      dishPills: ["Fragrant Kaima Rice", "Slow Dum Cooking", "Chicken / Mutton", "Special Date Pickle"],
    },
    {
      id: "live-counters",
      title: "Live Cooking & Tea Counters",
      malayalam: "ലൈവ് ഫുഡ് & ടീ സ്റ്റാളുകൾ",
      tag: "Interactive Dining",
      description:
        "Delight guests with sizzling live food counters: hot Neypathal, fluffy Vellappam, live Dosa, crispy Jalebi, and signature Malabar Colour Tea poured from traditional kettles.",
      image: "/images/menu/main-dishes.webp",
      dishPills: ["Live Neypathal & Dosa", "Hot Jalebi Stall", "Malabar Colour Tea", "Fresh Juices"],
    },
    {
      id: "curries",
      title: "Rich Malabar Curries & Fries",
      malayalam: "കറികൾ & റോസ്റ്റുകൾ",
      tag: "Savory Accompaniments",
      description:
        "Slow-roasted meats and aromatic vegetable delicacies: Chicken varattiyathu, Mutton varattiyathu, pepper chicken, rich veg kuruma, and spicy roasts infused with pure spices.",
      image: "/images/menu/curry-fries.webp",
      dishPills: ["Chicken Varattiyathu", "Mutton Roast", "Pure Spices", "Veg Kuruma"],
    },
    {
      id: "desserts",
      title: "Traditional Desserts & Sweets",
      malayalam: "മധുര പലഹാരങ്ങൾ",
      tag: "Sweet Endings",
      description:
        "Indulgent sweet finales featuring hot live Jalebi, rich Mysur pak, traditional Ada Pradhaman, warm Palada Payasam, Gulab Jamun, and refreshing ice creams.",
      image: "/images/menu/desserts.webp",
      dishPills: ["Palada Payasam", "Live Hot Jalebi", "Ada Pradhaman", "Mysur Pak"],
    },
    {
      id: "welcome-drinks",
      title: "Welcome Drinks & Fresh Coolers",
      malayalam: "വെൽക്കം ഡ്രിങ്ക്സ്",
      tag: "Refreshing Arrivals",
      description:
        "Welcome your guests with chilled, freshly squeezed fruit coolers: fresh watermelon juice, grape coolers, papaya nectar, and seasonal welcome refreshments.",
      image: "/images/menu/welcome-drinks.webp",
      dishPills: ["Watermelon Juice", "Grape Coolers", "Fresh Fruit Mocktails", "Chilled Coolers"],
    },
  ];

  const cateringPillars = [
    {
      icon: Flame,
      title: "Authentic Dum Cooking",
      desc: "Slow-cooked in large copper degs with pure cow ghee and hand-pounded Malabar spices.",
    },
    {
      icon: UtensilsCrossed,
      title: "Banana Leaf Ceremonial",
      desc: "Traditional leaf-serving etiquette honoring Kerala's grand wedding feast culture.",
    },
    {
      icon: ShieldCheck,
      title: "100% Hygienic Service",
      desc: "Disciplined uniformed serving crew, sanitized food stations, and immaculate cleanliness.",
    },
  ];

  return (
    <section
      className="py-space-3xl md:py-space-4xl bg-[#FAF6EE] border-t border-b border-[#790504]/10 relative overflow-hidden select-none"
      id="menu-hook"
    >
      {/* Subtle Background Watermark Stamp */}
      <div className="absolute right-4 top-8 pointer-events-none opacity-[0.07] hidden lg:block select-none">
        <svg viewBox="0 0 200 200" className="w-56 h-56 animate-spin-slow">
          <path
            id="menuCirclePath"
            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            fill="none"
          />
          <text className="text-[11px] uppercase tracking-[0.28em] font-serif fill-[#790504]">
            <textPath href="#menuCirclePath">
              • AUTHENTIC TASTE • KERALA SADHYA • MALABAR BIRYANI
            </textPath>
          </text>
        </svg>
      </div>

      <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop relative z-10">
        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <div className="inline-flex items-center justify-center gap-3 mb-2">
              <span className="w-8 md:w-12 h-[1px] bg-secondary/50" />
              <span className="font-label-caps text-xs md:text-sm tracking-[0.25em] text-secondary uppercase font-semibold">
                AUTHENTIC CATERING & FEASTS
              </span>
              <span className="w-8 md:w-12 h-[1px] bg-secondary/50" />
            </div>
            <div className="flex justify-center mb-4">
              <div className="w-1.5 h-1.5 rotate-45 bg-secondary/70" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-[#1E1B19] font-normal leading-[1.16] tracking-tight">
              A Royal Feast for <br />
              <span className="text-[#790504] font-bold">Unforgettable Celebrations</span>
            </h2>

            <p className="mt-4 text-sm md:text-base text-[#59413D]/80 leading-relaxed font-normal max-w-2xl mx-auto">
              Food is the heart of every Malabar celebration. From ceremonial Kerala Sadhya to authentic Dum Biryani and live tea counters, we bring rich culinary heritage to your wedding table.
            </p>

            <div className="inline-block mt-3">
              <span className="text-xs font-semibold text-[#790504] tracking-wider uppercase bg-[#790504]/5 px-3 py-1 rounded-full border border-[#790504]/20">
                കല്ല്യാണ സദ്യ • ദം ബിരിയാണി • ലൈവ് ഫുഡ് കൗണ്ടറുകൾ
              </span>
            </div>
          </div>
        </Reveal>

        {/* Navigation Controls Bar (Header on Desktop) */}
        <div className="flex items-center justify-between mb-6 px-1">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#59413D]/70">
            <span>Swipe or Drag to Explore</span>
            <span className="w-12 h-px bg-[#790504]/20 hidden sm:inline-block" />
          </div>

          {/* Left / Right Arrow Buttons */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => swiperInstance?.slidePrev()}
              aria-label="Previous menu card"
              className="w-10 h-10 rounded-full border border-[#790504]/20 bg-white/80 hover:bg-[#790504] hover:text-white hover:border-[#790504] text-[#790504] flex items-center justify-center transition-all shadow-xs cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => swiperInstance?.slideNext()}
              aria-label="Next menu card"
              className="w-10 h-10 rounded-full border border-[#790504]/20 bg-white/80 hover:bg-[#790504] hover:text-white hover:border-[#790504] text-[#790504] flex items-center justify-center transition-all shadow-xs cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Row-Type Swiper Slider */}
        <Reveal from="up" delay={0.1}>
          <div className="relative mb-12">
            <Swiper
              onSwiper={setSwiperInstance}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1.15}
              breakpoints={{
                560: {
                  slidesPerView: 1.8,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2.3,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
                1280: {
                  slidesPerView: 3.2,
                  spaceBetween: 24,
                },
              }}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              grabCursor={true}
              className="!pb-12 items-stretch"
            >
              {menuHighlights.map((dish) => (
                <SwiperSlide key={dish.id} className="!h-auto flex flex-col">
                  <div className="group flex flex-col bg-surface border border-surface-variant/80 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-secondary/40 hover:-translate-y-1 h-full">
                    {/* Dish Image */}
                    <div className="relative aspect-[16/11] w-full overflow-hidden bg-surface-variant/20">
                      <Image
                        src={dish.image}
                        alt={dish.title}
                        fill
                        sizes="(max-width: 768px) 85vw, (max-width: 1200px) 45vw, 30vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

                      {/* Top Badge (No sparkles) */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center bg-white/95 backdrop-blur-md text-[#790504] text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm border border-[#790504]/20">
                          {dish.tag}
                        </span>
                      </div>

                      {/* Bottom Malayalam Accent on Image */}
                      <div className="absolute bottom-3 left-4 right-4">
                        <p className="text-white/95 text-xs font-semibold tracking-wide">
                          {dish.malayalam}
                        </p>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-surface">
                      <div className="space-y-3">
                        <h3 className="font-headline-md text-xl text-on-surface font-serif group-hover:text-primary transition-colors">
                          {dish.title}
                        </h3>
                        <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed line-clamp-3">
                          {dish.description}
                        </p>

                        {/* Dish Highlight Pills */}
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {dish.dishPills.map((pill, pIdx) => (
                            <span
                              key={pIdx}
                              className="text-[11px] font-medium text-[#59413D] bg-[#FAF6EE] border border-[#E9DFD1] px-2.5 py-0.5 rounded-md"
                            >
                              {pill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Card Bottom CTA Link */}
                      <div className="pt-5 mt-5 border-t border-surface-variant/60">
                        <Link
                          href="/menu"
                          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary group-hover:text-primary-container transition-colors"
                        >
                          <span>Explore Dishes</span>
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Reveal>

        {/* 3 Catering Excellence Pillars */}
        <Reveal from="up" delay={0.15}>
          <div className="bg-surface rounded-2xl border border-surface-variant/80 p-6 sm:p-8 lg:p-10 shadow-xs mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {cateringPillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-container/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-base text-on-surface font-semibold mb-1">
                        {pillar.title}
                      </h4>
                      <p className="font-body-sm text-xs md:text-sm text-on-surface-variant leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Action Hooks Banner */}
        <Reveal from="up" delay={0.2}>
          <div className="text-center space-y-4">
            <div className="flex flex-wrap items-center justify-center gap-4">
              {/* Button 1: Full Menu */}
              <Link
                href="/menu"
                className="px-8 py-4 rounded-xl bg-primary-container hover:bg-primary text-surface font-label-md text-sm uppercase tracking-wider flex items-center gap-2.5 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <span>View Complete Catering Menu</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              {/* Button 2: WhatsApp Consultation */}
              <a
                href={`https://wa.me/919946692100?text=${encodeURIComponent(
                  "Hi Malabar Decorators, I would like to discuss Catering & Feast Menus for my upcoming event."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-label-md text-sm uppercase tracking-wider flex items-center gap-2.5 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Enquire for Catering</span>
              </a>
            </div>

            <p className="text-xs text-[#59413D]/70 font-medium tracking-wide">
              Tailored menus for Weddings, Receptions, Housewarmings & Community Feasts across Kasaragod & North Kerala.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
