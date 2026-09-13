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
    title: "Traditional Wedding Mandap Setup",
    malayalam: "വിവാഹ മണ്ഡപ ഡെക്കറേഷൻ",
    category: "stage",
    price: "Custom Quote",
    desc: "Complete traditional mandap, floral stage styling, seating arrangement, welcome entrance arch & ambient illumination.",
    image: "/images/catalogue/file_0000000015b881fa9bbbf4a93b5e22b6.webp",
    popular: true,
    features: [
      "Fresh Floral Mandap Setup",
      "Traditional Seating Chairs",
      "Entrance Floral Welcome Arch",
      "Stage Lighting & Spotlights",
      "Red Carpet Aisle Pathway",
    ],
  },
  {
    id: "outdoor-reception",
    title: "Outdoor Lawn & Evening Reception",
    malayalam: "ഔട്ട്‌ഡോർ റിസപ്ഷൻ ഡെക്കർ",
    category: "outdoor",
    price: "Custom Quote",
    desc: "Lawn fairy light canopy, backdrop floral styling, carpeted pathway, warm spotlights & customized photo corner.",
    image: "/images/catalogue/file_00000000344c81fa850396f61fb9d12d.webp",
    popular: true,
    features: [
      "Overhead Fairy Light Canopy",
      "Floral Photo Wall Backdrop",
      "Pathway Lanterns & Pillars",
      "Stage & Buffet Illumination",
      "Welcome Signboard Styling",
    ],
  },
  {
    id: "stage-lighting",
    title: "Stage Lighting & Truss Setup",
    malayalam: "സ്റ്റേജ് ലൈറ്റിംഗ് & ട്രസ്സ്",
    category: "sfx",
    price: "Custom Quote",
    desc: "Warm spotlights, chandelier fixtures, stage truss decor & backdrop color illumination.",
    image: "/images/catalogue/file_00000000375c81fa9ee8f7a1a8a6fb43.webp",
    popular: false,
    features: [
      "Spotlights & Moving Heads",
      "Warm LED Backdrop Wash",
      "Chandelier Hanging Fixtures",
      "Truss Structural Support",
      "Onsite Lighting Operator",
    ],
  },
  {
    id: "photo-booth",
    title: "Custom Photo Corner Setup",
    malayalam: "ഫോട്ടോ കോർണർ സെറ്റപ്പ്",
    category: "photobooth",
    price: "Custom Quote",
    desc: "Floral background frame, rustic archway, and warm lighting for guest pictures and family memories.",
    image: "/images/catalogue/file_000000003934820ba9d16be60f892922.webp",
    popular: false,
    features: [
      "Floral Backdrop Frame",
      "Handcrafted Archway Structure",
      "Vanity Ring & Warm Lighting",
      "Custom Name Monogram",
      "Carpeted Base Styling",
    ],
  },
  {
    id: "traditional-mandap",
    title: "Traditional Kerala Floral Stage",
    malayalam: "പരമ്പരാഗത കേരള സ്റ്റേജ്",
    category: "traditional",
    price: "Custom Quote",
    desc: "Yellow marigold garlands, traditional brass oil lamps (Nilavilakku), urlis with floating petals & stage styling.",
    image: "/images/catalogue/file_00000000e8f8820bb6b4b4dcaff4fbb3.webp",
    popular: false,
    features: [
      "Fresh Marigold Floral Garlands",
      "Traditional Brass Nilavilakku",
      "Brass Urlis & Flower Petals",
      "Ceremonial Stage Pillars",
      "Entrance Welcome Styling",
    ],
  },
  {
    id: "corporate-inauguration",
    title: "Inauguration & Corporate Decor",
    malayalam: "ഇനൗഗുറേഷൻ ഡെക്കറേഷൻ",
    category: "stage",
    price: "Custom Quote",
    desc: "Ceremonial arch, podium floral arrangement, entrance welcome gate, red carpeting & seating drapes.",
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
  { name: "Standard Photo Booth", category: "Photo Booth", price: "Custom Quote" },
  { name: "12 Feet Custom Photo Booth", category: "Photo Booth", price: "Custom Quote" },
  { name: "Outdoor Lawn Reception", category: "Outdoor Decor", price: "Custom Quote" },
  { name: "Traditional Wedding Stage Package", category: "Full Package", price: "Custom Quote" },
  { name: "Traditional Kerala Floral Stage", category: "Ceremony Decor", price: "Custom Quote" },
  { name: "Inauguration & Ribbon Cutting Setup", category: "Business Events", price: "Custom Quote" },
  { name: "Haldi & Mehendi Yellow Stage Decor", category: "Ceremony Decor", price: "Custom Quote" },
  { name: "Birthday Decor (Balloon Arch)", category: "Family Functions", price: "Custom Quote" },
  { name: "Birthday Decor (Theme Setup)", category: "Family Functions", price: "Custom Quote" },
  { name: "Wedding Garlands Pair (Fresh Flowers)", category: "Floral Accessories", price: "Custom Quote" },
  { name: "Bridal Flower Bouquets", category: "Floral Accessories", price: "Custom Quote" },
  { name: "Cradle Ceremony (Noolukettu) Decor", category: "Family Functions", price: "Custom Quote" },
  { name: "Nikah Stage Design", category: "Stage Decor", price: "Custom Quote" },
  { name: "Stage Light & Truss Setup", category: "Lighting & SFX", price: "Custom Quote" },
  { name: "Simple Outdoor Lawn Decor", category: "Outdoor Decor", price: "Custom Quote" },
  { name: "Room & Backdrop Decoration", category: "Party Decor", price: "Custom Quote" },
  { name: "Bridal Car Floral Decoration", category: "Vehicle Decor", price: "Custom Quote" },
  { name: "Valakappu & Family Function Decor", category: "Family Functions", price: "Custom Quote" },
  { name: "Resort & Destination Wedding Setup", category: "Full Package", price: "Custom Quote" },
  { name: "Low Fog Dry Ice Cloud Entry", category: "Stage Effects", price: "Custom Quote" },
  { name: "Cold Fire Pyro Sparklers Entry", category: "Stage Effects", price: "Custom Quote" },
];
