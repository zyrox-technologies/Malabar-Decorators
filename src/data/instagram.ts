export interface InstagramPost {
  id: string;
  image: string;
  alt: string;
  location: string;
  caption: string;
  hashtags: string[];
  link: string;
}

export const instagramData = {
  handle: "@malabar_decorators",
  profileName: "Malabar Decorators",
  avatar: "/images/logo/logo.webp",
  description: "Inspiration from our latest decorations and catering setups in Kasaragod",
  link: "https://www.instagram.com/malabar_decorators/?hl=en",
  posts: [
    {
      id: "ig-1",
      image: "/images/gallery/malabar-decorators-kasaragod-flower-decorators-1f2o2b186d.webp",
      alt: "Floral decoration and centerpieces in Kasaragod",
      location: "Kasaragod, Kerala",
      caption: "Floral arches, ambient lighting, and elegant details for a memorable celebration.",
      hashtags: ["#malabardecorators", "#keralawedding", "#stagedecor", "#kasaragod"],
      link: "https://www.instagram.com/malabar_decorators/?hl=en",
    },
    {
      id: "ig-2",
      image: "/images/gallery/malabar-decorators-kasaragod-flower-decorators-1lepi60kot.webp",
      alt: "Table setting and dining decor by Malabar Decorators",
      location: "Kasaragod, Kerala",
      caption: "Carefully arranged banquet tables and floral touches for event catering.",
      hashtags: ["#tabledecor", "#malabarevents", "#catering", "#keralasadhya"],
      link: "https://www.instagram.com/malabar_decorators/?hl=en",
    },
    {
      id: "ig-3",
      image: "/images/gallery/malabar-decorators-kasaragod-flower-decorators-21ul6bh1v8.webp",
      alt: "Stage decoration by Malabar Decorators",
      location: "Kasaragod, Kerala",
      caption: "Stage floral backdrop and lighting setup tailored for wedding ceremonies.",
      hashtags: ["#stagedecor", "#weddingdecor", "#malabarstage", "#kasaragodevents"],
      link: "https://www.instagram.com/malabar_decorators/?hl=en",
    },
    {
      id: "ig-4",
      image: "/images/gallery/malabar-decorators-kasaragod-flower-decorators-3x0dus6bi1.webp",
      alt: "Evening venue lighting and entrance ambiance",
      location: "Kasaragod, Kerala",
      caption: "Ambient illumination creating warm atmosphere for the grand event entry.",
      hashtags: ["#lightingdesign", "#eventdecor", "#kasaragod", "#celebrations"],
      link: "https://www.instagram.com/malabar_decorators/?hl=en",
    },
  ],
};
