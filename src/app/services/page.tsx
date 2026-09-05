"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageCircle,
  Calendar,
  Layers,
  Utensils,
  Flame,
  Star,
  Award,
  ChevronRight,
  ShieldCheck,
  Clock,
  Users
} from "lucide-react";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<"all" | "decor" | "catering" | "sfx" | "special">("all");

  const categories = [
    { id: "all", label: "All Premium Services" },
    { id: "decor", label: "Event & Stage Decor" },
    { id: "catering", label: "Malabar Catering Feast" },
    { id: "sfx", label: "Special Effects (SFX)" },
    { id: "special", label: "Special Functions" },
  ];

  const serviceDetails = [
    {
      id: "stage-decor",
      category: "decor",
      tag: "Wedding & Stage",
      title: "Royal Nikah & Reception Stage Decor",
      malayalam: "റോയൽ നിക്കാഹ് & റിസപ്ഷൻ സ്‌റ്റേജ്",
      shortDesc: "Bespoke stage designs featuring premium floral backdrops, crystal chandeliers, luxury plush seating, and warm ambient lighting.",
      fullDesc: "We design and execute world-class wedding stages tailored to your family's traditions and modern aesthetics. From traditional white and gold drapes to opulent floral arches and crystal backdrop chandeliers, every element is curated to create an unforgettable setting for your special day.",
      image: "/service/file_00000000031081fa834f12ca0ea5b50d.png",
      features: [
        "Customized Backdrop Floral Archways",
        "Royal Bride & Groom Maharaja Sofa Seating",
        "Crystal Chandelier & Warm Spotlight Fixtures",
        "Vip Carpeted Stage & Entrance Pathway",
        "3D Backdrop Monograms & Family Names",
      ],
      price: "Starting from ₹20,000",
      capacity: "Small & Grand Venues",
    },
    {
      id: "catering-feast",
      category: "catering",
      tag: "Authentic Culinary",
      title: "Grand Malabar Wedding & Event Catering",
      malayalam: "മലബാർ കല്യാണ കാറ്ററിംഗ് സദ്യ & ബിരിയാണി",
      shortDesc: "Authentic Malabar Dum Biryani, Mandi, Ghee Rice, traditional Sadhya, live cooking counters, and delicious homemade desserts.",
      fullDesc: "Our master Malabar chefs bring decades of culinary tradition to your event. Prepared with pure cow ghee, premium Kaima rice, and authentic hand-ground spices in traditional copper cauldrons (chembu), our feast is loved by thousands across Malappuram, Kozhikode, Wayanad, and Palakkad.",
      image: "/service/file_000000003f2081faa2f8fe4fef914b6c.png",
      features: [
        "Famous Malabar Dum Biriyani (Chicken/Mutton)",
        "Traditional Slow-Smoked Kuzhimanthi",
        "Pure Ghee Rice (Neychoru) & Mutton Roast",
        "24+ Item Traditional Banana Leaf Sadhya",
        "Hygienic Uniformed Catering Staff & Table Service",
      ],
      price: "Custom Per-Plate Packages",
      capacity: "100 to 5,000+ Guests",
    },
    {
      id: "haldi-mehendi",
      category: "decor",
      tag: "Traditional Ceremonies",
      title: "Haldi, Mehendi & Sangeet Decor",
      malayalam: "ഹൽദി & മെഹന്ദി ഡെക്കറേഷൻ",
      shortDesc: "Vibrant yellow and orange flower arrangements, marigold drapes, brass urlis, wooden swings, and festive photo booths.",
      fullDesc: "Bring color and joy to your pre-wedding celebrations. Our Haldi and Mehendi setups include traditional marigold floral strings, brass Urlis filled with flower petals, handcrafted wooden Jhulas (swings), and colorful drapes for photos.",
      image: "/service/file_0000000074e881fa996b7468b88652b4.png",
      features: [
        "Fresh Yellow & Orange Marigold Garland Canopy",
        "Traditional Decorated Wooden Swing (Jhula)",
        "Brass Urlis & Floating Flower Arrangement",
        "Mehendi Seating Cushions & Canopy Tents",
        "Custom Photo Booth Frame & Props",
      ],
      price: "Starting from ₹12,000",
      capacity: "Home & Hall Setups",
    },
    {
      id: "outdoor-destination",
      category: "decor",
      tag: "Outdoor Luxury",
      title: "Outdoor Lawn & Beachside Destination Decor",
      malayalam: "ഔട്ട്‌ഡോർ & റിസോർട്ട് ഡെക്കറേഷൻ",
      shortDesc: "Magical fairy light canopies, entrance welcome tunnels, open-air lawn stages, and dreamy evening illumination.",
      fullDesc: "Transform open-air lawns, resorts, and outdoor venues into fairy-tale settings. Features warm string light canopies overhead, flower-lined aisle pathways, rustic wooden welcome boards, and romantic photo corners.",
      image: "/service/file_000000009420820b9bff46071f57ae0d.png",
      features: [
        "Heavy Fairy Light Canopy Over Head",
        "Aisle Pathway Floral Pillars & Red Carpet",
        "Entrance Floral Tunnel & Welcome Arch",
        "Vintage Lanterns & Warm Spotlights",
        "Outdoor Buffet Counter Styling",
      ],
      price: "Starting from ₹50,000",
      capacity: "Resorts & Open Grounds",
    },
    {
      id: "stage-sfx",
      category: "sfx",
      tag: "Stage Pyrotechnics",
      title: "Low Fog Cloud Smoke & Cold Pyro SFX Entry",
      malayalam: "ഫോഗ് സ്മോക്ക് & കോൾഡ് പൈറോ എൻട്രി",
      shortDesc: "Breathtaking dry ice low fog smoke clouds, smokeless cold fire sparklers, and grand stage entry pyrotechnics.",
      fullDesc: "Make the bride and groom entry an unforgettable highlight. Our low-lying fog machine creates a dreamy cloud effect on stage, complemented by safe, smokeless cold fire sparklers that shoot golden sparks during cake cutting or ring exchange.",
      image: "/service/file_00000000b464820b963a97bd17a2c97d.png",
      features: [
        "Heavy Low-Lying Dry Ice Fog Cloud Machine",
        "Cold Pyro Fire Sparklers (Indoor Safe)",
        "Entrance Confetti Cannons Blast",
        "Intelligent Moving Head Stage Lights",
        "Professional SFX Operators Onsite",
      ],
      price: "Popular Event Add-On",
      capacity: "Indoor & Outdoor",
    },
    {
      id: "live-food-counters",
      category: "catering",
      tag: "Live Food Stations",
      title: "Interactive Live Food & Refreshment Counters",
      malayalam: "ലൈവ് ഫുഡ് & ടീ കൗണ്ടറുകൾ",
      shortDesc: "Hot Neypathal, Dosa, Jalebi, fresh fruit juices, and authentic Malabar Colour Tea served live to your guests.",
      fullDesc: "Elevate your guest experience with live interactive cooking stalls. Watch hot Neypathals puff up, enjoy freshly fried Jalebis, or sip on traditional piping hot Malabar Sulaimani and Colour Tea served by skilled chefs.",
      image: "/service/file_00000000eb9881fab921c9342b3b0d2b.png",
      features: [
        "Live Malabar Neypathal & Vellappam Stalls",
        "Hot Jalebi & Mysore Pak Live Sweet Counter",
        "Fresh Fruit Juices (Watermelon, Grape, Mint Lime)",
        "Traditional Malabar Dum Tea & Sulaimani Counter",
        "Uniformed Chef Stations with Hygienic Setup",
      ],
      price: "Package Add-on Available",
      capacity: "All Group Sizes",
    },
    {
      id: "housewarming-birthday",
      category: "special",
      tag: "Family Functions",
      title: "Housewarming (Palakattu) & Birthday Decor",
      malayalam: "വീടുമാറൽ & ബർത്ത്ഡേ ഡെക്കറേഷൻ",
      shortDesc: "Customized balloon arches, floral main door Toran, traditional oil lamps, and theme birthday backdrops.",
      fullDesc: "Complete decoration solutions for housewarming ceremonies, birthday celebrations, cradle ceremonies, and family gatherings. Designed to match your home ambiance and budget perfectly.",
      image: "/Decoration/file_00000000e8f8820bb6b4b4dcaff4fbb3.png",
      features: [
        "Traditional Fresh Flower Door Garlands & Toran",
        "Entrance Nilavilakku & Urli Styling",
        "Custom Birthday Balloon Arch & Backdrop",
        "Name Board Styling & Lighting",
        "Compact Home Space Fitting",
      ],
      price: "Starting from ₹4,000",
      capacity: "Home & Hall",
    },
  ];

  const filteredServices =
    activeTab === "all"
      ? serviceDetails
      : serviceDetails.filter((s) => s.category === activeTab);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F2] selection:bg-[#6F1014] selection:text-[#F2B93F]">
      {/* NAVIGATION BAR */}
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28">
        {/* HERO BANNER */}
        <section className="relative bg-[#171110] text-white py-16 sm:py-24 overflow-hidden border-b border-[#F2B93F]/20">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#F2B93F_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#6F1014]/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#DFAE32]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#F2B93F]/80 uppercase tracking-widest mb-4">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white">Our Premium Services</span>
            </div>

            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F2B93F]/10 border border-[#F2B93F]/30 text-[#F2B93F] text-xs font-bold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Malabar Decorators & Caterers</span>
              </div>

              <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Complete <span className="gold-gradient-text">Event & Catering</span> Solutions
              </h1>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                From majestic wedding stage decor to authentic Malabar Dum Biryani feasts, live food stalls, and mesmerizing stage entry SFX — we turn every occasion into a royal celebration across Malappuram & Kerala.
              </p>

              {/* Stats badges */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-4 border-t border-white/10 max-w-xl">
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-[#F2B93F]">10+ Years</p>
                  <p className="text-[11px] text-gray-400 uppercase tracking-wider">Experience</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-[#F2B93F]">500+</p>
                  <p className="text-[11px] text-gray-400 uppercase tracking-wider">Events Executed</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-[#F2B93F]">100%</p>
                  <p className="text-[11px] text-gray-400 uppercase tracking-wider">Quality Guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE CATEGORY FILTER */}
        <section className="py-8 bg-white border-b border-[#EFE8D7] sticky top-[72px] z-30 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id as any)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all shrink-0 cursor-pointer ${
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

        {/* SERVICES DETAILED LIST GRID */}
        <section className="py-12 sm:py-16 bg-[#FAF8F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {filteredServices.map((service, idx) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#EFE8D7] shadow-md hover:shadow-xl transition-all grid grid-cols-1 lg:grid-cols-12"
              >
                {/* Image side */}
                <div className={`lg:col-span-5 relative min-h-[300px] lg:min-h-[420px] ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#6F1014]/90 backdrop-blur-md text-[#F2B93F] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#F2B93F]/30 shadow-md">
                    {service.tag}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center justify-between border border-white/20">
                    <span>{service.capacity}</span>
                    <span className="text-[#F2B93F]">{service.price}</span>
                  </div>
                </div>

                {/* Content side */}
                <div className={`lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold text-[#6F1014] uppercase tracking-widest mb-1">
                        {service.malayalam}
                      </p>
                      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#171110]">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {service.fullDesc}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-2 pt-2 border-t border-[#EFE8D7]">
                      <p className="text-xs font-bold text-[#171110] uppercase tracking-wider">What&apos;s Included & Highlights:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-[#6F1014] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-6 mt-6 border-t border-[#EFE8D7]">
                    <a
                      href={`https://wa.me/919946692100?text=${encodeURIComponent(`Hi Malabar Decorators, I would like to enquire about ${service.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Enquire on WhatsApp</span>
                    </a>

                    <a
                      href="#contact"
                      className="px-5 py-2.5 rounded-xl bg-[#6F1014] hover:bg-[#8B1E23] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Book Service</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-[#FAF8F2] to-[#F6F1E5] border-t border-[#EFE8D7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6F1014]/10 border border-[#6F1014]/20 text-[#6F1014] text-xs font-bold tracking-widest uppercase">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Our Quality Commitment</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-4xl font-bold">
                <span className="dark-gradient-text">Why Families Trust</span>{" "}
                <span className="maroon-gradient-text">Malabar Decorators</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-[#EFE8D7] shadow-sm space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#6F1014]/10 text-[#6F1014] flex items-center justify-center font-bold text-xl">
                  <Utensils className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-[#171110]">Authentic Malabar Taste</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Traditional Dum Biryani and Sadya prepared with pure cow ghee and hand-ground authentic spices by seasoned master chefs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#EFE8D7] shadow-sm space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#6F1014]/10 text-[#6F1014] flex items-center justify-center font-bold text-xl">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-[#171110]">Royal Stage Aesthetics</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Custom stage decorations with fresh premium flowers, crystal chandeliers, warm spot lighting, and elegant drapery.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#EFE8D7] shadow-sm space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#6F1014]/10 text-[#6F1014] flex items-center justify-center font-bold text-xl">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-[#171110]">Punctual & Stress-Free Execution</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Complete event management from setup to food serving and teardown, handled seamlessly so you can celebrate worry-free.
                </p>
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
