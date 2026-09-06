"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Services() {
    const [activeCategory, setActiveCategory] = useState<"all" | "decor" | "catering" | "sfx">("all");

    const serviceCategories = [
        { id: "all", label: "All Services" },
        { id: "decor", label: "Event & Stage Decor" },
        { id: "catering", label: "Malabar Catering" },
        { id: "sfx", label: "Special Effects (SFX)" },
    ];

    const services = [
        {
            category: "decor",
            tag: "Wedding & Stage",
            title: "Nikah & Reception Stage Decor",
            desc: "Royal wedding stage designs with premium floral backdrop, chandelier lighting, luxury plush seating, white & gold drapery.",
            image: "/service/file_00000000031081fa834f12ca0ea5b50d.png",
            price: "Starting from ₹20,000",
        },
        {
            category: "catering",
            tag: "Authentic Cuisine",
            title: "Grand Wedding & Event Catering",
            desc: "Famous Malabar Dum Biriyani, Ghee Rice, Porotta, Neypathal, Live Appam stations, authentic curries and traditional payasam desserts.",
            image: "/service/file_000000003f2081faa2f8fe4fef914b6c.png",
            price: "Custom Packages per Plate",
        },
        {
            category: "decor",
            tag: "Traditional Ceremony",
            title: "Haldi, Mehendi & Traditional Decor",
            desc: "Vibrant traditional yellow and gold stage drapes, marigold flower arrangements, brass urlis, wooden swings and floral backdrops.",
            image: "/service/file_0000000074e881fa996b7468b88652b4.png",
            price: "Starting from ₹12,000",
        },
        {
            category: "decor",
            tag: "Outdoor Luxury",
            title: "Premium Outdoor & Destination Decor",
            desc: "Romantic evening lawn and beachside setups featuring fairy light canopies, welcome entrance arches, photo booths and floral aisles.",
            image: "/service/file_000000009420820b9bff46071f57ae0d.png",
            price: "Starting from ₹50,000",
        },
        {
            category: "sfx",
            tag: "Stage Pyrotechnics",
            title: "SFX Special Effects & Grand Entries",
            desc: "Transform your bride and groom stage entry with low heavy fog smoke clouds, cold pyro sparklers, cold fire fountains and confetti pops.",
            image: "/service/file_00000000b464820b963a97bd17a2c97d.png",
            price: "Popular Add-On",
        },
        {
            category: "catering",
            tag: "Live Food Station",
            title: "Live Cooking & Beverage Counters",
            desc: "Interactive live cooking stations serving hot Neypathal, Dosa, Jalebi, Mysore Pak, fresh watermelon/grape juices and Malabar Colour Tea.",
            image: "/service/file_00000000eb9881fab921c9342b3b0d2b.png",
            price: "Included in Premier Packages",
        },
    ];

    const allOtherServicesList = [
        "Engagement Decor",
        "Birthday & Party Decor",
        "Cradle Ceremony Decor",
        "House Warming Decor",
        "Inauguration & Corporate Decor",
        "Groom To Be / Bride To Be Decor",
        "Car & Vehicle Floral Decor",
        "Valakappu & Ear Piercing Ceremonies",
        "Wedding Garlands & Floral Bouquets",
        "Corporate Banquet Catering",
        "Family Function Catering",
        "Religious Function Catering",
    ];

    const filteredServices =
        activeCategory === "all"
            ? services
            : services.filter((s) => s.category === activeCategory);

    return (
        <section id="services" className="py-12 sm:py-16 bg-[#0E0A09] text-white relative overflow-hidden border-t border-b border-[#F2B93F]/20">
            {/* Ambient Background Glow Effects */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#6F1014]/20 rounded-full blur-[130px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6F1014]/70 border border-[#F2B93F]/40 text-[#F2B93F] text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-md">
                        <span>Complete Event Solutions</span>
                    </div>

                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                        Our <span className="gold-gradient-text">Premium Services</span>
                    </h2>

                    <div className="flex items-center justify-center gap-3 py-1">
                        <div className="h-0.5 w-12 bg-gradient-to-r from-transparent to-[#F2B93F]" />
                        <div className="w-2 h-2 rotate-45 bg-[#F2B93F]" />
                        <div className="h-0.5 w-12 bg-gradient-to-r from-[#F2B93F] to-transparent" />
                    </div>

                    <p className="text-sm sm:text-base text-[#FAF8F2]/80 leading-relaxed max-w-2xl mx-auto">
                        Malabar Decorators provides full end-to-end event management: from mouthwatering authentic Malabar catering to breathtaking stage decor and special effects.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 mt-8 sm:mt-10 mb-10 sm:mb-12 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
                    <div className="bg-[#171110]/90 border border-[#F2B93F]/30 p-1.5 rounded-2xl flex items-center gap-2 backdrop-blur-xl shadow-xl">
                        {serviceCategories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id as any)}
                                className={`px-4 sm:px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer ${
                                    activeCategory === cat.id
                                        ? "bg-gradient-to-r from-[#DFAE32] to-[#F2B93F] text-[#171110] shadow-md scale-105"
                                        : "text-[#FAF8F2]/80 hover:text-white hover:bg-white/10"
                                }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Sleek Compact Horizontal Glass Capsule Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filteredServices.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-gradient-to-r from-[#1E1413]/90 to-[#120B0A]/95 rounded-2xl border border-[#F2B93F]/25 hover:border-[#F2B93F]/70 overflow-hidden shadow-xl hover:shadow-[0_0_30px_rgba(242,185,63,0.2)] transition-all duration-300 flex flex-col sm:flex-row hover:-translate-y-1 backdrop-blur-xl"
                        >
                            {/* Left Side: Clean Image Frame - Absolutely No Text Overlay */}
                            <div className="relative w-full sm:w-5/12 h-44 sm:h-auto min-h-[170px] overflow-hidden bg-[#38070A] shrink-0">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-transparent via-transparent to-[#1E1413]/90 opacity-60" />
                            </div>

                            {/* Right Side: Compact Content Details */}
                            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
                                <div className="space-y-2">
                                    {/* Category Tag & Price Pill Bar */}
                                    <div className="flex items-center justify-between gap-2 text-[11px] font-bold">
                                        <span className="px-2.5 py-0.5 rounded-md bg-[#6F1014] border border-[#F2B93F]/40 text-[#F2B93F] uppercase tracking-wider">
                                            {service.tag}
                                        </span>
                                        <span className="text-[#FAF8F2]/70 font-mono text-[11px]">
                                            {service.price}
                                        </span>
                                    </div>

                                    {/* Service Title */}
                                    <h3 className="font-display text-lg font-bold text-white group-hover:text-[#F2B93F] transition-colors leading-snug pt-1">
                                        {service.title}
                                    </h3>

                                    {/* Short Description */}
                                    <p className="text-xs text-[#FAF8F2]/75 line-clamp-2 leading-relaxed font-normal">
                                        {service.desc}
                                    </p>
                                </div>

                                {/* Compact Action Button */}
                                <div className="pt-2">
                                    <a
                                        href="#contact"
                                        className="w-full py-2.5 rounded-xl bg-[#6F1014] hover:bg-[#8B1E23] border border-[#F2B93F]/40 text-white text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-md group-hover:border-[#F2B93F]"
                                    >
                                        <span>Enquire Service</span>
                                        <ArrowRight className="w-3.5 h-3.5 text-[#F2B93F] group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Services Auto-Scrolling Marquee Ticker */}
                <div className="mt-16 bg-gradient-to-r from-[#4E0A0D] via-[#6F1014] to-[#4E0A0D] rounded-2xl py-8 px-6 text-white shadow-xl border border-[#DFAE32]/40 overflow-hidden relative backdrop-blur-xl">
                    <div className="text-center space-y-2 mb-6 px-4">
                        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F2B93F] uppercase tracking-widest">
                            <span>Comprehensive Event Offerings</span>
                        </div>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                            Custom Catering & Event Solutions
                        </h3>
                        <p className="text-xs text-[#FAF8F2]/80 max-w-xl mx-auto">
                            Whatever the occasion, Malabar Decorators handles complete setup, decoration, theme styling, and catering.
                        </p>
                    </div>

                    {/* Auto Scrolling Marquee Track */}
                    <div className="relative w-full overflow-hidden">
                        {/* Gradient Fade Edges */}
                        <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#4E0A0D] to-transparent z-10 pointer-events-none" />
                        <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#4E0A0D] to-transparent z-10 pointer-events-none" />

                        <div className="animate-marquee gap-3 py-2">
                            {[...allOtherServicesList, ...allOtherServicesList].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-[#38070A]/90 border border-[#F2B93F]/40 px-5 py-2 rounded-full text-[#FAF8F2] text-xs font-bold whitespace-nowrap flex items-center gap-2 shadow-md hover:border-[#F2B93F] hover:bg-[#8B1E23] transition-all cursor-pointer shrink-0 group"
                                >
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* View Full Services Page Navigation CTA */}
                <div className="mt-12 text-center">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#DFAE32] to-[#F2B93F] text-[#38070A] font-bold text-xs uppercase tracking-widest shadow-xl hover:shadow-2xl hover:brightness-110 active:scale-95 transition-all cursor-pointer group"
                    >
                        <span>Explore All Services & Special Packages</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
