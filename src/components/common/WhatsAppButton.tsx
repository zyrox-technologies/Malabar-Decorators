"use client";

import { Phone } from "lucide-react";
import { contactData } from "@/data/contact";
import { socialsData } from "@/data/socials";

export default function WhatsAppButton() {
  const whatsappUrl =
    "https://wa.me/919946692100?text=Hi%20Malabar%20Decorators,%20I%20would%20like%20to%20enquire%20about%20your%20services";
  const callUrl = `tel:${contactData.phone.replace(/[^0-9+]/g, "")}`;
  const instagramUrl = socialsData.instagram;

  const buttonStyle =
    "relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 aspect-square shrink-0 rounded-full text-white shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 group";

  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2.5"
    >
      {/* Instagram Button */}
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonStyle} bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]`}
        aria-label="Follow Malabar Decorators on Instagram"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
        <span className="absolute right-full mr-3 whitespace-nowrap bg-[#171110] text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Instagram
        </span>
      </a>

      {/* Phone / Call Button */}
      <a
        href={callUrl}
        className={`${buttonStyle} bg-[#790504]`}
        aria-label="Call Malabar Decorators"
      >
        <Phone className="w-5 h-5 text-white" />
        <span className="absolute right-full mr-3 whitespace-nowrap bg-[#171110] text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Call Now
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonStyle} bg-[#25D366]`}
        aria-label="Chat with Malabar Decorators on WhatsApp"
      >
        <svg
          className="w-6 h-6 fill-current relative z-10"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 0C5.396 0 .013 5.385.013 12.02c0 2.12.553 4.19 1.606 6.014L.001 24l6.155-1.614c1.76.958 3.748 1.464 5.875 1.464 6.635 0 12.018-5.385 12.018-12.02C24.049 5.385 18.666 0 12.031 0zm0 22.003c-1.8 0-3.565-.484-5.105-1.4l-.366-.217-3.794.995 1.012-3.697-.238-.38C2.518 15.707 1.986 13.9 1.986 12.02c0-5.538 4.507-10.045 10.045-10.045 5.538 0 10.045 4.507 10.045 10.045 0 5.539-4.507 10.045-10.045 10.045zm5.504-7.518c-.302-.151-1.787-.882-2.063-.983-.276-.1-.477-.151-.678.151-.201.302-.78.983-.956 1.184-.176.201-.352.226-.654.075-1.688-.844-2.825-1.503-3.95-3.434-.297-.51.298-.473.854-1.587.099-.201.05-.377-.025-.528-.075-.151-.678-1.634-.929-2.238-.244-.588-.492-.508-.678-.518-.176-.008-.377-.01-.578-.01s-.528.075-.804.377c-.276.302-1.056 1.031-1.056 2.516s1.08 2.917 1.231 3.118c.151.201 2.126 3.246 5.151 4.553 1.838.793 2.56.87 3.487.732.563-.084 1.787-.73 2.039-1.433.252-.704.252-1.307.176-1.433-.075-.126-.276-.201-.578-.352z" />
        </svg>
        <span className="absolute right-full mr-3 whitespace-nowrap bg-[#171110] text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          WhatsApp
        </span>
      </a>
    </aside>
  );
}
