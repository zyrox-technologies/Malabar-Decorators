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
        "Authentic Malabar Dum Biryani, live food counters, and traditional Kerala Sadya prepared with pure cow ghee and authentic spices.",
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
  { id: "all", label: "All Services" },
  { id: "decor", label: "Event & Stage Decor" },
  { id: "catering", label: "Catering & Feasts" },
  { id: "sfx", label: "Lighting & Effects" },
  { id: "special", label: "Special Functions" },
] as const;

export const detailedServicesList: DetailedService[] = [
  {
    id: "stage-decor",
    category: "decor",
    tag: "Wedding & Stage",
    title: "Reception & Stage Decor",
    malayalam: "നിക്കാഹ് & റിസപ്ഷൻ സ്‌റ്റേജ്",
    shortDesc: "Bespoke stage designs featuring floral backdrops, chandeliers, plush seating, and warm ambient lighting.",
    fullDesc: "We design and execute wedding stages tailored to your family's traditions and modern aesthetics. From traditional drapes to floral arches and backdrop fixtures, every element is curated to create an unforgettable setting for your celebration.",
    image: "/images/services/1.webp",
    features: [
      "Customized Backdrop Floral Archways",
      "Bride & Groom Sofa Seating",
      "Stage Lighting & Spotlights",
      "Carpeted Stage & Entrance Pathway",
      "Backdrop Name Monograms",
    ],
    price: "Custom Quote",
    capacity: "Small & Grand Venues",
  },
  {
    id: "catering-feast",
    category: "catering",
    tag: "Authentic Culinary",
    title: "Wedding & Event Catering",
    malayalam: "കല്യാണ കാറ്ററിംഗ് സദ്യ & ബിരിയാണി",
    shortDesc: "Authentic Malabar Dum Biryani, Ghee Rice, traditional Sadhya, live cooking counters, and desserts.",
    fullDesc: "Our catering team brings rich culinary tradition to your celebration. Prepared with pure cow ghee, premium Kaima rice, and authentic spices, our feasts are enjoyed by families across Kasaragod and surrounding areas.",
    image: "/images/services/2.webp",
    features: [
      "Malabar Dum Biriyani (Chicken/Mutton)",
      "Pure Ghee Rice (Neychoru) & Curries",
      "Traditional Banana Leaf Sadhya",
      "Live Food Counters & Deserts",
      "Hygienic Catering Staff & Service",
    ],
    price: "Custom Quote",
    capacity: "Tailored to Event Scale",
  },
  {
    id: "haldi-mehendi",
    category: "decor",
    tag: "Traditional Ceremonies",
    title: "Haldi, Mehendi & Sangeet Decor",
    malayalam: "ഹൽദി & മെഹന്ദി ഡെക്കറേഷൻ",
    shortDesc: "Vibrant yellow and orange flower arrangements, marigold drapes, brass urlis, and wooden swings.",
    fullDesc: "Bring color and joy to your pre-wedding celebrations. Our Haldi and Mehendi setups include fresh marigold floral strings, brass Urlis with flower petals, wooden swings (Jhula), and colorful drapes.",
    image: "/images/services/3.webp",
    features: [
      "Fresh Yellow & Orange Marigold Drapes",
      "Traditional Decorated Wooden Swing (Jhula)",
      "Brass Urlis & Floating Flower Arrangement",
      "Seating Cushions & Canopy Tents",
      "Custom Photo Corner & Props",
    ],
    price: "Custom Quote",
    capacity: "Home & Hall Setups",
  },
  {
    id: "outdoor-destination",
    category: "decor",
    tag: "Outdoor Luxury",
    title: "Outdoor Lawn & Reception Decor",
    malayalam: "ഔട്ട്‌ഡോർ & റിസോർട്ട് ഡെക്കറേഷൻ",
    shortDesc: "Fairy light canopies, entrance welcome tunnels, open-air lawn stages, and evening illumination.",
    fullDesc: "Transform open-air lawns, resorts, and outdoor venues with warm string light canopies overhead, flower-lined aisle pathways, rustic welcome boards, and romantic photo corners.",
    image: "/images/services/4.webp",
    features: [
      "Fairy Light Canopy Overhead",
      "Aisle Pathway Floral Pillars & Carpet",
      "Entrance Floral Tunnel & Welcome Arch",
      "Vintage Lanterns & Warm Spotlights",
      "Buffet Counter Styling",
    ],
    price: "Custom Quote",
    capacity: "Resorts & Open Grounds",
  },
  {
    id: "stage-sfx",
    category: "sfx",
    tag: "Stage Pyrotechnics",
    title: "Low Fog Smoke & Cold Pyro Entry",
    malayalam: "ഫോഗ് സ്മോക്ക് & കോൾഡ് പൈറോ എൻട്രി",
    shortDesc: "Dry ice low fog smoke clouds, cold fire sparklers, and stage entry special effects.",
    fullDesc: "Make couple entry an unforgettable highlight with safe low-lying fog and indoor-safe cold fire sparklers during cake cutting or ring exchange ceremonies.",
    image: "/images/services/5.webp",
    features: [
      "Low-Lying Dry Ice Fog Cloud Machine",
      "Cold Pyro Fire Sparklers (Indoor Safe)",
      "Entrance Confetti Cannons Blast",
      "Moving Head Stage Lights",
      "Professional SFX Operators Onsite",
    ],
    price: "Custom Quote",
    capacity: "Indoor & Outdoor",
  },
  {
    id: "live-food-counters",
    category: "catering",
    tag: "Live Food Stations",
    title: "Interactive Live Food & Tea Counters",
    malayalam: "ലൈവ് ഫുഡ് & ടീ കൗണ്ടറുകൾ",
    shortDesc: "Hot Neypathal, Dosa, Jalebi, fresh fruit juices, and authentic Colour Tea served live.",
    fullDesc: "Elevate your celebration with live cooking stalls. Watch hot Neypathals puff up, enjoy fresh Jalebis, or sip on piping hot Malabar Colour Tea served by skilled chefs.",
    image: "/images/services/6.webp",
    features: [
      "Live Neypathal & Vellappam Stalls",
      "Hot Jalebi & Mysore Pak Live Counter",
      "Fresh Fruit Juices (Watermelon, Grape, Pineapple)",
      "Traditional Malabar Colour Tea Counter",
      "Hygienic Uniformed Food Stations",
    ],
    price: "Custom Quote",
    capacity: "All Group Sizes",
  },
  {
    id: "housewarming-birthday",
    category: "special",
    tag: "Family Functions",
    title: "Housewarming & Birthday Decor",
    malayalam: "വീടുമാറൽ & ബർത്ത്ഡേ ഡെക്കറേഷൻ",
    shortDesc: "Balloon arches, floral main door Toran, traditional oil lamps, and theme birthday backdrops.",
    fullDesc: "Complete decoration solutions for housewarming ceremonies, birthday celebrations, cradle ceremonies, and family gatherings in Kasaragod.",
    image: "/images/services/7.webp",
    features: [
      "Traditional Fresh Flower Door Garlands & Toran",
      "Entrance Nilavilakku & Urli Styling",
      "Custom Birthday Balloon Arch & Backdrop",
      "Name Board Styling & Lighting",
      "Compact Home Space Fitting",
    ],
    price: "Custom Quote",
    capacity: "Home & Hall",
  },
  {
    id: "car-decoration",
    category: "decor",
    tag: "Wedding Car Decor",
    title: "Wedding Car Decoration",
    malayalam: "വെഡ്ഡിംഗ് കാർ ഡെക്കറേഷൻ",
    shortDesc: "Elegant wedding car styling with fresh flowers, ribbons, and floral garlands for a grand departure.",
    fullDesc: "Make the couple's journey special with our wedding car decoration service featuring fresh flowers, elegant ribbons, and theme-matched styling.",
    image: "/images/services/8.webp",
    features: [
      "Fresh Flower Hood & Front Grille Decoration",
      "Door Mirror Floral Arrangements",
      "Ribbons & Tulle Draping",
      "Theme-Matched Floral Styling",
      "Neat & Clean Vehicle Handling",
    ],
    price: "Custom Quote",
    capacity: "All Car Models",
  },
  {
    id: "inauguration-decoration",
    category: "special",
    tag: "Grand Openings",
    title: "Inauguration & Opening Decoration",
    malayalam: "ഉദ്ഘാടനം & ഗ്രാൻഡ് ഓപ്പണിംഗ് ഡെക്കറേഷൻ",
    shortDesc: "Inauguration setups with balloon arches, floral decorations, welcome signage, red carpets, and traditional lamps.",
    fullDesc: "Create a memorable first impression for your business, showroom, office, or shop with elegant floral arrangements, balloon arches, red carpets, and traditional ceremonial decor.",
    image: "/images/services/9.webp",
    features: [
      "Balloon Arch & Entrance Decoration",
      "Fresh Flower & Floral Garland Styling",
      "Welcome Board & Name Signage",
      "Red Carpet Entrance Setup",
      "Traditional Nilavilakku & Ceremonial Decor",
    ],
    price: "Custom Quote",
    capacity: "Shops, Offices & Showrooms",
  },
];
