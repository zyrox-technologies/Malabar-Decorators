export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  iconType: "wedding" | "destination" | "engagement" | "reception" | "catering" | "haldi";
}

export const servicesData = {
  overline: "OUR SERVICES",
  headline: "Crafting Extraordinary Experiences for Every Occasion",
  subtitle:
    "From intimate ceremonies to grand celebrations, we thoughtfully curate experiences that reflect your vision with elegance, precision, and timeless charm.",
  items: [
    {
      id: "luxury-weddings",
      title: "Luxury Weddings",
      description:
        "Celebrate your love with bespoke wedding experiences, timeless décor, and flawless execution tailored to your unique story.",
      image: "/images/gallery/malabar-decorators-kasaragod-flower-decorators-c0b95t3sru.webp",
      link: "/services",
      iconType: "wedding",
    },
    {
      id: "destination-weddings",
      title: "Destination Weddings",
      description:
        "Exchange vows in Kerala's most breathtaking destinations, where stunning venues meet exceptional planning and hospitality.",
      image: "/images/gallery/malabar-decorators-kasaragod-flower-decorators-fo6zj2ua32.webp",
      link: "/services",
      iconType: "destination",
    },
    {
      id: "engagement-ceremonies",
      title: "Engagement Ceremonies",
      description:
        "Begin your forever with sophisticated décor, elegant styling, and unforgettable engagement celebrations.",
      image: "/images/gallery/malabar-decorators-kasaragod-flower-decorators-lr5hqiduzn.webp",
      link: "/services",
      iconType: "engagement",
    },
    {
      id: "royal-reception",
      title: "Grand Reception & Stage Décor",
      description:
        "Bespoke stage architecture featuring premium floral backdrops, crystal chandeliers, royal sofa seating, and ambient lighting.",
      image: "/images/gallery/malabar-decorators-kasaragod-flower-decorators-1lepi60kot.webp",
      link: "/services",
      iconType: "reception",
    },
    {
      id: "malabar-catering",
      title: "Authentic Malabar Catering",
      description:
        "Legendary Thalassery Dum Biryani, live food stalls, and 24+ item traditional Sadya prepared with pure cow ghee and hand-ground spices.",
      image: "/images/gallery/malabar-decorators-kasaragod-caterers-hh34cc8r6a.webp",
      link: "/services",
      iconType: "catering",
    },
    {
      id: "haldi-mehendi",
      title: "Haldi & Traditional Celebrations",
      description:
        "Vibrant yellow floral arrangements, marigold drapes, wooden swings (Jhula), brass Urlis, and cheerful photo booths for family celebrations.",
      image: "/images/gallery/malabar-decorators-kasaragod-flower-decorators-eyuu9lnc79.webp",
      link: "/services",
      iconType: "haldi",
    },
  ] as ServiceItem[],
};

export interface DetailedService {
  id: string;
  category: "decor" | "catering" | "sfx" | "special";
  tag: string;
  title: string;
  malayalam: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  features: string[];
  price: string;
  capacity: string;
}

export const serviceCategoryList = [
  { id: "all", label: "All Premium Services" },
  { id: "decor", label: "Event & Stage Decor" },
  { id: "catering", label: "Malabar Catering Feast" },
  { id: "sfx", label: "Special Effects (SFX)" },
  { id: "special", label: "Special Functions" },
] as const;

export const detailedServicesList: DetailedService[] = [
  {
    id: "stage-decor",
    category: "decor",
    tag: "Wedding & Stage",
    title: "Royal Nikah & Reception Stage Decor",
    malayalam: "റോയൽ നിക്കാഹ് & റിസപ്ഷൻ സ്‌റ്റേജ്",
    shortDesc: "Bespoke stage designs featuring premium floral backdrops, crystal chandeliers, luxury plush seating, and warm ambient lighting.",
    fullDesc: "We design and execute world-class wedding stages tailored to your family's traditions and modern aesthetics. From traditional white and gold drapes to opulent floral arches and crystal backdrop chandeliers, every element is curated to create an unforgettable setting for your special day.",
    image: "/images/services/1.webp",
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
    image: "/images/services/2.webp",
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
    image: "/images/services/3.webp",
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
    image: "/images/services/4.webp",
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
    image: "/images/services/5.webp",
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
    image: "/images/services/6.webp",
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
    image: "/images/services/7.webp",
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
    image: "/images/services/8.webp",
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
    image: "/images/services/9.webp",
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
