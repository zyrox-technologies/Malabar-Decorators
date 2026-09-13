"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  detailedServicesList,
  serviceCategoryList,
} from "@/data/services";
import {
  CheckCircle2,
  Phone,
  MessageCircle,
  Utensils,
  Award,
  ChevronRight,
  ShieldCheck,
  Clock,
} from "lucide-react";

export default function ServicesDirectory() {
  const [activeTab, setActiveTab] = useState<"all" | "decor" | "catering" | "sfx" | "special">("all");

  const filteredServices =
    activeTab === "all"
      ? detailedServicesList
      : detailedServicesList.filter((s) => s.category === activeTab);

  return (
    <>
      {/* HERO BANNER */}
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-14 bg-[#FDFBF7] border-b border-[#790504]/10 relative overflow-hidden">
        <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-medium text-[#59413D]/70 uppercase tracking-widest mb-5">
            <Link href="/" className="hover:text-[#790504] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#790504]/50" />
            <span className="text-[#1E1B19] font-semibold">Services & Disciplines</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-block">
              <span className="border border-[#790504]/30 text-[#790504] px-4 py-1 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase bg-white/60 shadow-xs">
                OUR DISCIPLINES & EXPERTISE
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-[#1E1B19] font-normal leading-[1.14] tracking-tight">
              Complete <span className="text-[#790504] font-bold">Event & Catering</span> Solutions
            </h1>

            <p className="mt-3 text-sm md:text-base text-[#59413D]/80 leading-relaxed font-normal">
              From grand wedding stage decor to authentic Sadya and catering feasts, live food counters, and ambient lighting — we turn every occasion into a memorable celebration across Kasaragod and surrounding areas.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#790504]/10 max-w-xl">
              <div>
                <p className="font-serif text-2xl sm:text-3xl text-[#790504] font-bold">2011</p>
                <p className="text-[11px] font-medium text-[#59413D]/70 uppercase tracking-wider mt-0.5">Established</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl text-[#790504] font-bold">Kasaragod</p>
                <p className="text-[11px] font-medium text-[#59413D]/70 uppercase tracking-wider mt-0.5">Location</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl text-[#790504] font-bold">Decor & Food</p>
                <p className="text-[11px] font-medium text-[#59413D]/70 uppercase tracking-wider mt-0.5">Complete Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE CATEGORY FILTER */}
      <section className="py-6 bg-surface border-b border-surface-variant sticky top-20 z-30 shadow-xs">
        <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-1">
            {serviceCategoryList.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id as "all" | "decor" | "catering" | "sfx" | "special")}
                className={`px-5 py-2 rounded-lg font-label-md text-label-md transition-all shrink-0 cursor-pointer ${
                  activeTab === cat.id
                    ? "bg-primary-container text-surface font-semibold shadow-sm"
                    : "bg-surface-container-low text-on-surface-variant hover:text-primary border border-surface-variant"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES DETAILED LIST GRID */}
      <section className="py-space-3xl md:py-space-4xl bg-background">
        <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop space-y-12">
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-surface rounded-xl overflow-hidden border border-surface-variant shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Image side */}
              <div className={`lg:col-span-5 relative min-h-[320px] lg:min-h-[440px] bg-surface-container ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-md text-primary font-label-caps text-label-caps uppercase tracking-wider px-3 py-1 rounded-lg border border-outline-variant/40 shadow-sm">
                  {service.tag}
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-inverse-surface/85 backdrop-blur-md text-surface-bright font-label-sm text-label-sm px-4 py-2.5 rounded-lg flex items-center justify-between border border-surface-variant/20">
                  <span>{service.capacity}</span>
                  <span className="text-primary-fixed font-semibold">{service.price}</span>
                </div>
              </div>

              {/* Content side */}
              <div className={`lg:col-span-7 p-6 md:p-8 flex flex-col justify-between ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="space-y-4">
                  <div>
                    <p className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-1">
                      {service.malayalam}
                    </p>
                    <h2 className="font-headline-md text-headline-md text-on-surface">
                      {service.title}
                    </h2>
                  </div>

                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Features checklist */}
                  <div className="space-y-3 pt-3 border-t border-surface-variant">
                    <p className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider">What&apos;s Included & Highlights:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 font-body-sm text-body-sm text-on-surface-variant">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4 pt-6 mt-6 border-t border-surface-variant">
                  <a
                    href={`https://wa.me/919946692100?text=${encodeURIComponent(`Hi Malabar Decorators, I would like to enquire about ${service.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-label-md text-label-md uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Enquire on WhatsApp</span>
                  </a>

                  <a
                    href="/contact"
                    className="px-5 py-2.5 rounded-lg bg-primary-container hover:bg-primary text-surface font-label-md text-label-md uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Book Service</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-space-3xl md:py-space-4xl bg-surface-container-low border-t border-b border-surface-variant">
        <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-surface border border-surface-variant text-primary font-label-caps text-label-caps tracking-widest uppercase">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Our Quality Commitment</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface">
              Why Families Trust Malabar Decorators
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface p-6 rounded-xl border border-surface-variant shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-lg bg-primary-container/10 text-primary flex items-center justify-center">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Authentic Malabar Taste</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Traditional Dum Biryani and Sadya prepared with pure cow ghee and hand-ground authentic spices by seasoned master chefs.
              </p>
            </div>

            <div className="bg-surface p-6 rounded-xl border border-surface-variant shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-lg bg-primary-container/10 text-primary flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Royal Stage Aesthetics</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Custom stage decorations with fresh premium flowers, crystal chandeliers, warm spot lighting, and elegant drapery.
              </p>
            </div>

            <div className="bg-surface p-6 rounded-xl border border-surface-variant shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-lg bg-primary-container/10 text-primary flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Punctual Execution</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Complete event management from setup to food serving and teardown, handled seamlessly so you can celebrate worry-free.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
