"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  CookingPot,
  ShieldCheck,
  UtensilsCrossed,
  PartyPopper,
  Play,
  ArrowRight,
  Wine,
  Soup,
  CakeSlice,
  Camera,
  Video,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import MenuModal from "@/components/menu/MenuModal";

export default function Menu() {
  const [activeTab, setActiveTab] = useState<"malayalam" | "event">("malayalam");
  const [activeModal, setActiveModal] = useState<"sadhya" | "event" | null>(null);

  const malayalamSectionRef = useRef<HTMLDivElement>(null);
  const eventSectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (tab: "malayalam" | "event") => {
    setActiveTab(tab);
    if (tab === "malayalam") {
      malayalamSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      eventSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#FAF6EE] relative overflow-hidden select-none" id="menu">
      {/* Subtle Circular Stamp Watermark in Top Right */}
      <div className="absolute right-4 top-10 pointer-events-none opacity-[0.12] hidden lg:block select-none">
        <svg viewBox="0 0 200 200" className="w-48 h-48 animate-spin-slow">
          <path
            id="circlePath"
            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            fill="none"
          />
          <text className="text-[11.5px] uppercase tracking-[0.28em] font-serif fill-[#790504]">
            <textPath href="#circlePath">
              • TRADITIONAL FLAVOURS • MEMORIES • EXCELLENCE
            </textPath>
          </text>
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <Reveal from="up">
            <div className="inline-block mb-3">
              <span className="border border-[#790504]/30 text-[#790504] px-4 py-1 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase bg-white/50">
                OUR MENU
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-[#1E1B19] font-normal leading-[1.14] tracking-tight">
              Flavours for <br />
              <span className="text-[#790504] font-bold">Every Celebration</span>
            </h2>

            <p className="mt-3 text-sm md:text-base text-[#59413D]/80 max-w-xl mx-auto font-normal leading-relaxed">
              From traditional feasts to contemporary favorites, our menu is crafted to make your special moments even more memorable.
            </p>
          </Reveal>

          {/* 4 Feature Highlights */}
          <Reveal from="up" delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 lg:gap-8 mt-8 pt-6 border-t border-[#790504]/10 text-xs sm:text-[13px] text-[#59413D] font-medium">
              <div className="flex items-center gap-2">
                <CookingPot className="w-4 h-4 text-[#790504]" />
                <span>Authentic Taste</span>
              </div>
              <span className="w-px h-4 bg-[#790504]/20 hidden sm:block" />
              
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#790504]" />
                <span>Hygienic & Fresh</span>
              </div>
              <span className="w-px h-4 bg-[#790504]/20 hidden sm:block" />

              <div className="flex items-center gap-2">
                <UtensilsCrossed className="w-4 h-4 text-[#790504]" />
                <span>Custom Menus</span>
              </div>
              <span className="w-px h-4 bg-[#790504]/20 hidden sm:block" />

              <div className="flex items-center gap-2">
                <PartyPopper className="w-4 h-4 text-[#790504]" />
                <span>Memorable Feasts</span>
              </div>
            </div>
          </Reveal>

          {/* Quick Navigation Tabs */}
          <Reveal from="up" delay={0.15}>
            <div className="inline-flex items-center gap-2 p-1.5 rounded-full bg-white/70 border border-[#E9DFD1] shadow-xs mt-8">
              <button
                type="button"
                onClick={() => scrollToSection("malayalam")}
                className={`px-5 sm:px-6 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  activeTab === "malayalam"
                    ? "bg-[#790504] text-white shadow-sm"
                    : "text-[#59413D] hover:text-[#790504] hover:bg-white"
                }`}
              >
                കല്ല്യാണ സദ്യ (Sadhya)
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("event")}
                className={`px-5 sm:px-6 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  activeTab === "event"
                    ? "bg-[#790504] text-white shadow-sm"
                    : "text-[#59413D] hover:text-[#790504] hover:bg-white"
                }`}
              >
                Event Menu (Wide Variety)
              </button>
            </div>
          </Reveal>
        </div>

        {/* SECTION 1: കല്ല്യാണ സദ്യ (TRADITIONAL KERALA SADHYA) */}
        <div ref={malayalamSectionRef} className="scroll-mt-24 mb-16 sm:mb-20">
          <Reveal from="up">
            <div className="bg-[#FFFDF9] rounded-3xl border border-[#E9DFD1] p-6 sm:p-8 lg:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.03)] relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-10">
                {/* Left Text Intro */}
                <div className="lg:col-span-6 space-y-4">
                  <span className="inline-flex items-center gap-1.5 border border-[#790504]/25 text-[#790504] px-3.5 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase bg-[#790504]/5">
                    <Sparkles className="w-3 h-3" />
                    AUTHENTIC KERALA
                  </span>

                  <div>
                    <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-[#790504] font-medium leading-tight">
                      കല്ല്യാണ സദ്യ
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-[#59413D]/70 font-semibold mt-1">
                      Traditional Kerala Wedding Feast
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#59413D]/85 leading-relaxed max-w-md font-normal">
                    Experience the timeless richness of traditional Kerala Sadhya, served with love and authentic flavours on a fresh banana leaf.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <a
                      href={`https://wa.me/919946692100?text=${encodeURIComponent(
                        "Hi Malabar Decorators, I would like to enquire about your Traditional Kerala Sadhya Catering."
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#790504] hover:bg-[#600302] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow-md transition-all inline-flex items-center gap-2 group"
                    >
                      <span>Enquire Now</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </a>

                    <button
                      type="button"
                      onClick={() => setActiveModal("sadhya")}
                      className="inline-flex items-center gap-2.5 text-xs font-semibold text-[#1E1B19] hover:text-[#790504] transition-colors cursor-pointer group"
                    >
                      <span className="w-8 h-8 rounded-full border border-[#790504]/30 flex items-center justify-center text-[#790504] group-hover:bg-[#790504] group-hover:text-white transition-all">
                        <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                      </span>
                      <span>Watch Sadhya Preparation</span>
                    </button>
                  </div>
                </div>

                {/* Right Image Banner */}
                <div className="lg:col-span-6">
                  <div className="relative aspect-[16/10] sm:aspect-[2.1/1] lg:aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-[#E9DFD1] bg-[#E9DFD1]/30">
                    <Image
                      src="/images/menu/sadhya-feast.webp"
                      alt="Traditional Kerala Sadhya on Banana Leaf"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      priority
                    />

                    <button
                      type="button"
                      onClick={() => setActiveModal("sadhya")}
                      className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10 bg-white/90 hover:bg-white backdrop-blur-md px-3 py-1.5 rounded-full text-[11px] font-semibold text-[#1E1B19] border border-black/10 shadow-md flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <Camera className="w-3.5 h-3.5 text-[#790504]" />
                      <span>3 Photos</span>
                      <span className="text-black/30">|</span>
                      <Video className="w-3.5 h-3.5 text-[#790504]" />
                      <span>2 Videos</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Cards Grid: Two Sadhya Spread Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                {/* Left Card */}
                <div className="lg:col-span-6 bg-white rounded-2xl border border-[#E9DFD1] p-6 sm:p-7 relative overflow-hidden shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <svg className="w-5 h-5 text-[#790504]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                      </svg>
                      <h4 className="font-serif text-lg font-bold text-[#790504]">
                        ഇലസദ്യ
                      </h4>
                    </div>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs sm:text-[13px] text-[#241B18]">
                      <ul className="space-y-2">
                        {[
                          "ജയ അരി",
                          "സാമ്പാർ",
                          "കൂട്ടു കറി",
                          "അവിൽ",
                          "കാളൻ",
                          "ഓലൻ",
                          "അച്ചാർ - 1",
                          "അച്ചാർ - 2",
                          "പുളിയിഞ്ചി",
                          "വരവ്",
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#790504] shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <ul className="space-y-2">
                        {[
                          "ഉള്ളേരി",
                          "ശർക്കര",
                          "പപ്പടം",
                          "പായസം - പാൽ / അട / സേമിയ",
                          "പായസം - വെല്ലം / അട / പരിപ്പ്",
                          "പഴം",
                          "ചോറ്",
                          "മോര്",
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#790504] shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right Card: Leaf Sadhya List + Payasam Photo */}
                <div className="lg:col-span-6 bg-white rounded-2xl border border-[#E9DFD1] p-6 sm:p-7 shadow-2xs flex flex-col sm:flex-row gap-6 items-stretch">
                  <div className="w-full sm:w-1/2">
                    <div className="flex items-center gap-2 mb-4">
                      <svg className="w-5 h-5 text-[#790504]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                      </svg>
                      <h4 className="font-serif text-lg font-bold text-[#790504]">
                        ഇലസദ്യ
                      </h4>
                    </div>

                    <ul className="space-y-1.5 text-xs sm:text-[13px] text-[#241B18]">
                      {[
                        "പൊന്നി അരി",
                        "മസാലക്കറി",
                        "അച്ചാർ - 1",
                        "അച്ചാർ - 2",
                        "രസായന പായസം",
                        "നെയ്യപ്പൂര പായസം",
                        "എടശ്ശേരി",
                        "പപ്പടം വലുത്",
                        "തൈര്",
                        "രസം",
                        "ഗോപി ചില്ലി",
                        "ഗോപി മഞ്ചൂരി",
                        "ഫ്രാൻസ് കറി",
                        "പരിപ്പ്",
                        "നെയ്യ്",
                        "മുളക് കൊണ്ടാട്ടം",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#790504] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="w-full sm:w-1/2 min-h-[200px] relative rounded-xl overflow-hidden shadow-xs border border-[#E9DFD1] bg-[#E9DFD1]/30">
                    <Image
                      src="/images/menu/payasam.webp"
                      alt="Traditional Payasam with Roasted Cashews"
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* SECTION 2: WIDE VARIETY - EVENT MENU */}
        <div ref={eventSectionRef} className="scroll-mt-24 mb-12 sm:mb-16">
          <Reveal from="up">
            <div className="bg-[#FFFDF9] rounded-3xl border border-[#E9DFD1] p-6 sm:p-8 lg:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.03)] relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-8 sm:mb-10">
                {/* Left Intro */}
                <div className="lg:col-span-6 space-y-4">
                  <span className="inline-block border border-[#790504]/25 text-[#790504] px-3.5 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase bg-[#790504]/5">
                    WIDE VARIETY
                  </span>

                  <div>
                    <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-[#1E1B19] font-normal leading-tight">
                      Event <span className="text-[#790504] font-bold">Menu</span>
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#59413D]/85 leading-relaxed max-w-md font-normal">
                    A delightful range of dishes to suit every occasion. From refreshing drinks to delicious main courses, we bring <span className="font-semibold text-[#790504]">taste and quality</span> to your special events.
                  </p>

                  <div className="pt-1">
                    <p className="font-serif text-sm sm:text-base text-[#790504] font-medium">
                      “ Good food turns moments into memories ”
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <a
                      href={`https://wa.me/919946692100?text=${encodeURIComponent(
                        "Hi Malabar Decorators, I would like to enquire about your Event Catering Menu (Biriyani, Live Counters & Feasts)."
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#790504] hover:bg-[#600302] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow-md transition-all inline-flex items-center gap-2 group"
                    >
                      <span>Enquire Now</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </a>

                    <button
                      type="button"
                      onClick={() => setActiveModal("event")}
                      className="inline-flex items-center gap-2.5 text-xs font-semibold text-[#1E1B19] hover:text-[#790504] transition-colors cursor-pointer group"
                    >
                      <span className="w-8 h-8 rounded-full border border-[#790504]/30 flex items-center justify-center text-[#790504] group-hover:bg-[#790504] group-hover:text-white transition-all">
                        <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                      </span>
                      <span>Watch Our Specials</span>
                    </button>
                  </div>
                </div>

                {/* Right Image Banner */}
                <div className="lg:col-span-6">
                  <div className="relative aspect-[16/10] sm:aspect-[2.1/1] lg:aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-[#E9DFD1] bg-[#E9DFD1]/30">
                    <Image
                      src="/images/menu/biryani-feast.webp"
                      alt="Malabar Dum Biryani Feast in Copper Handi"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />

                    <button
                      type="button"
                      onClick={() => setActiveModal("event")}
                      className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 bg-white/90 hover:bg-white backdrop-blur-md px-3 py-1.5 rounded-full text-[11px] font-semibold text-[#1E1B19] border border-black/10 shadow-md flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <Camera className="w-3.5 h-3.5 text-[#790504]" />
                      <span>3 Photos</span>
                      <span className="text-black/30">|</span>
                      <Video className="w-3.5 h-3.5 text-[#790504]" />
                      <span>2 Videos</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom 4 Category Cards in a Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
                {/* 1. Welcome Drink */}
                <div className="bg-white rounded-2xl border border-[#E9DFD1] p-5 sm:p-6 shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Wine className="w-4 h-4 text-[#790504]" />
                      <h4 className="font-serif text-[15px] font-bold text-[#790504] leading-snug">
                        Welcome Drink / Live Juice
                      </h4>
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#241B18]">
                      {[
                        "water melon",
                        "Pappaya",
                        "grape",
                        "pineapple",
                        "Musambi",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#790504] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 2. Main Dishes */}
                <div className="bg-white rounded-2xl border border-[#E9DFD1] p-5 sm:p-6 shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <CookingPot className="w-4 h-4 text-[#790504]" />
                      <h4 className="font-serif text-[15px] font-bold text-[#790504] leading-snug">
                        Main Dishes
                      </h4>
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#241B18]">
                      {[
                        "Chicken Biriyani",
                        "mutton Biriyani",
                        "Ghee Rice",
                        "Fried Rice",
                        "Velleppam – live",
                        "Neypathal – live",
                        "porotta – live",
                        "chappathi",
                        "Veg pulav",
                        "Dosa – live",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#790504] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 3. Curry */}
                <div className="bg-white rounded-2xl border border-[#E9DFD1] p-5 sm:p-6 shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Soup className="w-4 h-4 text-[#790504]" />
                      <h4 className="font-serif text-[15px] font-bold text-[#790504] leading-snug">
                        Curry
                      </h4>
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#241B18]">
                      {[
                        "Chicken curry",
                        "chicken varattiyath",
                        "mutton varattiyathu",
                        "chilly chicken",
                        "pepper chicken",
                        "veg kuruma",
                        "gopi manjurian",
                        "gopi chilli",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#790504] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 4. Desserts & Beverages */}
                <div className="bg-white rounded-2xl border border-[#E9DFD1] p-5 sm:p-6 shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <CakeSlice className="w-4 h-4 text-[#790504]" />
                      <h4 className="font-serif text-[15px] font-bold text-[#790504] leading-snug">
                        Desserts & Beverages
                      </h4>
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#241B18]">
                      {[
                        "Ice Cream",
                        "Gulab jamun",
                        "Jilebi – live",
                        "Mysur pack – live",
                        "Payasam – pradhaman",
                        "payasam – ada pradhaman",
                        "palppayasam",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#790504] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 pt-3 border-t border-[#E9DFD1]">
                      <span className="block text-[11px] font-bold tracking-wider uppercase text-[#790504] mb-2">
                        Beverages
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#241B18]">
                        {[
                          "Water & Soft Drinks",
                          "Juice Selection",
                          "Coffee",
                          "Colour Tea – live",
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#790504] shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom Custom Menu Banner */}
        <Reveal from="up">
          <div className="bg-[#790504] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-white border border-[#8C170F]">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/[0.04] rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-xl">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-white/70 block mb-1.5">
                LET&apos;S PLAN TOGETHER
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal leading-tight">
                Custom Menu for Your Celebration?
              </h3>
              <p className="text-xs sm:text-sm text-white/80 mt-1.5 font-light leading-relaxed">
                We&apos;re happy to customize the menu based on your preferences, budget, and occasion.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <Link
                href="/contact"
                className="bg-white hover:bg-white/95 text-[#790504] px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 group"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Media Lightbox Dialog */}
      <MenuModal
        activeModal={activeModal}
        onClose={() => setActiveModal(null)}
      />
    </section>
  );
}
