"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, Flame, Heart, Cake, Home, Sparkle, Utensils, Music, ShieldCheck } from "lucide-react";

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
            image: "/nikah_stage.png",
            items: [
                "Premium Nikah Stage Setup",
                "Wedding & Reception Backdrop",
                "Royal Sofa & Couch Seating",
                "Crystal Candle & Chandelier Lights",
            ],
            price: "Starting from ₹20,000",
        },
        {
            category: "catering",
            tag: "Authentic Cuisine",
            title: "Grand Wedding & Event Catering",
            desc: "Famous Malabar Dum Biriyani, Ghee Rice, Porotta, Neypathal, Live Appam stations, authentic curries and traditional payasam desserts.",
            image: "/catering_spread.png",
            items: [
                "Malabar Dum Biriyani (Chicken/Mutton)",
                "Live Appam & Porotta Counters",
                "Authentic Kerala Sadya & Curries",
                "Desserts, Payasam & Live Tea Counter",
            ],
            price: "Custom Packages per Plate",
        },
        {
            category: "decor",
            tag: "Traditional Ceremony",
            title: "Haldi, Mehendi & Traditional Decor",
            desc: "Vibrant traditional yellow and gold stage drapes, marigold flower arrangements, brass urlis, wooden swings and floral backdrops.",
            image: "/haldi_decor.png",
            items: [
                "Traditional Haldi / Mehendi Stage",
                "Marigold Garland Drapes & Brass Urlis",
                "Hindu Traditional Mandap Decor",
                "Floral Photo Backdrops",
            ],
            price: "Starting from ₹12,000",
        },
        {
            category: "decor",
            tag: "Outdoor Luxury",
            title: "Premium Outdoor & Destination Decor",
            desc: "Romantic evening lawn and beachside setups featuring fairy light canopies, welcome entrance arches, photo booths and floral aisles.",
            image: "/reception_decor.png",
            items: [
                "Fairy Light Canopy Overhead",
                "Welcome Entrance Arch Gates",
                "12ft Floral Photo Booth",
                "Outdoor Lawn & Dining Table Decor",
            ],
            price: "Starting from ₹50,000",
        },
        {
            category: "sfx",
            tag: "Stage Pyrotechnics",
            title: "SFX Special Effects & Grand Entries",
            desc: "Transform your bride and groom stage entry with low heavy fog smoke clouds, cold pyro sparklers, cold fire fountains and confetti pops.",
            image: "/sfx_stage.png",
            items: [
                "Low Fog Dry Ice Smoke Effect",
                "Cold Fire Sparkler Fountains",
                "Confetti Cannon Pop Effects",
                "Stage Entry Lighting Sequence",
            ],
            price: "Popular Add-On",
        },
        {
            category: "catering",
            tag: "Live Food Station",
            title: "Live Cooking & Beverage Counters",
            desc: "Interactive live cooking stations serving hot Neypathal, Dosa, Jalebi, Mysore Pak, fresh watermelon/grape juices and Malabar Colour Tea.",
            image: "/live_counter.png",
            items: [
                "Live Appam & Neypathal Chef Counter",
                "Hot Jalebi & Mysore Pak Station",
                "Fresh Fruit Juice Selection",
                "Traditional Malabar Colour Tea Counter",
            ],
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
        <section id="services" className="py-20 bg-[#F7F3EA] border-t border-b border-[#EFE8D7]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6F1014]/10 border border-[#6F1014]/20 text-[#6F1014] text-xs font-bold tracking-widest uppercase">
                        Complete Event Solutions
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241B18]">
                        Our Premium Services
                    </h2>
                    <div className="flex items-center justify-center gap-3">
                        <div className="h-0.5 w-12 bg-[#8B1E23]" />
                        <div className="w-2 h-2 rotate-45 bg-[#DFAE32]" />
                        <div className="h-0.5 w-12 bg-[#8B1E23]" />
                    </div>
                    <p className="text-base text-[#241B18]/75">
                        Malabar Decorators provides full end-to-end event management: from mouthwatering authentic Malabar catering to breathtaking stage decor, venue styling, and special effects.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-10 mb-12">
                    {serviceCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id as any)}
                            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${activeCategory === cat.id
                                    ? "bg-[#6F1014] text-white border-[#6F1014] shadow-md"
                                    : "bg-white text-[#241B18] border-[#EFE8D7] hover:border-[#6F1014]/40 hover:bg-[#FAF8F2]"
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Services Editorial Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredServices.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl overflow-hidden border border-[#EFE8D7] shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group"
                        >
                            {/* Image Header */}
                            <div className="relative h-60 overflow-hidden bg-[#38070A]">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#171110]/90 via-[#171110]/30 to-transparent" />
                                <span className="absolute top-4 left-4 bg-[#6F1014]/90 backdrop-blur-md border border-[#F2B93F]/40 text-[#F2B93F] text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow-md">
                                    {service.tag}
                                </span>
                                <span className="absolute bottom-3 right-4 bg-[#DFAE32] text-[#38070A] text-xs font-bold px-2.5 py-1 rounded-md shadow-md">
                                    {service.price}
                                </span>
                            </div>

                            {/* Card Body */}
                            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                                <div>
                                    <h3 className="font-display text-xl font-bold text-[#241B18] group-hover:text-[#6F1014] transition-colors leading-snug">
                                        {service.title}
                                    </h3>
                                    <p className="text-xs text-[#241B18]/75 mt-2 leading-relaxed font-normal">
                                        {service.desc}
                                    </p>
                                </div>

                                {/* Items List */}
                                <div className="space-y-2 pt-2 border-t border-[#F7F3EA]">
                                    {service.items.map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-xs text-[#241B18]/85 font-medium">
                                            <Sparkles className="w-3.5 h-3.5 text-[#8B1E23] shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Action CTA */}
                                <div className="pt-4">
                                    <a
                                        href="#contact"
                                        className="w-full py-2.5 rounded-lg bg-[#6F1014] hover:bg-[#8B1E23] text-white text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-md"
                                    >
                                        <span>Enquire Service</span>
                                        <ArrowRight className="w-3.5 h-3.5 text-[#F2B93F]" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Services Grid */}
                <div className="mt-16 bg-gradient-to-r from-[#6F1014] via-[#4E0A0D] to-[#6F1014] rounded-2xl p-8 text-white shadow-xl border border-[#DFAE32]/30">
                    <div className="text-center space-y-2 mb-6">
                        <h3 className="font-display text-2xl font-bold text-[#F2B93F]">
                            Comprehensive Event Offerings
                        </h3>
                        <p className="text-xs text-[#FAF8F2]/80 max-w-xl mx-auto">
                            Whatever the occasion, Malabar Decorators handles complete setup, decoration, theme styling, and catering.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-xs font-semibold">
                        {allOtherServicesList.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-[#38070A]/80 border border-[#F2B93F]/30 px-3.5 py-2.5 rounded-lg text-[#FAF8F2] flex items-center gap-2 hover:border-[#F2B93F] transition-colors"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-[#F2B93F]" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
