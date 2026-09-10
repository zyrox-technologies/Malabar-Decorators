"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { menuCategories, MenuCategory, MenuItem } from "@/data/menu";
import { 
  Search, 
  X, 
  Sparkles, 
  Utensils, 
  ArrowUpRight, 
  Phone,
  MessageCircle
} from "lucide-react";
import { contactData } from "@/data/contact";

export default function MenuClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Clean phone number for tel: link
  const cleanPhone = contactData.phone.replace(/\s+/g, "");

  // Filter items based on active category and search query
  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return menuCategories
      .filter((cat) => {
        if (selectedCategory === "all") return true;
        return cat.id === selectedCategory;
      })
      .map((cat) => {
        // If no search query, return full category
        if (!query) return cat;

        // Check if category title or subtitle matches
        const catMatches = 
          cat.title.toLowerCase().includes(query) ||
          cat.subtitle.toLowerCase().includes(query);

        // Filter items
        const matchingItems = cat.items.filter((item) => {
          const nameMatch = item.name.toLowerCase().includes(query);
          const malayalamMatch = item.malayalam ? item.malayalam.toLowerCase().includes(query) : false;
          return nameMatch || malayalamMatch;
        });

        if (catMatches) {
          return cat;
        }

        return {
          ...cat,
          items: matchingItems,
        };
      })
      .filter((cat) => cat.items.length > 0);
  }, [selectedCategory, searchQuery]);

  // Total matching items count
  const totalItemsCount = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.items.length, 0);
  }, [filteredCategories]);

  return (
    <div className="w-full">
      {/* Sticky Filter & Search Toolbar */}
      <section className="sticky top-20 z-40 bg-[#FFF8F5]/90 backdrop-blur-xl border-b border-[#EAE2D8] py-4 transition-all shadow-[0_4px_25px_rgba(0,0,0,0.03)]">
        <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 shrink-0 cursor-pointer ${
                  selectedCategory === "all"
                    ? "bg-[#790504] text-white shadow-sm scale-105"
                    : "bg-white text-[#59413D] hover:text-[#790504] hover:bg-[#FAF6F0] border border-[#EAE2D8]"
                }`}
              >
                All Dishes
              </button>

              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 shrink-0 cursor-pointer flex items-center gap-2 ${
                    selectedCategory === cat.id
                      ? "bg-[#790504] text-white shadow-sm scale-105"
                      : "bg-white text-[#59413D] hover:text-[#790504] hover:bg-[#FAF6F0] border border-[#EAE2D8]"
                  }`}
                >
                  <span>{cat.title.split("/")[0].trim()}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    selectedCategory === cat.id ? "bg-white/20 text-white" : "bg-[#1E1B19]/5 text-[#59413D]/70"
                  }`}>
                    {cat.items.length}
                  </span>
                </button>
              ))}
            </div>

            {/* Real-time Search Input */}
            <div className="relative min-w-[260px] md:w-72 shrink-0">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#59413D]/50">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dishes (e.g. Biriyani, Dosa, Sadya)..."
                className="w-full pl-9 pr-8 py-2 text-xs md:text-sm bg-white border border-[#EAE2D8] rounded-full focus:outline-none focus:border-[#790504] focus:ring-1 focus:ring-[#790504] text-[#1E1B19] placeholder:text-[#59413D]/50 transition-all shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#59413D]/60 hover:text-[#1E1B19] cursor-pointer"
                  aria-label="Clear search query"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>

          {/* Active Search Feedback */}
          {(searchQuery || selectedCategory !== "all") && (
            <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-[#EAE2D8]/60 text-xs text-[#59413D]">
              <span>
                Showing <strong className="text-[#1E1B19] font-semibold">{totalItemsCount}</strong> items
                {searchQuery && <span> matching &ldquo;<span className="text-[#790504] font-medium">{searchQuery}</span>&rdquo;</span>}
              </span>

              {(searchQuery || selectedCategory !== "all") && (
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                  className="text-[#790504] hover:underline font-semibold text-[11px] uppercase tracking-wider cursor-pointer"
                >
                  Reset Filters
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Menu Categories & Curated Items Grid */}
      <section className="py-14 sm:py-20 bg-[#FAF8F5]">
        <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
          
          {filteredCategories.length === 0 ? (
            /* Tasteful Empty State */
            <div className="py-20 text-center max-w-md mx-auto bg-white rounded-3xl p-8 border border-[#EAE2D8] shadow-xs">
              <div className="w-14 h-14 rounded-full bg-[#FAF6F0] border border-[#EAE2D8] flex items-center justify-center mx-auto mb-4 text-[#790504]">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-[#1E1B19] mb-2 font-normal">No dishes found</h3>
              <p className="text-xs sm:text-sm text-[#59413D] mb-6 leading-relaxed">
                We couldn&apos;t find any feast items matching &ldquo;{searchQuery}&rdquo;. Try searching another dish name or view our complete catering collection.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#790504] text-white hover:bg-[#5f0302] transition-colors cursor-pointer shadow-sm"
              >
                View Full Menu
              </button>
            </div>
          ) : (
            <div className="space-y-16 sm:space-y-20">
              {filteredCategories.map((category, catIndex) => (
                <div
                  key={category.id}
                  id={category.id}
                  className="scroll-mt-36"
                >
                  {/* Category Panoramic Food Photography Banner */}
                  <div className="relative w-full h-48 sm:h-60 md:h-72 rounded-3xl overflow-hidden mb-8 sm:mb-10 border border-[#EAE2D8] shadow-md group">
                    {/* Background Food Photography */}
                    {category.bannerImage && (
                      <Image
                        src={category.bannerImage}
                        alt={category.title}
                        fill
                        sizes="(max-width: 1280px) 100vw, 1280px"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        priority={catIndex === 0}
                      />
                    )}

                    {/* Cinematic Luxury Dark Scrim Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/25" />

                    {/* Top Right Item Count Pill */}
                    <div className="absolute top-4 right-4 sm:top-5 sm:right-6 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-white text-xs font-mono tracking-wider">
                        {category.items.length} Curated Items
                      </span>
                    </div>

                    {/* Bottom Editorial Content Overlay */}
                    <div className="absolute bottom-0 inset-x-0 p-5 sm:p-7 md:p-8 z-10 text-white flex flex-col justify-end">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-serif font-bold text-amber-300">
                          {String(catIndex + 1).padStart(2, "0")}
                        </span>
                        <span className="text-white/40 text-xs">•</span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-500/30 text-amber-300 text-[10px] font-bold tracking-[0.22em] uppercase">
                          {category.subtitle}
                        </span>
                      </div>

                      <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-normal drop-shadow-md tracking-tight">
                        {category.title}
                      </h2>

                      <p className="text-xs sm:text-sm text-white/85 max-w-xl font-light leading-relaxed mt-1.5 drop-shadow-xs line-clamp-2 sm:line-clamp-none">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Items Grid - Elegant, Clean, Un-cluttered Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {category.items.map((item, itemIdx) => (
                      <div
                        key={item.id}
                        className="group relative bg-white/90 hover:bg-white border border-[#EAE2D8] hover:border-[#790504]/30 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-[0_10px_25px_rgba(121,5,4,0.06)] hover:-translate-y-0.5 flex flex-col justify-between overflow-hidden shadow-2xs"
                      >
                        {/* Top Subtle Amber Hairline on Hover */}
                        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#790504]/0 to-transparent group-hover:via-[#790504]/50 transition-all duration-500" />

                        {/* Top Watermark Number (Serif Editorial Flair) */}
                        <span className="absolute top-3.5 right-4 font-serif text-2xl sm:text-3xl text-[#A68F7B]/20 select-none pointer-events-none group-hover:text-[#790504]/25 transition-colors font-light">
                          {String(itemIdx + 1).padStart(2, "0")}
                        </span>

                        {/* Dish Details */}
                        <div className="relative z-10 pr-6">
                          {/* Traditional Malayalam script if available */}
                          {item.malayalam && (
                            <span className="text-[11px] sm:text-xs font-medium text-[#AB3600] tracking-wide block mb-1">
                              {item.malayalam}
                            </span>
                          )}
                          
                          <h3 className="font-serif text-base sm:text-lg text-[#1E1B19] group-hover:text-[#790504] font-medium tracking-tight transition-colors leading-snug">
                            {item.name}
                          </h3>
                        </div>

                        {/* Card Bottom Meta Row */}
                        <div className="mt-4 pt-3 border-t border-[#EAE2D8]/70 flex items-center justify-between text-[11px] text-[#59413D]">
                          <span className="flex items-center gap-1.5 font-medium tracking-wider uppercase text-[10px] text-[#8C7462]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#AB3600]/60 group-hover:bg-[#790504] transition-colors" />
                            Catering Selection
                          </span>

                          <a
                            href={`https://wa.me/919946692100?text=${encodeURIComponent(
                              `Hi Malabar Decorators, I'm exploring your catering menu and would like to include "${item.name}" for our upcoming event.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="opacity-0 group-hover:opacity-100 text-[#790504] hover:text-[#5f0302] font-semibold text-[10px] tracking-wider uppercase flex items-center gap-1 transition-opacity duration-200"
                          >
                            <span>Enquire</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Special Featured Banner for Kerala Sadya */}
                  {category.id === "kerala-sadya" && (
                    <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#FAF6F0] via-white to-[#FAF6F0] border border-[#790504]/20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-sm">
                      <div className="space-y-1.5">
                        <div className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#790504]">
                          <Sparkles className="w-3.5 h-3.5 text-[#AB3600]" />
                          TRADITIONAL 21-ITEM CEREMONIAL FEAST
                        </div>
                        <h4 className="font-serif text-xl sm:text-2xl text-[#1E1B19] font-normal">
                          Authentic Kerala Sadya on Plantain Leaf (100 to 5,000+ Guests)
                        </h4>
                        <p className="text-xs sm:text-sm text-[#59413D] max-w-2xl leading-relaxed font-light">
                          Prepared under strict traditional culinary protocols using pure cow ghee, stone-ground Kasaragod spices, and fresh banana leaf dining service for weddings, housewarmings, and temple feasts.
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 shrink-0">
                        <a
                          href={`https://wa.me/919946692100?text=${encodeURIComponent(
                            "Hi Malabar Decorators, I'd like to book an Authentic Kerala Sadya catering for our upcoming celebration."
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase bg-[#790504] hover:bg-[#5f0302] text-white transition-all shadow-md hover:shadow-lg"
                        >
                          <MessageCircle className="w-3.5 h-3.5 text-amber-300" />
                          <span>Book Sadya on WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Bespoke Catering Consultation Banner */}
      <section className="py-14 sm:py-16 bg-[#1E1B19] text-white relative overflow-hidden">
        {/* Subtle Ambient Red Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#790504]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-amber-300 text-[10px] font-bold tracking-[0.2em] uppercase">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>BESPOKE CATERING CONSULTATIONS</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal tracking-tight">
                Want A Custom Menu Tailored To Your Celebration?
              </h3>
              <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed">
                Whether you prefer a fusion of Arabic Kuzhimanthi, authentic Malabar Dum Biriyani, live counter spreads, or traditional Kerala Sadya, our culinary director customizes every single item to your taste and guest count.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3.5 shrink-0">
              <a
                href={`tel:${cleanPhone}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all shadow-sm"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>Call {contactData.phoneDisplay}</span>
              </a>

              <a
                href={`https://wa.me/919946692100?text=${encodeURIComponent(
                  "Hi Malabar Decorators, I would like to discuss a custom event catering menu for our upcoming celebration."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#790504] hover:bg-[#8f0605] text-white transition-all shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-4 h-4 text-amber-300" />
                <span>Custom Menu on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
