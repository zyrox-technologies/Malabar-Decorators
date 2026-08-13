"use client";

import { useState } from "react";
import Image from "next/image";
import { Tag, Sparkles, X, Check, Phone, ArrowUpRight } from "lucide-react";

export default function Catalogue() {
    const [showModal, setShowModal] = useState(false);

    const featuredItems = [
        {
            title: "Premium Hindu Wedding Package",
            category: "Full Package",
            price: "₹1,00,000",
            desc: "Complete traditional mandap, heavy floral stage, royal seating, welcome arch & entrance lighting setup.",
            image: "/nikah_stage.png",
            popular: true,
        },
        {
            title: "Premium Outdoor Reception",
            category: "Reception Decor",
            price: "Starting from ₹50,000",
            desc: "Full lawn fairy light canopy, backdrop floral wall, carpet aisle, ambient spotlights & photo zone.",
            image: "/reception_decor.png",
            popular: true,
        },
        {
            title: "Premium Light Stage Design",
            category: "Stage Lighting",
            price: "₹20,000 – ₹40,000",
            desc: "Intelligent warm spotlights, crystal chandelier fixtures, golden truss decor & backdrop illumination.",
            image: "/sfx_stage.png",
            popular: false,
        },
        {
            title: "12 Feet Photo Booth Setup",
            category: "Photo Booth",
            price: "Starting from ₹8,000",
            desc: "Customized floral background frame, vintage props, wooden archway & vanity lighting.",
            image: "/haldi_decor.png",
            popular: false,
        },
        {
            title: "Traditional 2026 Hindu Stage",
            category: "Ceremony Decor",
            price: "Starting from ₹25,000",
            desc: "Fresh marigold garlands, brass oil lamps (Nilavilakku), urlis & wooden mandap pillars.",
            image: "/haldi_decor.png",
            popular: false,
        },
        {
            title: "Inauguration & Corporate Decor",
            category: "Business Events",
            price: "Starting from ₹5,000",
            desc: "Ribbon cutting arch, podium floral styling, entrance welcome gate & carpeting.",
            image: "/live_counter.png",
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
        <section id="catalogue" className="py-20 bg-[#FAF8F2]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto space-y-3">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6F1014]/10 border border-[#6F1014]/20 text-[#6F1014] text-xs font-bold tracking-widest uppercase">
                        Transparent Pricing & Packages
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241B18]">
                        Event Decor Catalogue
                    </h2>
                    <div className="flex items-center justify-center gap-3">
                        <div className="h-0.5 w-12 bg-[#8B1E23]" />
                        <div className="w-2 h-2 rotate-45 bg-[#DFAE32]" />
                        <div className="h-0.5 w-12 bg-[#8B1E23]" />
                    </div>
                    <p className="text-sm text-[#241B18]/75">
                        Explore our popular event decor offerings, stage packages, photo booths, and ceremonies with clear estimates.
                    </p>
                </div>

                {/* Featured Catalogue Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    {featuredItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl overflow-hidden border border-[#EFE8D7] shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group relative"
                        >
                            {item.popular && (
                                <div className="absolute top-3 right-3 z-10 bg-[#DFAE32] text-[#38070A] text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md flex items-center gap-1">
                                    <Sparkles className="w-3 h-3 fill-current" />
                                    <span>Popular Choice</span>
                                </div>
                            )}
                            <div className="relative h-48 bg-[#38070A] overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#171110]/80 via-transparent to-transparent" />
                                <span className="absolute bottom-3 left-4 text-xs font-bold text-[#F2B93F] tracking-wide bg-[#6F1014]/80 px-2.5 py-0.5 rounded-full border border-[#F2B93F]/30">
                                    {item.category}
                                </span>
                            </div>

                            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                                <div>
                                    <h3 className="font-display font-bold text-lg text-[#241B18]">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-[#241B18]/75 mt-1 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>

                                <div className="pt-3 border-t border-[#F7F3EA] flex items-center justify-between">
                                    <div>
                                        <span className="text-[10px] uppercase text-[#6F1014] font-bold block">
                                            Estimated Rate
                                        </span>
                                        <span className="font-display font-bold text-base text-[#6F1014]">
                                            {item.price}
                                        </span>
                                    </div>
                                    <a
                                        href="tel:9946692100"
                                        className="px-3.5 py-1.5 rounded-lg bg-[#6F1014] hover:bg-[#8B1E23] text-white text-xs font-bold flex items-center gap-1 shadow-sm"
                                    >
                                        <span>Book</span>
                                        <ArrowUpRight className="w-3.5 h-3.5 text-[#F2B93F]" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View Full Catalogue CTA Button */}
                <div className="mt-12 text-center">
                    <button
                        onClick={() => setShowModal(true)}
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#DFAE32] to-[#F2B93F] text-[#38070A] font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl hover:brightness-110 transition-all"
                    >
                        <Tag className="w-4 h-4" />
                        <span>View Full Pricing Catalogue (20+ Offerings)</span>
                    </button>
                </div>

                {/* Modal for Full Catalogue */}
                {showModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
                        <div className="bg-[#FAF8F2] rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden border-2 border-[#DFAE32] shadow-2xl flex flex-col">
                            {/* Modal Header */}
                            <div className="bg-[#6F1014] p-5 text-white flex items-center justify-between border-b border-[#8B1E23]">
                                <div>
                                    <h3 className="font-display font-bold text-xl text-[#F2B93F]">
                                        Complete Event Decor & Service Pricing
                                    </h3>
                                    <p className="text-xs text-[#FAF8F2]/80 mt-0.5">
                                        Official catalogue starting rates — Malabar Decorators Kannur
                                    </p>
                                </div>
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="p-1.5 rounded-lg bg-[#8B1E23] hover:bg-[#A2272E] text-white transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Modal Body */}
                            <div className="p-6 overflow-y-auto space-y-3 divide-y divide-[#EFE8D7]">
                                {fullCatalogue.map((item, idx) => (
                                    <div key={idx} className="pt-3 first:pt-0 flex items-center justify-between gap-4 text-xs sm:text-sm">
                                        <div className="flex items-center gap-2 font-medium text-[#241B18]">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#8B1E23]" />
                                            <span>{item.name}</span>
                                        </div>
                                        <span className="font-bold text-[#6F1014] bg-[#6F1014]/10 px-2.5 py-1 rounded-md text-xs">
                                            {item.price}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Modal Footer */}
                            <div className="bg-[#F7F3EA] p-4 border-t border-[#EFE8D7] flex flex-col sm:flex-row items-center justify-between gap-3">
                                <p className="text-xs text-[#241B18]/80 font-medium">
                                    Custom themes & package discounts available on request.
                                </p>
                                <a
                                    href="tel:9946692100"
                                    className="w-full sm:w-auto px-5 py-2 rounded-lg bg-[#6F1014] hover:bg-[#8B1E23] text-white text-xs font-bold flex items-center justify-center gap-2 shadow"
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
