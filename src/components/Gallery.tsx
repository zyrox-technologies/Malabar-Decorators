"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, Maximize2, X, ChevronDown } from "lucide-react";

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [activeFilter, setActiveFilter] = useState<string>("all");
    const [showAll, setShowAll] = useState<boolean>(false);

    const galleryItems = [
        {
            id: 1,
            title: "Royal Event Grand Stage",
            category: "nikah",
            categoryLabel: "Stage Decor",
            image: "/hero%20section/file_0000000021f881fab47cecc78e81a1e0.png",
            span: "col-span-1 md:col-span-2 row-span-2",
        },
        {
            id: 2,
            title: "Traditional Malabar Dum Biriyani",
            category: "catering",
            categoryLabel: "Catering",
            image: "/service/file_000000003f2081faa2f8fe4fef914b6c.png",
            span: "col-span-1 row-span-1",
        },
        {
            id: 3,
            title: "Outdoor Lawn Reception Setup",
            category: "reception",
            categoryLabel: "Reception",
            image: "/Decoration/file_00000000344c81fa850396f61fb9d12d.png",
            span: "col-span-1 row-span-1",
        },
        {
            id: 4,
            title: "Traditional Haldi & Mandap Decor",
            category: "traditional",
            categoryLabel: "Haldi",
            image: "/about/file_0000000066c881faa5f56fe5bdde9048.png",
            span: "col-span-1 row-span-1",
        },
        {
            id: 5,
            title: "SFX Low Fog Pyrotechnic Entry",
            category: "sfx",
            categoryLabel: "SFX",
            image: "/service/file_00000000b464820b963a97bd17a2c97d.png",
            span: "col-span-1 md:col-span-2 row-span-1",
        },
        {
            id: 6,
            title: "Custom Floral Entrance & Arch",
            category: "nikah",
            categoryLabel: "Stage Decor",
            image: "/Decoration/file_0000000015b881fa9bbbf4a93b5e22b6.png",
            span: "col-span-1 row-span-1",
        },
        {
            id: 7,
            title: "Grand Event Catering Spread",
            category: "catering",
            categoryLabel: "Catering",
            image: "/about/file_000000007b0c81fa8424c183306499a2.png",
            span: "col-span-1 row-span-1",
        },
        {
            id: 8,
            title: "Chandelier Stage Illumination",
            category: "reception",
            categoryLabel: "Reception",
            image: "/hero%20section/file_00000000dfd081fdb147914ac2fdda08.png",
            span: "col-span-1 row-span-1",
        },
        {
            id: 9,
            title: "Traditional Kerala Wedding Stage",
            category: "traditional",
            categoryLabel: "Traditional",
            image: "/Decoration/file_00000000e8f8820bb6b4b4dcaff4fbb3.png",
            span: "col-span-1 row-span-1",
        },
    ];

    const filteredItems =
        activeFilter === "all"
            ? galleryItems
            : galleryItems.filter((item) => item.category === activeFilter);

    const visibleItems = showAll ? filteredItems : filteredItems.slice(0, 5);

    return (
        <section id="gallery" className="py-12 sm:py-16 bg-[#FAF8F2] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Minimal Header */}
                <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6F1014]/10 border border-[#6F1014]/20 text-[#6F1014] text-xs font-bold tracking-widest uppercase">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Visual Portfolio</span>
                    </div>

                    <h2 className="font-display text-3xl sm:text-5xl font-bold">
                        <span className="dark-gradient-text">Selected</span> <span className="maroon-gradient-text">Works</span>
                    </h2>
                </div>

                {/* Minimal Segmented Filter Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white p-1.5 rounded-full shadow-md border border-[#EFE8D7] flex items-center gap-1 overflow-x-auto max-w-full no-scrollbar">
                        {[
                            { id: "all", label: "All" },
                            { id: "nikah", label: "Stage Decor" },
                            { id: "reception", label: "Reception" },
                            { id: "traditional", label: "Haldi" },
                            { id: "catering", label: "Catering" },
                            { id: "sfx", label: "SFX" },
                        ].map((filter) => (
                            <button
                                key={filter.id}
                                onClick={() => {
                                    setActiveFilter(filter.id);
                                    setShowAll(false);
                                }}
                                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                                    activeFilter === filter.id
                                        ? "bg-[#6F1014] text-[#F2B93F] shadow-sm scale-105"
                                        : "text-[#171110]/70 hover:text-[#6F1014]"
                                }`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Editorial Masonry Visual Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[250px] sm:auto-rows-[280px]">
                    {visibleItems.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => setSelectedImage(item.image)}
                            className={`relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-[#EFE8D7] hover:border-[#F2B93F] group cursor-pointer bg-[#171110] transition-all duration-500 hover:-translate-y-1 ${item.span}`}
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                            />
                            
                            {/* Minimal Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

                            {/* Minimal Tag Badge */}
                            <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-[#F2B93F]/40 text-[#F2B93F] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-md">
                                {item.categoryLabel}
                            </span>

                            {/* Minimal Title & Expand Action */}
                            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                                <div>
                                    <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-[#F2B93F] transition-colors leading-tight">
                                        {item.title}
                                    </h3>
                                </div>
                                <div className="w-9 h-9 rounded-full bg-[#6F1014]/90 border border-[#F2B93F]/60 flex items-center justify-center text-[#F2B93F] shrink-0 group-hover:scale-110 transition-transform shadow-md">
                                    <Maximize2 className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More / Show Less Toggle Button */}
                {filteredItems.length > 5 && (
                    <div className="mt-10 text-center">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#6F1014] hover:bg-[#8B1E23] border border-[#F2B93F]/40 text-white font-bold text-xs uppercase tracking-widest shadow-lg hover:shadow-xl transition-all cursor-pointer group"
                        >
                            <span>{showAll ? "Show Less Photos" : `View More Photos (${filteredItems.length - 5}+)`}</span>
                            <ChevronDown className={`w-4 h-4 text-[#F2B93F] transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
                        </button>
                    </div>
                )}

                {/* Minimal Glass Lightbox Modal */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden rounded-3xl border-2 border-[#F2B93F] shadow-2xl animate-in zoom-in-95 duration-300">
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-[#6F1014] text-[#F2B93F] border border-[#F2B93F]/50 hover:bg-[#8B1E23] transition-colors cursor-pointer"
                                aria-label="Close image"
                            >
                                <X className="w-5 h-5" />
                            </button>
                            <div className="relative w-full h-[75vh]">
                                <Image
                                    src={selectedImage}
                                    alt="Full size view"
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
