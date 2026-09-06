"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";

export default function MomentsInMotion() {
    const videos = [
        {
            title: "Grand Wedding Setup",
            duration: "3:45",
            thumbnail: "/about/file_0000000066c881faa5f56fe5bdde9048.png",
        },
        {
            title: "Stage Decoration",
            duration: "2:30",
            thumbnail: "/service/file_0000000074e881fa996b7468b88652b4.png",
        },
        {
            title: "Catering Experience",
            duration: "1:15",
            thumbnail: "/service/file_000000003f2081faa2f8fe4fef914b6c.png",
        },
        {
            title: "Celebration Highlights",
            duration: "4:20",
            thumbnail: "/service/file_000000009420820b9bff46071f57ae0d.png",
        },
        {
            title: "Event SFX & Pyrotechnics",
            duration: "0:45",
            thumbnail: "/service/file_00000000b464820b963a97bd17a2c97d.png",
        },
    ];

    return (
        <section className="py-24 bg-[#FAF8F2] relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
                
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row items-end justify-between gap-6 mb-10">
                    <div>
                        <h2 className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#241B18]/70 mb-2">
                            MOMENTS IN MOTION
                        </h2>
                        <p className="text-sm text-[#241B18]/80 font-bold font-display">
                            A glimpse into the experiences we create.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="w-10 h-10 rounded-full border border-[#241B18]/20 flex items-center justify-center hover:bg-[#241B18]/5 transition-colors">
                            <ArrowLeft className="w-4 h-4 text-[#241B18]" />
                        </button>
                        <button className="w-10 h-10 rounded-full border border-[#241B18]/20 flex items-center justify-center hover:bg-[#241B18]/5 transition-colors">
                            <ArrowRight className="w-4 h-4 text-[#241B18]" />
                        </button>
                    </div>
                </div>

                {/* Horizontal Video Strip */}
                <div className="flex overflow-x-auto no-scrollbar gap-5 pb-8 snap-x">
                    {videos.map((video, idx) => (
                        <div key={idx} className="group w-[320px] shrink-0 snap-start flex flex-col gap-3 cursor-pointer">
                            <div className="relative w-full h-[180px] rounded-sm overflow-hidden bg-gray-200">
                                <Image
                                    src={video.thumbnail}
                                    alt={video.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.8]"
                                />
                                
                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full border border-white/50 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all">
                                        <Play className="w-4 h-4 text-white ml-1 fill-white" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-1">
                                <h3 className="text-xs font-bold tracking-[0.05em] text-[#241B18]">
                                    {video.title}
                                </h3>
                                <span className="text-[10px] text-[#241B18]/60 font-medium tracking-wider">
                                    {video.duration}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
