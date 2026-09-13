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
];
