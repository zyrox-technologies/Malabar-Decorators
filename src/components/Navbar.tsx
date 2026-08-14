"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X, Calendar, Sparkles, MessageCircle } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#hero" },
        { name: "About Us", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Menu", href: "#menu" },
        { name: "Catalogue", href: "#catalogue" },
        { name: "Gallery", href: "#gallery" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full pt-2 sm:pt-3 px-3 sm:px-6 transition-all duration-300">
            {/* Floating Container */}
            <div className="max-w-7xl mx-auto shadow-2xl rounded-2xl overflow-hidden border border-[#7A1518]/80 bg-[#4E0A0D]/95 backdrop-blur-md">
                {/* Top Utility Strip */}
                <div className="hidden sm:flex bg-[#38070A] text-[#F7F3EA] text-xs py-1.5 px-4 border-b border-[#7A1518]/60 sm:flex-row justify-between items-center gap-2">
                    <div className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#F2B93F]" />
                        <span className="font-medium tracking-wide">
                            Taste the Tradition, Celebrate with Malabar Decorators
                        </span>
                    </div>
                    <div className="flex items-center gap-4 text-[#F7D06E]">
                        <span className="hidden md:inline text-xs opacity-90">
                            📍 Kannur, Kerala
                        </span>
                        <a
                            href="tel:9946692100"
                            className="flex items-center gap-1.5 font-semibold hover:text-white transition-colors"
                        >
                            <Phone className="w-3.5 h-3.5" />
                            <span>99466 92100</span>
                        </a>
                        <a
                            href="https://wa.me/919946692100?text=Hi%20Malabar%20Decorators,%20I%20would%20like%20to%20enquire%20about%20your%20services"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 bg-[#25D366] text-white px-2.5 py-0.5 rounded-full text-[11px] font-bold hover:bg-[#20ba59] transition-colors"
                        >
                            <MessageCircle className="w-3 h-3 fill-current" />
                            <span>WhatsApp</span>
                        </a>
                    </div>
                </div>

                {/* Main Floating Navigation Bar */}
                <nav
                    className={`transition-all duration-300 px-4 sm:px-6 ${scrolled ? "bg-[#6F1014]/95 py-2.5" : "bg-[#6F1014] py-3.5"
                        }`}
                >
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <a href="#hero" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#DFAE32] to-[#F2B93F] flex items-center justify-center text-[#4E0A0D] font-display font-bold text-xl shadow-md border border-[#F7D06E]/40 group-hover:scale-105 transition-transform">
                                M
                            </div>
                            <div className="flex flex-col">
                                <span className="font-display font-bold text-xl tracking-wider text-white leading-none">
                                    MALABAR
                                </span>
                                <span className="text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.25em] text-[#F2B93F] uppercase font-medium mt-0.5 whitespace-nowrap">
                                    DECORATORS & CATERING
                                </span>
                            </div>
                        </a>

                        {/* Navigation Links */}
                        <div className="hidden lg:flex items-center gap-7">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-[#F7F3EA] hover:text-[#F2B93F] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#F2B93F] hover:after:w-full after:transition-all"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="hidden sm:flex items-center gap-3">
                            <a
                                href="tel:9946692100"
                                className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-[#F2B93F]/40 text-[#F2B93F] hover:bg-[#F2B93F]/10 text-xs font-semibold tracking-wide transition-all"
                            >
                                <Phone className="w-3.5 h-3.5" />
                                <span>99466 92100</span>
                            </a>
                            <a
                                href="#contact"
                                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#DFAE32] to-[#F2B93F] text-[#38070A] font-semibold text-xs tracking-wider uppercase shadow-md hover:shadow-lg hover:brightness-110 active:scale-95 transition-all"
                            >
                                <Calendar className="w-3.5 h-3.5" />
                                <span>Enquire Now</span>
                            </a>
                        </div>

                        {/* Mobile Hamburger */}
                        <div className="flex lg:hidden items-center gap-2">
                            <a
                                href="tel:9946692100"
                                className="sm:hidden p-2 rounded-lg bg-[#F2B93F] text-[#4E0A0D]"
                                aria-label="Call Us"
                            >
                                <Phone className="w-4 h-4" />
                            </a>
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="p-2 rounded-lg border border-[#F2B93F]/30 text-white hover:bg-[#7A1518] focus:outline-none"
                                aria-label="Toggle Menu"
                            >
                                {mobileMenuOpen ? (
                                    <X className="w-6 h-6 text-[#F2B93F]" />
                                ) : (
                                    <Menu className="w-6 h-6 text-[#F2B93F]" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Dropdown */}
                    {mobileMenuOpen && (
                        <div className="lg:hidden bg-[#4E0A0D] border-t border-[#7A1518] mt-3 px-4 pt-3 pb-6 space-y-3 rounded-b-2xl animate-in slide-in-from-top duration-200 max-h-[75vh] overflow-y-auto no-scrollbar">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block text-base font-medium text-[#F7F3EA] hover:text-[#F2B93F] py-2 border-b border-[#7A1518]/50"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-2 flex flex-col gap-2.5">
                                <a
                                    href="#contact"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-[#DFAE32] to-[#F2B93F] text-[#38070A] font-bold text-sm tracking-wider uppercase"
                                >
                                    Book Now / Enquire
                                </a>
                                <a
                                    href="https://wa.me/919946692100?text=Hi%20Malabar%20Decorators,%20I%20would%20like%20to%20enquire%20about%20your%20services"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full text-center py-2.5 rounded-xl bg-[#25D366] text-white font-semibold text-sm flex items-center justify-center gap-2"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    <span>Chat on WhatsApp (99466 92100)</span>
                                </a>
                            </div>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
}
