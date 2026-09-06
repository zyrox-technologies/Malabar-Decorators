"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-surface border-b border-surface-variant transition-all duration-200">
            <div className="w-full max-w-max-width mx-auto flex items-center justify-between px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop h-20">
                {/* Brand Logo */}
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

                {/* Desktop Navigation Cluster */}
                <nav className="hidden md:flex items-center space-x-8">
                    <Link href="/#hero" className="text-primary border-b-2 border-primary pb-1 font-semibold text-label-md font-label-md">
                        Home
                    </Link>
                    <Link href="/#about" className="text-on-surface-variant hover:text-primary transition-colors duration-200 text-label-md font-label-md">
                        About
                    </Link>
                    <Link href="/#services" className="text-on-surface-variant hover:text-primary transition-colors duration-200 text-label-md font-label-md">
                        Services
                    </Link>
                    <Link href="/#gallery" className="text-on-surface-variant hover:text-primary transition-colors duration-200 text-label-md font-label-md">
                        Gallery
                    </Link>
                    <Link href="/#contact" className="text-on-surface-variant hover:text-primary transition-colors duration-200 text-label-md font-label-md">
                        Contact
                    </Link>
                </nav>

                {/* Trailing Action Button */}
                <div className="flex items-center space-x-4">
                    <Link
                        href="/#contact"
                        className="hidden sm:inline-flex items-center justify-center bg-primary-container hover:bg-primary text-on-primary rounded-lg px-6 py-3 text-label-md font-label-md tracking-wider uppercase transition-all duration-300 active:scale-95 shadow-sm"
                    >
                        Plan Your Event
                    </Link>
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
                        <Link href="/#hero" onClick={() => setMobileMenuOpen(false)} className="text-primary font-semibold text-label-md font-label-md py-2 border-b border-surface-variant/50">
                            Home
                        </Link>
                        <Link href="/#about" onClick={() => setMobileMenuOpen(false)} className="text-on-surface-variant hover:text-primary text-label-md font-label-md py-2 border-b border-surface-variant/50">
                            About
                        </Link>
                        <Link href="/#services" onClick={() => setMobileMenuOpen(false)} className="text-on-surface-variant hover:text-primary text-label-md font-label-md py-2 border-b border-surface-variant/50">
                            Services
                        </Link>
                        <Link href="/#gallery" onClick={() => setMobileMenuOpen(false)} className="text-on-surface-variant hover:text-primary text-label-md font-label-md py-2 border-b border-surface-variant/50">
                            Gallery
                        </Link>
                        <Link href="/#contact" onClick={() => setMobileMenuOpen(false)} className="text-on-surface-variant hover:text-primary text-label-md font-label-md py-2 border-b border-surface-variant/50">
                            Contact
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
