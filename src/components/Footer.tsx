"use client";

import { Phone, Mail, MapPin, MessageCircle, ArrowUp } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-[#38070A] text-[#FAF8F2] border-t border-[#7A1518] relative">
            {/* Top Gold Accent Bar */}
            <div className="h-1 w-full bg-gradient-to-r from-[#DFAE32] via-[#F2B93F] to-[#DFAE32]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
                    {/* Column 1: Logo & Short Description */}
                    <div className="lg:col-span-4 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#DFAE32] to-[#F2B93F] flex items-center justify-center text-[#38070A] font-display font-bold text-xl shadow-md border border-[#F7D06E]/40">
                                M
                            </div>
                            <div className="flex flex-col">
                                <span className="font-display font-bold text-xl tracking-wider text-white leading-none">
                                    MALABAR
                                </span>
                                <span className="text-[10px] tracking-[0.25em] text-[#F2B93F] uppercase font-medium mt-0.5">
                                    DECORATORS & CATERING
                                </span>
                            </div>
                        </div>

                        <p className="text-xs text-[#FAF8F2]/75 leading-relaxed font-normal">
                            Delicious food, beautiful decor and unforgettable moments — we make your occasions special. Kannur's most trusted wedding stage decor, Nikah styling, and authentic Malabar catering specialists.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3 pt-2">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-[#6F1014] border border-[#F2B93F]/40 flex items-center justify-center text-[#F2B93F] hover:bg-[#F2B93F] hover:text-[#38070A] transition-colors"
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
                                className="w-9 h-9 rounded-lg bg-[#6F1014] border border-[#F2B93F]/40 flex items-center justify-center text-[#F2B93F] hover:bg-[#F2B93F] hover:text-[#38070A] transition-colors"
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
                                className="w-9 h-9 rounded-lg bg-[#6F1014] border border-[#F2B93F]/40 flex items-center justify-center text-[#F2B93F] hover:bg-[#25D366] hover:text-white transition-colors"
                                aria-label="WhatsApp"
                            >
                                <MessageCircle className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="lg:col-span-2 space-y-4">
                        <h4 className="font-display font-bold text-sm text-[#F2B93F] tracking-wider uppercase border-b border-[#7A1518] pb-2">
                            Quick Links
                        </h4>
                        <ul className="space-y-2.5 text-xs text-[#FAF8F2]/80">
                            <li>
                                <a href="#hero" className="hover:text-[#F2B93F] transition-colors">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="hover:text-[#F2B93F] transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="hover:text-[#F2B93F] transition-colors">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#menu" className="hover:text-[#F2B93F] transition-colors">
                                    Menu
                                </a>
                            </li>
                            <li>
                                <a href="#catalogue" className="hover:text-[#F2B93F] transition-colors">
                                    Catalogue
                                </a>
                            </li>
                            <li>
                                <a href="#gallery" className="hover:text-[#F2B93F] transition-colors">
                                    Gallery
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-[#F2B93F] transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Our Services */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="font-display font-bold text-sm text-[#F2B93F] tracking-wider uppercase border-b border-[#7A1518] pb-2">
                            Our Services
                        </h4>
                        <ul className="space-y-2.5 text-xs text-[#FAF8F2]/80">
                            <li>Wedding & Reception Stage Decor</li>
                            <li>Nikah & Engagement Decor</li>
                            <li>Malabar Dum Biriyani & Catering</li>
                            <li>Haldi & Traditional Ceremony Decor</li>
                            <li>Live Food & Beverage Counters</li>
                            <li>SFX Low Fog & Cold Fire Pyrotechnics</li>
                            <li>Event Planning & Venue Support</li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="font-display font-bold text-sm text-[#F2B93F] tracking-wider uppercase border-b border-[#7A1518] pb-2">
                            Contact Us
                        </h4>
                        <div className="space-y-3 text-xs text-[#FAF8F2]/80">
                            <a
                                href="tel:9946692100"
                                className="flex items-center gap-2 hover:text-[#F2B93F] transition-colors font-semibold"
                            >
                                <Phone className="w-4 h-4 text-[#F2B93F]" />
                                <span>99466 92100</span>
                            </a>
                            <a
                                href="mailto:info@malabardecorators.com"
                                className="flex items-center gap-2 hover:text-[#F2B93F] transition-colors"
                            >
                                <Mail className="w-4 h-4 text-[#F2B93F]" />
                                <span>info@malabardecorators.com</span>
                            </a>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-[#F2B93F] shrink-0" />
                                <span>Kannur, Kerala</span>
                            </div>
                        </div>

                        <div className="pt-2">
                            <a
                                href="tel:9946692100"
                                className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#DFAE32] to-[#F2B93F] text-[#38070A] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow"
                            >
                                <span>Call Hotline</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright & Back to Top */}
                <div className="mt-12 pt-8 border-t border-[#7A1518] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF8F2]/60">
                    <p>© 2026 Malabar Decorators. All Rights Reserved.</p>
                    <div className="flex items-center gap-4">
                        <span>Kannur • Kerala • India</span>
                        <button
                            onClick={scrollToTop}
                            className="w-8 h-8 rounded-full bg-[#6F1014] border border-[#F2B93F]/40 flex items-center justify-center text-[#F2B93F] hover:bg-[#F2B93F] hover:text-[#38070A] transition-colors"
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
