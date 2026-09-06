"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Maximize2, X, ChevronRight, ChevronLeft } from "lucide-react";

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [activeFilter, setActiveFilter] = useState<string>("all");
    const [isPaused, setIsPaused] = useState<boolean>(false);

    const scrollRefRow1 = useRef<HTMLDivElement>(null);
    const scrollRefRow2 = useRef<HTMLDivElement>(null);

    const galleryItems = [
        {
            id: 1,
            title: "Royal Event Grand Stage",
            category: "nikah",
            categoryLabel: "Stage Decor",
            image: "/hero%20section/file_0000000021f881fab47cecc78e81a1e0.png",
        },
        {
            id: 2,
            title: "Traditional Malabar Dum Biriyani",
            category: "catering",
            categoryLabel: "Catering",
            image: "/service/file_000000003f2081faa2f8fe4fef914b6c.png",
        },
        {
            id: 3,
            title: "Outdoor Lawn Reception Setup",
            category: "reception",
            categoryLabel: "Reception",
            image: "/Decoration/file_00000000344c81fa850396f61fb9d12d.png",
        },
        {
            id: 4,
            title: "Traditional Haldi & Mandap Decor",
            category: "traditional",
            categoryLabel: "Haldi",
            image: "/about/file_0000000066c881faa5f56fe5bdde9048.png",
        },
        {
            id: 5,
            title: "SFX Low Fog Pyrotechnic Entry",
            category: "sfx",
            categoryLabel: "SFX",
            image: "/service/file_00000000b464820b963a97bd17a2c97d.png",
        },
        {
            id: 6,
            title: "Custom Floral Entrance & Arch",
            category: "nikah",
            categoryLabel: "Stage Decor",
            image: "/Decoration/file_0000000015b881fa9bbbf4a93b5e22b6.png",
        },
        {
            id: 7,
            title: "Grand Event Catering Spread",
            category: "catering",
            categoryLabel: "Catering",
            image: "/about/file_000000007b0c81fa8424c183306499a2.png",
        },
        {
            id: 8,
            title: "Chandelier Stage Illumination",
            category: "reception",
            categoryLabel: "Reception",
            image: "/hero%20section/file_00000000dfd081fdb147914ac2fdda08.png",
        },
        {
            id: 9,
            title: "Traditional Kerala Wedding Stage",
            category: "traditional",
            categoryLabel: "Traditional",
            image: "/Decoration/file_00000000e8f8820bb6b4b4dcaff4fbb3.png",
        },
    ];

    const filteredItems =
        activeFilter === "all"
            ? galleryItems
            : galleryItems.filter((item) => item.category === activeFilter);

    // Duplicate list for infinite loop
    const loopedItemsRow1 = [...filteredItems, ...filteredItems, ...filteredItems];
    const loopedItemsRow2 = [...filteredItems].reverse().concat([...filteredItems].reverse()).concat([...filteredItems].reverse());

    // Continuous 60fps auto-scroll animation loop
    useEffect(() => {
        let animationFrameId: number;

        const scrollRow1 = scrollRefRow1.current;
        const scrollRow2 = scrollRefRow2.current;

        const autoScroll = () => {
            if (!isPaused) {
                if (scrollRow1) {
                    if (scrollRow1.scrollLeft >= scrollRow1.scrollWidth / 3 * 2) {
                        scrollRow1.scrollLeft = scrollRow1.scrollWidth / 3;
                    } else {
                        scrollRow1.scrollLeft += 1;
                    }
                }

                if (scrollRow2) {
                    if (scrollRow2.scrollLeft <= 0) {
                        scrollRow2.scrollLeft = scrollRow2.scrollWidth / 3;
                    } else {
                        scrollRow2.scrollLeft -= 1;
                    }
                }
            }

            animationFrameId = requestAnimationFrame(autoScroll);
        };

        animationFrameId = requestAnimationFrame(autoScroll);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused, filteredItems]);

    return (
        <section id="gallery" className="py-14 sm:py-20 bg-[#FAF8F2] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8">
                {/* Minimal Header */}
                <div className="text-center max-w-2xl mx-auto space-y-3 mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6F1014]/10 border border-[#6F1014]/20 text-[#6F1014] text-xs font-bold tracking-widest uppercase">
                        <span>Visual Portfolio</span>
                    </div>

                    <h2 className="font-display text-3xl sm:text-5xl font-bold">
                        <span className="dark-gradient-text uppercase">SELECTED</span> <span className="maroon-gradient-text uppercase">WORKS</span>
                    </h2>

                    <p className="text-xs sm:text-sm text-[#241B18]/75">
                        Touch & hold or hover to pause the auto-scrolling gallery. Click any image to view in high resolution.
                    </p>
                </div>

                {/* Segmented Filter Tabs */}
                <div className="flex justify-center">
                    <div className="bg-white p-1.5 rounded-full shadow-md border border-[#EFE8D7] flex items-center gap-1 overflow-x-auto max-w-full no-scrollbar">
                        {[
                            { id: "all", label: "All Works" },
                            { id: "nikah", label: "Stage Decor" },
                            { id: "reception", label: "Reception" },
                            { id: "traditional", label: "Haldi" },
                            { id: "catering", label: "Catering" },
                            { id: "sfx", label: "SFX" },
                        ].map((filter) => (
                            <button
                                key={filter.id}
                                onClick={() => setActiveFilter(filter.id)}
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
            </div>

            {/* FULL-WIDTH CONTINUOUS AUTO-SCROLLING MARQUEE TRACKS */}
            <div
                className="space-y-6 relative"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
            >
                {/* Gradient Fade Edges */}
                <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAF8F2] to-transparent z-20 pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAF8F2] to-transparent z-20 pointer-events-none" />

                {/* ROW 1: Auto-scrolls Rightward */}
                <div
                    ref={scrollRefRow1}
                    className="flex gap-5 overflow-x-auto no-scrollbar py-2 px-4 cursor-grab active:cursor-grabbing scroll-smooth"
                >
                    {loopedItemsRow1.map((item, idx) => (
                        <div
                            key={`r1-${item.id}-${idx}`}
                            onClick={() => setSelectedImage(item.image)}
                            className="relative shrink-0 w-72 sm:w-80 h-72 sm:h-80 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-[#EFE8D7] hover:border-[#F2B93F] group cursor-pointer bg-[#171110] transition-all duration-500 hover:scale-105"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-65 group-hover:opacity-85 transition-opacity duration-300" />

                            <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-[#F2B93F]/40 text-[#F2B93F] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-md">
                                {item.categoryLabel}
                            </span>

                            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                                <div>
                                    <h3 className="font-display text-base font-bold text-white group-hover:text-[#F2B93F] transition-colors leading-tight">
                                        {item.title}
                                    </h3>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-[#6F1014]/90 border border-[#F2B93F]/60 flex items-center justify-center text-[#F2B93F] shrink-0 group-hover:scale-110 transition-transform shadow-md">
                                    <Maximize2 className="w-3.5 h-3.5" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ROW 2: Auto-scrolls Leftward */}
                <div
                    ref={scrollRefRow2}
                    className="flex gap-5 overflow-x-auto no-scrollbar py-2 px-4 cursor-grab active:cursor-grabbing scroll-smooth"
                >
                    {loopedItemsRow2.map((item, idx) => (
                        <div
                            key={`r2-${item.id}-${idx}`}
                            onClick={() => setSelectedImage(item.image)}
                            className="relative shrink-0 w-72 sm:w-80 h-72 sm:h-80 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-[#EFE8D7] hover:border-[#F2B93F] group cursor-pointer bg-[#171110] transition-all duration-500 hover:scale-105"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-65 group-hover:opacity-85 transition-opacity duration-300" />

                            <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-[#F2B93F]/40 text-[#F2B93F] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-md">
                                {item.categoryLabel}
                            </span>

                            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                                <div>
                                    <h3 className="font-display text-base font-bold text-white group-hover:text-[#F2B93F] transition-colors leading-tight">
                                        {item.title}
                                    </h3>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-[#6F1014]/90 border border-[#F2B93F]/60 flex items-center justify-center text-[#F2B93F] shrink-0 group-hover:scale-110 transition-transform shadow-md">
                                    <Maximize2 className="w-3.5 h-3.5" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
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
        </section>
    );
}
