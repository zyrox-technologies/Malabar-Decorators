"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  X,
  Phone,
  ShieldCheck,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Flower2,
  Tag
} from "lucide-react";

export default function Catalogue() {
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const featuredItems = [
    {
      id: "01",
      number: "01",
      badge: "MOST BOOKED",
      tagline: "TIMELESS TRADITIONS",
      title: "PREMIUM HINDU WEDDING PACKAGE",
      desc: "Complete traditional mandap, heavy floral stage, royal seating, welcome arch & entrance lighting setup.",
      pricePrefix: "ESTIMATED RATE",
      price: "₹1,00,000",
      image: "/images/catalogue/file_0000000015b881fa9bbbf4a93b5e22b6.webp",
    },
    {
      id: "02",
      number: "02",
      badge: "POPULAR CHOICE",
      tagline: "ELEGANT RECEPTIONS",
      title: "PREMIUM OUTDOOR RECEPTION",
      desc: "Full lawn fairy light canopy, backdrop floral wall, carpet aisle, ambient spotlights & photo zone.",
      pricePrefix: "ESTIMATED RATE STARTING FROM",
      price: "₹50,000",
      image: "/images/catalogue/file_00000000344c81fa850396f61fb9d12d.webp",
    },
    {
      id: "03",
      number: "03",
      badge: "PREMIUM SETUP",
      tagline: "LIGHTS THAT TRANSFORM",
      title: "PREMIUM LIGHT STAGE DESIGN",
      desc: "Intelligent warm spotlights, crystal chandelier fixtures, golden truss decor & backdrop illumination.",
      pricePrefix: "ESTIMATED RATE",
      price: "₹20,000 – ₹40,000",
      image: "/images/catalogue/file_00000000375c81fa9ee8f7a1a8a6fb43.webp",
    },
    {
      id: "04",
      number: "04",
      badge: "PHOTO ZONE",
      tagline: "MEMORABLE MOMENTS",
      title: "12 FEET PHOTO BOOTH SETUP",
      desc: "Customized floral background frame, vintage props, wooden archway & vanity lighting.",
      pricePrefix: "ESTIMATED RATE STARTING FROM",
      price: "₹8,000",
      image: "/images/catalogue/file_000000003934820ba9d16be60f892922.webp",
    },
    {
      id: "05",
      number: "05",
      badge: "TRADITIONAL",
      tagline: "KERALA HERITAGE",
      title: "TRADITIONAL 2026 KERALA STAGE",
      desc: "Fresh marigold garlands, brass oil lamps (Nilavilakku), urlis & wooden mandap pillars.",
      pricePrefix: "ESTIMATED RATE STARTING FROM",
      price: "₹25,000",
      image: "/images/catalogue/file_00000000e8f8820bb6b4b4dcaff4fbb3.webp",
    },
    {
      id: "06",
      number: "06",
      badge: "CORPORATE",
      tagline: "GRAND INAUGURATION",
      title: "INAUGURATION & CORPORATE DECOR",
      desc: "Ribbon cutting arch, podium floral styling, entrance welcome gate & carpeting.",
      pricePrefix: "ESTIMATED RATE STARTING FROM",
      price: "₹5,000",
      image: "/images/catalogue/file_00000000ff5c81fab206a64f8a6c6766.webp",
    },
  ];

  const fullCatalogue = [
    { name: "Photo Booth", price: "starting from ₹7,000" },
    { name: "12 Feet Photo Booth", price: "starting from ₹8,000" },
    { name: "Premium Outdoor Reception", price: "starting from ₹50,000" },
    { name: "Premium Hindu Wedding Package", price: "₹1,00,000" },
    { name: "2026 Hindu Traditional Stage", price: "starting from ₹25,000" },
    { name: "Inauguration Decorations", price: "starting from ₹5,000" },
    { name: "Traditional Stage 4", price: "starting from ₹25,000" },
    { name: "Birthday Decor (Simple)", price: "starting from ₹4,000" },
    { name: "Birthday Decor (Pro Setup)", price: "starting from ₹12,000" },
    { name: "Wedding Garlands Pair", price: "starting from ₹5,000" },
    { name: "Flower Bouquets", price: "starting from ₹1,000" },
    { name: "Cradle Ceremony Decor", price: "starting from ₹4,000 – ₹6,000" },
    { name: "Premium Stage Design", price: "starting around ₹40,000" },
    { name: "Premium Light Stage Setup", price: "₹20,000 – ₹40,000" },
    { name: "Outdoor Simple Decor", price: "starting from ₹4,000" },
    { name: "Groom To Be / Bride To Be", price: "starting from ₹5,000" },
    { name: "Car & Vehicle Decoration", price: "starting from ₹3,000" },
    { name: "Valakappu & Ear Piercing Decor", price: "starting from ₹5,000" },
    { name: "Destination Wedding Setup", price: "Custom Package" },
    { name: "Low Fog Dry Ice Effect (SFX)", price: "Add-On Package" },
    { name: "Cold Fire Sparklers (SFX)", price: "Add-On Package" },
  ];

  const totalPages = Math.ceil(featuredItems.length / 3);
  const visibleItems = featuredItems.slice(currentPage * 3, (currentPage + 1) * 3);

  return (
    <section id="catalogue" className="py-14 sm:py-20 bg-[#FAF6F0] relative overflow-hidden text-[#171110]">
      {/* Left Margin Vertical Text */}
      <div className="hidden xl:flex absolute left-6 top-1/2 -translate-y-1/2 items-center gap-4 rotate-[-90deg] origin-center z-10 pointer-events-none select-none">
        <span className="text-[10px] font-bold text-[#A68F7B] tracking-[0.35em] uppercase">
          EVENTS THAT FEEL EXTRAORDINARY
        </span>
        <div className="w-12 h-[1px] bg-[#A68F7B]/40" />
      </div>

      {/* Top Right Circular Lotus Stamp */}
      <div className="hidden sm:flex absolute top-8 right-8 lg:right-16 z-20 items-center justify-center pointer-events-none select-none">
        <div className="relative w-28 h-28 flex items-center justify-center">
          {/* Circular Text SVG */}
          <svg className="w-full h-full animate-[spin_25s_linear_infinite]" viewBox="0 0 100 100">
            <path
              id="circlePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
            <text className="text-[8px] font-bold tracking-[0.22em] uppercase fill-[#8C7462]">
              <textPath href="#circlePath">
                SPACES • STORIES • BEAUTIFUL TOGETHER •
              </textPath>
            </text>
          </svg>
          {/* Center Lotus Icon */}
          <div className="absolute inset-0 flex items-center justify-center text-[#6F1014]">
            <Flower2 className="w-6 h-6 stroke-[1.5]" />
          </div>
        </div>
      </div>

      {/* Right Margin Indicators */}
      <div className="hidden xl:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-10 select-none">
        <span className="text-xs font-bold font-serif text-[#6F1014]">01</span>
        <div className="w-[1px] h-12 bg-[#8C7462]/30" />
        <span className="text-xs font-bold font-serif text-[#8C7462]">02</span>
        <div className="w-[1px] h-12 bg-[#8C7462]/30" />
        <span className="text-xs font-bold font-serif text-[#8C7462]">03</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          {/* Top Capsule Pill Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#6F1014]/5 border border-[#6F1014]/15 text-[#6F1014] text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase shadow-2xs">
            <span>TRANSPARENT PRICING & ESTIMATES</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#171110]">
            EVENT DECOR <span className="text-[#6F1014]">CATALOGUE</span>
          </h2>

          {/* Diamond Line Separator */}
          <div className="flex items-center justify-center gap-3 text-[#6F1014]/40 py-1">
            <div className="w-12 h-[1px] bg-[#6F1014]/20" />
            <span className="text-xs">◆</span>
            <div className="w-12 h-[1px] bg-[#6F1014]/20" />
          </div>

          <p className="text-xs sm:text-sm text-[#6B5E52] max-w-xl mx-auto leading-relaxed">
            Explore our popular event decor offerings, stage packages, photo booths, and ceremonies with clear estimates.
          </p>
        </div>

        {/* EXACT STACKED CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 items-stretch">
          {visibleItems.map((item) => (
            <div key={item.id} className="relative group pt-3">
              {/* Dark Maroon Backdrop Card Layer */}
              <div className="absolute inset-0 bg-[#5A0C10] rounded-[2.2rem] translate-x-2 -translate-y-2 group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform duration-300 shadow-xl" />

              {/* Main Front Cream Card */}
              <div className="relative bg-[#FAF8F5] rounded-[2rem] p-5 sm:p-6 border border-[#EAE2D8] shadow-md flex flex-col justify-between h-full overflow-hidden">
                {/* Background Subtle Watermark Overlay */}
                <div className="absolute -right-6 -bottom-6 w-36 h-36 opacity-5 pointer-events-none rounded-full bg-[radial-gradient(#5A0C10_1px,transparent_1px)] [background-size:10px_10px]" />

                {/* Top Number Tab Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#8C7A6B]">
                    <span className="font-serif text-sm font-bold text-[#6F1014]">{item.number}</span>
                    <span>—</span>
                  </div>
                </div>

                {/* Image Frame with Embedded Maroon Pill Badge */}
                <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-5 shadow-inner bg-gray-200">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Embedded Maroon Pill Badge at Bottom Left */}
                  <div className="absolute bottom-3 left-3 bg-[#5A0C10]/95 backdrop-blur-md text-[#F2B93F] text-[9px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border border-[#F2B93F]/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F2B93F]" />
                    <span>{item.badge}</span>
                  </div>
                </div>

                {/* Card Main Body */}
                <div className="space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[10px] font-bold text-[#A88B70] uppercase tracking-[0.2em] mb-1">
                      {item.tagline}
                    </p>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-[#171110] leading-snug group-hover:text-[#6F1014] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#6B5E52] leading-relaxed mt-2 line-clamp-3">
                      {item.desc}
                    </p>
                  </div>

                  {/* Card Bottom Footer Row */}
                  <div className="pt-4 mt-4 border-t border-[#EAE2D8] flex items-end justify-between gap-2">
                    <div>
                      <p className="text-[9px] font-extrabold text-[#A88B70] uppercase tracking-wider">
                        {item.pricePrefix}
                      </p>
                      <p className="font-heading text-base sm:text-lg font-bold text-[#171110]">
                        {item.price}
                      </p>
                    </div>

                    <a
                      href={`https://wa.me/919946692100?text=${encodeURIComponent(`Hi Malabar Decorators, I want to book or enquire about ${item.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-[#5A0C10] hover:bg-[#7A1217] text-white text-[10px] font-bold tracking-widest uppercase flex items-center gap-1.5 shadow-md hover:shadow-lg transition-all shrink-0"
                    >
                      <span>BOOK NOW</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#F2B93F]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SLIDER / PAGINATION CONTROLS */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
            disabled={currentPage === 0}
            className="w-10 h-10 rounded-full bg-white border border-[#EAE2D8] text-[#5A0C10] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#5A0C10] hover:text-white flex items-center justify-center transition-all shadow-sm cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <span className="text-xs font-bold tracking-widest uppercase text-[#8C7462]">
            PAGE {currentPage + 1} OF {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))}
            disabled={currentPage === totalPages - 1}
            className="w-10 h-10 rounded-full bg-white border border-[#EAE2D8] text-[#5A0C10] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#5A0C10] hover:text-white flex items-center justify-center transition-all shadow-sm cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* BOTTOM ACTION BUTTONS & FOOTNOTE */}
        <div className="mt-12 text-center space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/catalogue"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#5A0C10] hover:bg-[#7A1217] text-white font-bold text-xs uppercase tracking-widest shadow-xl hover:shadow-2xl transition-all cursor-pointer group"
            >
              <span>Explore Complete Decor Page</span>
              <ArrowUpRight className="w-4 h-4 text-[#F2B93F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white border border-[#5A0C10]/30 text-[#5A0C10] hover:bg-[#5A0C10]/10 font-bold text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer"
            >
              <Tag className="w-3.5 h-3.5 text-[#5A0C10]" />
              <span>Full Price List Popup (20+ Items)</span>
            </button>
          </div>

          <p className="text-[11px] font-semibold text-[#8C7462] tracking-widest uppercase border-t border-[#EAE2D8] pt-6 max-w-lg mx-auto">
            — CURATED FOR EVERY CELEBRATION —
          </p>
        </div>

        {/* High-UX Glassmorphic Pricing Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-[#FAF6F0] rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-hidden border-2 border-[#5A0C10] shadow-2xl flex flex-col animate-in zoom-in-95 duration-300">
              {/* Modal Header */}
              <div className="bg-[#5A0C10] p-6 text-white flex items-center justify-between border-b border-[#7A1217]">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/10 text-[#F2B93F]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white">Event Decor Catalogue</h3>
                    <p className="text-xs text-[#F2B93F]">Transparent pricing & package estimates</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body / Table List */}
              <div className="p-6 overflow-y-auto space-y-3 flex-1">
                <p className="text-xs text-gray-600 mb-4 bg-white p-3 rounded-xl border border-[#EAE2D8]">
                  💡 <strong>Note:</strong> All rates mentioned are standard starting estimates. Custom packages with fresh flower options can be adjusted according to your venue and budget.
                </p>

                <div className="divide-y divide-[#EAE2D8] rounded-2xl border border-[#EAE2D8] bg-white overflow-hidden shadow-xs">
                  {fullCatalogue.map((item, idx) => (
                    <div key={idx} className="p-3.5 flex items-center justify-between text-xs hover:bg-[#FAF6F0] transition-colors">
                      <span className="font-semibold text-[#171110]">{item.name}</span>
                      <span className="font-bold text-[#5A0C10] bg-[#5A0C10]/10 px-3 py-1 rounded-full text-[11px] shrink-0 border border-[#5A0C10]/20">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-white border-t border-[#EAE2D8] flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-gray-600 font-medium">
                  Need a customized quote for your venue?
                </div>
                <a
                  href="tel:9946692100"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#5A0C10] hover:bg-[#7A1217] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call 9946692100</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
