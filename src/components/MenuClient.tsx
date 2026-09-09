"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { menuCategories, MenuCategory, MenuItem } from "@/data/menu";
import { 
  Search, 
  X, 
  Sparkles, 
  Flame, 
  Utensils, 
  ArrowUpRight,
  Phone
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
      {/* Sticky / Floating Filter & Search Toolbar */}
      <section className="sticky top-20 z-40 bg-surface/95 backdrop-blur-md border-b border-surface-variant py-4 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
        <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 shrink-0 cursor-pointer ${
                  selectedCategory === "all"
                    ? "bg-primary text-on-primary shadow-sm"
                    : "bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high border border-outline-variant/30"
                }`}
              >
                All Categories
              </button>

              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 shrink-0 cursor-pointer flex items-center gap-1.5 ${
                    selectedCategory === cat.id
                      ? "bg-primary text-on-primary shadow-sm"
                      : "bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high border border-outline-variant/30"
                  }`}
                >
                  <span>{cat.title}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    selectedCategory === cat.id ? "bg-white/20 text-white" : "bg-black/5 text-on-surface-variant/70"
                  }`}>
                    {cat.items.length}
                  </span>
                </button>
              ))}
            </div>

            {/* Real-time Search Input */}
            <div className="relative min-w-[260px] md:w-72 shrink-0">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-on-surface-variant/50">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dishes (e.g. Biriyani, Dosa, Sadya)..."
                className="w-full pl-9 pr-8 py-2 text-xs md:text-sm bg-surface-container-low border border-outline-variant/40 rounded-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-on-surface placeholder:text-on-surface-variant/50 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-on-surface-variant/60 hover:text-on-surface cursor-pointer"
                  aria-label="Clear search query"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>

          {/* Active Search & Count Feedback */}
          {(searchQuery || selectedCategory !== "all") && (
            <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-surface-variant/50 text-xs text-on-surface-variant">
              <span>
                Found <strong className="text-on-surface font-semibold">{totalItemsCount}</strong> items
                {searchQuery && <span> matching &ldquo;<span className="text-primary font-medium">{searchQuery}</span>&rdquo;</span>}
              </span>

              {(searchQuery || selectedCategory !== "all") && (
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                  className="text-primary hover:underline font-semibold text-[11px] uppercase tracking-wider cursor-pointer"
                >
                  Reset Filters
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Menu Categories & Items List */}
      <section className="py-12 md:py-16 bg-surface">
        <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
          
          {filteredCategories.length === 0 ? (
            /* Tasteful Empty State */
            <div className="py-16 text-center max-w-md mx-auto">
              <div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center mx-auto mb-4 text-on-surface-variant/50">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl text-on-surface mb-2 font-medium">No dishes found</h3>
              <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                We couldn&apos;t find any items matching &ldquo;{searchQuery}&rdquo;. Try another dish name or reset your search.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary text-on-primary hover:bg-primary-container transition-colors cursor-pointer"
              >
                Show Full Menu
              </button>
            </div>
          ) : (
            <div className="space-y-16">
              {filteredCategories.map((category) => (
                <div
                  key={category.id}
                  id={category.id}
                  className="scroll-mt-36"
                >
                  {/* Category Header */}
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-8 pb-4 border-b border-surface-variant">
                    <div>
                      <span className="font-label-caps text-[11px] text-secondary tracking-[0.2em] uppercase font-semibold block mb-1">
                        {category.subtitle}
                      </span>
                      <h2 className="font-serif text-2xl sm:text-3xl text-on-surface font-normal">
                        {category.title}
                      </h2>
                    </div>
                    <p className="text-xs md:text-sm text-on-surface-variant max-w-md font-light leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Items Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.items.map((item) => (
                      <div
                        key={item.id}
                        className="group relative bg-surface-container-low hover:bg-white border border-outline-variant/30 hover:border-primary/20 rounded-xl p-4 transition-all duration-300 hover:shadow-md flex flex-col justify-between"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            {/* Malayalam wording if present */}
                            {item.malayalam && (
                              <span className="text-[11px] font-medium text-secondary tracking-wider block mb-0.5">
                                {item.malayalam}
                              </span>
                            )}
                            
                            <h3 className="font-serif text-base sm:text-lg text-on-surface font-medium group-hover:text-primary transition-colors leading-snug">
                              {item.name}
                            </h3>
                          </div>

                          {/* Live Counter Badge */}
                          {item.isLive && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold tracking-widest uppercase bg-[#790504]/10 text-[#790504] border border-[#790504]/25 shrink-0">
                              <Flame className="w-2.5 h-2.5 text-[#790504] fill-[#790504]" />
                              LIVE
                            </span>
                          )}
                        </div>

                        <div className="mt-3 pt-2.5 border-t border-surface-variant/40 flex items-center justify-between text-[11px] text-on-surface-variant/70">
                          <span className="capitalize">{category.title.split("/")[0].trim()}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-outline-variant/50 group-hover:bg-primary transition-colors" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Special Editorial Highlight for Kerala Sadya */}
                  {category.id === "kerala-sadya" && (
                    <div className="mt-8 p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                      <div className="space-y-1">
                        <div className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-secondary">
                          <Sparkles className="w-3.5 h-3.5" />
                          TRADITIONAL HERITAGE FEAST
                        </div>
                        <h4 className="font-serif text-lg text-on-surface font-medium">
                          Customized Sadya Catering For 100 to 5000+ Guests
                        </h4>
                        <p className="text-xs text-on-surface-variant max-w-xl leading-relaxed">
                          Cooked under strict traditional hygiene protocols with pure ghee, authentic Kasaragod spices, and fresh plantain leaf dining arrangements.
                        </p>
                      </div>

                      <a
                        href={`tel:${cleanPhone}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary text-on-primary hover:bg-primary-container transition-colors shrink-0 shadow-sm"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Book Sadya Feast</span>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Catering Customization Callout Banner */}
      <section className="py-12 bg-surface-container border-y border-surface-variant">
        <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="space-y-2">
              <span className="font-label-caps text-[11px] text-secondary tracking-[0.2em] uppercase font-semibold">
                BESPOKE CATERING CONSULTATIONS
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-on-surface font-normal">
                Want A Custom Menu Tailored To Your Guests?
              </h3>
              <p className="text-xs md:text-sm text-on-surface-variant max-w-2xl font-light leading-relaxed">
                Whether you prefer a fusion of Arabic Kuzhimanthi, traditional Malabar Dum Biriyani, or live counter assortments, our culinary team customizes every detail for your big day.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href={`tel:${cleanPhone}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold tracking-wider uppercase bg-[#1e1b19] text-white hover:bg-black transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#ffdad5]" />
                <span>Call {contactData.phoneDisplay}</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold tracking-wider uppercase bg-primary text-on-primary hover:bg-primary-container transition-colors shadow-sm"
              >
                <span>Request Custom Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
