"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Tag,
  ChevronRight,
  ShieldCheck,
  Phone,
  MessageCircle,
  CheckCircle2,
  Image as ImageIcon,
  Layers
} from "lucide-react";

export default function DecorCataloguePage() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Decor Setups" },
    { id: "stage", label: "Stage & Mandap Decor" },
    { id: "outdoor", label: "Outdoor & Reception" },
    { id: "traditional", label: "Traditional Ceremonies" },
    { id: "sfx", label: "Lighting & SFX Effects" },
    { id: "photobooth", label: "Photo Booths & Others" },
  ];

  const featuredItems = [
    {
      id: "hindu-wedding-package",
      title: "Premium Hindu Wedding Package",
      malayalam: "പ്രീമിയം ഹിന്ദു വിവാഹ പാക്കേജ്",
      category: "stage",
      price: "₹1,00,000",
      desc: "Complete traditional mandap, heavy floral stage, royal Maharaja seating, welcome entrance arch & ambient venue illumination.",
      image: "/images/catalogue/file_0000000015b881fa9bbbf4a93b5e22b6.webp",
      popular: true,
      features: [
        "Heavy Fresh Floral Mandap Setup",
        "Royal Gold Maharaja Chairs",
        "Entrance Floral Welcome Arch",
        "Stage Lighting & Spotlights",
        "Full Red Carpet Aisle",
      ],
    },
    {
      id: "outdoor-reception",
      title: "Premium Outdoor Lawn Reception",
      malayalam: "പ്രീമിയം ഔട്ട്‌ഡോർ റിസപ്ഷൻ",
      category: "outdoor",
      price: "Starting from ₹50,000",
      desc: "Full lawn fairy light canopy, backdrop floral wall, carpeted pathway, warm spotlights & customized photo corner.",
      image: "/images/catalogue/file_00000000344c81fa850396f61fb9d12d.webp",
      popular: true,
      features: [
        "Overhead Fairy Light Canopy",
        "Floral Photo Wall Backdrop",
        "Pathway Lanterns & Pillars",
        "Stage & Buffet Illumination",
        "Customized Welcome Signboard",
      ],
    },
    {
      id: "stage-lighting",
      title: "Intelligent Light & Truss Stage Setup",
      malayalam: "ഇന്റലിജന്റ് സ്റ്റേജ് ലൈറ്റിംഗ്",
      category: "sfx",
      price: "₹20,000 – ₹40,000",
      desc: "Intelligent warm spotlights, crystal chandelier fixtures, golden truss decor & backdrop LED color illumination.",
      image: "/images/catalogue/file_00000000375c81fa9ee8f7a1a8a6fb43.webp",
      popular: false,
      features: [
        "Intelligent Moving Head Lights",
        "Warm LED Backdrop Strip Wash",
        "Crystal Chandelier Fixtures",
        "Golden Truss Structure Support",
        "Professional Lighting Operator",
      ],
    },
    {
      id: "photo-booth",
      title: "12 Feet Customized Photo Booth",
      malayalam: "12 ഫീറ്റ് ഫോട്ടോ ബൂത്ത്",
      category: "photobooth",
      price: "Starting from ₹8,000",
      desc: "Customized floral background frame, vintage wooden props, rustic archway & warm vanity lighting for guest pictures.",
      image: "/images/catalogue/file_000000003934820ba9d16be60f892922.webp",
      popular: false,
      features: [
        "12x8 Feet Floral Backdrop Frame",
        "Handcrafted Wooden Archway",
        "Vintage Props & Ring Lighting",
        "Custom Name Monogram Board",
        "Carpeted Floor Base",
      ],
    },
    {
      id: "traditional-mandap",
      title: "Traditional 2026 Kerala Stage Decor",
      malayalam: "പരമ്പരാഗത കേരള സ്റ്റേജ്",
      category: "traditional",
      price: "Starting from ₹25,000",
      desc: "Fresh yellow marigold garlands, traditional brass oil lamps (Nilavilakku), urlis with floating petals & wooden mandap pillars.",
      image: "/images/catalogue/file_00000000e8f8820bb6b4b4dcaff4fbb3.webp",
      popular: false,
      features: [
        "Fresh Marigold Floral Garlands",
        "Traditional Brass Nilavilakku Lamps",
        "Brass Urlis & Flower Petals",
        "Wooden Mandap Pillars",
        "Banana Plant Entrance Styling",
      ],
    },
    {
      id: "corporate-inauguration",
      title: "Inauguration & Corporate Event Decor",
      malayalam: "ഇനൗഗുറേഷൻ & കോർപ്പറേറ്റ് ഡെക്കറേഷൻ",
      price: "Starting from ₹5,000",
      desc: "Ribbon cutting ceremonial arch, podium floral styling, entrance welcome gate, red carpeting & VIP seating drapes.",
      image: "/images/catalogue/file_00000000ff5c81fab206a64f8a6c6766.webp",
      popular: false,
      features: [
        "Ceremonial Ribbon Cutting Gate",
        "Podium Floral Arrangement",
        "Red Carpet VIP Walkway",
        "Entrance Flower Pillars",
        "Lamp Lighting Table Setup",
      ],
    },
  ];

  const fullCatalogueList = [
    { name: "Standard Photo Booth", category: "Photo Booth", price: "Starting from ₹7,000" },
    { name: "12 Feet Custom Photo Booth", category: "Photo Booth", price: "Starting from ₹8,000" },
    { name: "Premium Outdoor Lawn Reception", category: "Outdoor Decor", price: "Starting from ₹50,000" },
    { name: "Premium Hindu Wedding Package", category: "Full Package", price: "₹1,00,000" },
    { name: "2026 Traditional Kerala Stage", category: "Ceremony Decor", price: "Starting from ₹25,000" },
    { name: "Inauguration & Ribbon Cutting Setup", category: "Business Events", price: "Starting from ₹5,000" },
    { name: "Haldi & Mehendi Yellow Stage Decor", category: "Ceremony Decor", price: "Starting from ₹12,000" },
    { name: "Birthday Decor (Simple Balloon Arch)", category: "Family Functions", price: "Starting from ₹4,000" },
    { name: "Birthday Decor (Theme Pro Setup)", category: "Family Functions", price: "Starting from ₹12,000" },
    { name: "Wedding Garlands Pair (Fresh Flowers)", category: "Floral Accessories", price: "Starting from ₹5,000" },
    { name: "Bridal Flower Bouquets", category: "Floral Accessories", price: "Starting from ₹1,000" },
    { name: "Cradle Ceremony (Noolukettu) Decor", category: "Family Functions", price: "Starting from ₹4,000 – ₹6,000" },
    { name: "Opulent Nikah Stage Design", category: "Stage Decor", price: "Starting around ₹40,000" },
    { name: "Premium Light & Truss Stage Setup", category: "Lighting & SFX", price: "₹20,000 – ₹40,000" },
    { name: "Simple Outdoor Lawn Decor", category: "Outdoor Decor", price: "Starting from ₹4,000" },
    { name: "Groom To Be / Bride To Be Room Decor", category: "Party Decor", price: "Starting from ₹5,000" },
    { name: "Bridal Car & Vehicle Floral Decoration", category: "Vehicle Decor", price: "Starting from ₹3,000" },
    { name: "Valakappu & Ear Piercing Decor", category: "Family Functions", price: "Starting from ₹5,000" },
    { name: "Resort & Destination Wedding Setup", category: "Full Package", price: "Custom Package" },
    { name: "Low Fog Heavy Dry Ice Cloud (SFX)", category: "Stage Effects", price: "Popular Add-On" },
    { name: "Cold Fire Pyro Sparklers (SFX)", category: "Stage Effects", price: "Popular Add-On" },
  ];

  const filteredItems =
    activeTab === "all"
      ? featuredItems
      : featuredItems.filter((item) => item.category === activeTab);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F2] selection:bg-[#6F1014] selection:text-[#F2B93F]">
      {/* NAVIGATION BAR */}
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28">
        {/* HERO BANNER */}
        <section className="pt-16 pb-12 sm:pt-20 sm:pb-14 bg-[#FDFBF7] border-b border-[#790504]/10 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-medium text-[#59413D]/70 uppercase tracking-widest mb-5">
              <Link href="/" className="hover:text-[#790504] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#790504]/50" />
              <span className="text-[#1E1B19] font-semibold">Event Decor Catalogue</span>
            </div>

            <div className="max-w-3xl space-y-4">
              {/* Pill Label */}
              <div className="inline-block">
                <span className="border border-[#790504]/30 text-[#790504] px-4 py-1 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase bg-white/60 shadow-xs">
                  TRANSPARENT RATES & BESPOKE SETUPS
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-[#1E1B19] font-normal leading-[1.14] tracking-tight">
                Event Decor & <span className="text-[#790504] font-bold">Package Catalogue</span>
              </h1>

              {/* Subtitle */}
              <p className="mt-3 text-sm md:text-base text-[#59413D]/80 leading-relaxed font-normal">
                From budget-friendly home function decorations to opulent royal Nikah stages, outdoor lawn receptions, and custom photo booths — explore our full catalog with transparent estimates.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#full-table"
                  className="px-6 py-3 rounded-full bg-[#790504] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#8B1E23] transition-all"
                >
                  View Complete Pricing Table
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-full border border-[#790504]/30 bg-white text-[#790504] font-semibold text-xs uppercase tracking-wider hover:bg-[#FAF2EE] transition-all shadow-xs"
                >
                  Request Custom Quotation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORY FILTER */}
        <section className="py-6 bg-white border-b border-[#EFE8D7] sticky top-[72px] z-30 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4.5 py-2.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                    activeTab === cat.id
                      ? "bg-[#6F1014] text-white shadow-md"
                      : "bg-[#FAF8F2] text-[#171110]/70 hover:bg-[#6F1014]/10 hover:text-[#6F1014] border border-[#EFE8D7]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED DECOR CARDS */}
        <section className="py-12 sm:py-16 bg-[#FAF8F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl overflow-hidden border border-[#EFE8D7] shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div className="relative h-64 w-full bg-gray-100 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-[#171110]/80 backdrop-blur-md text-[#F2B93F] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#F2B93F]/40">
                      {item.price}
                    </div>
                  </div>

                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-[#6F1014] uppercase tracking-wider">
                        {item.malayalam}
                      </p>
                      <h3 className="font-heading text-xl font-bold text-[#171110] group-hover:text-[#6F1014] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>

                      <div className="space-y-1.5 pt-3 border-t border-[#EFE8D7]">
                        {item.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs text-gray-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#6F1014] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#EFE8D7]">
                      <a
                        href={`https://wa.me/919946692100?text=${encodeURIComponent(`Hi Malabar Decorators, I would like to book or enquire about ${item.title}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 rounded-xl bg-[#6F1014] hover:bg-[#8B1E23] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                      >
                        <MessageCircle className="w-4 h-4 fill-white" />
                        <span>Enquire on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FULL TRANSPARENT PRICING LIST TABLE */}
        <section id="full-table" className="py-12 sm:py-16 bg-white border-t border-[#EFE8D7]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6F1014]/10 border border-[#6F1014]/20 text-[#6F1014] text-xs font-bold tracking-widest uppercase">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Transparent Rate Card</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-4xl font-bold">
                <span className="dark-gradient-text">Complete Event Decor</span>{" "}
                <span className="maroon-gradient-text">Price List</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-600">
                Estimated starting rates. Final custom package prices vary based on venue size and fresh flower selections.
              </p>
            </div>

            <div className="bg-[#FAF8F2] rounded-2xl border border-[#EFE8D7] overflow-hidden shadow-sm">
              <div className="divide-y divide-[#EFE8D7]">
                {fullCatalogueList.map((row, rIdx) => (
                  <div
                    key={rIdx}
                    className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-white transition-colors"
                  >
                    <div>
                      <h4 className="font-bold text-sm text-[#171110]">{row.name}</h4>
                      <p className="text-[11px] text-gray-500">{row.category}</p>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
                      <span className="font-bold text-xs text-[#6F1014] bg-[#6F1014]/10 px-3 py-1 rounded-full border border-[#6F1014]/20">
                        {row.price}
                      </span>
                      <a
                        href={`https://wa.me/919946692100?text=${encodeURIComponent(`Hi Malabar Decorators, I want to enquire about ${row.name} (${row.price})`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-white" />
                        <span>Enquire</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
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
