"use client";

import Image from "next/image";
import { CheckCircle2, Award, HeartHandshake, Utensils, Sparkles, ArrowRight } from "lucide-react";

export default function About() {
    const highlights = [
        "Catering for all occasions & gathering sizes",
        "Customized stage & venue decor for every theme",
        "On-time venue delivery & seamless setup",
        "Experienced & dedicated professional team",
    ];

    return (
        <section id="about" className="pt-24 sm:pt-32 pb-16 bg-[#FAF8F2] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left Collage Grid */}
                    <div className="lg:col-span-6 relative">
                        <div className="grid grid-cols-2 gap-4 relative z-10">
                            {/* Photo 1: Nikah Stage */}
                            <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-[#DFAE32]/30 group">
                                <Image
                                    src="/nikah_stage.png"
                                    alt="Malabar Decorators Nikah Stage Decoration"
                                    width={300}
                                    height={360}
                                    className="w-full h-52 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#38070A]/80 via-transparent to-transparent opacity-80" />
                                <span className="absolute bottom-3 left-3 text-xs font-semibold text-[#F2B93F] tracking-wide">
                                    ✨ Stage Decor
                                </span>
                            </div>

                            {/* Photo 2: Catering Dum Biriyani */}
                            <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-[#DFAE32]/30 group mt-6 sm:mt-8">
                                <Image
                                    src="/catering_spread.png"
                                    alt="Malabar Decorators Catering Spread"
                                    width={300}
                                    height={360}
                                    className="w-full h-52 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#38070A]/80 via-transparent to-transparent opacity-80" />
                                <span className="absolute bottom-3 left-3 text-xs font-semibold text-[#F2B93F] tracking-wide">
                                    🍛 Kerala Catering
                                </span>
                            </div>

                            {/* Photo 3: Reception Decor */}
                            <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-[#DFAE32]/30 group -mt-6 sm:-mt-8">
                                <Image
                                    src="/reception_decor.png"
                                    alt="Malabar Reception Venue Decor"
                                    width={300}
                                    height={360}
                                    className="w-full h-52 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#38070A]/80 via-transparent to-transparent opacity-80" />
                                <span className="absolute bottom-3 left-3 text-xs font-semibold text-[#F2B93F] tracking-wide">
                                    🌙 Outdoor Reception
                                </span>
                            </div>

                            {/* Photo 4: Live Counter */}
                            <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-[#DFAE32]/30 group">
                                <Image
                                    src="/live_counter.png"
                                    alt="Malabar Live Porotta & Appam Counter"
                                    width={300}
                                    height={360}
                                    className="w-full h-52 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#38070A]/80 via-transparent to-transparent opacity-80" />
                                <span className="absolute bottom-3 left-3 text-xs font-semibold text-[#F2B93F] tracking-wide">
                                    🍳 Live Counters
                                </span>
                            </div>
                        </div>

                        {/* Central Badge Overlay */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-[#6F1014] border-2 border-[#F2B93F] text-white p-2.5 sm:p-4 rounded-xl sm:rounded-2xl shadow-2xl text-center flex flex-col items-center justify-center scale-90 sm:scale-100 backdrop-blur-md">
                            <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-[#F2B93F] mx-auto mb-0.5 sm:mb-1" />
                            <p className="font-display font-bold text-sm sm:text-lg text-[#F2B93F] leading-tight">10+ Years</p>
                            <p className="text-[9px] sm:text-[11px] text-[#FAF8F2] tracking-wider uppercase font-medium whitespace-nowrap">
                                Excellence in Kerala
                            </p>
                        </div>
                    </div>

                    {/* Right Text Column */}
                    <div className="lg:col-span-6 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#6F1014]/10 border border-[#6F1014]/20 text-[#6F1014] text-xs font-bold tracking-widest uppercase">
                            About Malabar Decorators
                        </div>

                        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241B18] leading-tight">
                            We Create, <br />
                            <span className="text-[#6F1014]">You Celebrate</span>
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
                                    className="px-3 py-1 rounded-full bg-[#F7F3EA] border border-[#6F1014]/20 text-[#6F1014] text-xs font-medium"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="pt-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#6F1014] hover:bg-[#8B1E23] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-lg hover:shadow-xl"
                            >
                                <span>More About Us & Book Event</span>
                                <ArrowRight className="w-4 h-4 text-[#F2B93F]" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
