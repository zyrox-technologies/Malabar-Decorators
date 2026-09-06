"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
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
        { name: "Home", href: "/#hero" },
        { name: "About", href: "/#about" },
        { name: "Experiences", href: "/services" },
        { name: "Menu", href: "/menu" },
        { name: "Gallery", href: "/#gallery" },
        { name: "Contact", href: "/#contact" },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 border-b ${
            scrolled
                ? "bg-[#FAF8F2]/95 backdrop-blur-md border-[#241B18]/10 py-4 shadow-sm"
                : "bg-[#FAF8F2] border-transparent py-6"
        }`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex flex-col gap-1 group z-50">
                        <div className="relative w-32 h-10 shrink-0 flex items-center">
                            <Image
                                src="/LOGO/logo.png"
                                alt="Malabar Decorators Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                    </Link>

                    {/* Navigation Links - Centered */}
                    <div className="hidden lg:flex items-center justify-center gap-10 absolute left-1/2 -translate-x-1/2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[13px] font-medium tracking-[0.1em] text-[#241B18]/80 hover:text-[#A2272E] uppercase transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="hidden lg:flex items-center gap-4 z-50">
                        <a
                            href="#contact"
                            className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#A2272E] text-white text-[11px] font-bold tracking-widest uppercase hover:bg-[#8B1E23] transition-all"
                        >
                            Plan Your Event
                            <span className="text-white/70">→</span>
                        </a>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="flex lg:hidden items-center gap-3 z-50">
                        <a
                            href="#contact"
                            className="px-4 py-2 rounded-full bg-[#A2272E] text-white text-[10px] font-bold tracking-widest uppercase"
                        >
                            Plan Event
                        </a>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 -mr-2 text-[#241B18] focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-7 h-7" />
                            ) : (
                                <Menu className="w-7 h-7" />
                            )}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu Dropdown */}
                {mobileMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 w-full bg-[#FAF8F2] border-b border-[#241B18]/10 px-6 py-6 space-y-4 shadow-xl">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-xl font-display text-[#241B18] hover:text-[#A2272E] py-2 border-b border-[#241B18]/5"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
}
