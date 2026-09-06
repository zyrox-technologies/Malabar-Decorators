"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Layers } from "lucide-react";

export default function About() {
    const [activeIndex, setActiveIndex] = useState(0);

    const aboutImages = [
        {
            id: 0,
            src: "/about/file_0000000066c881faa5f56fe5bdde9048.png",
            title: "Malabar Event & Stage Setup",
            tag: "Stage Decor",
        },
        {
            id: 1,
            src: "/about/file_000000007b0c81fa8424c183306499a2.png",
            title: "Traditional Catering & Dining",
            tag: "Kerala Catering",
        },
        {
            id: 2,
            src: "/about/file_00000000f67c81fa893e6923aca91ef0.png",
            title: "Grand Celebration Experience",
            tag: "Event Management",
        },
    ];

    const highlights = [
        "Catering for all occasions & gathering sizes",
        "Customized stage & venue decor for every theme",
        "On-time venue delivery & seamless setup",
        "Experienced & dedicated professional team",
    ];

    return (
        <section id="about" className="py-20 sm:py-28 bg-[#FAF8F2] relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    
                    {/* Left Column - Headline & Description */}
                    <div className="lg:col-span-4 flex flex-col space-y-6">
                        <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#241B18]/60">
                            ABOUT MALABAR
                        </div>

                        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#241B18] leading-[1.1]">
                            Driven by<br />
                            People. Inspired<br />
                            by <span className="text-[#A2272E] font-bold">Celebrations.</span>
                        </h2>

                        <p className="text-sm text-[#241B18]/70 leading-relaxed font-light max-w-sm pt-2">
                            With a passion for perfection and an eye for detail, we design and execute events that reflect your story. From intimate gatherings to grand celebrations, Malabar is with you at every step.
                        </p>

                        <div className="pt-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#A2272E] text-white font-bold text-xs tracking-widest uppercase hover:bg-[#8B1E23] transition-colors"
                            >
                                Our Story
                                <ArrowRight className="w-4 h-4 text-white/70" />
                            </a>
                        </div>
                    </div>

                    {/* Middle Column - Image Collage */}
                    <div className="lg:col-span-5 relative h-[500px] sm:h-[600px] flex items-center justify-center">
                        {/* Main Top Right Image */}
                        <div className="absolute top-0 right-4 sm:right-10 w-[65%] h-[60%] rounded-sm overflow-hidden z-10 shadow-xl">
                            <Image
                                src={aboutImages[1].src}
                                alt="Catering"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Bottom Left Image */}
                        <div className="absolute bottom-0 left-0 w-[55%] h-[55%] rounded-sm overflow-hidden z-20 shadow-xl border-4 border-[#FAF8F2]">
                            <Image
                                src={aboutImages[0].src}
                                alt="Decor"
                                fill
                                className="object-cover"
                            />
                        </div>
                        
                        {/* Little red accent square (like in reference) */}
                        <div className="absolute top-0 right-4 sm:right-10 w-16 h-16 bg-[#A2272E] -translate-y-1/2 translate-x-1/4 z-0" />
                    </div>

                    {/* Right Column - Statistics */}
                    <div className="lg:col-span-3 flex flex-col justify-center pl-0 lg:pl-12 space-y-10 mt-12 lg:mt-0 border-l-0 lg:border-l border-[#241B18]/10">
                        <div>
                            <div className="text-6xl font-light font-display text-[#241B18] leading-none mb-2">10+</div>
                            <div className="text-sm font-medium text-[#241B18]/80 leading-tight">
                                Years of<br />
                                Creating Memories
                            </div>
                        </div>

                        <div className="space-y-4 text-xs font-medium text-[#241B18]/60 uppercase tracking-widest">
                            <div className="pb-2 border-b border-[#241B18]/10">Planning</div>
                            <div className="pb-2 border-b border-[#241B18]/10">Decorations</div>
                            <div className="pb-2 border-b border-[#241B18]/10">Catering</div>
                            <div className="pb-2 border-b border-[#241B18]/10">Entertainment</div>
                            <div className="text-[#A2272E]">Complete Event Solutions</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
