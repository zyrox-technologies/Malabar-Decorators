"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle, ArrowUp } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-[#0E0A09] text-[#FAF8F2] border-t border-[#F2B93F]/25 relative overflow-hidden">
            {/* Top Gold Gradient Accent Strip */}
            <div className="h-1 w-full bg-gradient-to-r from-[#DFAE32] via-[#F2B93F] to-[#DFAE32]" />

            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[#6F1014]/15 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
                    {/* Column 1: Logo & Short Description */}
                    <div className="lg:col-span-4 space-y-5">
                        <a href="#hero" className="flex items-center gap-3 group my-auto">
                            <div className="relative w-11 h-11 shrink-0 flex items-center justify-center translate-y-0.5">
                                <Image
                                    src="/LOGO/logo.png"
                                    alt="Malabar Decorators Logo"
                                    width={44}
                                    height={44}
                                    className="object-contain group-hover:scale-105 transition-transform"
                                />
                            </div>
                            <div className="relative h-10 w-40 sm:w-48 shrink-0 flex items-center">
                                <Image
                                    src="/LOGO/name.png"
                                    alt="Malabar Decorators & Catering"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </a>

                        <p className="text-xs sm:text-sm text-[#FAF8F2]/75 leading-relaxed font-normal">
                            Delicious food, beautiful decor and unforgettable moments — we make your occasions special. Kannur's most trusted wedding stage decor, Nikah styling, and authentic Malabar catering specialists.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3 pt-2">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-[#171110] border border-[#F2B93F]/40 flex items-center justify-center text-[#F2B93F] hover:bg-[#F2B93F] hover:text-[#171110] transition-all duration-300 hover:scale-105 shadow-md"
                                aria-label="Instagram"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-[#171110] border border-[#F2B93F]/40 flex items-center justify-center text-[#F2B93F] hover:bg-[#F2B93F] hover:text-[#171110] transition-all duration-300 hover:scale-105 shadow-md"
                                aria-label="Facebook"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z" />
                                </svg>
                            </a>
                            <a
                                href="https://wa.me/919946692100"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-[#171110] border border-[#F2B93F]/40 flex items-center justify-center text-[#F2B93F] hover:bg-[#25D366] hover:text-white transition-all duration-300 hover:scale-105 shadow-md"
                                aria-label="WhatsApp"
                            >
                                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                                    <path d="M12.031 0C5.396 0 .013 5.385.013 12.02c0 2.12.553 4.19 1.606 6.014L.001 24l6.155-1.614c1.76.958 3.748 1.464 5.875 1.464 6.635 0 12.018-5.385 12.018-12.02C24.049 5.385 18.666 0 12.031 0zm0 22.003c-1.8 0-3.565-.484-5.105-1.4l-.366-.217-3.794.995 1.012-3.697-.238-.38C2.518 15.707 1.986 13.9 1.986 12.02c0-5.538 4.507-10.045 10.045-10.045 5.538 0 10.045 4.507 10.045 10.045 0 5.539-4.507 10.045-10.045 10.045zm5.504-7.518c-.302-.151-1.787-.882-2.063-.983-.276-.1-.477-.151-.678.151-.201.302-.78.983-.956 1.184-.176.201-.352.226-.654.075-1.688-.844-2.825-1.503-3.95-3.434-.297-.51.298-.473.854-1.587.099-.201.05-.377-.025-.528-.075-.151-.678-1.634-.929-2.238-.244-.588-.492-.508-.678-.518-.176-.008-.377-.01-.578-.01s-.528.075-.804.377c-.276.302-1.056 1.031-1.056 2.516s1.08 2.917 1.231 3.118c.151.201 2.126 3.246 5.151 4.553 1.838.793 2.56.87 3.487.732.563-.084 1.787-.73 2.039-1.433.252-.704.252-1.307.176-1.433-.075-.126-.276-.201-.578-.352z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="lg:col-span-2 space-y-4">
                        <h4 className="font-display font-bold text-sm text-[#F2B93F] tracking-wider uppercase border-b border-white/10 pb-2.5">
                            Quick Links
                        </h4>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-[#FAF8F2]/80 font-medium">
                            <li>
                                <Link href="/#hero" className="hover:text-[#F2B93F] transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/#about" className="hover:text-[#F2B93F] transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-[#F2B93F] transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/menu" className="hover:text-[#F2B93F] transition-colors">
                                    Menu
                                </Link>
                            </li>
                            <li>
                                <Link href="/catalogue" className="hover:text-[#F2B93F] transition-colors">
                                    Catalogue
                                </Link>
                            </li>
                            <li>
                                <Link href="/#gallery" className="hover:text-[#F2B93F] transition-colors">
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href="/#contact" className="hover:text-[#F2B93F] transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Our Services */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="font-display font-bold text-sm text-[#F2B93F] tracking-wider uppercase border-b border-white/10 pb-2.5">
                            Our Services
                        </h4>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-[#FAF8F2]/80 font-medium">
                            <li className="flex items-center gap-2">
                                <span>Wedding & Reception Stage Decor</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span>Nikah & Engagement Decor</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span>Malabar Dum Biriyani & Catering</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span>Haldi & Traditional Ceremony Decor</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span>Live Food & Beverage Counters</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span>SFX Low Fog & Cold Fire Pyrotechnics</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="font-display font-bold text-sm text-[#F2B93F] tracking-wider uppercase border-b border-white/10 pb-2.5">
                            Contact Us
                        </h4>
                        <div className="space-y-3.5 text-xs sm:text-sm text-[#FAF8F2]/85 font-medium">
                            <a
                                href="tel:9946692100"
                                className="flex items-center gap-2.5 hover:text-[#F2B93F] transition-colors font-semibold"
                            >
                                <div className="w-8 h-8 rounded-lg bg-[#6F1014] text-[#F2B93F] flex items-center justify-center shrink-0 border border-[#F2B93F]/40">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <span>99466 92100</span>
                            </a>
                            <a
                                href="mailto:info@malabardecorators.com"
                                className="flex items-center gap-2.5 hover:text-[#F2B93F] transition-colors"
                            >
                                <div className="w-8 h-8 rounded-lg bg-[#6F1014] text-[#F2B93F] flex items-center justify-center shrink-0 border border-[#F2B93F]/40">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <span>info@malabardecorators.com</span>
                            </a>
                            <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-lg bg-[#6F1014] text-[#F2B93F] flex items-center justify-center shrink-0 border border-[#F2B93F]/40">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <span>Kannur, Kerala</span>
                            </div>
                        </div>

                        <div className="pt-2">
                            <a
                                href="tel:9946692100"
                                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#DFAE32] to-[#F2B93F] text-[#171110] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:brightness-110 transition-all"
                            >
                                <span>Call Hotline</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright & Back to Top */}
                <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF8F2]/60">
                    <p>© 2026 Malabar Decorators. All Rights Reserved.</p>
                    <div className="flex items-center gap-4">
                        <span>Kannur • Kerala • India</span>
                        <button
                            onClick={scrollToTop}
                            className="w-9 h-9 rounded-full bg-[#6F1014] border border-[#F2B93F]/50 flex items-center justify-center text-[#F2B93F] hover:bg-[#F2B93F] hover:text-[#171110] transition-all duration-300 hover:scale-110 shadow-lg shadow-[#F2B93F]/20 cursor-pointer"
                            aria-label="Back to Top"
                        >
                            <ArrowUp className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
