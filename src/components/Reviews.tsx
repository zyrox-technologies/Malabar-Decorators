"use client";

import { Star, ExternalLink } from "lucide-react";

const GoogleIcon = ({ className = "w-4 h-4 shrink-0" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24">
        <path
            fill="#4285F4"
            d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
        />
        <path
            fill="#34A853"
            d="M12 24c3.24 0 6-.1 7.95-2.8l-3.88-3.05c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.15C3.26 21.39 7.31 24 12 24z"
        />
        <path
            fill="#FBBC05"
            d="M5.27 14.35c-.25-.72-.38-1.49-.38-2.35s.13-1.63.38-2.35V6.5H1.29C.47 8.13 0 9.99 0 12s.47 3.87 1.29 5.5l3.98-3.15z"
        />
        <path
            fill="#EA4335"
            d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.61 1.29 6.5l3.98 3.15c.95-2.85 3.6-4.9 6.73-4.9z"
        />
    </svg>
);

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
        <section className="py-12 sm:py-16 bg-[#FAF8F2] relative overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-[#F2B93F]/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Title */}
                <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#6F1014]/10 border border-[#6F1014]/20 text-[#6F1014] text-xs font-bold tracking-widest uppercase">
                        <span>Client Testimonials</span>
                    </div>

                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                        <span className="dark-gradient-text">Trusted By Families</span> <span className="maroon-gradient-text">Across Kerala</span>
                    </h2>

                    <p className="text-sm sm:text-base text-[#171110]/75 max-w-2xl mx-auto font-normal">
                        Read verified feedback from event hosts who experienced Malabar Decorators’ catering and venue decorations.
                    </p>
                </div>

                {/* Top Google Rating Full Banner (As in Reference Screenshot) */}
                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#EFE8D7] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 mb-16">
                    <div className="flex items-center gap-3 sm:gap-4">
                        <GoogleIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                            <span className="font-display font-bold text-base text-[#171110]">
                                Google Rating
                            </span>
                            <div className="flex items-center gap-1.5">
                                <span className="font-bold text-sm text-[#171110]">4.9</span>
                                <div className="flex text-[#F2B93F]">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>
                                <span className="text-xs text-[#171110]/65 font-medium ml-1">
                                    Based on 180+ Reviews
                                </span>
                            </div>
                        </div>
                    </div>

                    <a
                        href="https://google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 rounded-full bg-[#6F1014] hover:bg-[#8B1E23] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all hover:scale-105"
                    >
                        <span>Write a Review</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#F2B93F]" />
                    </a>
                </div>

                {/* Review Cards Grid with Overlapping Initial Avatars */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-6 pt-4">
                    {testimonials.map((item) => (
                        <div
                            key={item.id}
                            className="relative bg-white rounded-2xl p-6 pt-10 border border-[#EFE8D7] shadow-sm hover:shadow-xl hover:border-[#F2B93F]/60 transition-all duration-300 flex flex-col justify-between text-center group hover:-translate-y-1"
                        >
                            {/* Top Left Google G Logo */}
                            <div className="absolute top-4 left-4">
                                <GoogleIcon className="w-4 h-4" />
                            </div>

                            {/* Overlapping Top Center Circle Avatar with First Letter Initial */}
                            <div className={`absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full border-4 border-white ${item.avatarBg} text-[#F2B93F] shadow-md flex items-center justify-center font-display font-bold text-xl group-hover:scale-110 transition-transform duration-300`}>
                                {item.name.charAt(0)}
                            </div>

                            {/* Review Content */}
                            <div className="space-y-2 mt-2">
                                <h3 className="font-display font-bold text-base text-[#171110]">
                                    {item.name}
                                </h3>

                                {/* Star Rating */}
                                <div className="flex justify-center text-[#F2B93F] gap-1">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                                    ))}
                                </div>

                                {/* Date */}
                                <span className="block text-[11px] text-[#171110]/55 font-medium">
                                    {item.date}
                                </span>

                                {/* Review Text */}
                                <p className="text-xs sm:text-sm text-[#171110]/80 leading-relaxed font-normal pt-1">
                                    "{item.comment}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
