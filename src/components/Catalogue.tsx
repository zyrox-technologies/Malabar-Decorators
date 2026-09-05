"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Tag,
  Sparkles,
  X,
  Phone,
  ArrowUpRight,
  ShieldCheck,
  Sparkle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MessageCircle
} from "lucide-react";

export default function Catalogue() {
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const featuredItems = [
    {
      id: 0,
      title: "Premium Hindu Wedding Package",
      category: "Full Package",
      price: "₹1,00,000",
      desc: "Complete traditional mandap, heavy floral stage, royal seating, welcome arch & entrance lighting setup.",
      image: "/Decoration/file_0000000015b881fa9bbbf4a93b5e22b6.png",
      popular: true,
      cardStyle: "rounded-3xl border-2 border-[#DFAE32] shadow-[0_15px_40px_rgba(223,174,50,0.25)] bg-white",
      badge: "MOST POPULAR",
    },
    {
      id: 1,
      title: "Premium Outdoor Reception",
      category: "Reception Decor",
      price: "Starting from ₹50,000",
      desc: "Full lawn fairy light canopy, backdrop floral wall, carpet aisle, ambient spotlights & photo zone.",
      image: "/Decoration/file_00000000344c81fa850396f61fb9d12d.png",
      popular: true,
      cardStyle: "rounded-[2.5rem] border border-[#EFE8D7] shadow-lg bg-white",
      badge: "OUTDOOR FAVOURITE",
    },
    {
      id: 2,
      title: "Premium Light Stage Design",
      category: "Stage Lighting",
      price: "₹20,000 – ₹40,000",
      desc: "Intelligent warm spotlights, crystal chandelier fixtures, golden truss decor & backdrop illumination.",
      image: "/Decoration/file_00000000375c81fa9ee8f7a1a8a6fb43.png",
      popular: false,
      cardStyle: "rounded-2xl border border-[#EFE8D7] shadow-md bg-white -rotate-1 hover:rotate-0 transition-transform",
      badge: "STAGE LIGHTING",
    },
    {
      id: 3,
      title: "12 Feet Photo Booth Setup",
      category: "Photo Booth",
      price: "Starting from ₹8,000",
      desc: "Customized floral background frame, vintage props, wooden archway & vanity lighting.",
      image: "/Decoration/file_000000003934820ba9d16be60f892922.png",
      popular: false,
      cardStyle: "rounded-t-[4rem] rounded-b-3xl border border-[#EFE8D7] shadow-md bg-white",
      badge: "PHOTO ZONE",
    },
    {
      id: 4,
      title: "Traditional 2026 Kerala Stage",
      category: "Ceremony Decor",
      price: "Starting from ₹25,000",
      desc: "Fresh marigold garlands, brass oil lamps (Nilavilakku), urlis & wooden mandap pillars.",
      image: "/Decoration/file_00000000e8f8820bb6b4b4dcaff4fbb3.png",
      popular: false,
      cardStyle: "rounded-2xl border border-[#EFE8D7] shadow-md bg-white rotate-1 hover:rotate-0 transition-transform",
      badge: "TRADITIONAL",
    },
    {
      id: 5,
      title: "Inauguration & Corporate Decor",
      category: "Business Events",
      price: "Starting from ₹5,000",
      desc: "Ribbon cutting arch, podium floral styling, entrance welcome gate & carpeting.",
      image: "/Decoration/file_00000000ff5c81fab206a64f8a6c6766.png",
      popular: false,
      cardStyle: "rounded-3xl border border-[#EFE8D7] shadow-md bg-white",
      badge: "CORPORATE",
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

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? featuredItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === featuredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="catalogue" className="py-12 sm:py-16 bg-white relative overflow-hidden">
      {/* Elegantly Layered Background Geometric Fine-Line Art & Soft Glows */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="w-full h-full stroke-[#DFAE32]/30 fill-none" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <circle cx="200" cy="150" r="300" strokeWidth="0.8" strokeDasharray="4 4" />
          <circle cx="1240" cy="650" r="350" strokeWidth="0.8" strokeDasharray="4 4" />
          <path d="M-100,200 Q400,50 900,300 T1600,100" strokeWidth="1" />
          <path d="M-100,500 Q500,750 1100,450 T1600,600" strokeWidth="0.8" />
        </svg>
      </div>

      {/* Decorative Sparkle Accents */}
      <div className="absolute top-12 left-10 text-[#DFAE32]/40 animate-pulse">
        <Sparkle className="w-6 h-6" />
      </div>
      <div className="absolute top-20 right-16 text-[#DFAE32]/40 animate-pulse">
        <Sparkles className="w-5 h-5" />
      </div>
      <div className="absolute bottom-16 left-1/4 text-[#DFAE32]/30">
        <Sparkle className="w-5 h-5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#6F1014]/10 border border-[#6F1014]/20 text-[#6F1014] text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Collections for Your Exquisite Event</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="dark-gradient-text uppercase">EVENT DECOR</span>{" "}
            <span className="maroon-gradient-text uppercase">CATALOGUE</span>
          </h2>

          <p className="text-xs sm:text-sm text-gray-600 font-medium">
            Explore our handcrafted wedding stages, outdoor lawns, photo booths & ceremonial decor setups.
          </p>
        </div>

        {/* GEMINI SHOWCASE CAROUSEL CONTAINER */}
        <div className="relative pt-4 pb-8">
          {/* Main Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {featuredItems.map((item, idx) => {
              const isActive = idx === activeIndex;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`cursor-pointer transition-all duration-500 p-6 flex flex-col justify-between relative group ${item.cardStyle} ${
                    isActive
                      ? "ring-2 ring-[#DFAE32] shadow-2xl scale-[1.02] border-[#DFAE32]"
                      : "opacity-90 hover:opacity-100 hover:scale-[1.01]"
                  }`}
                >
                  {/* Top Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#6F1014] bg-[#6F1014]/10 px-3 py-1 rounded-full border border-[#6F1014]/20">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-bold text-[#DFAE32] bg-[#38070A] px-2.5 py-0.5 rounded-full border border-[#DFAE32]/40 shadow-xs">
                      {item.badge}
                    </span>
                  </div>

                  {/* Image Cutout Container */}
                  <div className="relative w-full h-52 mb-5 overflow-hidden rounded-2xl bg-gray-100 shadow-inner">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <span className="text-xs font-bold bg-[#6F1014]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#F2B93F]/40 shadow-md">
                        {item.price}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2.5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-[#171110] group-hover:text-[#6F1014] transition-colors leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed mt-1 line-clamp-2">
                        {item.desc}
                      </p>
                    </div>

                    {/* Explore CTA Button inside Card */}
                    <div className="pt-4 border-t border-[#EFE8D7] flex items-center justify-between">
                      <a
                        href={`https://wa.me/919946692100?text=${encodeURIComponent(`Hi Malabar Decorators, I want to enquiry about ${item.title}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-4 py-2 rounded-xl bg-[#6F1014] hover:bg-[#8B1E23] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md hover:shadow-lg transition-all group/btn"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-white" />
                        <span>Enquire</span>
                      </a>

                      <span className="text-[11px] font-bold text-[#6F1014] uppercase tracking-wider flex items-center gap-1">
                        <span>Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Slider Controls & Progress Indicator */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 px-2">
            {/* Left/Right Arrows */}
            <div className="flex items-center gap-3 order-2 sm:order-1">
              <button
                onClick={handlePrev}
                aria-label="Previous Decor"
                className="w-10 h-10 rounded-full bg-white border border-[#EFE8D7] shadow-md hover:border-[#6F1014] text-[#171110] hover:text-[#6F1014] flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Decor"
                className="w-10 h-10 rounded-full bg-white border border-[#EFE8D7] shadow-md hover:border-[#6F1014] text-[#171110] hover:text-[#6F1014] flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="w-48 h-1.5 bg-gray-200 rounded-full overflow-hidden order-1 sm:order-2">
              <div
                className="h-full bg-gradient-to-r from-[#6F1014] via-[#DFAE32] to-[#F2B93F] transition-all duration-300 rounded-full"
                style={{ width: `${((activeIndex + 1) / featuredItems.length) * 100}%` }}
              />
            </div>

            {/* Pagination numbers */}
            <div className="text-xs font-bold text-gray-500 order-3">
              <span className="text-[#6F1014]">{String(activeIndex + 1).padStart(2, "0")}</span> / {String(featuredItems.length).padStart(2, "0")}
            </div>
          </div>
        </div>

        {/* CENTER MAIN CTA BUTTON ("Discover Your Feast / Decor") */}
        <div className="mt-10 text-center space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/catalogue"
              className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full bg-gradient-to-r from-[#DFAE32] via-[#F2B93F] to-[#DFAE32] text-[#38070A] font-bold text-xs uppercase tracking-widest shadow-xl hover:shadow-2xl hover:brightness-110 active:scale-95 transition-all cursor-pointer group"
            >
              <Sparkles className="w-4 h-4 text-[#38070A]" />
              <span>Discover Your Decor</span>
              <ArrowRight className="w-4 h-4 text-[#38070A] group-hover:translate-x-1 transition-transform" />
            </Link>

            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white border-2 border-[#6F1014] text-[#6F1014] hover:bg-[#6F1014] hover:text-[#F2B93F] font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <Tag className="w-4 h-4" />
              <span>Quick Rates Popup (20+ Items)</span>
            </button>
          </div>

          <p className="text-xs text-gray-500 max-w-lg mx-auto leading-relaxed">
            Explore our curated packages. Click to view detailed decor setups, customized themes and pricing options.
          </p>
        </div>

        {/* High-UX Glassmorphic Pricing Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-[#FAF8F2] rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-hidden border-2 border-[#F2B93F] shadow-2xl flex flex-col animate-in zoom-in-95 duration-300">
              {/* Modal Header */}
              <div className="bg-[#6F1014] p-6 text-white flex items-center justify-between border-b border-[#8B1E23]">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#F2B93F]/20 border border-[#F2B93F]/40 text-[#F2B93F]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white">Event Decor Catalogue</h3>
                    <p className="text-xs text-[#F2B93F]">Complete transparent price list & add-ons</p>
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
                <p className="text-xs text-gray-600 mb-4 bg-white p-3 rounded-xl border border-[#EFE8D7]">
                  💡 <strong>Note:</strong> All rates mentioned are standard starting estimates. Custom packages with fresh flower options can be adjusted according to your budget.
                </p>

                <div className="divide-y divide-[#EFE8D7] rounded-2xl border border-[#EFE8D7] bg-white overflow-hidden shadow-xs">
                  {fullCatalogue.map((item, idx) => (
                    <div key={idx} className="p-3.5 flex items-center justify-between text-xs hover:bg-[#FAF8F2] transition-colors">
                      <span className="font-semibold text-[#171110]">{item.name}</span>
                      <span className="font-bold text-[#6F1014] bg-[#6F1014]/10 px-3 py-1 rounded-full text-[11px] shrink-0 border border-[#6F1014]/20">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-white border-t border-[#EFE8D7] flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-gray-600 font-medium">
                  Need a customized quote for your venue?
                </div>
                <a
                  href="tel:9946692100"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#6F1014] hover:bg-[#8B1E23] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
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
