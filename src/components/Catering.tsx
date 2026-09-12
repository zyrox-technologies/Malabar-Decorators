"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { useParallax } from "@/hooks/useScrollAnimation";

export default function Catering() {
    const cuisineTypes = [
        { name: "TRADITIONAL\nKERALA" },
        { name: "NORTH INDIAN" },
        { name: "SOUTH INDIAN" },
        { name: "CONTINENTAL" },
        { name: "LIVE COUNTERS" },
        { name: "CUSTOM MENUS" },
    ];

    const { ref: imgRef, y } = useParallax(0.1);

    return (
        <section className="py-20 bg-[#171110] relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-8">

                {/* Top Text Content */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 relative z-10 mb-8">
                    <div className="max-w-2xl space-y-6">
                        <Reveal>
                            <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/50">
                                SIGNATURE CATERING
                            </div>
                        </Reveal>
                        <Reveal delay={0.08}>
                            <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-medium text-white leading-[1.1]">
                                A Celebration <br />
                                deserves a <br />
                                <span className="font-bold">Beautiful Table.</span>
                            </h2>
                        </Reveal>
                        <Reveal delay={0.16}>
                            <p className="text-sm text-white/70 max-w-sm font-light pt-2">
                                Our culinary experts bring together traditional flavours and global cuisine, crafted for gatherings of every scale.
                            </p>
                        </Reveal>
                        <Reveal delay={0.22}>
                            <div className="pt-2">
                                <a
                                    href="#menu"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#A2272E] text-white font-bold text-xs tracking-widest uppercase hover:bg-[#8B1E23] transition-colors"
                                >
                                    Explore Our Menu
                                    <ArrowRight className="w-4 h-4 text-white/70" />
                                </a>
                            </div>
                        </Reveal>
                    </div>

                    {/* Rotating circular badge */}
                    <Reveal from="right" delay={0.1} className="hidden lg:block">
                        <motion.div
                            className="shrink-0 w-32 h-32 rounded-full border border-white/20 flex items-center justify-center mt-4"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <div className="text-center">
                                <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/80 w-24 leading-relaxed">
                                    GOOD FOOD<br />BRINGS PEOPLE<br />TOGETHER
                                </div>
                            </div>
                        </motion.div>
                    </Reveal>
                </div>

                {/* Main Large Image with parallax */}
                <Reveal delay={0.1}>
                    <div className="relative w-full h-[300px] sm:h-[450px] lg:h-[500px] mt-8 rounded-sm overflow-hidden z-0 shadow-2xl">
                        <motion.div
                            ref={imgRef as React.RefObject<HTMLDivElement>}
                            className="absolute inset-0"
                            style={{ y }}
                        >
                            <Image
                                src="/images/about/file_000000007b0c81fa8424c183306499a2.png"
                                alt="Signature Catering"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px"
                                className="object-cover filter brightness-90"
                            />
                        </motion.div>
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#171110] to-transparent" />
                    </div>
                </Reveal>

                {/* Bottom Cuisine Categories */}
                <div className="mt-8 border-t border-white/10 pt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                    {cuisineTypes.map((item, idx) => (
                        <Reveal key={idx} delay={idx * 0.07} from="up">
                            <div className="flex flex-col items-center justify-center gap-4 text-center">
                                <motion.div
                                    className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center"
                                    whileHover={{ scale: 1.1, borderColor: "rgba(162,39,46,0.7)" }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white/70">
                                        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </motion.div>
                                <span className="text-[10px] font-bold tracking-[0.15em] text-white/80 whitespace-pre-line leading-relaxed">{item.name}</span>
                            </div>
                        </Reveal>
                    ))}
                </div>

            </div>
        </section>
    );
}
