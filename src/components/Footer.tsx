"use client";

import Link from "next/link";
import Image from "next/image";
import { brandData } from "@/data/brand";
import { contactData } from "@/data/contact";
import { socialsData } from "@/data/socials";
import { navLinksData } from "@/data/navLinks";
import Reveal from "@/components/ui/Reveal";
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUpRight 
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: "Royal Stage Decor", href: "/services" },
    { label: "Floral Mandaps & Arches", href: "/services" },
    { label: "Banquet Hall Illumination", href: "/services" },
    { label: "Traditional Malabar Feasts", href: "/services" },
    { label: "Private & Corporate Galas", href: "/services" },
  ];

  return (
    <footer className="bg-primary-container text-white border-t border-white/15 relative overflow-hidden" id="contact">
      {/* Ambient Glow Elements */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-white/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-black/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 pt-16 md:pt-20 pb-12 relative z-10">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          
          {/* Brand Column */}
          <Reveal from="up" delay={0} className="lg:col-span-4 space-y-6">
            {/* Brand Logo Card */}
            <Link 
              href="/" 
              className="inline-block bg-white px-4 py-2.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl group"
            >
              <Image
                src="/images/logo/image1.png"
                alt={brandData.name}
                width={175}
                height={52}
                className="h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </Link>

            <p className="text-sm text-white/80 max-w-sm leading-relaxed font-normal">
              {brandData.description}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-1">
              {socialsData.instagram && (
                <a
                  href={socialsData.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-white hover:text-primary-container hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              )}
              {socialsData.facebook && (
                <a
                  href={socialsData.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-white hover:text-primary-container hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              )}
              {socialsData.whatsapp && (
                <a
                  href={socialsData.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-[#25D366] hover:border-[#25D366] hover:text-white hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.477-.15-.678.15-.201.3-.777.979-.953 1.18-.176.2-.351.226-.652.075-.3-.15-1.267-.467-2.414-1.49-1.146-1.023-1.637-2.288-1.813-2.589-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.201-.301.301-.502.101-.2.05-.376-.025-.527-.075-.15-.678-1.633-.929-2.235-.245-.586-.494-.506-.678-.515-.176-.008-.376-.01-.577-.01-.201 0-.527.075-.803.376s-1.054 1.029-1.054 2.509 1.079 2.91 1.23 3.111c.15.2 2.122 3.24 5.141 4.542.718.31 1.278.495 1.716.634.72.228 1.375.196 1.893.119.578-.086 1.78-.727 2.03-1.429.25-.703.25-1.305.175-1.43-.075-.125-.276-.201-.577-.351z" />
                    <path d="M12.004 0C5.378 0 .004 5.373.004 12c0 2.115.552 4.103 1.516 5.833L0 24l6.335-1.477C8.033 23.398 9.972 24 12.004 24c6.626 0 12-5.373 12-12s-5.374-12-12-12zm0 21.84c-1.83 0-3.56-.51-5.06-1.4l-.36-.21-3.76.88.9-3.66-.23-.37A9.81 9.81 0 0 1 2.164 12c0-5.425 4.414-9.84 9.84-9.84 5.426 0 9.84 4.415 9.84 9.84 0 5.426-4.414 9.84-9.84 9.84z" />
                  </svg>
                </a>
              )}
            </div>
          </Reveal>

          {/* Navigation Column */}
          <Reveal from="up" delay={0.1} className="lg:col-span-2">
            <h4 className="font-serif text-lg font-semibold text-white tracking-wide mb-2">
              Navigation
            </h4>
            <div className="w-8 h-[2px] bg-white/30 mb-5" />
            <ul className="space-y-3 text-sm">
              {navLinksData.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-white/75 hover:text-white font-medium transition-all duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform">{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-white/90" />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Services Column */}
          <Reveal from="up" delay={0.18} className="lg:col-span-3">
            <h4 className="font-serif text-lg font-semibold text-white tracking-wide mb-2">
              What We Craft
            </h4>
            <div className="w-8 h-[2px] bg-white/30 mb-5" />
            <ul className="space-y-3 text-sm">
              {services.map((srv, index) => (
                <li key={index}>
                  <Link 
                    href={srv.href} 
                    className="text-white/75 hover:text-white font-medium transition-all duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform">{srv.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Contact Details Column */}
          <Reveal from="up" delay={0.26} className="lg:col-span-3">
            <h4 className="font-serif text-lg font-semibold text-white tracking-wide mb-2">
              Get In Touch
            </h4>
            <div className="w-8 h-[2px] bg-white/30 mb-5" />
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white shrink-0 mt-0.5 shadow-xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-white/80 leading-snug font-normal">
                  <span className="text-white font-medium">{contactData.address[0]}</span>
                  <br />
                  <span className="text-xs text-white/65">{contactData.address[1]}</span>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white shrink-0 shadow-xs">
                  <Phone className="w-4 h-4" />
                </div>
                <a 
                  href={`tel:${contactData.phone.replace(/\s+/g, '')}`}
                  className="text-white/85 hover:text-white transition-colors font-medium"
                >
                  {contactData.phoneDisplay}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white shrink-0 shadow-xs">
                  <Mail className="w-4 h-4" />
                </div>
                <a 
                  href={`mailto:${contactData.email}`}
                  className="text-white/85 hover:text-white transition-colors text-xs font-medium truncate max-w-[200px]"
                >
                  {contactData.email}
                </a>
              </li>
            </ul>
          </Reveal>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {currentYear} {brandData.name}. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors font-medium">
              Privacy Policy
            </Link>
            <span className="text-white/25">•</span>
            <Link href="/terms" className="hover:text-white transition-colors font-medium">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
