"use client";

import Image from "next/image";
import { UtensilsCrossed, CalendarDays, Award, ShieldCheck, ArrowRight, BookOpen } from "lucide-react";

export default function Hero() {
    const strengths = [
        {
            icon: UtensilsCrossed,
            title: "AUTHENTIC TASTE",
            desc: "Traditional recipes made to perfection",
        },
        {
            icon: CalendarDays,
            title: "PERFECT FOR EVENTS",
            desc: "Weddings, parties, functions & more",
        },
        {
            icon: Award,
            title: "QUALITY INGREDIENTS",
            desc: "Fresh, hygienic & carefully selected",
        },
        {
            icon: ShieldCheck,
            title: "TRUSTED SERVICE",
            desc: "Delivered with care and professionalism",
        },
    ];

    return (
        <section id="hero" className="relative bg-[#171110] text-white pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-20">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <Image
                    src="/hero_biriyani.png"
                    alt="Malabar Decorators Kerala Dum Biriyani Feast Catering background"
                    fill
                    priority
                    className="object-cover object-right sm:object-center filter brightness-95 contrast-105"
                />

                {/* Clean Center-to-Right Fade Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#38070A] via-[#4E0A0D]/90 to-transparent w-full md:w-[70%] lg:w-[60%]" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#171110]/80 via-transparent to-[#171110]/95" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl pt-6 pb-8 space-y-6 text-left">
                    <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#8B1E23]/70 border border-[#F2B93F]/40 text-[#F2B93F] text-[11px] sm:text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-[#F2B93F] animate-pulse shrink-0" />
                        <span>Kannur's Premier Catering & Decor Specialists</span>
                    </div>

                    <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
                        Delicious Food & <br />
                        <span className="gold-gradient-text">Beautiful Decor</span> <br />
                        for Every Occasion
                    </h1>

                    {/* Gold Line Accent */}
                    <div className="flex items-center gap-3 py-1">
                        <div className="h-0.5 w-16 bg-gradient-to-r from-[#DFAE32] to-[#F2B93F]" />
                        <div className="w-2 h-2 rotate-45 bg-[#F2B93F]" />
                        <div className="h-0.5 w-12 bg-gradient-to-r from-[#F2B93F] to-transparent" />
                    </div>

                    <p className="text-sm sm:text-lg text-[#FAF8F2]/95 max-w-2xl font-normal leading-relaxed">
                        From authentic Malabar dum biriyani and lavish catering spreads to stunning Nikah, stage, and reception decorations — we make your precious moments truly unforgettable.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                        <a
                            href="#services"
                            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#DFAE32] to-[#F2B93F] text-[#38070A] font-bold text-sm tracking-wider uppercase shadow-xl hover:brightness-110 hover:shadow-2xl transition-all flex items-center justify-center gap-2 group"
                        >
                            <span>Explore Services</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href="#menu"
                            className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-[#F2B93F]/50 bg-[#6F1014]/60 hover:bg-[#8B1E23]/80 text-[#FAF8F2] font-semibold text-sm tracking-wider uppercase backdrop-blur-md transition-all flex items-center justify-center gap-2"
                        >
                            <BookOpen className="w-4 h-4 text-[#F2B93F]" />
                            <span>View Menu</span>
                        </a>
                    </div>

                    {/* Direct Phone Banner */}
                    <p className="text-xs text-[#F7D06E]/90 pt-1 font-medium">
                        📞 Direct Enquiry Hotline: <a href="tel:9946692100" className="underline font-bold hover:text-[#FAF8F2]">99466 92100</a> (Kannur, Kerala)
                    </p>
                </div>

                {/* 04 — HERO FEATURE CARD */}
                {/* Fully visible card container without negative margin clipping */}
                <div className="relative z-20 mt-8 sm:mt-12">
                    <div className="bg-gradient-to-r from-[#4E0A0D] via-[#6F1014] to-[#4E0A0D] border-2 border-[#DFAE32]/40 rounded-2xl shadow-2xl p-5 sm:p-8 backdrop-blur-lg">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                            {strengths.map((item, idx) => {
                                const IconComponent = item.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="flex items-start gap-3.5 p-4 sm:p-3 rounded-xl bg-[#38070A]/50 border border-[#7A1518]/60 lg:border-none lg:bg-transparent lg:p-0 transition-all hover:bg-[#38070A]/70"
                                    >
                                        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#8B1E23] to-[#4E0A0D] border border-[#F2B93F]/50 flex items-center justify-center shrink-0 shadow-md text-[#F2B93F]">
                                            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
                                        </div>
                                        <div>
                                            <h3 className="font-display font-bold text-sm sm:text-base text-white tracking-wider">
                                                {item.title}
                                            </h3>
                                            <p className="text-xs text-[#FAF8F2]/80 mt-0.5 font-normal leading-snug">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
