export interface InstagramPost {
  id: string;
  image: string;
  alt: string;
  location: string;
  likes: number;
  likedBy: string;
  caption: string;
  hashtags: string[];
  commentsCount: number;
  timeAgo: string;
  link: string;
}

export const instagramData = {
  handle: "@malabar_decorators",
  profileName: "Malabar Decorators & Events",
  avatar: "/images/logo/logo.webp",
  description: "Daily inspiration from our latest celebrations",
  link: "https://instagram.com/malabardecorators",
  posts: [
    {
      id: "ig-1",
      image: "/images/gallery/malabar-decorators-kasaragod-flower-decorators-1f2o2b186d.webp",
      alt: "Instagram feed post showing floral centerpieces",
      location: "Kasaragod, Kerala",
      likes: 1428,
      likedBy: "weddingwireindia",
      caption: "A dream in full bloom ✨ Handcrafted floral arches, ambient golden chandeliers, and intimate details for an unforgettable celebration.",
      hashtags: ["#malabardecorators", "#keralawedding", "#floralarchitecture", "#luxuryevents"],
      commentsCount: 38,
      timeAgo: "2 HOURS AGO",
      link: "https://instagram.com/malabardecorators",
    },
    {
      id: "ig-2",
      image: "/images/gallery/malabar-decorators-kasaragod-flower-decorators-1lepi60kot.webp",
      alt: "Instagram feed post showing table setting",
      location: "Bekal, Kerala",
      likes: 986,
      likedBy: "keralaweddingplanners",
      caption: "Bespoke banquet & royal table styling. Every centerpiece curated to deliver an unforgettable dining experience. 🍷🌿",
      hashtags: ["#tabledecor", "#malabarevents", "#luxurydining", "#receptiondecor"],
      commentsCount: 24,
      timeAgo: "1 DAY AGO",
      link: "https://instagram.com/malabardecorators",
    },
    {
      id: "ig-3",
      image: "/images/gallery/malabar-decorators-kasaragod-flower-decorators-21ul6bh1v8.webp",
      alt: "Instagram feed post showing stage decor",
      location: "Kannur, Kerala",
      likes: 2154,
      likedBy: "wedmegood",
      caption: "Grand stage revelation for a fairytale union. Cascading floral drapes and architectural lighting in pure harmony. 🕊️👑",
      hashtags: ["#stagedecor", "#royalnikah", "#malabarstage", "#destinationwedding"],
      commentsCount: 52,
      timeAgo: "3 DAYS AGO",
      link: "https://instagram.com/malabardecorators",
    },
    {
      id: "ig-4",
      image: "/images/gallery/malabar-decorators-kasaragod-flower-decorators-3x0dus6bi1.webp",
      alt: "Instagram feed post showing lighting",
      location: "Kozhikode, Kerala",
      likes: 1738,
      likedBy: "southindianweddings",
      caption: "Atmospheric ambient illumination creating pure cinematic magic for the grand couple entry. Moments that linger forever. ✨🔥",
      hashtags: ["#sfxentry", "#lightingdesign", "#eventmagic", "#weddinginspiration"],
      commentsCount: 41,
      timeAgo: "5 DAYS AGO",
      link: "https://instagram.com/malabardecorators",
    },
  ],
};
