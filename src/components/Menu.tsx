"use client";

import { useState } from "react";
import Image from "next/image";
import { Utensils, Flame, Sparkles, Check, ChevronRight } from "lucide-react";

export default function Menu() {
    const [activeTab, setActiveTab] = useState<string>("all");

    const categories = [
        { id: "all", name: "Full Menu Overview" },
        { id: "drinks", name: "Welcome Drinks / Live Juices" },
        { id: "mains", name: "Main Dishes (Biriyani & Live)" },
        { id: "curries", name: "Curries & Sides" },
        { id: "desserts", name: "Desserts & Live Sweets" },
        { id: "beverages", name: "Beverages & Live Tea" },
    ];

    const menuItems = {
        drinks: [
            { name: "Watermelon Juice", malayalam: "വട്ടര്മെലൺ ജ്യൂസ്", live: false },
            { name: "Papaya Juice", malayalam: "പപ്പായ ജ്യൂസ്", live: false },
            { name: "Grape Juice", malayalam: "ഗ്രേപ്പ് ജ്യൂസ്", live: false },
            { name: "Pineapple Juice", malayalam: "പൈനാപ്പിൾ ജ്യൂസ്", live: false },
            { name: "Musambi Juice", malayalam: "മൂസാമ്പി ജ്യൂസ്", live: false },
        ],
        mains: [
            { name: "Chicken Biriyani", malayalam: "ചിക്കൻ ബിരിയാണി", featured: true },
            { name: "Mutton Biriyani", malayalam: "മട്ടൻ ബിരിയാണി", featured: true },
            { name: "Ghee Rice (Neychoru)", malayalam: "നെയ്‌ചോറ്", featured: true },
            { name: "Vellappam – Live Counter", malayalam: "വെള്ളപ്പൊം (ലൈവ്)", live: true },
            { name: "Neypathal – Live Counter", malayalam: "നെയ്പത്തൽ (ലൈവ്)", live: true },
            { name: "Malabar Porotta – Live", malayalam: "പൊറോട്ട (ലൈവ്)", live: true },
            { name: "Dosa – Live Counter", malayalam: "ദോശ (ലൈവ്)", live: true },
            { name: "Chappathi", malayalam: "ചപ്പാത്തി", live: false },
            { name: "Fried Rice", malayalam: "ഫ്രൈഡ് റൈസ്", live: false },
            { name: "Veg Pulav", malayalam: "വെജ് പുലാവ്", live: false },
        ],
        curries: [
            { name: "Chicken Curry", malayalam: "ചിക്കൻ കറി" },
            { name: "Chicken Varattiyath", malayalam: "ചിക്കൻ വരട്ടിയത്", spicy: true },
            { name: "Mutton Varattiyath", malayalam: "മട്ടൻ വരട്ടിയത്", spicy: true },
            { name: "Chilly Chicken", malayalam: "ചില്ലി ചിക്കൻ" },
            { name: "Pepper Chicken", malayalam: "പെപ്പർ ചിക്കൻ" },
            { name: "Veg Kuruma", malayalam: "വെജ് കുറുമ" },
            { name: "Gopi Manchurian", malayalam: "ഗോപി മഞ്ചൂരിയൻ" },
            { name: "Gopi Chilli", malayalam: "ഗോപി ചില്ലി" },
        ],
        desserts: [
            { name: "Payasam – Pradhaman", malayalam: "പ്രഥമൻ പായസം", traditional: true },
            { name: "Ada Pradhaman", malayalam: "അട പ്രഥമൻ", traditional: true },
            { name: "Palpayasam", malayalam: "പാൽപായസം", traditional: true },
            { name: "Jilebi – Live Counter", malayalam: "ജിലേബി (ലൈവ്)", live: true },
            { name: "Mysore Pak – Live Counter", malayalam: "മൈസൂർ പാക്ക് (ലൈവ്)", live: true },
            { name: "Ice Cream Selection", malayalam: "ഐസ് ക്രീം" },
            { name: "Gulab Jamun", malayalam: "ഗുലാബ് ജാമുൻ" },
        ],
        beverages: [
            { name: "Malabar Colour Tea – Live", malayalam: "കളർ ടീ (ലൈവ്)", live: true },
            { name: "Hot Filter Coffee", malayalam: "കോഫി" },
            { name: "Juice Selection", malayalam: "ജ്യൂസ് ഐറ്റംസ്" },
            { name: "Purified Water & Soft Drinks", malayalam: "വാട്ടർ & സോഫ്റ്റ് ഡ്രിങ്ക്സ്" },
        ],
    };

    return (
        <section id="menu" className="py-20 bg-[#FAF8F2] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center max-w-3xl mx-auto space-y-3">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8B1E23]/10 border border-[#8B1E23]/20 text-[#8B1E23] text-xs font-bold tracking-widest uppercase">
                        Authentic Taste of Kerala
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241B18]">
                        Catering Menu & Feast Catalogue
                    </h2>
                    <div className="flex items-center justify-center gap-3">
                        <div className="h-0.5 w-12 bg-[#8B1E23]" />
                        <div className="w-2 h-2 rotate-45 bg-[#DFAE32]" />
                        <div className="h-0.5 w-12 bg-[#8B1E23]" />
                    </div>
                    <p className="text-sm text-[#241B18]/75">
                        Prepared by master chefs using traditional recipes, fresh ground spices, and hygienic ingredients for high-capacity event catering.
                    </p>
                </div>

                {/* Catering Feature Visual Banner */}
                <div className="mt-10 mb-12 rounded-2xl overflow-hidden shadow-2xl relative border-2 border-[#DFAE32]/40 bg-[#38070A]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                        <div className="lg:col-span-7 p-8 sm:p-10 space-y-4 text-white z-10">
                            <span className="bg-[#DFAE32] text-[#38070A] text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                                Signature Dish
                            </span>
                            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F2B93F]">
                                Malabar Special Dum Biriyani & Sadya
                            </h3>
                            <p className="text-xs sm:text-sm text-[#FAF8F2]/90 leading-relaxed font-normal">
                                Slow-cooked in traditional copper cauldrons with aromatic Kaima rice, tender meat, ghee, fried cashew raisins, and authentic spices served with live porotta and appam counters.
                            </p>
                            <div className="flex flex-wrap gap-4 text-xs font-semibold text-[#F7D06E] pt-2">
                                <span>🔥 Live Cooking Counters</span>
                                <span>🌱 Pure Veg & Non-Veg Options</span>
                                <span>✨ Custom Menu Options</span>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative h-64 lg:h-full min-h-[260px]">
                            <Image
                                src="/hero_biriyani.png"
                                alt="Malabar Dum Biriyani Feast"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </div>
                </div>

                {/* Tab Buttons */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {categories.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${activeTab === tab.id
                                    ? "bg-[#6F1014] text-[#F2B93F] border-[#6F1014] shadow-md"
                                    : "bg-white text-[#241B18] border-[#EFE8D7] hover:border-[#6F1014]/40"
                                }`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>

                {/* Menu Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Main Dishes */}
                    {(activeTab === "all" || activeTab === "mains") && (
                        <div className="bg-white rounded-2xl p-6 border border-[#EFE8D7] shadow-md space-y-4">
                            <div className="flex items-center justify-between border-b border-[#F7F3EA] pb-3">
                                <div className="flex items-center gap-2">
                                    <Utensils className="w-5 h-5 text-[#8B1E23]" />
                                    <h3 className="font-display font-bold text-lg text-[#6F1014]">
                                        Main Dishes
                                    </h3>
                                </div>
                                <span className="text-[11px] font-semibold text-[#DFAE32] uppercase">
                                    Rice & Live
                                </span>
                            </div>
                            <ul className="space-y-3">
                                {menuItems.mains.map((item, i) => (
                                    <li key={i} className="flex items-center justify-between text-xs py-1 border-b border-gray-50 last:border-0">
                                        <div>
                                            <span className="font-semibold text-[#241B18] block">{item.name}</span>
                                            <span className="text-[10px] text-[#6F1014] font-medium">{item.malayalam}</span>
                                        </div>
                                        {item.live && (
                                            <span className="bg-[#6F1014] text-[#F2B93F] text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">
                                                LIVE
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Curries */}
                    {(activeTab === "all" || activeTab === "curries") && (
                        <div className="bg-white rounded-2xl p-6 border border-[#EFE8D7] shadow-md space-y-4">
                            <div className="flex items-center justify-between border-b border-[#F7F3EA] pb-3">
                                <div className="flex items-center gap-2">
                                    <Flame className="w-5 h-5 text-[#8B1E23]" />
                                    <h3 className="font-display font-bold text-lg text-[#6F1014]">
                                        Curries & Side Dishes
                                    </h3>
                                </div>
                                <span className="text-[11px] font-semibold text-[#DFAE32] uppercase">
                                    Gravies
                                </span>
                            </div>
                            <ul className="space-y-3">
                                {menuItems.curries.map((item, i) => (
                                    <li key={i} className="flex items-center justify-between text-xs py-1 border-b border-gray-50 last:border-0">
                                        <div>
                                            <span className="font-semibold text-[#241B18] block">{item.name}</span>
                                            <span className="text-[10px] text-[#6F1014] font-medium">{item.malayalam}</span>
                                        </div>
                                        {item.spicy && (
                                            <span className="bg-[#FAF8F2] text-[#8B1E23] text-[10px] font-bold px-2 py-0.5 rounded border border-[#8B1E23]/30 shrink-0">
                                                SPICY
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Desserts */}
                    {(activeTab === "all" || activeTab === "desserts") && (
                        <div className="bg-white rounded-2xl p-6 border border-[#EFE8D7] shadow-md space-y-4">
                            <div className="flex items-center justify-between border-b border-[#F7F3EA] pb-3">
                                <div className="flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-[#8B1E23]" />
                                    <h3 className="font-display font-bold text-lg text-[#6F1014]">
                                        Desserts & Sweets
                                    </h3>
                                </div>
                                <span className="text-[11px] font-semibold text-[#DFAE32] uppercase">
                                    Payasam & Live
                                </span>
                            </div>
                            <ul className="space-y-3">
                                {menuItems.desserts.map((item, i) => (
                                    <li key={i} className="flex items-center justify-between text-xs py-1 border-b border-gray-50 last:border-0">
                                        <div>
                                            <span className="font-semibold text-[#241B18] block">{item.name}</span>
                                            <span className="text-[10px] text-[#6F1014] font-medium">{item.malayalam}</span>
                                        </div>
                                        {item.live && (
                                            <span className="bg-[#6F1014] text-[#F2B93F] text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">
                                                LIVE
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Welcome Drinks */}
                    {(activeTab === "all" || activeTab === "drinks") && (
                        <div className="bg-white rounded-2xl p-6 border border-[#EFE8D7] shadow-md space-y-4">
                            <div className="flex items-center justify-between border-b border-[#F7F3EA] pb-3">
                                <h3 className="font-display font-bold text-lg text-[#6F1014]">
                                    Welcome Drinks & Juices
                                </h3>
                                <span className="text-[11px] font-semibold text-[#DFAE32] uppercase">
                                    Fresh Juices
                                </span>
                            </div>
                            <ul className="space-y-3">
                                {menuItems.drinks.map((item, i) => (
                                    <li key={i} className="flex items-center justify-between text-xs py-1 border-b border-gray-50 last:border-0">
                                        <div>
                                            <span className="font-semibold text-[#241B18] block">{item.name}</span>
                                            <span className="text-[10px] text-[#6F1014] font-medium">{item.malayalam}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Beverages */}
                    {(activeTab === "all" || activeTab === "beverages") && (
                        <div className="bg-white rounded-2xl p-6 border border-[#EFE8D7] shadow-md space-y-4">
                            <div className="flex items-center justify-between border-b border-[#F7F3EA] pb-3">
                                <h3 className="font-display font-bold text-lg text-[#6F1014]">
                                    Beverages & Tea Counter
                                </h3>
                                <span className="text-[11px] font-semibold text-[#DFAE32] uppercase">
                                    Live Tea
                                </span>
                            </div>
                            <ul className="space-y-3">
                                {menuItems.beverages.map((item, i) => (
                                    <li key={i} className="flex items-center justify-between text-xs py-1 border-b border-gray-50 last:border-0">
                                        <div>
                                            <span className="font-semibold text-[#241B18] block">{item.name}</span>
                                            <span className="text-[10px] text-[#6F1014] font-medium">{item.malayalam}</span>
                                        </div>
                                        {item.live && (
                                            <span className="bg-[#6F1014] text-[#F2B93F] text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">
                                                LIVE
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* CTA Banner */}
                <div className="mt-12 text-center">
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#6F1014] hover:bg-[#8B1E23] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all"
                    >
                        <span>Request Custom Catering Menu Quote</span>
                        <ChevronRight className="w-4 h-4 text-[#F2B93F]" />
                    </a>
                </div>
            </div>
        </section>
    );
}
