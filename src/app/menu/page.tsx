"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Utensils,
  Flame,
  Check,
  ChevronRight,
  GlassWater,
  Coffee,
  CookingPot,
  Award,
  Star,
  MessageCircle,
  Phone,
  CheckCircle2,
  Users,
  ShieldCheck
} from "lucide-react";

interface MenuItem {
  name: string;
  malayalam: string;
  category: "mains" | "curries" | "live" | "desserts" | "drinks" | "beverages";
  categoryName: string;
  desc: string;
  tag: string;
  badge?: "LIVE COUNTER" | "CHEF SPECIAL" | "TRADITIONAL" | "MUST TRY";
  pairing?: string;
  spiceLevel?: "Mild" | "Medium" | "Rich & Spicy";
}

export default function CateringMenuPage() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const categories = [
    { id: "all", name: "Full Catering Catalogue", count: 24, icon: Utensils },
    { id: "mains", name: "Main Dishes & Rice", count: 7, icon: CookingPot },
    { id: "curries", name: "Royal Curries & Fries", count: 6, icon: Flame },
    { id: "live", name: "Live Cooking Stations", count: 4, icon: CookingPot },
    { id: "desserts", name: "Desserts & Live Sweets", count: 4, icon: Star },
    { id: "drinks", name: "Welcome Coolers", count: 3, icon: GlassWater },
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
      name: "Vellappam (Live Station)",
      malayalam: "വെള്ളപ്പൊം - തത്സമയം",
      category: "live",
      categoryName: "Live Stations",
      desc: "Freshly fermented rice & coconut milk pancakes cooked live on traditional clay pans with lacy golden edges.",
      tag: "Live Chef Station",
      badge: "LIVE COUNTER",
      pairing: "Veg Kuruma or Chicken Stew",
      spiceLevel: "Mild",
    },
    {
      name: "Neypathal (Live Station)",
      malayalam: "നെയ്പത്തൽ - തത്സമയം",
      category: "live",
      categoryName: "Live Stations",
      desc: "Crispy fried deep rice & fennel patties, served piping hot straight from the oil cauldron.",
      tag: "Malabar Classic",
      badge: "LIVE COUNTER",
      pairing: "Beef Varattiyath or Chicken Curry",
      spiceLevel: "Mild",
    },
    {
      name: "Malabar Kerala Porotta (Live Counter)",
      malayalam: "മലബാർ പൊറോട്ട",
      category: "live",
      categoryName: "Live Stations",
      desc: "Hand-rolled, multi-layered flaky soft Porottas beaten live by skilled Malabar Ustad chefs.",
      tag: "Flaky & Soft",
      badge: "LIVE COUNTER",
      pairing: "Chicken Mulakittath or Beef Fry",
      spiceLevel: "Mild",
    },
    {
      name: "Traditional Kerala Sadhya (24+ Items)",
      malayalam: "പരമ്പരാഗത കേരള സദ്യ",
      category: "mains",
      categoryName: "Main Dishes",
      desc: "Complete ceremonial feast served on fresh green banana leaf featuring Matta Rice, Parippu, Sambar, Aviyal, Thoran, Olan, Kalan, Inji Puli, Pappadam & 2 varieties of Payasam.",
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
      desc: "Tender tender goat meat slow-roasted in shallow copper pans with crushed black pepper, fried coconut slices & curry leaves.",
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

  const packages = [
    {
      name: "Royal Wedding Feast Package",
      malayalam: "റോയൽ വെഡ്ഡിംഗ് ഫീസ്റ്റ് പാക്കേജ്",
      tag: "Most Popular",
      price: "Custom Plate Rate",
      desc: "The ultimate feast package designed for grand wedding receptions and Nikah celebrations.",
      items: [
        "Welcome Drink (Watermelon Mint / Grape Punch)",
        "Authentic Malabar Dum Biriyani (Chicken/Mutton)",
        "Live Neypathal & Flaky Porotta Station",
        "Mutton Varattiyath / Chicken Roast",
        "Date Pickle, Chammanthi, Salad & Raitha",
        "Live Jalebi Counter & Cream Pudding",
        "Malabar Colour Tea & Sulaimani",
      ],
    },
    {
      name: "Traditional Malabar Sadhya",
      malayalam: "പരമ്പരാഗത മലബാർ സദ്യ",
      tag: "Vegetarian Excellence",
      price: "Custom Plate Rate",
      desc: "24+ traditional Kerala vegetarian delicacies served on fresh green banana leaf.",
      items: [
        "Kerala Matta Rice / White Rice",
        "Parippu Ghee, Sambar, Rasam, Pulissery",
        "Aviyal, Thoran, Olan, Kalan, Pachadi",
        "Inji Puli, Mango Pickle, Lime Pickle",
        "Pappadam, Banana Chips, Sarkara Upperi",
        "Ada Pradhaman & Milk Palada Payasam",
      ],
    },
    {
      name: "Smoked Kuzhimanthi Special",
      malayalam: "സ്മോക്ക്ഡ് കുഴിമന്തി പാക്കേജ്",
      tag: "Modern Favorite",
      price: "Custom Plate Rate",
      desc: "Authentic smoked mandi feast served with live starter counters and Arabic salads.",
      items: [
        "Welcome Chilled Lime Mint Mojito",
        "Juicy Chicken / Mutton Kuzhimanthi",
        "Arabic Spicy Salsa & Garlic Sauce",
        "Fresh Green Salad & Hummus Dip",
        "Chicken Fry & Charcoal Tikka Starters",
        "Fruit Salad with Ice Cream",
        "Special Arabian Mint Tea",
      ],
    },
  ];

  const filteredItems =
    activeTab === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeTab);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F2] selection:bg-[#6F1014] selection:text-[#F2B93F]">
      {/* NAVIGATION BAR */}
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28">
        {/* HERO BANNER */}
        <section className="relative bg-[#171110] text-white py-16 sm:py-24 overflow-hidden border-b border-[#F2B93F]/20">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#F2B93F_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#6F1014]/40 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#F2B93F]/80 uppercase tracking-widest mb-4">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white">Catering Feast Catalogue</span>
            </div>

            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F2B93F]/10 border border-[#F2B93F]/30 text-[#F2B93F] text-xs font-bold tracking-widest uppercase">
                <Utensils className="w-3.5 h-3.5" />
                <span>Malabar Culinary Heritage</span>
              </div>

              <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Authentic <span className="gold-gradient-text">Catering Feast</span> Catalogue
              </h1>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Prepared by experienced Malabar Ustad chefs using pure cow ghee, premium Kaima rice, and hand-ground masalas in traditional copper cauldrons (chembu). Loved by over 500+ families across Kerala.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#packages"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#DFAE32] to-[#F2B93F] text-[#171110] font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 transition-all"
                >
                  View Feast Packages
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-xl border border-[#F2B93F]/50 bg-[#6F1014]/80 text-[#FAF8F2] font-semibold text-xs uppercase tracking-wider hover:bg-[#8B1E23] transition-all"
                >
                  Request Per-Plate Pricing
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* MENU CATEGORIES FILTER */}
        <section className="py-6 bg-white border-b border-[#EFE8D7] sticky top-[72px] z-30 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`px-4.5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
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
          </div>
        </section>

        {/* MENU ITEMS CATALOGUE GRID */}
        <section className="py-12 sm:py-16 bg-[#FAF8F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-[#EFE8D7] shadow-sm hover:shadow-md transition-all flex flex-col justify-between group hover:border-[#6F1014]/30"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[11px] font-bold tracking-widest uppercase text-[#6F1014] bg-[#6F1014]/10 px-3 py-1 rounded-full border border-[#6F1014]/20">
                        {item.tag}
                      </span>
                      {item.badge && (
                        <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-[#DFAE32]/20 text-[#38070A] border border-[#DFAE32]/40 uppercase tracking-wider">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="font-heading text-lg font-bold text-[#171110] group-hover:text-[#6F1014] transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#6F1014]/80 mt-0.5">
                        {item.malayalam}
                      </p>
                    </div>

                    <p className="text-xs text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>

                    {item.pairing && (
                      <div className="bg-[#FAF8F2] p-2.5 rounded-xl border border-[#EFE8D7] text-[11px] text-gray-700">
                        <span className="font-bold text-[#6F1014]">Pairs Best With: </span>
                        {item.pairing}
                      </div>
                    )}
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#EFE8D7] flex items-center justify-between">
                    <span className="text-[11px] text-gray-500 font-medium">
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
          </div>
        </section>

        {/* FEAST PACKAGES BREAKDOWN */}
        <section id="packages" className="py-12 sm:py-16 bg-[#F6F1E5] border-t border-[#EFE8D7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6F1014]/10 border border-[#6F1014]/20 text-[#6F1014] text-xs font-bold tracking-widest uppercase">
                <Award className="w-3.5 h-3.5" />
                <span>Curated Event Menus</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-4xl font-bold">
                <span className="dark-gradient-text">Popular Malabar Feast</span>{" "}
                <span className="maroon-gradient-text">Packages</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-600">
                Customizable for small family gatherings to large 5,000+ guest wedding receptions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {packages.map((pkg, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-7 border-2 border-[#6F1014]/20 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 bg-[#6F1014] text-[#F2B93F] text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-bl-xl shadow-md">
                    {pkg.tag}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-[#171110]">
                        {pkg.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#6F1014]">
                        {pkg.malayalam}
                      </p>
                    </div>

                    <p className="text-xs text-gray-600">
                      {pkg.desc}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-[#EFE8D7]">
                      <p className="text-xs font-bold text-[#171110] uppercase tracking-wider">Package Menu Items:</p>
                      {pkg.items.map((itm, iIdx) => (
                        <div key={iIdx} className="flex items-start gap-2 text-xs text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-[#6F1014] shrink-0 mt-0.5" />
                          <span>{itm}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#EFE8D7] space-y-3">
                    <a
                      href={`https://wa.me/919946692100?text=${encodeURIComponent(`Hi Malabar Caterers, I would like to get a custom quote for the ${pkg.name}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Get Custom Rate Quote</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INCLUDED CONTACT FORM */}
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* FLOATING WHATSAPP BUTTON */}
      <WhatsAppButton />
    </div>
  );
}
