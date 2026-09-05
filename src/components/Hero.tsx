"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { UtensilsCrossed, CalendarDays, Award, ShieldCheck, ArrowRight, BookOpen } from "lucide-react";

const heroImages = [
    "/hero%20section/file_0000000021f881fab47cecc78e81a1e0.png",
    "/hero%20section/file_00000000dfd081fdb147914ac2fdda08.png",
    "/hero%20section/file_00000000e21081fa90d5aef131b4f9cb.png",
];

export default function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

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
        <section id="hero" className="relative bg-[#171110] text-white min-h-screen flex flex-col justify-center pt-20 sm:pt-24 pb-12 overflow-hidden">
            {/* Background Image Carousel Layer */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {heroImages.map((src, idx) => (
                    <div
                        key={src}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            idx === currentImageIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"
                        } transition-transform duration-[7000ms]`}
                    >
                        <Image
                            src={src}
                            alt={`Malabar Decorators Hero Image ${idx + 1}`}
                            fill
                            priority={idx === 0}
                            className="object-cover object-center filter brightness-90 contrast-105"
                        />
                    </div>
                ))}

                {/* Smooth Full-Width Dark Gradient Overlay - No abrupt cut-off line */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/15 w-full" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-transparent to-[#171110] w-full" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl pt-12 sm:pt-16 pb-4 space-y-6 text-left">
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
                            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#DFAE32] to-[#F2B93F] text-[#171110] font-bold text-sm tracking-wider uppercase shadow-xl hover:brightness-110 hover:shadow-2xl transition-all flex items-center justify-center gap-2 group"
                        >
                            <span>Explore Services</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href="#menu"
                            className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-[#F2B93F]/50 bg-[#6F1014]/80 hover:bg-[#8B1E23] text-[#FAF8F2] font-semibold text-sm tracking-wider uppercase backdrop-blur-md transition-all flex items-center justify-center gap-2"
                        >
                            <BookOpen className="w-4 h-4 text-[#F2B93F]" />
                            <span>View Menu</span>
                        </a>
                    </div>

                    {/* Carousel Slide Indicators */}
                    <div className="flex items-center gap-2 pt-2">
                        {heroImages.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentImageIndex(idx)}
                                className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                                    idx === currentImageIndex
                                        ? "w-8 bg-[#F2B93F]"
                                        : "w-2 bg-white/30 hover:bg-white/60"
                                }`}
                                aria-label={`Slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
