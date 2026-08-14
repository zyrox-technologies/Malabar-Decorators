"use client";

import { useState } from "react";
import Image from "next/image";
import { Utensils, Flame, Sparkles, Check, ChevronRight, ChevronDown, GlassWater, Coffee, CookingPot, Award } from "lucide-react";

interface MenuItem {
  name: string;
  malayalam: string;
  category: "drinks" | "mains" | "curries" | "desserts" | "beverages";
  categoryName: string;
  desc: string;
  tag: string;
  badge?: "LIVE COUNTER" | "CHEF SPECIAL" | "TRADITIONAL" | "MUST TRY";
  pairing?: string;
  spiceLevel?: "Mild" | "Medium" | "Rich & Spicy";
}

export default function Menu() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [showAllItems, setShowAllItems] = useState<boolean>(false);

  const categories = [
    { id: "all", name: "Full Menu Overview", count: 24, icon: Utensils },
    { id: "mains", name: "Main Dishes (Biriyani & Live)", count: 6, icon: CookingPot },
    { id: "curries", name: "Curries & Sides", count: 6, icon: Flame },
    { id: "desserts", name: "Desserts & Live Sweets", count: 5, icon: Sparkles },
    { id: "drinks", name: "Welcome Drinks / Live Juices", count: 3, icon: GlassWater },
    { id: "beverages", name: "Beverages & Live Tea", count: 3, icon: Coffee },
  ];

  const menuItems: MenuItem[] = [
    // MAINS
    {
      name: "Malabar Dum Biriyani (Chicken / Mutton)",
      malayalam: "മലബാർ ദം ബിരിയാണി",
      category: "mains",
      categoryName: "Main Dishes",
      desc: "Slow-cooked in copper cauldrons with premium Kaima rice, pure ghee, fried onions, cashews & secret Malabar masala.",
      tag: "Signature Dish",
      badge: "CHEF SPECIAL",
      pairing: "Pairs with Date Pickle, Coconut Chammanthi & Raitha",
      spiceLevel: "Medium",
    },
    {
      name: "Ghee Rice (Malabar Neychoru)",
      malayalam: "മലബാർ നെയ്‌ചോറ്",
      category: "mains",
      categoryName: "Main Dishes",
      desc: "Fragrant short-grain rice cooked in pure cow ghee, spiced with whole cardamom, cloves, cinnamon & golden fried raisins.",
      tag: "Traditional Favorite",
      badge: "TRADITIONAL",
      pairing: "Pairs with Mutton Varattiyath & Chicken Roast",
      spiceLevel: "Mild",
    },
    {
      name: "Vellappam (Live Counter)",
      malayalam: "വെള്ളപ്പൊം - തത്സമയം",
      category: "mains",
      categoryName: "Main Dishes",
      desc: "Freshly fermented rice & coconut milk pancakes cooked live on traditional clay pans with lacy golden edges.",
      tag: "Live Chef Station",
      badge: "LIVE COUNTER",
      pairing: "Pairs with Veg Kuruma or Chicken Stew",
      spiceLevel: "Mild",
    },
    {
      name: "Neypathal (Live Counter)",
      malayalam: "നെയ്പത്തൽ - തത്സമയം",
      category: "mains",
      categoryName: "Main Dishes",
      desc: "Crispy fried Malabar rice & fennel seed puris fried hot right before your event guests.",
      tag: "Live Chef Station",
      badge: "LIVE COUNTER",
      pairing: "Best enjoyed with Spicy Chicken Varattiyath",
      spiceLevel: "Medium",
    },
    {
      name: "Malabar Flaky Porotta (Live)",
      malayalam: "മലബാർ പൊറോട്ട - തത്സമയം",
      category: "mains",
      categoryName: "Main Dishes",
      desc: "Hand-tossed multi-layered flaky flatbread grilled live on iron tawa with pure ghee.",
      tag: "Guest Favorite",
      badge: "LIVE COUNTER",
      pairing: "Pairs with Beef Roast or Chilly Chicken",
      spiceLevel: "Mild",
    },
    {
      name: "Live Dosa Station",
      malayalam: "തത്സമയ ദോശ സ്റ്റേഷൻ",
      category: "mains",
      categoryName: "Main Dishes",
      desc: "Piping hot ghee roast & masala dosa made to order with chutney varieties.",
      tag: "Live Chef Station",
      badge: "LIVE COUNTER",
      pairing: "Served with Sambar & 3 Chutney Flavors",
      spiceLevel: "Mild",
    },

    // CURRIES
    {
      name: "Chicken Varattiyath",
      malayalam: "ചിക്കൻ വരട്ടിയത്",
      category: "curries",
      categoryName: "Curries & Sides",
      desc: "Tender chicken slow-roasted in thick black pepper & shallot gravy with roasted coconut slivers.",
      tag: "Malabar Classic",
      badge: "MUST TRY",
      pairing: "Best paired with Ghee Rice or Porotta",
      spiceLevel: "Rich & Spicy",
    },
    {
      name: "Mutton Roast Varattiyath",
      malayalam: "മട്ടൻ വരട്ടിയത്",
      category: "curries",
      categoryName: "Curries & Sides",
      desc: "Succulent mutton cuts slow-cooked in traditional urli with crushed pepper, curry leaves & ghee.",
      tag: "Royal Recipe",
      badge: "CHEF SPECIAL",
      pairing: "Perfect with Malabar Dum Biriyani or Neychoru",
      spiceLevel: "Rich & Spicy",
    },
    {
      name: "Traditional Kerala Chicken Curry",
      malayalam: "നാടൻ ചിക്കൻ കറി",
      category: "curries",
      categoryName: "Curries & Sides",
      desc: "Country chicken cooked in roasted coconut paste with coriander, turmeric & green chillies.",
      tag: "Banquet Essential",
      badge: "TRADITIONAL",
      pairing: "Pairs with Vellappam & Pathiri",
      spiceLevel: "Medium",
    },
    {
      name: "Vegetable Kuruma",
      malayalam: "വെജിറ്റബിൾ കുറുമ",
      category: "curries",
      categoryName: "Curries & Sides",
      desc: "Garden fresh carrots, green peas & potatoes simmered in a rich coconut milk cashew gravy.",
      tag: "Vegetarian Delicacy",
      badge: "TRADITIONAL",
      pairing: "Pairs with Appam & Chappathi",
      spiceLevel: "Mild",
    },
    {
      name: "Chilly Chicken Dry / Gravy",
      malayalam: "ചില്ലി ചിക്കൻ",
      category: "curries",
      categoryName: "Curries & Sides",
      desc: "Crispy chicken morsels tossed with bell peppers, onions, ginger & soy chilli glaze.",
      tag: "Party Favorite",
      spiceLevel: "Medium",
    },
    {
      name: "Gopi Manchurian Live",
      malayalam: "ഗോപി മഞ്ചൂരിയൻ",
      category: "curries",
      categoryName: "Curries & Sides",
      desc: "Crispy cauliflower florets coated in aromatic garlic tomato soya reduction.",
      tag: "Live Veg Option",
      spiceLevel: "Medium",
    },

    // DESSERTS
    {
      name: "Ada Pradhaman Payasam",
      malayalam: "അട പ്രഥമൻ പായസം",
      category: "desserts",
      categoryName: "Desserts & Sweets",
      desc: "Traditional Kerala dessert made with steamed rice flakes, thick jaggery syrup, coconut milk & fried cashew-raisin ghee topping.",
      tag: "Kerala Royal Sweet",
      badge: "TRADITIONAL",
      pairing: "Served warm in clay pots",
    },
    {
      name: "Palpayasam (Rich Milk Pudding)",
      malayalam: "പാൽപായസം",
      category: "desserts",
      categoryName: "Desserts & Sweets",
      desc: "Slow-reduced whole milk & Kaima rice simmered for hours until creamy golden pink.",
      tag: "Temple Classic",
      badge: "TRADITIONAL",
    },
    {
      name: "Live Hot Jalebi Counter",
      malayalam: "തത്സമയ ലൈവ് ജിലേബി",
      category: "desserts",
      categoryName: "Desserts & Sweets",
      desc: "Crispy spirals fried live in pure ghee and dipped in saffron kardamom sugar syrup.",
      tag: "Live Dessert",
      badge: "LIVE COUNTER",
    },
    {
      name: "Live Mysore Pak Counter",
      malayalam: "തത്സമയ ലൈവ് മൈസൂർ പാക്ക്",
      category: "desserts",
      categoryName: "Desserts & Sweets",
      desc: "Melt-in-mouth golden gram flour fudge made hot at the live dessert counter.",
      tag: "Live Dessert",
      badge: "LIVE COUNTER",
    },
    {
      name: "Premium Ice Cream & Gulab Jamun",
      malayalam: "ഐസ് ക്രീം & ഗുലാബ് ജാമുൻ",
      category: "desserts",
      categoryName: "Desserts & Sweets",
      desc: "Soft cardamom jamuns served with vanilla, mango or pistachio ice cream scoops.",
      tag: "Classic Finish",
    },

    // DRINKS
    {
      name: "Fresh Watermelon Juice",
      malayalam: "തത്സമയ വട്ടര്മെലൺ ജ്യൂസ്",
      category: "drinks",
      categoryName: "Welcome Drinks",
      desc: "Freshly cold-pressed sweet watermelon with mint leaves & crushed ice.",
      tag: "Welcome Cooler",
      badge: "MUST TRY",
    },
    {
      name: "Chilled Papaya & Pineapple Juice",
      malayalam: "പപ്പായ & പൈനാപ്പിൾ ജ്യൂസ്",
      category: "drinks",
      categoryName: "Welcome Drinks",
      desc: "Tropical fruit blend made with farm-fresh Kerala fruits.",
      tag: "Welcome Cooler",
    },
    {
      name: "Fresh Grape & Musambi Juice",
      malayalam: "ഗ്രേപ്പ് & മൂസാമ്പി ജ്യൂസ്",
      category: "drinks",
      categoryName: "Welcome Drinks",
      desc: "Refreshing natural citrus punch served in crystal glassware.",
      tag: "Welcome Cooler",
    },

    // BEVERAGES
    {
      name: "Malabar Colour Tea (Live)",
      malayalam: "തത്സമയ മലബാർ കളർ ടീ",
      category: "beverages",
      categoryName: "Beverages & Tea",
      desc: "Aromatic pulled Malabar tea brewed with cardamoms and poured live with high froth.",
      tag: "Cultural Icon",
      badge: "LIVE COUNTER",
    },
    {
      name: "Hot Filter Coffee Station",
      malayalam: "ഹാറ്റ് ഫിൽട്ടർ കോഫി",
      category: "beverages",
      categoryName: "Beverages & Tea",
      desc: "Authentic South Indian decoction coffee brewed with fresh cow milk.",
      tag: "Hot Beverage",
    },
    {
      name: "Purified Mineral Water & Cool Drinks",
      malayalam: "മിനറൽ വാട്ടർ & കൂൾ ഡ്രിങ്ക്സ്",
      category: "beverages",
      categoryName: "Beverages & Tea",
      desc: "Hygienically served bottled water and chilled soft beverages.",
      tag: "Standard Inclusion",
    },
  ];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setShowAllItems(false);
  };

  const filteredItems =
    activeTab === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeTab);

  const displayedItems = showAllItems ? filteredItems : filteredItems.slice(0, 6);

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

        {/* Signature Feature Banner */}
        <div className="mt-10 mb-12 rounded-3xl overflow-hidden shadow-2xl relative border-2 border-[#DFAE32]/40 bg-[#38070A]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 p-8 sm:p-10 space-y-4 text-white z-10">
              <span className="bg-[#DFAE32] text-[#38070A] text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                Signature Royal Dish
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F2B93F]">
                Malabar Special Dum Biriyani & Live Feast
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
            <div className="lg:col-span-5 relative h-48 sm:h-64 lg:h-full min-h-[200px] sm:min-h-[260px]">
              <Image
                src="/hero_biriyani.png"
                alt="Malabar Dum Biriyani Feast"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Luxury Category Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2.5 mb-8 sm:mb-12 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((tab) => {
            const IconComp = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs font-bold transition-all border flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap ${isActive
                    ? "bg-[#6F1014] text-[#F2B93F] border-[#DFAE32] shadow-lg scale-105"
                    : "bg-white text-[#241B18] border-[#EFE8D7] hover:border-[#6F1014]/40 hover:bg-[#FAF8F2]"
                  }`}
              >
                <IconComp className={`w-4 h-4 ${isActive ? "text-[#F2B93F]" : "text-[#8B1E23]"}`} />
                <span>{tab.name}</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${isActive ? "bg-[#8B1E23] text-[#F2B93F]" : "bg-[#F7F3EA] text-[#6F1014]"
                    }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Completely Re-Designed Luxury Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 border-2 border-[#EFE8D7] shadow-lg hover:shadow-2xl hover:border-[#DFAE32] transition-all duration-300 flex flex-col justify-between relative group overflow-hidden"
            >
              {/* Top Accent Gold Strip */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#6F1014] via-[#DFAE32] to-[#6F1014]" />

              <div>
                {/* Header Row: Category Pill & Live Badge */}
                <div className="flex items-center justify-between gap-2 pt-2 mb-3">
                  <span className="text-[10px] font-bold tracking-wider uppercase bg-[#F7F3EA] text-[#6F1014] px-2.5 py-1 rounded-full border border-[#6F1014]/20">
                    {item.categoryName}
                  </span>

                  {item.badge && (
                    <span
                      className={`text-[10px] font-extrabold px-3 py-1 rounded-full shadow-sm flex items-center gap-1 uppercase tracking-wider ${item.badge === "LIVE COUNTER"
                          ? "bg-[#6F1014] text-[#F2B93F] border border-[#F2B93F]/50 animate-pulse"
                          : item.badge === "CHEF SPECIAL"
                            ? "bg-gradient-to-r from-[#DFAE32] to-[#F2B93F] text-[#38070A]"
                            : "bg-[#38070A] text-[#FAF8F2]"
                        }`}
                    >
                      {item.badge === "LIVE COUNTER" && <Flame className="w-3 h-3 text-[#F2B93F]" />}
                      {item.badge === "CHEF SPECIAL" && <Award className="w-3 h-3" />}
                      <span>{item.badge}</span>
                    </span>
                  )}
                </div>

                {/* Main Dish Name & Malayalam Calligraphy */}
                <div className="space-y-1 my-3">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#241B18] group-hover:text-[#6F1014] transition-colors leading-snug">
                    {item.name}
                  </h3>
                  <div className="inline-block bg-[#6F1014]/5 px-2.5 py-0.5 rounded-md border border-[#6F1014]/15">
                    <span className="text-xs font-bold text-[#6F1014] tracking-wide">
                      {item.malayalam}
                    </span>
                  </div>
                </div>

                {/* Culinary Description */}
                <p className="text-xs text-[#241B18]/80 leading-relaxed mt-3 font-normal">
                  {item.desc}
                </p>

                {/* Flavor Profile & Spice Level */}
                {item.spiceLevel && (
                  <div className="mt-3 pt-3 border-t border-[#F7F3EA] flex items-center justify-between text-[11px]">
                    <span className="text-[#241B18]/60 font-medium">Flavor Profile:</span>
                    <span className="font-bold text-[#8B1E23] bg-[#8B1E23]/10 px-2 py-0.5 rounded">
                      🌶️ {item.spiceLevel}
                    </span>
                  </div>
                )}
              </div>

              {/* Card Footer: Pairing Recommendation */}
              <div className="mt-5 pt-4 border-t border-[#F7F3EA]">
                {item.pairing ? (
                  <div className="flex items-start gap-2 bg-[#FAF8F2] p-2.5 rounded-xl border border-[#EFE8D7] text-[11px]">
                    <Sparkles className="w-4 h-4 text-[#DFAE32] shrink-0 mt-0.5" />
                    <span className="text-[#241B18]/85 font-medium leading-tight">
                      <strong className="text-[#6F1014] block font-semibold">Recommended Pair:</strong>
                      {item.pairing}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center justify-between text-[11px] text-[#6F1014] font-bold">
                    <span>✨ Malabar Decorators Culinary Excellence</span>
                    <Check className="w-4 h-4 text-[#25D366]" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View More / Show Less Toggle Button */}
        {filteredItems.length > 6 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAllItems(!showAllItems)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white border-2 border-[#6F1014] text-[#6F1014] hover:bg-[#6F1014] hover:text-[#F2B93F] font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-xl transition-all group"
            >
              <span>{showAllItems ? "Show Fewer Menu Cards" : `View All ${filteredItems.length} Menu Items`}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAllItems ? "rotate-180" : ""}`} />
            </button>
          </div>
        )}

        {/* CTA Quote Request */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#6F1014] to-[#8B1E23] hover:from-[#8B1E23] hover:to-[#6F1014] text-white font-bold text-xs uppercase tracking-wider shadow-xl hover:shadow-2xl transition-all"
          >
            <span>Request Custom Catering Menu Quote</span>
            <ChevronRight className="w-4 h-4 text-[#F2B93F]" />
          </a>
        </div>
      </div>
    </section>
  );
}
