"use client";

import Link from "next/link";

export default function Footer() {

    return (
        <footer className="bg-[#171110] text-white py-16 sm:py-24 border-t border-white/5">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16 mb-16">
                    
                    {/* Left Column - Brand Info */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block mb-2">
                            <span className="font-display text-2xl font-bold tracking-widest uppercase">Malabar <span className="text-[#A2272E]">Decorators</span></span>
                        </Link>
                        <p className="text-sm text-white/50 font-light leading-relaxed max-w-sm">
                            Malabar Decorators creates timeless events and culinary experiences that become memories for a lifetime.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all">
                                <span className="sr-only">Instagram</span>
                                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all">
                                <span className="sr-only">Facebook</span>
                                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Middle Column - Links */}
                    <div className="md:px-8">
                        <ul className="space-y-4 text-[13px] font-medium tracking-wide uppercase text-white/70">
                            <li><Link href="/" className="hover:text-[#A2272E] transition-colors">Home</Link></li>
                            <li><Link href="#services" className="hover:text-[#A2272E] transition-colors">Services</Link></li>
                            <li><Link href="#about" className="hover:text-[#A2272E] transition-colors">About Us</Link></li>
                            <li><Link href="#gallery" className="hover:text-[#A2272E] transition-colors">Gallery</Link></li>
                            <li><Link href="#contact" className="hover:text-[#A2272E] transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Right Column - Contact */}
                    <div className="space-y-6">
                        <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/40 mb-2">
                            GET IN TOUCH
                        </h4>
                        <div className="space-y-4 text-sm text-white/70 font-light">
                            <p>+91 99466 92100</p>
                            <p>info@malabardecorators.com</p>
                            <p>Kannur, Kerala, India</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light tracking-wide text-white/40">
                    <p>© 2026 Malabar Decorators. All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    </div>
                </div>
                
            </div>
        </footer>
    );
}
