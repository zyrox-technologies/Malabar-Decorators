"use client";

import { Star } from "lucide-react";

export default function Reviews() {
    const testimonials = [
        {
            id: 1,
            name: "Dr. Mohammed Shafi",
            rating: 5,
            date: "October 14, 2025",
            comment: "Excellent food, beautiful stage presentation, and very professional service! The Malabar Dum Biriyani and live food counters were a massive hit.",
            avatarBg: "bg-gradient-to-br from-[#6F1014] to-[#38070A]",
        },
        {
            id: 2,
            name: "Anjali Nair",
            rating: 5,
            date: "August 4, 2025",
            comment: "Malabar Decorators handled both our evening outdoor reception decoration and dinner catering seamlessly. The fairy light canopy looked magical!",
            avatarBg: "bg-gradient-to-br from-[#8B1E23] to-[#4E0A0D]",
        },
        {
            id: 3,
            name: "Firoz Khan",
            rating: 5,
            date: "June 11, 2025",
            comment: "On-time delivery, traditional Kerala aesthetic, and extremely courteous staff. The Haldi stage setup with marigold flowers was stunning.",
            avatarBg: "bg-gradient-to-br from-[#4E0A0D] to-[#241B18]",
        },
        {
            id: 4,
            name: "Suresh K. V.",
            rating: 5,
            date: "March 30, 2025",
            comment: "Top-notch catering quality in Kannur! The Ghee Rice, Chicken Varattiyath, and Ada Pradhaman payasam were praised by everyone.",
            avatarBg: "bg-gradient-to-br from-[#6F1014] to-[#8B1E23]",
        },
        {
            id: 5,
            name: "Rubel Miah",
            rating: 5,
            date: "December 9, 2024",
            comment: "Very nice venue decoration and professional management team. Everyone enjoyed the delicious food spreads and decor setup.",
            avatarBg: "bg-gradient-to-br from-[#8B1E23] to-[#38070A]",
        },
        {
            id: 6,
            name: "Nishat Shahriyar",
            rating: 5,
            date: "December 5, 2024",
            comment: "Wonderful stage setup and awesome catering arrangement. Recommended for any large family functions and corporate events.",
            avatarBg: "bg-gradient-to-br from-[#6F1014] to-[#4E0A0D]",
        },
    ];

    return (
        <section className="py-24 bg-[#FAF8F2] relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl sm:text-5xl font-medium text-[#241B18] tracking-tight">
                        Words of <span className="font-bold text-[#A2272E]">Love</span>
                    </h2>
                </div>

                {/* Reviews Carousel/Strip */}
                <div className="flex overflow-x-auto no-scrollbar gap-6 pb-8 snap-x">
                    {testimonials.map((item) => (
                        <div
                            key={item.id}
                            className="w-[350px] shrink-0 snap-start bg-white rounded-sm p-8 shadow-sm flex flex-col justify-between border border-[#241B18]/5 group hover:border-[#A2272E]/20 transition-colors"
                        >
                            <div>
                                <div className="text-[#A2272E] mb-6">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                                    </svg>
                                </div>
                                <p className="text-sm text-[#241B18]/80 font-light leading-relaxed mb-8 line-clamp-4">
                                    {item.comment}
                                </p>
                            </div>

                            <div className="flex items-center justify-between mt-auto">
                                <div className="flex flex-col">
                                    <span className="text-[11px] font-bold tracking-wider text-[#241B18] uppercase">
                                        {item.name}
                                    </span>
                                </div>
                                <div className="flex gap-0.5 text-[#A2272E]">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <Star key={i} className="w-3 h-3 fill-current" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
