"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import {
  catalogueCategories,
  catalogueItems,
  fullCatalogueList,
} from "@/data/catalogue";

export default function CatalogueGrid() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredItems =
    activeTab === "all"
      ? catalogueItems
      : catalogueItems.filter((item) => item.category === activeTab);

  return (
    <>
      {/* CATEGORY FILTER */}
      <section className="py-6 bg-white border-b border-[#EFE8D7] sticky top-[72px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {catalogueCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4.5 py-2.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  activeTab === cat.id
                    ? "bg-[#6F1014] text-white shadow-md"
                    : "bg-[#FAF8F2] text-[#171110]/70 hover:bg-[#6F1014]/10 hover:text-[#6F1014] border border-[#EFE8D7]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED DECOR CARDS */}
      <section className="py-12 sm:py-16 bg-[#FAF8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#EFE8D7] shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div className="relative h-64 w-full bg-gray-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#171110]/80 backdrop-blur-md text-[#F2B93F] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#F2B93F]/40">
                    {item.price}
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-[#6F1014] uppercase tracking-wider">
                      {item.malayalam}
                    </p>
                    <h3 className="font-heading text-xl font-bold text-[#171110] group-hover:text-[#6F1014] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-[#EFE8D7]">
                      {item.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-gray-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#6F1014] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#EFE8D7]">
                    <a
                      href={`https://wa.me/919946692100?text=${encodeURIComponent(`Hi Malabar Decorators, I would like to book or enquire about ${item.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-xl bg-[#6F1014] hover:bg-[#8B1E23] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Enquire on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL TRANSPARENT PRICING LIST TABLE */}
      <section id="full-table" className="py-12 sm:py-16 bg-white border-t border-[#EFE8D7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6F1014]/10 border border-[#6F1014]/20 text-[#6F1014] text-xs font-bold tracking-widest uppercase">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Transparent Rate Card</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold">
              <span className="dark-gradient-text">Complete Event Decor</span>{" "}
              <span className="maroon-gradient-text">Price List</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Estimated starting rates. Final custom package prices vary based on venue size and fresh flower selections.
            </p>
          </div>

          <div className="bg-[#FAF8F2] rounded-2xl border border-[#EFE8D7] overflow-hidden shadow-sm">
            <div className="divide-y divide-[#EFE8D7]">
              {fullCatalogueList.map((row, rIdx) => (
                <div
                  key={rIdx}
                  className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-white transition-colors"
                >
                  <div>
                    <h4 className="font-bold text-sm text-[#171110]">{row.name}</h4>
                    <p className="text-[11px] text-gray-500">{row.category}</p>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
                    <span className="font-bold text-xs text-[#6F1014] bg-[#6F1014]/10 px-3 py-1 rounded-full border border-[#6F1014]/20">
                      {row.price}
                    </span>
                    <a
                      href={`https://wa.me/919946692100?text=${encodeURIComponent(`Hi Malabar Decorators, I want to enquire about ${row.name} (${row.price})`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>Enquire</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
