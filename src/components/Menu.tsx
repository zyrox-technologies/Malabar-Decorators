"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Utensils,
  Flame,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  GlassWater,
  Coffee,
  CookingPot,
  MessageCircle,
  Phone
} from "lucide-react";

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
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  const categories = [
    { id: "all", name: "Full Feast Collection", count: 24, icon: Utensils },
    { id: "mains", name: "Main Dishes & Rice", count: 7, icon: CookingPot },
    { id: "curries", name: "Royal Curries & Fries", count: 6, icon: Flame },
    { id: "desserts", name: "Desserts & Live Sweets", count: 5, icon: CookingPot },
    { id: "drinks", name: "Welcome Coolers", count: 3, icon: GlassWater },
    { id: "beverages", name: "Tea & Beverages", count: 3, icon: Coffee },
  ];

  const featuredPackages = [
    {
      id: 0,
      title: "Royal Wedding Feast",
      subtitle: "A spectacular buffet for 500+ guests",
      desc: "Authentic copper cauldron Dum Biriyani, Ghee Rice, Mutton Varattiyath, live counters & homemade sweets.",
      image: "/service/file_000000003f2081faa2f8fe4fef914b6c.png",
      tag: "500+ Guests Buffet",
      cardStyle: "rounded-3xl border-2 border-[#DFAE32] shadow-[0_15px_40px_rgba(223,174,50,0.25)] bg-white",
      badge: "CHEF SPECIAL",
    },
    {
      id: 1,
      title: "Elegant Reception Soirée",
      subtitle: "Exquisite appetizers & entrees for 150+ guests",
      desc: "Pure cow ghee Neychoru, slow-roasted chicken roast, hot Neypathal counter & fresh welcome coolers.",
      image: "/service/file_00000000eb9881fab921c9342b3b0d2b.png",
      tag: "150+ Guests Reception",
      cardStyle: "rounded-[2.5rem] border border-[#EFE8D7] shadow-lg bg-white",
      badge: "POPULAR CHOICE",
    },
    {
      id: 2,
      title: "Classic Banquet Celebration",
      subtitle: "Authentic flavours for large gatherings",
      desc: "24+ traditional Kerala vegetarian delicacies served on fresh green banana leaf with Ada Pradhaman.",
      image: "/service/file_00000000031081fa834f12ca0ea5b50d.png",
      tag: "Traditional Sadhya",
      cardStyle: "rounded-2xl border border-[#EFE8D7] shadow-md bg-white -rotate-1 hover:rotate-0 transition-transform",
      badge: "TRADITIONAL",
    },
    {
      id: 3,
      title: "Modern Live Counter Station",
      subtitle: "Contemporary live cooking & tea fusion",
      desc: "Freshly made Vellappam, fluffy Neypathal, hot Jalebis & authentic frothy Malabar Colour Tea.",
      image: "/service/file_0000000074e881fa996b7468b88652b4.png",
      tag: "Live Chef Stations",
      cardStyle: "rounded-t-[4rem] rounded-b-3xl border border-[#EFE8D7] shadow-md bg-white",
      badge: "LIVE COUNTER",
    },
    {
      id: 4,
      title: "Signature Smoked Kuzhimanthi",
      subtitle: "Luxury smoked mandi experience for 200+ guests",
      desc: "Slow-smoked tender chicken & mutton mandi rice served with garlic tomato salsa and fresh salads.",
      image: "/service/file_000000009420820b9bff46071f57ae0d.png",
      tag: "Smoked Speciality",
      cardStyle: "rounded-2xl border border-[#EFE8D7] shadow-md bg-white rotate-1 hover:rotate-0 transition-transform",
      badge: "MUST TRY",
    },
    {
      id: 5,
      title: "Grand Refreshment Buffet",
      subtitle: "Chilled fruit coolers & dessert stalls",
      desc: "Watermelon mint punch, grape coolers, fresh ice creams, Falooda counters & hot Sulaimani.",
      image: "/service/file_00000000b464820b963a97bd17a2c97d.png",
      tag: "Refreshments & Desserts",
      cardStyle: "rounded-3xl border border-[#EFE8D7] shadow-md bg-white",
      badge: "ADD-ON SPECIAL",
    },
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
      name: "Traditional Kerala Sadhya (24+ Items)",
      malayalam: "പരമ്പരാഗത കേരള സദ്യ",
      category: "mains",
      categoryName: "Main Dishes",
      desc: "Complete ceremonial feast served on fresh green banana leaf featuring Matta Rice, Parippu, Sambar, Aviyal, Thoran, Pappadam & 2 Payasams.",
      tag: "Authentic Sadhya",
      badge: "TRADITIONAL",
      pairing: "Ada Pradhaman & Palada Payasam",
      spiceLevel: "Mild",
    },
    {
      name: "Mutton Varattiyath (Royal Slow Roast)",
      malayalam: "മട്ടൺ വരട്ടിയത്",
      category: "curries",
      categoryName: "Royal Curries",
      desc: "Tender goat meat slow-roasted in shallow copper pans with crushed black pepper, fried coconut slices & curry leaves.",
      tag: "Royal Recipe",
      badge: "CHEF SPECIAL",
      pairing: "Neychoru or Flaky Porotta",
      spiceLevel: "Rich & Spicy",
    },
    {
      name: "Malabar Chicken Roast & Fry",
      malayalam: "ചിക്കൻ റോസ്റ്റ് & ഫ്രൈ",
      category: "curries",
      categoryName: "Royal Curries",
      desc: "Marinated farm-fresh chicken cooked in thick caramelized onion & tomato gravy, finished with fried coconut strips.",
      tag: "Feast Essential",
      spiceLevel: "Medium",
    },
    {
      name: "Beef Roast / Beef Varattiyath",
      malayalam: "ബീഫ് റോസ്റ്റ് / ബീഫ് വരട്ടിയത്",
      category: "curries",
      categoryName: "Royal Curries",
      desc: "Kerala style spiced beef chunks tossed with coconut bites, shallots, garlic and freshly pounded garam masala.",
      tag: "Crowd Favorite",
      badge: "MUST TRY",
      pairing: "Hot Neypathal & Porotta",
      spiceLevel: "Rich & Spicy",
    },
    {
      name: "Live Jalebi & Sweet Stall",
      malayalam: "തത്സമയ ജിലേബി കൗണ്ടർ",
      category: "desserts",
      categoryName: "Desserts & Sweets",
      desc: "Crispy hot golden Jalebi cooked live and dipped in saffron sugar syrup, served warm to guests.",
      tag: "Live Sweet Stalls",
      badge: "LIVE COUNTER",
      spiceLevel: "Mild",
    },
    {
      name: "Ada Pradhaman & Palada Payasam",
      malayalam: "അട പ്രഥമൻ & പാലട പായസം",
      category: "desserts",
      categoryName: "Desserts & Sweets",
      desc: "Rich jaggery & coconut milk Ada Pradhaman cooked slow with cashew nuts, ghee & cardamom.",
      tag: "Traditional Dessert",
      badge: "TRADITIONAL",
    },
    {
      name: "Fresh Fruit Welcome Coolers",
      malayalam: "ഫ്രഷ് ഫ്രൂട്ട് ജ്യൂസുകൾ",
      category: "drinks",
      categoryName: "Welcome Drinks",
      desc: "Refreshing chilled Watermelon Mint, Grape Punch, Passion Fruit, and Lemon Mint Mojito served in crystal dispensers.",
      tag: "Chilled Welcome",
    },
    {
      name: "Malabar Colour Tea & Sulaimani (Live)",
      malayalam: "മലബാർ കളർ ചായ & സുലൈമാനി",
      category: "desserts",
      categoryName: "Beverages",
      desc: "Strong layered frothy Malabar Dum Tea and digestion-boosting spiced Sulaimani served live post-feast.",
      tag: "Post-Feast Beverage",
      badge: "LIVE COUNTER",
    },
  ];

  const handlePrevCard = () => {
    setActiveCardIndex((prev) => (prev === 0 ? featuredPackages.length - 1 : prev - 1));
  };

  const handleNextCard = () => {
    setActiveCardIndex((prev) => (prev === featuredPackages.length - 1 ? 0 : prev + 1));
  };

  const filteredItems =
    activeTab === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeTab);

  const displayedItems = showAllItems ? filteredItems : filteredItems.slice(0, 8);

  return (
    <section id="menu" className="py-12 sm:py-16 bg-white relative overflow-hidden text-[#171110]">
      {/* Decorative Gold SVG Fine-Line Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <svg className="w-full h-full stroke-[#DFAE32]/40 fill-none" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <circle cx="1200" cy="180" r="280" strokeWidth="0.8" strokeDasharray="4 4" />
          <path d="M-100,300 Q400,100 900,400 T1600,200" strokeWidth="0.8" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#6F1014]/10 border border-[#6F1014]/20 text-[#6F1014] text-xs font-bold tracking-widest uppercase">
            <span>Curated Collections for Your Exquisite Event</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="dark-gradient-text uppercase">CATERING FEAST</span>{" "}
            <span className="maroon-gradient-text uppercase">CATALOGUE</span>
          </h2>

          <p className="text-xs sm:text-sm text-gray-600 font-medium">
            Explore our curated culinary packages, copper cauldron biriyanis, live appam & neypathal counters, and traditional Sadhya spreads.
          </p>
        </div>

        {/* GEMINI SHOWCASE CAROUSEL CONTAINER */}
        <div className="relative pt-2 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {featuredPackages.map((pkg, idx) => {
              const isActive = idx === activeCardIndex;

              return (
                <div
                  key={pkg.id}
                  onClick={() => setActiveCardIndex(idx)}
                  className={`cursor-pointer transition-all duration-500 p-6 flex flex-col justify-between relative group ${pkg.cardStyle} ${
                    isActive
                      ? "ring-2 ring-[#DFAE32] shadow-2xl scale-[1.02] border-[#DFAE32]"
                      : "opacity-90 hover:opacity-100 hover:scale-[1.01]"
                  }`}
                >
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#6F1014] bg-[#6F1014]/10 px-3 py-1 rounded-full border border-[#6F1014]/20">
                      {pkg.tag}
                    </span>
                    <span className="text-[10px] font-bold text-[#DFAE32] bg-[#38070A] px-2.5 py-0.5 rounded-full border border-[#DFAE32]/40 shadow-xs">
                      {pkg.badge}
                    </span>
                  </div>

                  {/* Top Image Cutout */}
                  <div className="relative w-full h-52 mb-5 overflow-hidden rounded-2xl bg-gray-100 shadow-inner">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2.5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-[#171110] group-hover:text-[#6F1014] transition-colors leading-tight">
                        {pkg.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#6F1014] mt-0.5">
                        {pkg.subtitle}
                      </p>
                      <p className="text-xs text-gray-600 leading-relaxed mt-2 line-clamp-2">
                        {pkg.desc}
                      </p>
                    </div>

                    {/* Explore CTA Button inside Card */}
                    <div className="pt-4 border-t border-[#EFE8D7] flex items-center justify-between">
                      <a
                        href={`https://wa.me/919946692100?text=${encodeURIComponent(`Hi Malabar Caterers, I want to enquiry about ${pkg.title}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-4 py-2 rounded-xl bg-[#6F1014] hover:bg-[#8B1E23] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md hover:shadow-lg transition-all"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-white" />
                        <span>EXPLORE MENU</span>
                      </a>

                      <span className="text-[11px] font-bold text-[#6F1014] uppercase tracking-wider flex items-center gap-1">
                        <span>Details</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Slider Controls & Progress Indicator */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 px-2">
            <div className="flex items-center gap-3 order-2 sm:order-1">
              <button
                onClick={handlePrevCard}
                aria-label="Previous Feast Package"
                className="w-10 h-10 rounded-full bg-white border border-[#EFE8D7] shadow-md hover:border-[#6F1014] text-[#171110] hover:text-[#6F1014] flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextCard}
                aria-label="Next Feast Package"
                className="w-10 h-10 rounded-full bg-white border border-[#EFE8D7] shadow-md hover:border-[#6F1014] text-[#171110] hover:text-[#6F1014] flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="w-48 h-1.5 bg-gray-200 rounded-full overflow-hidden order-1 sm:order-2">
              <div
                className="h-full bg-gradient-to-r from-[#6F1014] via-[#DFAE32] to-[#F2B93F] transition-all duration-300 rounded-full"
                style={{ width: `${((activeCardIndex + 1) / featuredPackages.length) * 100}%` }}
              />
            </div>

            {/* Pagination Numbers */}
            <div className="text-xs font-bold text-gray-500 order-3">
              <span className="text-[#6F1014]">{String(activeCardIndex + 1).padStart(2, "0")}</span> / {String(featuredPackages.length).padStart(2, "0")}
            </div>
          </div>
        </div>

        {/* CENTER MAIN CTA BUTTON ("Discover Your Feast") */}
        <div className="mt-8 mb-16 text-center space-y-3">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full bg-gradient-to-r from-[#DFAE32] via-[#F2B93F] to-[#DFAE32] text-[#38070A] font-bold text-xs uppercase tracking-widest shadow-xl hover:shadow-2xl hover:brightness-110 active:scale-95 transition-all cursor-pointer group"
            >
              <Utensils className="w-4 h-4 text-[#38070A]" />
              <span>Discover Your Feast</span>
              <ChevronRight className="w-4 h-4 text-[#38070A] group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white border-2 border-[#6F1014] text-[#6F1014] hover:bg-[#6F1014] hover:text-[#F2B93F] font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <span>Request Custom Menu Quote</span>
            </a>
          </div>

          <p className="text-xs text-gray-500 max-w-lg mx-auto leading-relaxed">
            Explore our curated packages. Click to view detailed menus and customization options.
          </p>
        </div>

        {/* FULL DISH CATEGORY TABS & MENU ITEMS GRID */}
        <div className="pt-10 border-t border-[#EFE8D7]">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#171110]">
              Full Culinary Item Collection
            </h3>
            <p className="text-xs text-gray-600">
              Browse individual dishes, live counters, welcome drinks, and desserts.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto no-scrollbar py-2 mb-8">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 shrink-0 cursor-pointer ${
                    activeTab === cat.id
                      ? "bg-[#6F1014] text-white shadow-md"
                      : "bg-[#FAF8F2] text-[#171110]/70 hover:bg-[#6F1014]/10 hover:text-[#6F1014] border border-[#EFE8D7]"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Dish Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F2] rounded-2xl p-5 border border-[#EFE8D7] shadow-xs hover:shadow-md hover:border-[#6F1014]/30 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-2.5">
                  <div className="flex items-start justify-between gap-1.5">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#6F1014] bg-[#6F1014]/10 px-2.5 py-0.5 rounded-full border border-[#6F1014]/20">
                      {item.tag}
                    </span>
                    {item.badge && (
                      <span className="text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-[#DFAE32]/20 text-[#38070A] border border-[#DFAE32]/40 uppercase tracking-wider">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <div>
                    <h4 className="font-heading text-base font-bold text-[#171110] group-hover:text-[#6F1014] transition-colors leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-[11px] font-semibold text-[#6F1014]/80 mt-0.5">
                      {item.malayalam}
                    </p>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>

                  {item.pairing && (
                    <div className="bg-white p-2 rounded-xl border border-[#EFE8D7] text-[10px] text-gray-700">
                      <span className="font-bold text-[#6F1014]">Pairing: </span>
                      {item.pairing}
                    </div>
                  )}
                </div>

                <div className="pt-3 mt-3 border-t border-[#EFE8D7] flex items-center justify-between">
                  <span className="text-[10px] text-gray-500 font-medium">
                    Spice: <strong className="text-[#171110]">{item.spiceLevel || "Custom"}</strong>
                  </span>

                  <a
                    href={`https://wa.me/919946692100?text=${encodeURIComponent(`Hi Malabar Caterers, I want to enquire about ${item.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#6F1014] hover:text-[#8B1E23] flex items-center gap-1 group/btn"
                  >
                    <span>Enquire</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* View More Toggle */}
          {filteredItems.length > 8 && (
            <div className="mt-10 text-center">
              <button
                onClick={() => setShowAllItems(!showAllItems)}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white border-2 border-[#6F1014] text-[#6F1014] hover:bg-[#6F1014] hover:text-[#F2B93F] font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer group"
              >
                <span>{showAllItems ? "Show Fewer Dishes" : `Explore All ${filteredItems.length} Feast Dishes`}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAllItems ? "rotate-180" : ""}`} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
