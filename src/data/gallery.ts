export interface GalleryVideo {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  duration: string;
  thumbnail: string;
  src: string;
}

export const galleryData = {
  overline: "OUR VIDEO GALLERY",
  headline: "Moments That Speak Louder Than Words.",
  headlineHighlight: "Words.",
  subheadline:
    "Take a closer look at the experiences we've created — real people, real celebrations, and unforgettable moments.",
  leftTag: "EVENTS THAT CREATE STORIES",
  rightWatermark: "VIDEO",
  rightSteps: ["PLAN", "DESIGN", "EXECUTE", "CELEBRATE"],
  categories: [
    "All Videos",
    "Weddings",
    "Corporate Events",
    "Private Parties",
    "Event Setups",
    "Client Stories",
  ],
  videos: [
    {
      id: "video-1",
      title: "A Day of Forever",
      category: "Weddings",
      categoryLabel: "WEDDING",
      duration: "00:38",
      thumbnail: "/Malabar/malabar-decorators-kasaragod-caterers-k6e0rww2mt.jpg",
      src: "/Malabar/4_5837823821939215318.mp4",
    },
    {
      id: "video-2",
      title: "Ideas Into Impact",
      category: "Corporate Events",
      categoryLabel: "CORPORATE EVENT",
      duration: "00:47",
      thumbnail: "/Malabar/IMG-20260908-WA0056.jpg",
      src: "/Malabar/4_5838083298093435911.mp4",
    },
    {
      id: "video-3",
      title: "A Celebration of You",
      category: "Private Parties",
      categoryLabel: "PRIVATE PARTY",
      duration: "00:34",
      thumbnail: "/Malabar/malabar-decorators-kasaragod-flower-decorators-8x14en2n5l.jpg",
      src: "/Malabar/4_5838263828453788513.mp4",
    },
    {
      id: "video-4",
      title: "Details That Matter",
      category: "Event Setups",
      categoryLabel: "EVENT SETUP",
      duration: "00:20",
      thumbnail: "/Malabar/malabar-decorators-kasaragod-flower-decorators-55er2kfq69.jpg",
      src: "/Malabar/AQPxaXvH8rtx4AEG3OkRQNNYlgWPx7CclRcclAG2JypUA4XZBTDjy5CkkVAvdLP.mp4",
    },
    {
      id: "video-5",
      title: "Happy Clients",
      category: "Client Stories",
      categoryLabel: "CLIENT STORIES",
      duration: "00:38",
      thumbnail: "/Malabar/file_0000000054bc824391abca2865d59a8f.png",
      src: "/Malabar/4_5837823821939215318.mp4",
    },
    {
      id: "video-6",
      title: "Beyond Boundaries",
      category: "Weddings",
      categoryLabel: "DESTINATION EVENTS",
      duration: "00:47",
      thumbnail: "/Malabar/file_00000000f3ec81fdbef58b3c1e902a94.png",
      src: "/Malabar/4_5838083298093435911.mp4",
    },
    {
      id: "video-7",
      title: "Unforgettable Vibes",
      category: "Private Parties",
      categoryLabel: "EVENT HIGHLIGHTS",
      duration: "00:34",
      thumbnail: "/Malabar/malabar-decorators-kasaragod-caterers-pnxxplvci4.jpg",
      src: "/Malabar/4_5838263828453788513.mp4",
    },
  ],
  bottomBanner: {
    tagline: "WATCH. FEEL. CELEBRATE.",
    description:
      "Every event has a story — and here are a few of our favorites. Press play and experience the magic for yourself.",
    ctaPrompt: "HAVE A VISION?",
    ctaSubtext: "Let's create your next story together.",
    buttonText: "PLAN YOUR EVENT",
    buttonHref: "/contact",
  },
};
