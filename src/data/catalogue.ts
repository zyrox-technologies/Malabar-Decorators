export interface CatalogueItem {
  id: string;
  title: string;
  malayalam: string;
  category?: string;
  price: string;
  desc: string;
  image: string;
  popular?: boolean;
  features: string[];
}

export interface CatalogueCategory {
  id: string;
  label: string;
}

export const catalogueCategories: CatalogueCategory[] = [
  { id: "all", label: "All Decor Setups" },
  { id: "stage", label: "Stage & Mandap Decor" },
  { id: "outdoor", label: "Outdoor & Reception" },
  { id: "traditional", label: "Traditional Ceremonies" },
  { id: "sfx", label: "Lighting & SFX Effects" },
  { id: "photobooth", label: "Photo Booths & Others" },
];

export const catalogueItems: CatalogueItem[] = [
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
    category: "stage",
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

export interface CataloguePriceRow {
  name: string;
  category: string;
  price: string;
}

export const fullCatalogueList: CataloguePriceRow[] = [
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
