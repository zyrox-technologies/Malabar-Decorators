"use client";

import { useState } from "react";
import Image from "next/image";
import { Tag, Sparkles, X, Phone, ArrowUpRight, ShieldCheck, Sparkle } from "lucide-react";

export default function Catalogue() {
    const [showModal, setShowModal] = useState(false);

    const featuredItems = [
        {
            title: "Premium Hindu Wedding Package",
            category: "Full Package",
            price: "₹1,00,000",
            desc: "Complete traditional mandap, heavy floral stage, royal seating, welcome arch & entrance lighting setup.",
            image: "/Decoration/file_0000000015b881fa9bbbf4a93b5e22b6.png",
            popular: true,
        },
        {
            title: "Premium Outdoor Reception",
            category: "Reception Decor",
            price: "Starting from ₹50,000",
            desc: "Full lawn fairy light canopy, backdrop floral wall, carpet aisle, ambient spotlights & photo zone.",
            image: "/Decoration/file_00000000344c81fa850396f61fb9d12d.png",
            popular: true,
        },
        {
            title: "Premium Light Stage Design",
            category: "Stage Lighting",
            price: "₹20,000 – ₹40,000",
            desc: "Intelligent warm spotlights, crystal chandelier fixtures, golden truss decor & backdrop illumination.",
            image: "/Decoration/file_00000000375c81fa9ee8f7a1a8a6fb43.png",
            popular: false,
        },
        {
            title: "12 Feet Photo Booth Setup",
            category: "Photo Booth",
            price: "Starting from ₹8,000",
            desc: "Customized floral background frame, vintage props, wooden archway & vanity lighting.",
            image: "/Decoration/file_000000003934820ba9d16be60f892922.png",
            popular: false,
        },
        {
            title: "Traditional 2026 Hindu Stage",
            category: "Ceremony Decor",
            price: "Starting from ₹25,000",
            desc: "Fresh marigold garlands, brass oil lamps (Nilavilakku), urlis & wooden mandap pillars.",
            image: "/Decoration/file_00000000e8f8820bb6b4b4dcaff4fbb3.png",
            popular: false,
        },
        {
            title: "Inauguration & Corporate Decor",
            category: "Business Events",
            price: "Starting from ₹5,000",
            desc: "Ribbon cutting arch, podium floral styling, entrance welcome gate & carpeting.",
            image: "/Decoration/file_00000000ff5c81fab206a64f8a6c6766.png",
            popular: false,
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

    return (
        <section id="catalogue" className="py-24 sm:py-32 bg-gradient-to-b from-[#FAF8F2] via-[#F6F1E5] to-[#FAF8F2] relative overflow-hidden">
            {/* Ambient Background Radial Glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[#F2B93F]/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#6F1014]/10 border border-[#6F1014]/20 text-[#6F1014] text-xs font-bold tracking-widest uppercase">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Transparent Pricing & Estimates</span>
                    </div>

                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
                        <span className="dark-gradient-text">Event Decor</span> <span className="maroon-gradient-text">Catalogue</span>
                    </h2>

                    <div className="flex items-center justify-center gap-3">
                        <div className="h-0.5 w-12 bg-[#6F1014]" />
                        <div className="w-2.5 h-2.5 rotate-45 bg-[#F2B93F]" />
                        <div className="h-0.5 w-12 bg-[#6F1014]" />
                    </div>

                    <p className="text-sm sm:text-base text-[#171110]/75 max-w-2xl mx-auto font-normal">
                        Explore our popular event decor offerings, stage packages, photo booths, and ceremonies with clear estimates.
                    </p>
                </div>

                {/* Animated Featured Catalogue Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 sm:mt-16">
                    {featuredItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="group bg-white rounded-3xl overflow-hidden border border-[#EFE8D7] hover:border-[#F2B93F] shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(111,16,20,0.14)] transition-all duration-500 flex flex-col justify-between hover:-translate-y-2 relative"
                        >
                            {/* Top Golden Border Accent */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F2B93F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

                            <div>
                                {/* Image Container */}
                                <div className="relative h-56 bg-[#38070A] overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#171110]/90 via-[#171110]/20 to-transparent" />

                                    {/* Popular Badge */}
                                    {item.popular && (
                                        <div className="absolute top-3.5 right-3.5 z-10 bg-gradient-to-r from-[#DFAE32] to-[#F2B93F] text-[#38070A] text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5 border border-white/40">
                                            <Sparkles className="w-3 h-3 fill-current animate-pulse" />
                                            <span>Popular Choice</span>
                                        </div>
                                    )}

                                    {/* Category Tag Badge */}
                                    <span className="absolute bottom-3.5 left-4 z-10 text-[11px] font-bold text-[#F2B93F] tracking-wider uppercase bg-[#171110]/85 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#F2B93F]/40 shadow-md">
                                        {item.category}
                                    </span>
                                </div>

                                {/* Content Details */}
                                <div className="p-6 sm:p-7 space-y-3">
                                    <h3 className="font-display font-bold text-xl text-[#171110] group-hover:text-[#6F1014] transition-colors leading-snug">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-[#171110]/75 leading-relaxed font-normal">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>

                            {/* Card Footer: Price & Direct Booking Button */}
                            <div className="p-6 sm:p-7 pt-0">
                                <div className="p-4 rounded-2xl bg-[#FAF8F2] border border-[#EFE8D7] flex items-center justify-between gap-3">
                                    <div>
                                        <span className="text-[10px] uppercase text-[#6F1014] font-bold tracking-wider block">
                                            Estimated Rate
                                        </span>
                                        <span className="font-display font-bold text-base sm:text-lg text-[#6F1014]">
                                            {item.price}
                                        </span>
                                    </div>
                                    <a
                                        href="tel:9946692100"
                                        className="px-4 py-2.5 rounded-xl bg-[#6F1014] hover:bg-[#8B1E23] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md hover:shadow-lg transition-all group/btn"
                                    >
                                        <span>Book</span>
                                        <ArrowUpRight className="w-3.5 h-3.5 text-[#F2B93F] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View Full Catalogue CTA Button */}
                <div className="mt-16 text-center">
                    <button
                        onClick={() => setShowModal(true)}
                        className="inline-flex items-center gap-2.5 px-9 py-4 rounded-2xl bg-gradient-to-r from-[#DFAE32] to-[#F2B93F] text-[#38070A] font-bold text-xs uppercase tracking-widest shadow-xl hover:shadow-2xl hover:brightness-110 active:scale-95 transition-all cursor-pointer group"
                    >
                        <Tag className="w-4 h-4 text-[#38070A]" />
                        <span>View Full Pricing Catalogue (20+ Offerings)</span>
                        <Sparkle className="w-4 h-4 text-[#38070A] group-hover:rotate-90 transition-transform duration-300" />
                    </button>
                </div>

                {/* High-UX Glassmorphic Pricing Modal */}
                {showModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-300">
                        <div className="bg-[#FAF8F2] rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-hidden border-2 border-[#F2B93F] shadow-2xl flex flex-col animate-in zoom-in-95 duration-300">
                            {/* Modal Header */}
                            <div className="bg-[#6F1014] p-6 text-white flex items-center justify-between border-b border-[#8B1E23]">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#F2B93F] mb-1">
                                        <ShieldCheck className="w-3.5 h-3.5" />
                                        <span>Malabar Decorators Official Rates</span>
                                    </div>
                                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                                        Complete Event Decor Pricing
                                    </h3>
                                    <p className="text-xs text-[#FAF8F2]/80 mt-0.5">
                                        Starting estimates for stage setups, photo booths & ceremonies
                                    </p>
                                </div>
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="p-2 rounded-xl bg-[#8B1E23] hover:bg-[#A2272E] text-white transition-colors cursor-pointer"
                                    aria-label="Close modal"
                                >
                                    <X className="w-5 h-5 text-[#F2B93F]" />
                                </button>
                            </div>

                            {/* Modal Body */}
                            <div className="p-4 sm:p-6 overflow-y-auto space-y-2.5 divide-y divide-[#EFE8D7]">
                                {fullCatalogue.map((item, idx) => (
                                    <div key={idx} className="pt-3 first:pt-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 text-xs sm:text-sm hover:bg-white/60 p-2 rounded-xl transition-colors">
                                        <div className="flex items-center gap-2.5 font-medium text-[#171110]">
                                            <div className="w-2 h-2 rounded-full bg-[#6F1014] shrink-0" />
                                            <span>{item.name}</span>
                                        </div>
                                        <span className="font-bold text-[#6F1014] bg-[#6F1014]/10 px-3 py-1 rounded-full text-xs self-start sm:self-auto shrink-0 border border-[#6F1014]/20">
                                            {item.price}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Modal Footer */}
                            <div className="bg-white p-4 sm:p-5 border-t border-[#EFE8D7] flex flex-col sm:flex-row items-center justify-between gap-3">
                                <p className="text-xs text-[#171110]/80 font-medium text-center sm:text-left">
                                    Custom themes & package discounts available on request.
                                </p>
                                <a
                                    href="tel:9946692100"
                                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#6F1014] hover:bg-[#8B1E23] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                                >
                                    <Phone className="w-3.5 h-3.5 text-[#F2B93F]" />
                                    <span>Call 99466 92100</span>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
