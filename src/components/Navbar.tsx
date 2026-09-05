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
                                    <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                                        <path d="M12.031 0C5.396 0 .013 5.385.013 12.02c0 2.12.553 4.19 1.606 6.014L.001 24l6.155-1.614c1.76.958 3.748 1.464 5.875 1.464 6.635 0 12.018-5.385 12.018-12.02C24.049 5.385 18.666 0 12.031 0zm0 22.003c-1.8 0-3.565-.484-5.105-1.4l-.366-.217-3.794.995 1.012-3.697-.238-.38C2.518 15.707 1.986 13.9 1.986 12.02c0-5.538 4.507-10.045 10.045-10.045 5.538 0 10.045 4.507 10.045 10.045 0 5.539-4.507 10.045-10.045 10.045zm5.504-7.518c-.302-.151-1.787-.882-2.063-.983-.276-.1-.477-.151-.678.151-.201.302-.78.983-.956 1.184-.176.201-.352.226-.654.075-1.688-.844-2.825-1.503-3.95-3.434-.297-.51.298-.473.854-1.587.099-.201.05-.377-.025-.528-.075-.151-.678-1.634-.929-2.238-.244-.588-.492-.508-.678-.518-.176-.008-.377-.01-.578-.01s-.528.075-.804.377c-.276.302-1.056 1.031-1.056 2.516s1.08 2.917 1.231 3.118c.151.201 2.126 3.246 5.151 4.553 1.838.793 2.56.87 3.487.732.563-.084 1.787-.73 2.039-1.433.252-.704.252-1.307.176-1.433-.075-.126-.276-.201-.578-.352z" />
                                    </svg>
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
