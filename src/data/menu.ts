export interface MenuItem {
  id: string;
  name: string;
  malayalam?: string;
  isLive?: boolean;
  type?: "veg" | "non-veg";
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bannerImage: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "welcome-drinks",
    title: "Welcome Drink / Live Juice",
    subtitle: "Refreshing Arrivals",
    description: "Freshly pressed chilled juices and fruit coolers to welcome your guests in style.",
    bannerImage: "/images/menu/welcome-drinks.webp",
    items: [
      { id: "wd-1", name: "Water Melon", type: "veg" },
      { id: "wd-2", name: "Pappaya", type: "veg" },
      { id: "wd-3", name: "Grape", type: "veg" },
      { id: "wd-4", name: "Pineapple", type: "veg" },
      { id: "wd-5", name: "Musambi", type: "veg" },
    ],
  },
  {
    id: "mains",
    title: "Main Dishes",
    subtitle: "Heart of the Feast",
    description: "Signature biriyanis, fragrant ghee rice, and fresh live flatbread counters crafted by master chefs.",
    bannerImage: "/images/menu/main-dishes.webp",
    items: [
      { id: "m-1", name: "Chicken Biriyani", type: "non-veg" },
      { id: "m-2", name: "Mutton Biriyani", type: "non-veg" },
      { id: "m-3", name: "Ghee Rice", type: "veg" },
      { id: "m-4", name: "Fried Rice", type: "veg" },
      { id: "m-5", name: "Vellappam", isLive: true, type: "veg" },
      { id: "m-6", name: "Neypathal", isLive: true, type: "veg" },
      { id: "m-7", name: "Porotta", isLive: true, type: "veg" },
      { id: "m-8", name: "Chappathi", type: "veg" },
      { id: "m-9", name: "Veg Pulav", type: "veg" },
      { id: "m-10", name: "Dosa", isLive: true, type: "veg" },
    ],
  },
  {
    id: "curries",
    title: "Curry & Fries",
    subtitle: "Rich & Savory Accompaniments",
    description: "Authentic slow-roasted meats and aromatic vegetable preparations with traditional spices.",
    bannerImage: "/images/menu/curry-fries.webp",
    items: [
      { id: "c-1", name: "Chicken curry", type: "non-veg" },
      { id: "c-2", name: "Chicken varattiyath", type: "non-veg" },
      { id: "c-3", name: "Mutton varattiyathu", type: "non-veg" },
      { id: "c-4", name: "Chilly chicken", type: "non-veg" },
      { id: "c-5", name: "Pepper chicken", type: "non-veg" },
      { id: "c-6", name: "Veg kuruma", type: "veg" },
      { id: "c-7", name: "Gopi manjurian", type: "veg" },
      { id: "c-8", name: "Gopi chilli", type: "veg" },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    subtitle: "Sweet Endings & Live Sweets",
    description: "Traditional Malabar payasams, hot live counters, and chilled dessert delicacies.",
    bannerImage: "/images/menu/desserts.webp",
    items: [
      { id: "d-1", name: "Ice Cream", type: "veg" },
      { id: "d-2", name: "Gulab jamun", type: "veg" },
      { id: "d-3", name: "Jilebi", isLive: true, type: "veg" },
      { id: "d-4", name: "Mysur pack", isLive: true, type: "veg" },
      { id: "d-5", name: "Payasam - pradhaman", type: "veg" },
      { id: "d-6", name: "Payasam - ada pradhaman", type: "veg" },
      { id: "d-7", name: "Palppayasam", type: "veg" },
    ],
  },
  {
    id: "beverages",
    title: "Beverages",
    subtitle: "Hydration & Hot Sips",
    description: "From live brewed Malabar colour tea to chilled juices and refreshments.",
    bannerImage: "/images/menu/beverages.webp",
    items: [
      { id: "b-1", name: "Water & Soft Drinks", type: "veg" },
      { id: "b-2", name: "Juice Selection", type: "veg" },
      { id: "b-3", name: "Coffee", type: "veg" },
      { id: "b-4", name: "Colour Tea", isLive: true, type: "veg" },
    ],
  },
  {
    id: "kerala-sadya",
    title: "Kerala Sadya",
    subtitle: "പരമ്പരാഗത കേരള സദ്യ",
    description: "A lavish traditional feast served with ceremonial reverence on fresh green banana leaf.",
    bannerImage: "/images/menu/kerala-sadya.webp",
    items: [
      { id: "s-1", name: "ചോറ്", malayalam: "Choru (Kerala Rice)", type: "veg" },
      { id: "s-2", name: "പരിപ്പ് & നെയ്യ്", malayalam: "Parippu & Pure Ghee", type: "veg" },
      { id: "s-3", name: "സാമ്പാർ", malayalam: "Authentic Sambar", type: "veg" },
      { id: "s-4", name: "അവിയൽ", malayalam: "Aviyal", type: "veg" },
      { id: "s-5", name: "തോരൻ", malayalam: "Thoran", type: "veg" },
      { id: "s-6", name: "കാളൻ", malayalam: "Kurukku Kalan", type: "veg" },
      { id: "s-7", name: "ഓലൻ", malayalam: "Olan", type: "veg" },
      { id: "s-8", name: "പുളിശ്ശേരി", malayalam: "Pulissery / Moru Curry", type: "veg" },
      { id: "s-9", name: "രസം", malayalam: "Traditional Rasam", type: "veg" },
      { id: "s-10", name: "പച്ചടി", malayalam: "Pachadi", type: "veg" },
      { id: "s-11", name: "കിച്ചടി", malayalam: "Kichadi", type: "veg" },
      { id: "s-12", name: "ഇഞ്ചിപ്പുളി", malayalam: "Inji Puli", type: "veg" },
      { id: "s-13", name: "മാങ്ങ അച്ചാർ", malayalam: "Mango Pickle", type: "veg" },
      { id: "s-14", name: "നാരങ്ങ അച്ചാർ", malayalam: "Lime Pickle", type: "veg" },
      { id: "s-15", name: "കായ വറുത്തത്", malayalam: "Banana Chips", type: "veg" },
      { id: "s-16", name: "ശർക്കര വരട്ടി", malayalam: "Sharkara Varatti", type: "veg" },
      { id: "s-17", name: "പപ്പടം", malayalam: "Kerala Crispy Pappadam", type: "veg" },
      { id: "s-18", name: "പഴം", malayalam: "Pazham (Banana)", type: "veg" },
      { id: "s-19", name: "അട പ്രഥമൻ", malayalam: "Ada Pradhaman", type: "veg" },
      { id: "s-20", name: "പാലട പായസം", malayalam: "Palada Payasam", type: "veg" },
      { id: "s-21", name: "സംഭാരം", malayalam: "Spiced Buttermilk Sambharam", type: "veg" },
    ],
  },
];
