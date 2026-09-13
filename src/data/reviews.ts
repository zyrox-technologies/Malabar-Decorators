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
    name: "Verified Client",
    role: "Wedding & Event Client",
    event: "Event Decoration",
    rating: 5,
    date: "Public Review",
    comment:
      "Amazing work in affordable price and quick work.",
    initials: "VC",
    avatarColor: "bg-[#790504]",
  },
  {
    id: 2,
    name: "Satisfied Customer",
    role: "Family Function",
    event: "Decoration & Services",
    rating: 5,
    date: "Public Review",
    comment:
      "Affordable and value for the price, satisfied with the team and their work.",
    initials: "SC",
    avatarColor: "bg-[#AB3600]",
  },
  {
    id: 3,
    name: "Wedding Client",
    role: "Bride's Family",
    event: "Wedding Event",
    rating: 5,
    date: "Public Review",
    comment:
      "My sister's wedding event done by this team.. really superb!",
    initials: "WC",
    avatarColor: "bg-[#922E23]",
  },
  {
    id: 4,
    name: "K. R. Nair",
    role: "Engagement Ceremony Host",
    event: "Stage & Floral Decor",
    rating: 5,
    date: "Kanhangad",
    comment:
      "Very professional stage decoration and entrance lighting for our daughter's engagement. Delivered on time with great attention to detail.",
    initials: "KN",
    avatarColor: "bg-[#790504]",
  },
  {
    id: 5,
    name: "Mohammed Shafeeq",
    role: "Family Reception Host",
    event: "Catering & Stage Setup",
    rating: 5,
    date: "Kasaragod",
    comment:
      "Catering food quality was excellent, especially the Malabar Dum Biryani. Guests were very happy with the service and taste.",
    initials: "MS",
    avatarColor: "bg-[#AB3600]",
  },
  {
    id: 6,
    name: "Anjali & Praveen",
    role: "Wedding Couple",
    event: "Mandap & Sadya Catering",
    rating: 5,
    date: "Karandakkad",
    comment:
      "Traditional Kerala Sadya catering was authentic and freshly prepared. Stage mandap setup looked beautiful in all our photos.",
    initials: "AP",
    avatarColor: "bg-[#922E23]",
  },
  {
    id: 7,
    name: "Sujith Kumar",
    role: "Housewarming Host",
    event: "Housewarming Decor",
    rating: 5,
    date: "Nileshwar",
    comment:
      "Good floral Toran and entrance decoration for our housewarming function. Neat execution, punctual setup, and reasonable pricing.",
    initials: "SK",
    avatarColor: "bg-[#59413D]",
  },
];
