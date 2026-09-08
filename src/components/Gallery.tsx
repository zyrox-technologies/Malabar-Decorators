"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Gallery() {

    const galleryItems = [
        {
            id: 1,
            title: "Royal Event Grand Stage",
            category: "nikah",
            categoryLabel: "Stage Decor",
            image: "/Malabar-imges/malabar-decorators-kasaragod-flower-decorators-lr5hqiduzn.jpg",
        },
        {
            id: 2,
            title: "Traditional Malabar Dum Biriyani",
            category: "catering",
            categoryLabel: "Catering",
            image: "/Malabar-imges/malabar-decorators-kasaragod-flower-decorators-ni72l865kf.jpg",
        },
        {
            id: 3,
            title: "Outdoor Lawn Reception Setup",
            category: "reception",
            categoryLabel: "Reception",
            image: "/Malabar-imges/malabar-decorators-kasaragod-flower-decorators-r6m47f40d6.jpg",
        },
        {
            id: 4,
            title: "Traditional Haldi & Mandap Decor",
            category: "traditional",
            categoryLabel: "Haldi",
            image: "/Malabar-imges/malabar-decorators-kasaragod-flower-decorators-sizmavzzao.jpg",
        },
        {
            id: 5,
            title: "SFX Low Fog Pyrotechnic Entry",
            category: "sfx",
            categoryLabel: "SFX",
            image: "/Malabar-imges/malabar-decorators-kasaragod-flower-decorators-wejd7bjl2h.jpg",
        },
        {
            id: 6,
            title: "Custom Floral Entrance & Arch",
            category: "nikah",
            categoryLabel: "Stage Decor",
            image: "/Malabar-imges/malabar-decorators-kasaragod-flower-decorators-zctu7alvqc.jpg",
        },
        {
            id: 7,
            title: "Grand Event Catering Spread",
            category: "catering",
            categoryLabel: "Catering",
            image: "/Malabar-imges/malabar-decorators-karandakkad-kasaragod-flower-decorators-3gfqv2nr6m.jpg",
        },
        {
            id: 8,
            title: "Chandelier Stage Illumination",
            category: "reception",
            categoryLabel: "Reception",
            image: "/Malabar-imges/malabar-decorators-kasaragod-caterers-23js5i5o0x.jpg",
        },
        {
            id: 9,
            title: "Traditional Kerala Wedding Stage",
            category: "traditional",
            categoryLabel: "Traditional",
            image: "/Malabar-imges/malabar-decorators-kasaragod-caterers-bicyl8spie.jpg",
        },
    ];

    const images = galleryItems.slice(0, 5);

    return (
        <section id="gallery" className="py-24 bg-[#FAF8F2] relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-start">
                    
                    {/* Left Side Text Content */}
                    <div className="lg:w-1/3 shrink-0 pt-4">
                        <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#241B18]/60 mb-6">
                            OUR WORK
                        </div>

                        <h2 className="font-display text-4xl sm:text-5xl lg:text-[4rem] font-medium text-[#241B18] leading-[1.05] tracking-tight mb-8">
                            Real Events. <br />
                            Real People. <br />
                            <span className="text-[#A2272E] font-bold">Real Happiness.</span>
                        </h2>

                        <a
                            href="#gallery"
                            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-[#A2272E] hover:text-[#8B1E23] transition-colors"
                        >
                            EXPLORE GALLERY 
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Right Side Gallery Grid */}
                    <div className="lg:w-2/3 w-full grid grid-cols-1 md:grid-cols-12 gap-4 h-[600px] md:h-[500px]">
                        
                        {/* Large Left Image (Vertical) */}
                        <div className="md:col-span-5 h-full rounded-sm overflow-hidden relative cursor-pointer group shadow-sm bg-gray-200">
                            <Image
                                src={images[0].image}
                                alt={images[0].title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>

                        {/* Right Grid Section */}
                        <div className="md:col-span-7 flex flex-col gap-4 h-full">
                            
                            {/* Top Row */}
                            <div className="flex-1 grid grid-cols-3 gap-4">
                                <div className="rounded-sm overflow-hidden relative cursor-pointer group shadow-sm bg-gray-200">
                                    <Image
                                        src={images[1].image}
                                        alt={images[1].title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                </div>
                                <div className="rounded-sm overflow-hidden relative cursor-pointer group shadow-sm bg-gray-200">
                                    <Image
                                        src={images[2].image}
                                        alt={images[2].title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                </div>
                                
                                {/* Stats Box */}
                                <div className="rounded-sm bg-[#EFE8D7] flex flex-col justify-center px-6 shadow-sm">
                                    <div className="text-3xl font-display font-light text-[#241B18] mb-1">21+</div>
                                    <div className="text-[10px] font-medium text-[#241B18]/70 uppercase tracking-widest leading-relaxed">
                                        Unique Event<br/>Setups
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Row */}
                            <div className="flex-1 grid grid-cols-2 gap-4">
                                <div className="rounded-sm overflow-hidden relative cursor-pointer group shadow-sm bg-gray-200">
                                    <Image
                                        src={images[3].image}
                                        alt={images[3].title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                </div>
                                <div className="rounded-sm overflow-hidden relative cursor-pointer group shadow-sm bg-gray-200">
                                    <Image
                                        src={images[4].image}
                                        alt={images[4].title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                </div>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
