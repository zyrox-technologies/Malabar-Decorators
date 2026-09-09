"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { brandData } from "@/data/brand";
import { navLinksData } from "@/data/navLinks";
import { heroData } from "@/data/hero";
import Button from "@/components/ui/Button";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 bg-surface border-b border-surface-variant transition-all duration-200">
            <div className="w-full max-w-max-width mx-auto flex items-center justify-between px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop h-20">
                {/* Brand Logo */}
                <Link href="/" className="flex items-center group z-50">
                    <div className="relative w-44 md:w-52 h-12 md:h-14 shrink-0 flex items-center">
                        <Image
                            src="/LOGO/image1.png"
                            alt={`${brandData.name} Logo`}
                            fill
                            sizes="(max-width: 768px) 176px, 208px"
                            priority
                            className="object-contain object-left transition-transform duration-200 group-hover:scale-[1.02]"
                        />
                    </div>
                </Link>

                {/* Desktop Navigation Cluster */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinksData.map((link, index) => {
                        const isActive = link.href === "/" 
                            ? pathname === "/" 
                            : pathname?.startsWith(link.href);

                        return (
                            <Link 
                                key={index}
                                href={link.href} 
                                className={`text-label-md font-label-md transition-colors duration-200 ${isActive ? 'text-primary border-b-2 border-primary pb-1 font-semibold' : 'text-on-surface-variant hover:text-primary'}`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Trailing Action Button */}
                <div className="flex items-center space-x-4">
                    <Button
                        href="/contact"
                        className="hidden sm:inline-flex"
                        size="sm"
                    >
                        {heroData.primaryCta.label}
                    </Button>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle navigation"
                        className="md:hidden text-on-surface p-2 focus:outline-none"
                    >
                        <span className="material-symbols-outlined text-2xl">
                            {mobileMenuOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-surface border-b border-surface-variant px-gutter-mobile py-6 shadow-xl">
                    <nav className="flex flex-col space-y-4">
                        {navLinksData.map((link, index) => {
                            const isActive = link.href === "/" 
                                ? pathname === "/" 
                                : pathname?.startsWith(link.href);

                            return (
                                <Link 
                                    key={index}
                                    href={link.href} 
                                    onClick={() => setMobileMenuOpen(false)} 
                                    className={`text-label-md font-label-md py-2 border-b border-surface-variant/50 ${isActive ? 'text-primary font-semibold' : 'text-on-surface-variant hover:text-primary'}`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            )}
        </header>
    );
}
