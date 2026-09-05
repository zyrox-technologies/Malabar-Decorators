"use client";

import { Star, Sparkles, CheckCircle2, Award, HeartHandshake, ShieldCheck } from "lucide-react";

const GoogleIcon = () => (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
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
            name: "Dr. Mohammed Shafi",
            role: "Nikah & Reception Host (Kannur)",
            rating: 5,
            date: "Posted on Google • 2 weeks ago",
            comment:
                "Excellent food, beautiful stage presentation, and very professional service! The Malabar Dum Biriyani and live food counters were a massive hit among all our 800+ guests. Highly recommended!",
            tag: "Wedding & Catering",
            avatarBg: "bg-[#6F1014]",
        },
        {
            name: "Anjali & Rahul Nair",
            role: "Evening Reception (Thalassery)",
            rating: 5,
            date: "Posted on Google • 1 month ago",
            comment:
                "Malabar Decorators handled both our evening outdoor reception decoration and full dinner catering seamlessly. The fairy light canopy and floral entrance gate looked magical in photos!",
            tag: "Outdoor Reception",
            avatarBg: "bg-[#8B1E23]",
        },
        {
            name: "Firoz Khan",
            role: "Family Function & Haldi Event",
            rating: 5,
            date: "Posted on Google • 3 weeks ago",
            comment:
                "On-time delivery, traditional Kerala aesthetic, and extremely courteous staff. The Haldi stage setup with marigold flowers and traditional brass lamps was stunning.",
            tag: "Haldi & Stage Decor",
            avatarBg: "bg-[#4E0A0D]",
        },
        {
            name: "Suresh K. V.",
            role: "House Warming & Banquet Host",
            rating: 5,
            date: "Posted on Google • 2 months ago",
            comment:
                "Top-notch catering quality in Kannur! The Ghee Rice, Chicken Varattiyath, and Ada Pradhaman payasam were praised by everyone. Professional execution from start to end.",
            tag: "Catering & Banquet",
            avatarBg: "bg-[#6F1014]",
        },
    ];

    const metrics = [
        { icon: Star, value: "4.9 / 5.0", label: "Google Business Rating" },
        { icon: Award, value: "500+ Events", label: "Successfully Completed" },
        { icon: HeartHandshake, value: "10+ Years", label: "Trusted Experience" },
        { icon: ShieldCheck, value: "100% Quality", label: "Hygienic Execution" },
    ];

    return (
        <section className="py-24 sm:py-32 bg-gradient-to-b from-[#FAF8F2] via-[#F6F1E5] to-[#FAF8F2] relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-[#F2B93F]/12 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    {/* Google Reviews Official Badge */}
                    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-[#EFE8D7] text-[#171110] text-xs font-bold shadow-sm backdrop-blur-md">
                        <GoogleIcon />
                        <span>Google Reviews • 4.9 ★★★★★ (180+ Verified Client Reviews)</span>
                    </div>

                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171110] leading-tight">
                        Trusted By Families <span className="text-[#6F1014]">Across Kerala</span>
                    </h2>

                    <div className="flex items-center justify-center gap-3">
                        <div className="h-0.5 w-12 bg-[#6F1014]" />
                        <div className="w-2.5 h-2.5 rotate-45 bg-[#F2B93F]" />
                        <div className="h-0.5 w-12 bg-[#6F1014]" />
                    </div>

                    <p className="text-sm sm:text-base text-[#171110]/75 max-w-2xl mx-auto font-normal">
                        Read real Google profile reviews from hosts and families who experienced Malabar Decorators’ catering and event decorations.
                    </p>
                </div>

                {/* Animated Trust Metrics Strip */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 mb-14">
                    {metrics.map((item, idx) => {
                        const IconComp = item.icon;
                        return (
                            <div
                                key={idx}
                                className="bg-white/90 rounded-[22px] p-4.5 sm:p-5 border border-[#EFE8D7] shadow-sm flex items-center gap-3.5 hover:shadow-md transition-all backdrop-blur-md hover:-translate-y-1"
                            >
                                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#6F1014] to-[#4E0A0D] border border-[#F2B93F]/50 flex items-center justify-center shrink-0 shadow-md text-[#F2B93F]">
                                    <IconComp className="w-5.5 h-5.5" />
                                </div>
                                <div>
                                    <span className="font-display font-bold text-base sm:text-lg text-[#171110] block leading-tight">
                                        {item.value}
                                    </span>
                                    <span className="text-[11px] text-[#171110]/70 font-medium">
                                        {item.label}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Google Styled Review Cards with Ultra Premium Corners */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((item, idx) => (
                        <div
                            key={idx}
                            className="group bg-white rounded-[26px] p-6 sm:p-7 border border-[#EFE8D7] hover:border-[#F2B93F] shadow-[0_10px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(111,16,20,0.14)] transition-all duration-500 flex flex-col justify-between relative overflow-hidden hover:-translate-y-2"
                        >
                            {/* Top Golden Border Accent */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F2B93F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="space-y-4 relative z-10">
                                {/* Header: Rating & Google Badge */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-1 text-[#F2B93F]">
                                        {[...Array(item.rating)].map((_, i) => (
                                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-1 bg-gray-50 border border-gray-200/80 px-2.5 py-1 rounded-full text-[10px] font-bold text-gray-700 shadow-2xs">
                                        <GoogleIcon />
                                        <span>Verified</span>
                                    </div>
                                </div>

                                {/* Date & Tag Pill */}
                                <div className="flex items-center justify-between text-[10px] text-[#171110]/60 font-medium">
                                    <span>{item.date}</span>
                                    <span className="font-bold text-[#6F1014] bg-[#6F1014]/10 px-2 py-0.5 rounded-md border border-[#6F1014]/20">
                                        {item.tag}
                                    </span>
                                </div>

                                {/* Review Quote */}
                                <p className="text-xs sm:text-sm text-[#171110]/85 font-normal leading-relaxed">
                                    "{item.comment}"
                                </p>
                            </div>

                            {/* Author Footer with Verified Badge */}
                            <div className="pt-4 mt-6 border-t border-[#F7F3EA] flex items-center gap-3 relative z-10">
                                <div className={`w-10 h-10 rounded-full ${item.avatarBg} text-[#F2B93F] flex items-center justify-center font-display font-bold text-sm shrink-0 border border-[#F2B93F]/50 shadow-md`}>
                                    {item.name.charAt(0)}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-display font-bold text-xs sm:text-sm text-[#171110] flex items-center gap-1 truncate">
                                        <span className="truncate">{item.name}</span>
                                        <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                                    </h4>
                                    <p className="text-[11px] text-[#171110]/65 font-medium truncate">
                                        {item.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
