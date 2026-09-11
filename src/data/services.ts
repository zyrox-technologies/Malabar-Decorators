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
      id: "stage-decor",
      title: "Royal Nikah & Reception Stage Decor",
      description: "Bespoke stage designs featuring premium floral backdrops, crystal chandeliers, luxury plush seating, and warm ambient lighting.",
      link: "/services",
      image: "/service/1.png",

    },
    {
      id: "catering-feast",
      title: "Grand Malabar Wedding & Event Catering",
      link: "/services",
      description: "Authentic Malabar Dum Biryani, Mandi, Ghee Rice, traditional Sadhya, live cooking counters, and delicious homemade desserts.",
      image: "/service/2.png",

    },
    {
      id: "haldi-mehendi",
      title: "Haldi, Mehendi & Sangeet Decor",
      description: "Vibrant yellow and orange flower arrangements, marigold drapes, brass urlis, wooden swings, and festive photo booths.",
      link: "/services",
      image: "/service/3.png",

    },
    {
      id: "outdoor-destination",
      title: "Outdoor Lawn & Beachside Destination Decor",
      description: "Magical fairy light canopies, entrance welcome tunnels, open-air lawn stages, and dreamy evening illumination.",
      link: "/services",
      image: "/service/4.png",

    },
    {
      id: "stage-sfx",
      title: "Low Fog Cloud Smoke & Cold Pyro SFX Entry",
      description: "Breathtaking dry ice low fog smoke clouds, smokeless cold fire sparklers, and grand stage entry pyrotechnics.",
      link: "/services",
      image: "/service/5.png",

    },
    {
      id: "live-food-counters",
      title: "Interactive Live Food & Refreshment Counters",
      description: "Hot Neypathal, Dosa, Jalebi, fresh fruit juices, and authentic Malabar Colour Tea served live to your guests.",
      link: "/services",
      image: "/service/6.png",

    },
  ] as ServiceItem[],
};
