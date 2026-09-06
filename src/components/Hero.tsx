"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { UtensilsCrossed, PartyPopper, Sparkles } from "lucide-react";

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

    return (
        <section id="hero" className="relative bg-[#171110] text-white min-h-screen flex flex-col justify-end pb-8 overflow-hidden">
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
                            className="object-cover object-center filter brightness-[0.65] contrast-105"
                        />
                    </div>
                ))}

                {/* Dark Gradients for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent w-full" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#171110]/90 w-full" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pb-6 pt-32 flex flex-col justify-end min-h-screen">
                <div className="flex flex-col md:flex-row md:items-end justify-between w-full flex-1 pb-16">
                    <div className="max-w-2xl space-y-6 text-left">
                        <div className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-white/70">
                            Events that stay with you
                        </div>

                        <h1 className="font-display text-5xl sm:text-[5.5rem] lg:text-[6.5rem] font-medium tracking-tight text-white leading-[1.05]">
                            More than <br />
                            Events. <br />
                            Lifelong <span className="text-[#E85D38] font-bold">Memories.</span>
                        </h1>

                        <p className="text-sm sm:text-base text-white/90 max-w-md font-light leading-relaxed pt-2">
                            At Malabar, we bring people, places and possibilities
                            together to create unforgettable experiences.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
                            <a
                                href="#contact"
                                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#A2272E] text-white font-bold text-xs tracking-widest uppercase hover:bg-[#8B1E23] transition-all flex items-center justify-center gap-3"
                            >
                                Plan Your Event
                                <span className="text-white/70">→</span>
                            </a>

                            <button className="flex items-center gap-3 group text-white hover:text-white/80 transition-colors">
                                <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white transition-colors">
                                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white ml-0.5">
                                        <path d="M8 5v14l11-7z" fill="currentColor" />
                                    </svg>
                                </div>
                                <span className="text-[11px] font-bold tracking-widest uppercase">Watch Video</span>
                            </button>
                        </div>
                    </div>

                    {/* Right side cursive text */}
                    <div className="hidden md:block text-right pb-4">
                         <div className="font-display font-bold text-3xl lg:text-4xl text-white/90 leading-tight mr-4">
                            People<br/>
                            Places<br/>
                            Possibilities
                         </div>
                    </div>
                </div>

                {/* Bottom Service Indicators */}
                <div className="mt-8 pt-6 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {/* Item 1 */}
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg border border-white/20 bg-white/5 flex items-center justify-center backdrop-blur-sm">
                            <Sparkles className="w-5 h-5 text-white/80" />
                        </div>
                        <div>
                            <div className="text-[13px] font-bold text-white tracking-wide">Weddings</div>
                            <div className="text-[10px] text-white/50 tracking-wider">Events to Notify</div>
                        </div>
                    </div>
                    {/* Item 2 */}
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg border border-white/20 bg-white/5 flex items-center justify-center backdrop-blur-sm">
                            <UtensilsCrossed className="w-5 h-5 text-white/80" />
                        </div>
                        <div>
                            <div className="text-[13px] font-bold text-white tracking-wide">Catering</div>
                            <div className="text-[10px] text-white/50 tracking-wider">Flavours that talk</div>
                        </div>
                    </div>
                    {/* Item 3 */}
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg border border-white/20 bg-white/5 flex items-center justify-center backdrop-blur-sm">
                            <Sparkles className="w-5 h-5 text-white/80" />
                        </div>
                        <div>
                            <div className="text-[13px] font-bold text-white tracking-wide">Decorations</div>
                            <div className="text-[10px] text-white/50 tracking-wider">Spaces that inspire</div>
                        </div>
                    </div>
                    {/* Item 4 */}
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg border border-white/20 bg-white/5 flex items-center justify-center backdrop-blur-sm">
                            <PartyPopper className="w-5 h-5 text-white/80" />
                        </div>
                        <div>
                            <div className="text-[13px] font-bold text-white tracking-wide">Celebrations</div>
                            <div className="text-[10px] text-white/50 tracking-wider">Moments for every milestone</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
