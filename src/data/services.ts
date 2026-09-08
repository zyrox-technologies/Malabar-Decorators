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
      image: "/Malabar-imges/malabar-decorators-kasaragod-flower-decorators-c0b95t3sru.jpg",
      link: "/services",
      iconType: "wedding",
    },
    {
      id: "destination-weddings",
      title: "Destination Weddings",
      description:
        "Exchange vows in Kerala's most breathtaking destinations, where stunning venues meet exceptional planning and hospitality.",
      image: "/Malabar-imges/malabar-decorators-kasaragod-flower-decorators-fo6zj2ua32.jpg",
      link: "/services",
      iconType: "destination",
    },
    {
      id: "engagement-ceremonies",
      title: "Engagement Ceremonies",
      description:
        "Begin your forever with sophisticated décor, elegant styling, and unforgettable engagement celebrations.",
      image: "/Malabar-imges/malabar-decorators-kasaragod-flower-decorators-lr5hqiduzn.jpg",
      link: "/services",
      iconType: "engagement",
    },
    {
      id: "royal-reception",
      title: "Grand Reception & Stage Décor",
      description:
        "Bespoke stage architecture featuring premium floral backdrops, crystal chandeliers, royal sofa seating, and ambient lighting.",
      image: "/Malabar-imges/malabar-decorators-kasaragod-flower-decorators-1lepi60kot.jpg",
      link: "/services",
      iconType: "reception",
    },
    {
      id: "malabar-catering",
      title: "Authentic Malabar Catering",
      description:
        "Legendary Thalassery Dum Biryani, live food stalls, and 24+ item traditional Sadya prepared with pure cow ghee and hand-ground spices.",
      image: "/Malabar-imges/malabar-decorators-kasaragod-caterers-hh34cc8r6a.jpg",
      link: "/services",
      iconType: "catering",
    },
    {
      id: "haldi-mehendi",
      title: "Haldi & Traditional Celebrations",
      description:
        "Vibrant yellow floral arrangements, marigold drapes, wooden swings (Jhula), brass Urlis, and cheerful photo booths for family celebrations.",
      image: "/Malabar-imges/malabar-decorators-kasaragod-flower-decorators-eyuu9lnc79.jpg",
      link: "/services",
      iconType: "haldi",
    },
  ] as ServiceItem[],
};
