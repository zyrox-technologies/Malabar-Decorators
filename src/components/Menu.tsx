"use client";

import { useState } from "react";
import Link from "next/link";
import { Utensils, Flame, Sparkles, Check, ChevronRight, ChevronDown, GlassWater, Coffee, CookingPot, Award, Star } from "lucide-react";

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
    { id: "all", name: "Full Feast Collection", count: 24, icon: Utensils },
    { id: "mains", name: "Main Dishes & Live Cooking", count: 7, icon: CookingPot },
    { id: "curries", name: "Royal Curries & Sides", count: 6, icon: Flame },
    { id: "desserts", name: "Desserts & Live Sweets", count: 5, icon: Sparkles },
    { id: "drinks", name: "Welcome Coolers", count: 3, icon: GlassWater },
    { id: "beverages", name: "Beverages & Tea", count: 3, icon: Coffee },
  ];

  const menuItems: MenuItem[] = [
    {
      name: "Malabar Dum Biriyani (Chicken / Mutton)",
      malayalam: "മലബാർ ദം ബിരിയാണി",
      category: "mains",
      categoryName: "Main Dishes",
      desc: "Slow-cooked in copper cauldrons with premium Kaima rice, pure ghee, fried onions, cashews & secret Malabar masala.",
      tag: "Signature Dish",
      badge: "CHEF SPECIAL",
      pairing: "Date Pickle, Coconut Chammanthi & Raitha",
      spiceLevel: "Medium",
    },
    {
      name: "Authentic Malabar Kuzhimanthi (Chicken / Mutton)",
      malayalam: "മലബാർ കുഴിമന്തി",
      category: "mains",
      categoryName: "Main Dishes",
      desc: "Traditional slow-roasted smoked mandi rice cooked with fragrant Basmati, tender juicy chicken/mutton, and authentic Arabic mild spices.",
      tag: "Smoked Speciality",
      badge: "MUST TRY",
      pairing: "Spicy Tomato Chutney & Garlic Sauce",
      spiceLevel: "Mild",
    },
    {
      name: "Ghee Rice (Malabar Neychoru)",
      malayalam: "മലബാർ നെയ്‌ചോറ്",
      category: "mains",
      categoryName: "Main Dishes",
      desc: "Fragrant short-grain rice cooked in pure cow ghee, spiced with whole cardamom, cloves, cinnamon & golden fried raisins.",
      tag: "Traditional Favorite",
      badge: "TRADITIONAL",
      pairing: "Mutton Varattiyath & Chicken Roast",
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
      pairing: "Veg Kuruma or Chicken Stew",
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
      pairing: "Spicy Chicken Varattiyath",
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
      pairing: "Beef Roast or Chilly Chicken",
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
      pairing: "Sambar & 3 Chutney Flavors",
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
      pairing: "Ghee Rice or Porotta",
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
      pairing: "Malabar Dum Biriyani or Neychoru",
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
      pairing: "Vellappam & Pathiri",
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
      pairing: "Appam & Chappathi",
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
      desc: "Crispy spirals fried live in pure ghee and dipped in saffron cardamom sugar syrup.",
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

  const displayedItems = showAllItems ? filteredItems : filteredItems.slice(0, 8);

  return (
    <section id="menu" className="py-12 sm:py-16 bg-[#FAF8F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#6F1014]/10 border border-[#6F1014]/20 text-[#6F1014] text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Royal Malabar Culinary Experience</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold leading-tight">
            <span className="dark-gradient-text">Catering Feast</span> <span className="maroon-gradient-text">Catalogue</span>
          </h2>

          <div className="flex items-center justify-center gap-3">
            <div className="h-0.5 w-16 bg-[#6F1014]" />
            <div className="w-2.5 h-2.5 rotate-45 bg-[#F2B93F]" />
            <div className="h-0.5 w-16 bg-[#6F1014]" />
          </div>

          <p className="text-sm sm:text-base text-[#171110]/75 max-w-2xl mx-auto font-normal">
            Crafted by legendary Kerala chefs using traditional copper cauldrons, authentic Kaima rice, fresh ground spices, and live cooking stations.
          </p>
        </div>

        {/* Category Navigation - Modern Floating Segmented Bar */}
        <div className="mt-10 sm:mt-14 mb-12 flex justify-center">
          <div className="bg-white p-2 rounded-2xl sm:rounded-full shadow-xl border border-[#EFE8D7] flex items-center gap-2 overflow-x-auto max-w-full no-scrollbar">
            {categories.map((tab) => {
              const IconComp = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-4 sm:px-5 py-2.5 rounded-xl sm:rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 shrink-0 cursor-pointer ${
                    isActive
                      ? "bg-[#6F1014] text-[#F2B93F] shadow-lg scale-105"
                      : "text-[#171110]/80 hover:bg-[#FAF8F2] hover:text-[#6F1014]"
                  }`}
                >
                  <IconComp className={`w-4 h-4 ${isActive ? "text-[#F2B93F]" : "text-[#6F1014]"}`} />
                  <span>{tab.name}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                      isActive ? "bg-[#F2B93F] text-[#38070A]" : "bg-[#FAF8F2] text-[#6F1014]"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Unique Asymmetric Culinary Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {displayedItems.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl border border-[#EFE8D7] hover:border-[#F2B93F]/80 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(111,16,20,0.12)] transition-all duration-500 relative overflow-hidden flex flex-col justify-between p-6 sm:p-7 hover:-translate-y-1"
            >
              {/* Left Edge Brand Crimson Accent Bar */}
              <div className="absolute top-0 bottom-0 left-0 w-2 bg-[#6F1014] group-hover:bg-[#F2B93F] transition-colors duration-500" />

              <div className="space-y-4">
                {/* Top Row: Category Tag & Badge */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold tracking-widest uppercase text-[#6F1014] bg-[#6F1014]/10 px-3 py-1 rounded-full border border-[#6F1014]/20">
                      {item.categoryName}
                    </span>
                  </div>

                  {item.badge && (
                    <span
                      className={`text-[10px] font-extrabold px-3 py-1 rounded-full shadow-sm flex items-center gap-1 uppercase tracking-wider ${
                        item.badge === "LIVE COUNTER"
                          ? "bg-[#6F1014] text-[#F2B93F] border border-[#F2B93F]/40 animate-pulse"
                          : item.badge === "CHEF SPECIAL"
                          ? "bg-gradient-to-r from-[#DFAE32] to-[#F2B93F] text-[#38070A]"
                          : "bg-[#171110] text-white"
                      }`}
                    >
                      {item.badge === "LIVE COUNTER" && <Flame className="w-3 h-3 text-[#F2B93F]" />}
                      {item.badge === "CHEF SPECIAL" && <Award className="w-3 h-3" />}
                      <span>{item.badge}</span>
                    </span>
                  )}
                </div>

                {/* Dish Name & Malayalam Calligraphy Badge */}
                <div className="space-y-2 pt-1">
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#171110] group-hover:text-[#6F1014] transition-colors leading-snug">
                    {item.name}
                  </h3>

                  <div className="inline-flex items-center gap-1.5 bg-[#FAF8F2] border border-[#DFAE32]/50 px-3 py-1 rounded-full shadow-sm">
                    <Sparkles className="w-3 h-3 text-[#DFAE32]" />
                    <span className="text-xs font-bold text-[#6F1014] tracking-wide">
                      {item.malayalam}
                    </span>
                  </div>
                </div>

                {/* Culinary Description */}
                <p className="text-xs sm:text-sm text-[#171110]/80 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Feature Bar: Recommended Pairing & Spice Profile */}
              <div className="mt-6 pt-4 border-t border-[#F7F3EA] space-y-2">
                <div className="bg-[#FAF8F2] p-3.5 rounded-2xl border border-[#EFE8D7] flex flex-wrap items-center justify-between gap-3 text-xs">
                  {item.pairing ? (
                    <div className="flex items-center gap-2 text-[#171110]/85 font-medium">
                      <Star className="w-3.5 h-3.5 text-[#F2B93F] fill-[#F2B93F] shrink-0" />
                      <span>
                        <strong className="text-[#6F1014] font-bold">Pairing: </strong>
                        {item.pairing}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-[#6F1014] font-bold">
                      <Check className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>Authentic Malabar Recipe</span>
                    </div>
                  )}

                  {item.spiceLevel && (
                    <span className="text-[11px] font-bold text-[#6F1014] bg-white px-2.5 py-0.5 rounded-full border border-[#6F1014]/20 shadow-xs">
                      🌶️ {item.spiceLevel}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Toggle */}
        {filteredItems.length > 8 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAllItems(!showAllItems)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white border-2 border-[#6F1014] text-[#6F1014] hover:bg-[#6F1014] hover:text-[#F2B93F] font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
            >
              <span>{showAllItems ? "Show Fewer Menu Items" : `Explore All ${filteredItems.length} Feast Dishes`}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAllItems ? "rotate-180" : ""}`} />
            </button>
          </div>
        )}

        {/* Quote Request & Details Page Navigation CTA */}
        <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2.5 px-9 py-4 rounded-2xl bg-gradient-to-r from-[#6F1014] to-[#8B1E23] hover:from-[#8B1E23] hover:to-[#6F1014] text-white font-bold text-xs uppercase tracking-widest shadow-xl hover:shadow-2xl transition-all group"
          >
            <span>View Full Catering Feast Catalogue Page</span>
            <ChevronRight className="w-4 h-4 text-[#F2B93F] group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white border-2 border-[#6F1014] text-[#6F1014] hover:bg-[#6F1014] hover:text-[#F2B93F] font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-2xl transition-all"
          >
            <span>Request Custom Menu Quote</span>
          </a>
        </div>

      </div>
    </section>
  );
}
