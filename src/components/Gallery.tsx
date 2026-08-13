"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, Maximize2, X, ChevronRight, Camera } from "lucide-react";

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [activeFilter, setActiveFilter] = useState<string>("all");

    const galleryItems = [
        {
            id: 1,
            title: "Royal Nikah Stage Decor",
            category: "nikah",
            categoryLabel: "Nikah Stage",
            image: "/nikah_stage.png",
            span: "col-span-1 md:col-span-2 row-span-2",
        },
        {
            id: 2,
            title: "Authentic Malabar Dum Biriyani",
            category: "catering",
            categoryLabel: "Catering Feast",
            image: "/hero_biriyani.png",
            span: "col-span-1 row-span-1",
        },
        {
            id: 3,
            title: "Evening Lawn Reception Decor",
            category: "reception",
            categoryLabel: "Outdoor Reception",
            image: "/reception_decor.png",
            span: "col-span-1 row-span-1",
        },
        {
            id: 4,
            title: "Traditional Haldi Floral Stage",
            category: "traditional",
            categoryLabel: "Haldi Ceremony",
            image: "/haldi_decor.png",
            span: "col-span-1 row-span-1",
        },
        {
            id: 5,
            title: "SFX Low Fog & Cold Pyro Entry",
            category: "sfx",
            categoryLabel: "SFX Stage Pyrotechnics",
            image: "/sfx_stage.png",
            span: "col-span-1 md:col-span-2 row-span-1",
        },
        {
            id: 6,
            title: "Live Porotta & Appam Counter",
            category: "catering",
            categoryLabel: "Live Counter",
            image: "/live_counter.png",
            span: "col-span-1 row-span-1",
        },
        {
            id: 7,
            title: "Malabar Wedding Buffet Banquet",
            category: "catering",
            categoryLabel: "Banquet Catering",
            image: "/catering_spread.png",
            span: "col-span-1 row-span-1",
        },
    ];

    const filteredItems =
        activeFilter === "all"
            ? galleryItems
            : galleryItems.filter((item) => item.category === activeFilter);

    return (
        <section id="gallery" className="py-20 bg-[#F7F3EA] border-t border-b border-[#EFE8D7]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center max-w-3xl mx-auto space-y-3">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6F1014]/10 border border-[#6F1014]/20 text-[#6F1014] text-xs font-bold tracking-widest uppercase">
                        Real Event Showcase
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241B18]">
                        Work Gallery & Portfolio
                    </h2>
                    <div className="flex items-center justify-center gap-3">
                        <div className="h-0.5 w-12 bg-[#8B1E23]" />
                        <div className="w-2 h-2 rotate-45 bg-[#DFAE32]" />
                        <div className="h-0.5 w-12 bg-[#8B1E23]" />
                    </div>
                    <p className="text-sm text-[#241B18]/75">
                        A glimpse into actual weddings, Nikah stages, outdoor receptions, and catering spreads designed and served by Malabar Decorators.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-2 mt-8 mb-10">
                    {[
                        { id: "all", label: "All Portfolio" },
                        { id: "nikah", label: "Nikah & Stage" },
                        { id: "reception", label: "Reception Decor" },
                        { id: "traditional", label: "Haldi & Traditional" },
                        { id: "catering", label: "Food & Catering" },
                        { id: "sfx", label: "SFX Pyrotechnics" },
                    ].map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${activeFilter === filter.id
                                    ? "bg-[#6F1014] text-white border-[#6F1014] shadow-md"
                                    : "bg-white text-[#241B18] border-[#EFE8D7] hover:border-[#6F1014]/40"
                                }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Editorial Masonry Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[240px]">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => setSelectedImage(item.image)}
                            className={`relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-[#EFE8D7] group cursor-pointer bg-[#38070A] ${item.span}`}
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#171110]/90 via-[#171110]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                            {/* Category Pill */}
                            <span className="absolute top-3 left-3 bg-[#6F1014]/85 backdrop-blur-md border border-[#F2B93F]/40 text-[#F2B93F] text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-md">
                                {item.categoryLabel}
                            </span>

                            {/* Title Overlay */}
                            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                                <div>
                                    <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-[#F2B93F] transition-colors leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-[11px] text-[#FAF8F2]/75 mt-0.5 font-medium">
                                        Click to view full photo
                                    </p>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-[#6F1014]/80 border border-[#F2B93F]/50 flex items-center justify-center text-[#F2B93F] shrink-0 group-hover:scale-110 transition-transform">
                                    <Maximize2 className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lightbox Modal */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-2xl border-2 border-[#DFAE32] shadow-2xl">
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#6F1014] text-white hover:bg-[#8B1E23] transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <div className="relative w-full h-[70vh]">
                                <Image
                                    src={selectedImage}
                                    alt="Full size gallery item"
                                    fill
                                    className="object-contain bg-[#171110]"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
