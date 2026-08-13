"use client";

import Image from "next/image";
import { MessageCircle, Heart, Share2, Sparkles, ExternalLink } from "lucide-react";

export default function SocialMedia() {
    const posts = [
        {
            title: "Grand Nikah Stage Design at Kannur",
            likes: "1.2k",
            comments: "84",
            image: "/nikah_stage.png",
            tag: "#MalabarDecorators",
        },
        {
            title: "Authentic Dum Biriyani Feast Catering",
            likes: "2.4k",
            comments: "142",
            image: "/hero_biriyani.png",
            tag: "#KeralaCatering",
        },
        {
            title: "Fairy Light Evening Reception Stage",
            likes: "1.8k",
            comments: "96",
            image: "/reception_decor.png",
            tag: "#WeddingDecor",
        },
        {
            title: "Live Porotta & Appam Station",
            likes: "3.1k",
            comments: "210",
            image: "/live_counter.png",
            tag: "#LiveCounter",
        },
        {
            title: "Vibrant Haldi & Mehendi Stage",
            likes: "1.5k",
            comments: "78",
            image: "/haldi_decor.png",
            tag: "#HaldiDecor",
        },
        {
            title: "Stage Entry Low Fog & Pyro SFX",
            likes: "2.9k",
            comments: "165",
            image: "/sfx_stage.png",
            tag: "#EventSFX",
        },
        {
            title: "Grand Banquet Catering Spread",
            likes: "2.1k",
            comments: "118",
            image: "/catering_spread.png",
            tag: "#MalabarFeast",
        },
    ];

    return (
        <section className="py-16 bg-[#FAF8F2] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10 pb-6 border-b border-[#EFE8D7]">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#6F1014]/10 border border-[#6F1014]/20 text-[#6F1014] text-xs font-bold tracking-widest uppercase">
                            Stay Connected
                        </div>
                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#241B18] mt-2">
                            Follow Us On Social Media
                        </h2>
                        <p className="text-xs sm:text-sm text-[#241B18]/75 mt-1">
                            Explore live setup highlights, behind-the-scenes event decor, and customer stories.
                        </p>
                    </div>

                    {/* Social Platform Badges */}
                    <div className="flex items-center gap-3">
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-bold text-xs shadow-md hover:brightness-110 transition-all"
                        >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                            <span>Instagram</span>
                        </a>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1877F2] text-white font-bold text-xs shadow-md hover:brightness-110 transition-all"
                        >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z" />
                            </svg>
                            <span>Facebook</span>
                        </a>
                        <a
                            href="https://wa.me/919946692100?text=Hi%20Malabar%20Decorators,%20I%20saw%20your%20website"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs shadow-md hover:brightness-110 transition-all"
                        >
                            <MessageCircle className="w-4 h-4 fill-current" />
                            <span>WhatsApp</span>
                        </a>
                    </div>
                </div>

                {/* Auto Scrolling Marquee Track (Without side fades) */}
                <div className="relative w-full overflow-hidden">
                    <div className="animate-marquee gap-6 py-4">
                        {[...posts, ...posts].map((post, idx) => (
                            <div
                                key={idx}
                                className="w-72 sm:w-80 bg-white rounded-2xl overflow-hidden border border-[#EFE8D7] shadow-md hover:shadow-2xl transition-all duration-300 group shrink-0"
                            >
                                <div className="relative h-56 bg-[#38070A] overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#171110]/90 via-transparent to-transparent opacity-80" />
                                    <span className="absolute top-3 left-3 bg-[#6F1014]/90 backdrop-blur-md text-[#F2B93F] text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-[#F2B93F]/30">
                                        {post.tag}
                                    </span>
                                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold">
                                        <div className="flex items-center gap-3">
                                            <span className="flex items-center gap-1">
                                                <Heart className="w-3.5 h-3.5 fill-[#8B1E23] text-[#8B1E23]" />
                                                {post.likes}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MessageCircle className="w-3.5 h-3.5" />
                                                {post.comments}
                                            </span>
                                        </div>
                                        <Share2 className="w-3.5 h-3.5 text-[#F2B93F]" />
                                    </div>
                                </div>
                                <div className="p-4">
                                    <p className="text-xs font-semibold text-[#241B18] line-clamp-2">
                                        {post.title}
                                    </p>
                                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#F7F3EA] text-[11px] text-[#6F1014] font-bold">
                                        <span>Malabar Decorators Official</span>
                                        <ExternalLink className="w-3 h-3" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
