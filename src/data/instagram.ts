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
      image: "/images/gallery/ed304218-1597-4a6c-9fee-dec6632d3173.webp",
      alt: "Floral decoration and centerpieces in Kasaragod",
      location: "Kasaragod, Kerala",
      caption: "Floral arches, ambient lighting, and elegant details for a memorable celebration.",
      hashtags: ["#malabardecorators", "#keralawedding", "#stagedecor", "#kasaragod"],
      link: "https://www.instagram.com/malabar_decorators/?hl=en",
    },
    {
      id: "ig-2",
      image: "/images/gallery/ad024359-b131-44b4-9324-b1e780ca4569.webp",
      alt: "Table setting and dining decor by Malabar Decorators",
      location: "Kasaragod, Kerala",
      caption: "Carefully arranged banquet tables and floral touches for event catering.",
      hashtags: ["#tabledecor", "#malabarevents", "#catering", "#keralasadhya"],
      link: "https://www.instagram.com/malabar_decorators/?hl=en",
    },
    {
      id: "ig-3",
      image: "/images/gallery/270bdc2b-4f05-47be-b369-fd3d4fc2274e.webp",
      alt: "Stage decoration by Malabar Decorators",
      location: "Kasaragod, Kerala",
      caption: "Stage floral backdrop and lighting setup tailored for wedding ceremonies.",
      hashtags: ["#stagedecor", "#weddingdecor", "#malabarstage", "#kasaragodevents"],
      link: "https://www.instagram.com/malabar_decorators/?hl=en",
    },
    {
      id: "ig-4",
      image: "/images/gallery/eec8a0ec-9fb6-48b8-8f85-ed4dad2282c2.webp",
      alt: "Evening venue lighting and entrance ambiance",
      location: "Kasaragod, Kerala",
      caption: "Ambient illumination creating warm atmosphere for the grand event entry.",
      hashtags: ["#lightingdesign", "#eventdecor", "#kasaragod", "#celebrations"],
      link: "https://www.instagram.com/malabar_decorators/?hl=en",
    },
    {
      id: "ig-5",
      image: "/images/gallery/303095f0-48df-45b7-ac55-b3dc557e7020.webp",
      alt: "Haldi ceremony floral decoration in Kasaragod",
      location: "Kasaragod, Kerala",
      caption: "Vibrant yellow marigold styling and traditional ceremony accents.",
      hashtags: ["#haldiceremony", "#marigolddecor", "#keralatradition", "#kasaragod"],
      link: "https://www.instagram.com/malabar_decorators/?hl=en",
    },
    {
      id: "ig-6",
      image: "/images/gallery/0f47fd29-e0f6-4aae-8ad8-2d8c8df2624f.webp",
      alt: "Grand stage decor by Malabar Decorators",
      location: "Karandakkad, Kasaragod",
      caption: "Elegantly draped stage setup with royal seating and ambient lights.",
      hashtags: ["#weddingstage", "#eventdecor", "#kasaragodevents", "#reception"],
      link: "https://www.instagram.com/malabar_decorators/?hl=en",
    },
  ],
};
