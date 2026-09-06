"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Services() {

    const services = [
        {
            title: "WEDDINGS &\nRECEPTIONS",
            image: "/service/file_00000000031081fa834f12ca0ea5b50d.png",
        },
        {
            title: "STAGE\nDECORATIONS",
            image: "/service/file_0000000074e881fa996b7468b88652b4.png",
        },
        {
            title: "CATERING\nEXPERIENCES",
            image: "/service/file_000000003f2081faa2f8fe4fef914b6c.png",
        },
        {
            title: "CELEBRATIONS &\nPRIVATE EVENTS",
            image: "/service/file_000000009420820b9bff46071f57ae0d.png",
        },
        {
            title: "CORPORATE\nEVENTS",
            image: "/service/file_00000000b464820b963a97bd17a2c97d.png",
        },
    ];

    return (
        <section id="services" className="py-20 bg-[#FAF8F2] relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
                    <h2 className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#241B18]/70">
                        EXPLORE OUR EXPERIENCES
                    </h2>
                    <Link
                        href="/services"
                        className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#A2272E] hover:text-[#8B1E23] flex items-center gap-2 transition-colors"
                    >
                        VIEW ALL SERVICES 
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Horizontal Scrolling/Grid Cards */}
                <div className="flex overflow-x-auto no-scrollbar gap-5 snap-x pb-4">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group w-[280px] shrink-0 snap-start flex flex-col gap-4 cursor-pointer"
                        >
                            <div className="relative w-full h-[180px] rounded-sm overflow-hidden bg-gray-200">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                            </div>
                            
                            <div className="flex items-center justify-between">
                                <h3 className="text-xs font-bold tracking-[0.1em] text-[#241B18] leading-tight whitespace-pre-line">
                                    {service.title}
                                </h3>
                                <div className="w-8 h-8 rounded-full border border-[#241B18]/20 flex items-center justify-center group-hover:border-[#A2272E] group-hover:text-[#A2272E] transition-colors shrink-0">
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
