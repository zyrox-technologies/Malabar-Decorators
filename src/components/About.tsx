"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, Sparkles, ArrowRight, Layers } from "lucide-react";

export default function About() {
    const [activeIndex, setActiveIndex] = useState(0);

    const aboutImages = [
        {
            id: 0,
            src: "/about/file_0000000066c881faa5f56fe5bdde9048.png",
            title: "Malabar Event & Stage Setup",
            tag: "✨ Stage Decor",
        },
        {
            id: 1,
            src: "/about/file_000000007b0c81fa8424c183306499a2.png",
            title: "Traditional Catering & Dining",
            tag: "🍛 Kerala Catering",
        },
        {
            id: 2,
            src: "/about/file_00000000f67c81fa893e6923aca91ef0.png",
            title: "Grand Celebration Experience",
            tag: "🌙 Event Management",
        },
    ];

    const highlights = [
        "Catering for all occasions & gathering sizes",
        "Customized stage & venue decor for every theme",
        "On-time venue delivery & seamless setup",
        "Experienced & dedicated professional team",
    ];

    return (
        <section id="about" className="pt-12 sm:pt-16 pb-12 sm:pb-16 bg-[#FAF8F2] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Column - Content */}
                    <div className="lg:col-span-6 space-y-6 order-1">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6F1014]/10 border border-[#6F1014]/20 text-[#6F1014] text-xs font-bold tracking-widest uppercase">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>About Malabar Decorators</span>
                        </div>

                        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                            <span className="dark-gradient-text">We Create,</span> <br />
                            <span className="maroon-gradient-text">You Celebrate</span>
                        </h2>

                        <p className="text-base text-[#241B18]/80 leading-relaxed font-normal">
                            At <strong className="text-[#6F1014]">Malabar Decorators</strong>, based in Kannur, Kerala, we believe every event is a masterpiece waiting to happen. We specialize in providing a complete seamless event experience by uniting <strong className="text-[#8B1E23]">Authentic Malabar Catering</strong> with <strong className="text-[#8B1E23]">Bespoke Event & Stage Decorations</strong>.
                        </p>

                        <p className="text-sm text-[#241B18]/75 leading-relaxed">
                            Whether it's a grand Nikah, wedding reception, traditional Hindu marriage mandap, Haldi ceremony, birthday party, or corporate inauguration — our expert team takes complete ownership of food quality, presentation, venue aesthetics, and prompt execution.
                        </p>

                        {/* Checklist */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            {highlights.map((item, index) => (
                                <div key={index} className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-5 h-5 text-[#8B1E23] shrink-0 mt-0.5" />
                                    <span className="text-xs sm:text-sm font-semibold text-[#241B18]">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Service Capabilities Pills */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            {[
                                "Premium Catering",
                                "Nikah Stage Decor",
                                "Reception Decor",
                                "Haldi & Mehendi",
                                "Live Food Counters",
                                "Event SFX Fog & Sparklers",
                            ].map((tag, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 rounded-full bg-white border border-[#6F1014]/20 text-[#6F1014] text-xs font-medium shadow-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="pt-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#6F1014] hover:bg-[#8B1E23] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-lg hover:shadow-xl group"
                            >
                                <span>More About Us & Book Event</span>
                                <ArrowRight className="w-4 h-4 text-[#F2B93F] group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Right Column - 3D Interactive Stacked Image Deck */}
                    <div className="lg:col-span-6 order-2 flex flex-col items-center justify-center">
                        <div className="relative w-full max-w-md h-[400px] sm:h-[460px] flex items-center justify-center">
                            {aboutImages.map((img, idx) => {
                                const offset = (idx - activeIndex + aboutImages.length) % aboutImages.length;

                                let styleClass = "";
                                if (offset === 0) {
                                    // Front Center Active Card
                                    styleClass = "z-30 scale-100 translate-x-0 translate-y-0 rotate-0 opacity-100 shadow-2xl border-4 border-[#F2B93F]";
                                } else if (offset === 1) {
                                    // Right Tilted Card
                                    styleClass = "z-20 scale-90 translate-x-12 sm:translate-x-20 translate-y-4 rotate-6 opacity-85 shadow-xl border-2 border-[#DFAE32]/60 hover:opacity-100 hover:scale-95";
                                } else {
                                    // Left Tilted Card (offset === 2)
                                    styleClass = "z-20 scale-90 -translate-x-12 sm:-translate-x-20 translate-y-4 -rotate-6 opacity-85 shadow-xl border-2 border-[#DFAE32]/60 hover:opacity-100 hover:scale-95";
                                }

                                return (
                                    <div
                                        key={img.id}
                                        onClick={() => setActiveIndex(idx)}
                                        className={`absolute w-64 sm:w-80 h-72 sm:h-96 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-out select-none bg-[#38070A] ${styleClass}`}
                                    >
                                        <Image
                                            src={img.src}
                                            alt={img.title}
                                            fill
                                            className="object-cover object-center"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                        {/* Card Tag & Title */}
                                        <div className="absolute bottom-4 left-4 right-4 text-white">
                                            <span className="inline-block px-2.5 py-1 rounded-md bg-[#6F1014]/80 border border-[#F2B93F]/50 text-[11px] font-bold text-[#F2B93F] tracking-wide mb-1 backdrop-blur-md">
                                                {img.tag}
                                            </span>
                                            <h4 className="font-display font-bold text-sm sm:text-base leading-tight text-white">
                                                {img.title}
                                            </h4>
                                        </div>

                                        {offset !== 0 && (
                                            <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors" />
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Interactive Hint & Controls */}
                        <div className="mt-6 flex flex-col items-center gap-2">
                            <div className="flex items-center gap-1.5 text-xs text-[#6F1014] font-semibold bg-[#6F1014]/10 px-3 py-1 rounded-full border border-[#6F1014]/20">
                                <Layers className="w-3.5 h-3.5 text-[#8B1E23]" />
                                <span>Click any background card to bring it to front</span>
                            </div>

                            {/* Dot Indicators */}
                            <div className="flex items-center gap-2 pt-1">
                                {aboutImages.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveIndex(i)}
                                        className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                                            i === activeIndex
                                                ? "w-7 bg-[#6F1014]"
                                                : "w-2.5 bg-[#6F1014]/30 hover:bg-[#6F1014]/60"
                                        }`}
                                        aria-label={`Select image ${i + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
