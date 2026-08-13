"use client";

import { Star, Quote, Sparkles, CheckCircle } from "lucide-react";

export default function Reviews() {
    const testimonials = [
        {
            name: "Dr. Mohammed Shafi",
            role: "Nikah Wedding Host (Kannur)",
            rating: 5,
            comment:
                "Excellent food, beautiful presentation and very professional service! The Malabar Dum Biriyani and live appam counter were a massive hit among all our 800+ guests. The stage decor exceeded our expectations.",
            tag: "Wedding & Catering",
        },
        {
            name: "Anjali & Rahul Nair",
            role: "Reception Ceremony (Thalassery)",
            rating: 5,
            comment:
                "Malabar Decorators handled both our evening outdoor reception decoration and full dinner catering seamlessly. The fairy light canopy and floral entrance gate looked magical in photos!",
            tag: "Outdoor Reception",
        },
        {
            name: "Firoz Khan",
            role: "Family Function & Haldi Event",
            rating: 5,
            comment:
                "On-time delivery, traditional aesthetic, and extremely courteous staff. The Haldi stage setup with marigold flowers and traditional brass lamps was stunning.",
            tag: "Haldi & Stage Decor",
        },
        {
            name: "Suresh K. V.",
            role: "House Warming & Banquet",
            rating: 5,
            comment:
                "Top-notch catering quality in Kannur! The Ghee Rice, Chicken Varattiyath, and Ada Pradhaman payasam were praised by everyone. Highly recommended for any event.",
            tag: "Catering & Banquet",
        },
    ];

    return (
        <section className="py-20 bg-[#F7F3EA] border-b border-[#EFE8D7]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto space-y-3">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6F1014]/10 border border-[#6F1014]/20 text-[#6F1014] text-xs font-bold tracking-widest uppercase">
                        Client Testimonials
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#241B18]">
                        Trusted By Families Across Kerala
                    </h2>
                    <div className="flex items-center justify-center gap-3">
                        <div className="h-0.5 w-12 bg-[#8B1E23]" />
                        <div className="w-2 h-2 rotate-45 bg-[#DFAE32]" />
                        <div className="h-0.5 w-12 bg-[#8B1E23]" />
                    </div>
                    <p className="text-sm text-[#241B18]/75">
                        Read real feedback from families and event hosts who trusted Malabar Decorators for their special occasions.
                    </p>
                </div>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    {testimonials.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl p-6 border border-[#EFE8D7] shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
                        >
                            <div className="space-y-4">
                                {/* Header Rating */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-1 text-[#F2B93F]">
                                        {[...Array(item.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-current" />
                                        ))}
                                    </div>
                                    <span className="text-[10px] font-bold text-[#6F1014] bg-[#6F1014]/10 px-2 py-0.5 rounded-full border border-[#6F1014]/20">
                                        {item.tag}
                                    </span>
                                </div>

                                {/* Quote Icon */}
                                <Quote className="w-8 h-8 text-[#8B1E23]/20" />

                                {/* Review Text */}
                                <p className="text-xs sm:text-sm text-[#241B18]/85 font-normal leading-relaxed italic">
                                    "{item.comment}"
                                </p>
                            </div>

                            {/* Author Footer */}
                            <div className="pt-4 mt-4 border-t border-[#F7F3EA] flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-[#6F1014] text-[#F2B93F] flex items-center justify-center font-display font-bold text-sm shrink-0 border border-[#F2B93F]/40">
                                    {item.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-display font-bold text-xs text-[#241B18] flex items-center gap-1">
                                        <span>{item.name}</span>
                                        <CheckCircle className="w-3 h-3 text-[#25D366]" />
                                    </h4>
                                    <p className="text-[11px] text-[#241B18]/65 font-medium">
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
