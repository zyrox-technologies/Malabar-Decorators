"use client";

import Image from "next/image";
import { X, MessageCircle } from "lucide-react";

interface MenuModalProps {
  activeModal: "sadhya" | "event" | null;
  onClose: () => void;
}

export default function MenuModal({ activeModal, onClose }: MenuModalProps) {
  if (!activeModal) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-3 sm:p-6 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-stone-950 rounded-2xl overflow-hidden shadow-2xl border border-white/15 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-stone-900/90 border-b border-white/10 flex items-center justify-between text-white">
          <div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-white/60">
              {activeModal === "sadhya" ? "Catering Showcase" : "Event Specials"}
            </span>
            <h4 className="font-serif text-lg sm:text-xl font-medium">
              {activeModal === "sadhya"
                ? "കല്ല്യാണ സദ്യ • Traditional Kerala Sadhya"
                : "Event Menu • Malabar Feast & Specials"}
            </h4>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Image preview */}
        <div className="p-4 sm:p-6 bg-black flex items-center justify-center min-h-[320px] max-h-[60vh] relative overflow-hidden">
          <Image
            src={
              activeModal === "sadhya"
                ? "/images/menu/sadhya-feast.webp"
                : "/images/menu/biryani-feast.webp"
            }
            alt={activeModal === "sadhya" ? "Sadhya Feast" : "Biryani Feast"}
            width={800}
            height={500}
            className="max-h-[55vh] w-auto object-contain rounded-xl shadow-2xl"
          />
        </div>

        {/* Modal Actions */}
        <div className="px-6 py-3.5 bg-stone-900/90 border-t border-white/10 flex items-center justify-between gap-3 text-xs">
          <span className="text-white/60 hidden sm:inline">
            Malabar Decorators Kasaragod • Royal Catering
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <a
              href={`https://wa.me/919946692100?text=${encodeURIComponent(
                activeModal === "sadhya"
                  ? "Hi Malabar Decorators, I would like to book or enquire about your Traditional Kerala Sadhya."
                  : "Hi Malabar Decorators, I would like to book or enquire about your Event Catering Menu."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#790504] hover:bg-[#910605] text-white px-5 py-2 rounded-full font-bold uppercase tracking-wider text-[11px] inline-flex items-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Enquire on WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-xs cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
