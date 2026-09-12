export interface ReviewItem {
  id: number;
  name: string;
  role: string;
  event: string;
  rating: number;
  date: string;
  comment: string;
  initials: string;
  avatarColor: string;
}

export const googleReviewsData: ReviewItem[] = [
  {
    id: 1,
    name: "Dr. Mohammed Shafi",
    role: "Groom's Family",
    event: "Royal Nikah & Stage Decor",
    rating: 5,
    date: "2 months ago",
    comment:
      "Outstanding stage presentation and very professional coordination! The floral craftsmanship and royal lighting ambiance transformed the entire hall. Malabar Dum Biriyani and live counter setups were thoroughly praised by all our guests.",
    initials: "MS",
    avatarColor: "bg-[#790504]",
  },
  {
    id: 2,
    name: "Anjali Nair",
    role: "Bride",
    event: "Outdoor Lawn Reception & Catering",
    rating: 5,
    date: "3 months ago",
    comment:
      "Malabar Decorators handled both our evening outdoor reception decoration and dinner banquet seamlessly. The fairy light canopy looked like something out of a fairytale! Binoy and his team paid attention to every micro-detail.",
    initials: "AN",
    avatarColor: "bg-[#AB3600]",
  },
  {
    id: 3,
    name: "Firoz Khan",
    role: "Client",
    event: "Haldi Stage & Marigold Floral Flow",
    rating: 5,
    date: "4 months ago",
    comment:
      "Punctual delivery, authentic traditional aesthetics, and very courteous staff. The Haldi stage setup with cascading fresh marigolds and brass lamps was breathtaking. Highly recommend them for premium celebrations in Malabar!",
    initials: "FK",
    avatarColor: "bg-[#922E23]",
  },
  {
    id: 4,
    name: "Suresh K. V.",
    role: "Host",
    event: "Kannur Wedding Banquet & SFX Entry",
    rating: 5,
    date: "5 months ago",
    comment:
      "Top-notch catering quality and stage setup! The couple entry with cold pyrotechnics and low fog entry was executed flawlessly without any delay. The Malabar Ghee Rice and Payasam were unforgettable.",
    initials: "SK",
    avatarColor: "bg-[#410001]",
  },
  {
    id: 5,
    name: "Aysha Rahiman",
    role: "Bride's Family",
    event: "Grand Reception & Stage Illumination",
    rating: 5,
    date: "6 months ago",
    comment:
      "Exceptional spatial design! Even with over 1,500 guests moving through the venue, the aesthetic stayed pristine and the food counters were well maintained. Truly the best event management in North Kerala.",
    initials: "AR",
    avatarColor: "bg-[#AB3600]",
  },
  {
    id: 6,
    name: "Nishat Shahriyar",
    role: "Corporate Client",
    event: "Annual Conclave & Gala Dinner",
    rating: 5,
    date: "8 months ago",
    comment:
      "Wonderful stage setup and top-tier catering arrangement for our regional conference. The acoustic ambiance, lighting, and hospitality exceeded our expectations. Great professionalism from the whole crew.",
    initials: "NS",
    avatarColor: "bg-[#790504]",
  },
];
