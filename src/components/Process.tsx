"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function Process() {
    const steps = [
        {
            num: "01",
            title: "Discover",
            desc: "We begin by understanding your vision, preferences, and requirements for the event.",
        },
        {
            num: "02",
            title: "Design",
            desc: "Our team crafts a bespoke design proposal including decor concepts and catering menus.",
        },
        {
            num: "03",
            title: "Refine",
            desc: "We collaborate with you to tweak the details until the plan perfectly matches your expectations.",
        },
        {
            num: "04",
            title: "Execute",
            desc: "On the big day, we handle everything flawlessly so you can focus on celebrating.",
        },
    ];

    return (
        <section className="py-24 bg-[#171110] relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Left Column */}
                    <div className="lg:w-1/3 shrink-0">
                        <Reveal>
                            <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/50 mb-6">
                                HOW IT WORKS
                            </div>
                        </Reveal>
                        <Reveal delay={0.08}>
                            <h2 className="font-display text-4xl sm:text-5xl font-medium text-white leading-[1.1] mb-6 tracking-tight">
                                Seamless Planning.<br />
                                <span className="font-bold text-[#A2272E]">Flawless Execution.</span>
                            </h2>
                        </Reveal>
                        <Reveal delay={0.14}>
                            <p className="text-sm text-white/70 font-light leading-relaxed mb-8">
                                We bring a structured, stress-free approach to event management, ensuring your vision is realized down to the last detail.
                            </p>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#A2272E] text-white font-bold text-xs tracking-widest uppercase hover:bg-[#8B1E23] transition-colors"
                            >
                                Plan Your Event
                                <ArrowRight className="w-4 h-4 text-white/70" />
                            </a>
                        </Reveal>
                    </div>

                    {/* Right Column - Steps */}
                    <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
                        {steps.map((step, idx) => (
                            <Reveal key={idx} delay={idx * 0.1} from="up">
                                <motion.div
                                    className="relative group"
                                    whileHover={{ x: 4 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                >
                                    <div className="text-6xl font-display font-light text-white/10 group-hover:text-[#A2272E]/20 transition-colors mb-4 leading-none">
                                        {step.num}
                                    </div>
                                    <h3 className="text-xl font-medium text-white mb-3 font-display tracking-wide">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-white/60 font-light leading-relaxed">
                                        {step.desc}
                                    </p>
                                </motion.div>
                            </Reveal>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
