"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Menu, X, Calendar, MessageCircle } from "lucide-react";

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
        <header className="fixed top-0 left-0 right-0 z-50 w-full pt-3 sm:pt-4 px-3 sm:px-6 transition-all duration-300">
            {/* Floating Luxury Glass Navbar */}
            <div
                className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 border ${
                    scrolled
                        ? "bg-white border-gray-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.12)] py-2.5"
                        : "bg-white/95 backdrop-blur-xl border-gray-200/70 shadow-lg py-3"
                }`}
            >
                <nav className="px-4 sm:px-6">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
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
                            <div className="relative h-9.5 sm:h-10 w-38 sm:w-44 shrink-0 flex items-center">
                                <Image
                                    src="/LOGO/name.png"
                                    alt="Malabar Decorators & Catering"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </a>

                        {/* Navigation Links */}
                        <div className="hidden lg:flex items-center gap-7">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-semibold text-[#171110] hover:text-[#6F1014] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#6F1014] hover:after:w-full after:transition-all"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="hidden sm:flex items-center gap-3">
                            <a
                                href="tel:9946692100"
                                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#6F1014]/30 text-[#6F1014] hover:bg-[#6F1014]/10 hover:border-[#6F1014] text-xs font-bold tracking-wide transition-all"
                            >
                                <Phone className="w-3.5 h-3.5 text-[#6F1014]" />
                                <span>99466 92100</span>
                            </a>
                            <a
                                href="#contact"
                                className="flex items-center gap-2 px-4.5 py-2 rounded-xl bg-gradient-to-r from-[#DFAE32] to-[#F2B93F] text-[#171110] font-bold text-xs tracking-wider uppercase shadow-md hover:brightness-110 active:scale-95 transition-all"
                            >
                                <Calendar className="w-3.5 h-3.5 text-[#171110]" />
                                <span>Enquire Now</span>
                            </a>
                        </div>

                        {/* Mobile Hamburger */}
                        <div className="flex lg:hidden items-center gap-2">
                            <a
                                href="tel:9946692100"
                                className="sm:hidden p-2 rounded-lg bg-[#6F1014] text-white"
                                aria-label="Call Us"
                            >
                                <Phone className="w-4 h-4" />
                            </a>
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="p-2 rounded-lg border border-gray-200 text-[#171110] hover:bg-gray-100 focus:outline-none"
                                aria-label="Toggle Menu"
                            >
                                {mobileMenuOpen ? (
                                    <X className="w-6 h-6 text-[#6F1014]" />
                                ) : (
                                    <Menu className="w-6 h-6 text-[#6F1014]" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Dropdown */}
                    {mobileMenuOpen && (
                        <div className="lg:hidden bg-white/98 border-t border-gray-200 mt-3 px-4 pt-3 pb-6 space-y-3 rounded-b-2xl animate-in slide-in-from-top duration-200 max-h-[75vh] overflow-y-auto no-scrollbar backdrop-blur-2xl shadow-2xl">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block text-base font-semibold text-[#171110] hover:text-[#6F1014] py-2 border-b border-gray-100"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-2 flex flex-col gap-2.5">
                                <a
                                    href="#contact"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="w-full text-center py-3 rounded-xl bg-[#6F1014] text-white font-bold text-sm tracking-wider uppercase shadow-md"
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
