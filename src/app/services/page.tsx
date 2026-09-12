"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  CheckCircle2,
  Phone,
  MessageCircle,
  Utensils,
  Award,
  ChevronRight,
  ShieldCheck,
  Clock
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
      image: "/images/services/1.png",
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
      image: "/images/services/2.png",
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
      image: "/images/services/3.png",
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
      image: "/images/services/4.png",
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
      image: "/images/services/5.png",
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
      image: "/images/services/6.png",
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
      title: "Housewarming & Birthday Decor",
      malayalam: "വീടുമാറൽ & ബർത്ത്ഡേ ഡെക്കറേഷൻ",
      shortDesc: "Customized balloon arches, floral main door Toran, traditional oil lamps, and theme birthday backdrops.",
      fullDesc: "Complete decoration solutions for housewarming ceremonies, birthday celebrations, cradle ceremonies, and family gatherings. Designed to match your home ambiance and budget perfectly.",
      image: "/images/services/7.png",
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
    {
  id: "car-decoration",
  category: "decor",
  tag: "Wedding Car Decor",
  title: "Luxury Wedding Car Decoration",
  malayalam: "വെഡ്ഡിംഗ് കാർ ഡെക്കറേഷൻ",
  shortDesc: "Elegant wedding car styling with fresh flowers, premium ribbons, floral garlands, and beautiful finishing touches for a grand departure.",
  fullDesc: "Make the couple's journey even more special with our elegant wedding car decoration service. From subtle floral arrangements to luxurious full-car styling, we create beautiful designs that complement your wedding theme while keeping the car classy and photogenic.",
  image: "/images/services/8.png",
  features: [
    "Fresh Flower Hood & Front Grille Decoration",
    "Elegant Door Mirror Floral Arrangements",
    "Premium Ribbons & Tulle Draping",
    "Just Married Name Plate & Custom Signage",
    "Theme-Matched Floral & Color Styling",
  ],
  price: "Starting from ₹3,500",
  capacity: "All Car Models",
},

{
  id: "inauguration-decoration",
  category: "special",
  tag: "Grand Openings",
  title: "Inauguration & Grand Opening Decoration",
  malayalam: "ഉദ്ഘാടനം & ഗ്രാൻഡ് ഓപ്പണിംഗ് ഡെക്കറേഷൻ",
  shortDesc: "Professional inauguration setups with elegant balloon arches, floral decorations, welcome signage, red carpets, and traditional ceremonial styling.",
  fullDesc: "Create a memorable first impression for your new business, showroom, office, shop, or institution. Our inauguration decoration packages combine elegant floral arrangements, branded balloon styling, welcome boards, red carpets, traditional lamps, and coordinated entrance decor tailored to your brand and venue.",
  image: "/images/services/9.png",
  features: [
    "Premium Balloon Arch & Entrance Decoration",
    "Fresh Flower & Floral Garland Styling",
    "Branded Welcome Board & Name Signage",
    "Red Carpet & Grand Entrance Setup",
    "Traditional Nilavilakku & Ceremonial Decor",
  ],
  price: "Starting from ₹5,000",
  capacity: "Shops, Offices & Showrooms",
},
  ];

  const filteredServices =
    activeTab === "all"
      ? serviceDetails
      : serviceDetails.filter((s) => s.category === activeTab);

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface selection:bg-primary-container selection:text-surface">
      {/* NAVIGATION BAR */}
      <Navbar />

      <main className="flex-1">
        {/* HERO BANNER */}
        <section className="pt-16 pb-12 sm:pt-20 sm:pb-14 bg-[#FDFBF7] border-b border-[#790504]/10 relative overflow-hidden">
          <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-medium text-[#59413D]/70 uppercase tracking-widest mb-5">
              <Link href="/" className="hover:text-[#790504] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#790504]/50" />
              <span className="text-[#1E1B19] font-semibold">Services & Disciplines</span>
            </div>

            <div className="max-w-3xl space-y-4">
              {/* Pill Label */}
              <div className="inline-block">
                <span className="border border-[#790504]/30 text-[#790504] px-4 py-1 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase bg-white/60 shadow-xs">
                  OUR DISCIPLINES & EXPERTISE
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-[#1E1B19] font-normal leading-[1.14] tracking-tight">
                Complete <span className="text-[#790504] font-bold">Event & Catering</span> Solutions
              </h1>

              {/* Subtitle */}
              <p className="mt-3 text-sm md:text-base text-[#59413D]/80 leading-relaxed font-normal">
                From majestic wedding stage decor to authentic Malabar Dum Biryani feasts, live food stalls, and mesmerizing stage entry SFX — we turn every occasion into a royal celebration across Malappuram & Kerala.
              </p>

              {/* Stats badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#790504]/10 max-w-xl">
                <div>
                  <p className="font-serif text-2xl sm:text-3xl text-[#790504] font-bold">10+ Years</p>
                  <p className="text-[11px] font-medium text-[#59413D]/70 uppercase tracking-wider mt-0.5">Experience</p>
                </div>
                <div>
                  <p className="font-serif text-2xl sm:text-3xl text-[#790504] font-bold">500+</p>
                  <p className="text-[11px] font-medium text-[#59413D]/70 uppercase tracking-wider mt-0.5">Events Executed</p>
                </div>
                <div>
                  <p className="font-serif text-2xl sm:text-3xl text-[#790504] font-bold">100%</p>
                  <p className="text-[11px] font-medium text-[#59413D]/70 uppercase tracking-wider mt-0.5">Quality Guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE CATEGORY FILTER */}
        <section className="py-6 bg-surface border-b border-surface-variant sticky top-20 z-30 shadow-xs">
          <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
            <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id as "all" | "decor" | "catering" | "sfx" | "special")}
                  className={`px-5 py-2 rounded-lg font-label-md text-label-md transition-all shrink-0 cursor-pointer ${
                    activeTab === cat.id
                      ? "bg-primary-container text-surface font-semibold shadow-sm"
                      : "bg-surface-container-low text-on-surface-variant hover:text-primary border border-surface-variant"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES DETAILED LIST GRID */}
        <section className="py-space-3xl md:py-space-4xl bg-background">
          <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop space-y-12">
            {filteredServices.map((service, idx) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-surface rounded-xl overflow-hidden border border-surface-variant shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
              >
                {/* Image side */}
                <div className={`lg:col-span-5 relative min-h-[320px] lg:min-h-[440px] bg-surface-container ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-md text-primary font-label-caps text-label-caps uppercase tracking-wider px-3 py-1 rounded-lg border border-outline-variant/40 shadow-sm">
                    {service.tag}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-inverse-surface/85 backdrop-blur-md text-surface-bright font-label-sm text-label-sm px-4 py-2.5 rounded-lg flex items-center justify-between border border-surface-variant/20">
                    <span>{service.capacity}</span>
                    <span className="text-primary-fixed font-semibold">{service.price}</span>
                  </div>
                </div>

                {/* Content side */}
                <div className={`lg:col-span-7 p-6 md:p-8 flex flex-col justify-between ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="space-y-4">
                    <div>
                      <p className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-1">
                        {service.malayalam}
                      </p>
                      <h2 className="font-headline-md text-headline-md text-on-surface">
                        {service.title}
                      </h2>
                    </div>

                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {service.fullDesc}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-3 pt-3 border-t border-surface-variant">
                      <p className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider">What&apos;s Included & Highlights:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 font-body-sm text-body-sm text-on-surface-variant">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-4 pt-6 mt-6 border-t border-surface-variant">
                    <a
                      href={`https://wa.me/919946692100?text=${encodeURIComponent(`Hi Malabar Decorators, I would like to enquire about ${service.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-label-md text-label-md uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Enquire on WhatsApp</span>
                    </a>

                    <a
                      href="/contact"
                      className="px-5 py-2.5 rounded-lg bg-primary-container hover:bg-primary text-surface font-label-md text-label-md uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all"
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
        <section className="py-space-3xl md:py-space-4xl bg-surface-container-low border-t border-b border-surface-variant">
          <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-surface border border-surface-variant text-primary font-label-caps text-label-caps tracking-widest uppercase">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Our Quality Commitment</span>
              </div>
              <h2 className="font-headline-xl text-headline-xl text-on-surface">
                Why Families Trust Malabar Decorators
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-surface p-6 rounded-xl border border-surface-variant shadow-sm space-y-3">
                <div className="w-12 h-12 rounded-lg bg-primary-container/10 text-primary flex items-center justify-center">
                  <Utensils className="w-6 h-6" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Authentic Malabar Taste</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Traditional Dum Biryani and Sadya prepared with pure cow ghee and hand-ground authentic spices by seasoned master chefs.
                </p>
              </div>

              <div className="bg-surface p-6 rounded-xl border border-surface-variant shadow-sm space-y-3">
                <div className="w-12 h-12 rounded-lg bg-primary-container/10 text-primary flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Royal Stage Aesthetics</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Custom stage decorations with fresh premium flowers, crystal chandeliers, warm spot lighting, and elegant drapery.
                </p>
              </div>

              <div className="bg-surface p-6 rounded-xl border border-surface-variant shadow-sm space-y-3">
                <div className="w-12 h-12 rounded-lg bg-primary-container/10 text-primary flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Punctual Execution</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
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
