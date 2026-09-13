"use client";

import { useState } from "react";
import { contactData } from "@/data/contact";
import { Phone, Mail, MapPin, Send, CheckCircle2, Calendar, User, Sparkles } from "lucide-react";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "Wedding & Stage Decor",
    eventDate: "",
    guestCount: "",
    message: "",
  });

  const eventTypes = [
    "Wedding & Stage Decor",
    "Nikah & Grand Reception",
    "Haldi & Mehendi Styling",
    "Corporate Events & Conclaves",
    "Catering & Banquet Spread",
    "SFX & Pyrotechnic Couple Entry",
    "Other Bespoke Celebration",
  ];

  const cleanPhone = contactData.phone.replace(/[^0-9]/g, "");

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `*NEW EVENT CONSULTATION REQUEST*\n━━━━━━━━━━━━━━━━━━━━\n👤 *Name:* ${formData.name || "Client"}\n📞 *Phone:* ${formData.phone || "N/A"}\n✉️ *Email:* ${formData.email || "Not provided"}\n🎉 *Event Type:* ${formData.eventType}\n📅 *Date:* ${formData.eventDate || "Flexible / TBD"}\n👥 *Approx. Guests:* ${formData.guestCount || "TBD"}\n🏛️ *Vision & Venue:* ${formData.message || "Please share consultation details."}\n━━━━━━━━━━━━━━━━━━━━\n_Sent via Malabar Decorators Website_`
    );
    window.open(`https://wa.me/${cleanPhone}?text=${text}`, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Open WhatsApp directly with contact details
    handleWhatsAppSend();

    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: "",
          phone: "",
          email: "",
          eventType: "Wedding & Stage Decor",
          eventDate: "",
          guestCount: "",
          message: "",
        });
      }, 6000);
    }, 400);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-surface relative overflow-hidden border-t border-outline-variant/30">
      
      {/* Ambient background illumination */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-2">
            <span className="w-8 h-[1px] bg-secondary/60"></span>
            <span className="font-label-caps text-[10px] sm:text-[11px] text-secondary uppercase tracking-[0.25em] font-semibold">
              RESERVE YOUR CELEBRATION
            </span>
            <span className="w-8 h-[1px] bg-secondary/60"></span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-on-surface font-normal leading-tight">
            Let&apos;s Design Something <span className="italic font-serif text-secondary font-medium">Extraordinary</span>
          </h2>

          <p className="font-body-sm text-xs sm:text-sm md:text-base text-on-surface-variant max-w-xl mx-auto mt-2 sm:mt-3.5 leading-relaxed">
            Every grand celebration begins with a conversation. Share your date, vision, and scale — our team will curate a bespoke proposal.
          </p>
        </div>

        {/* Master Luxury Booking Pavilion Card */}
        <div className="max-w-5xl mx-auto bg-surface-container-lowest rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border border-outline-variant/40">
          
          {/* Mobile Minimal Top Bar */}
          <div className="lg:hidden bg-gradient-to-r from-[#410001] via-[#790504] to-[#2B0001] text-white px-4 sm:px-6 py-3.5 flex items-center justify-between border-b border-white/10">
            <div>
              <span className="inline-flex items-center gap-1 text-[9px] uppercase tracking-widest font-semibold text-[#F2B93F]">
                <Sparkles className="w-2.5 h-2.5 text-[#F2B93F]" />
                Direct Consultation
              </span>
              <h3 className="font-serif text-base font-medium text-white leading-none mt-0.5">
                Malabar Decorators
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={`tel:${contactData.phone.replace(/\s+/g, "")}`}
                aria-label="Call Malabar Decorators"
                className="w-8 h-8 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-white active:scale-95 transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
              </a>
              <a
                href={`mailto:${contactData.email}`}
                aria-label="Email Malabar Decorators"
                className="w-8 h-8 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-white active:scale-95 transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Desktop Left Column: Dark Royal Maroon VIP Concierge Panel */}
            <div className="hidden lg:flex lg:col-span-5 bg-gradient-to-br from-[#410001] via-[#790504] to-[#2B0001] text-white p-8 sm:p-10 lg:p-12 flex-col justify-between relative overflow-hidden">
              
              {/* Subtle architectural background pattern */}
              <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[10px] uppercase tracking-widest font-semibold text-primary-fixed mb-6">
                  <Sparkles className="w-3 h-3 text-secondary-fixed-dim" />
                  Direct Consultation
                </span>

                <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-tight mb-3">
                  Your Vision. <br />
                  Our Architectural Mastery.
                </h3>

                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light mb-8">
                  From traditional regal nikahs to contemporary beachside receptions, we sculpt spaces that make hearts pause and memories last forever.
                </p>

                {/* Direct Contact List */}
                <div className="space-y-5 border-t border-white/15 pt-6">
                  
                  {/* Phone */}
                  <a
                    href={`tel:${contactData.phone.replace(/\s+/g, "")}`}
                    className="flex items-start gap-3.5 group/item transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-primary-fixed shrink-0 group-hover/item:bg-white/20 transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-white/60 font-medium">
                        Direct Phone Line
                      </span>
                      <span className="text-sm font-semibold text-white group-hover/item:text-secondary-fixed-dim transition-colors">
                        {contactData.phoneDisplay}
                      </span>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${contactData.email}`}
                    className="flex items-start gap-3.5 group/item transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-primary-fixed shrink-0 group-hover/item:bg-white/20 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-white/60 font-medium">
                        Official Inquiries
                      </span>
                      <span className="text-sm font-semibold text-white group-hover/item:text-secondary-fixed-dim transition-colors">
                        {contactData.email}
                      </span>
                    </div>
                  </a>

                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-primary-fixed shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-white/60 font-medium">
                        Design Studio
                      </span>
                      <span className="text-xs text-white/90 leading-relaxed block mt-0.5">
                        {contactData.address[0]},<br />
                        {contactData.address[1]}
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom Trust Badge */}
              <div className="relative z-10 pt-8 mt-8 border-t border-white/15 flex items-center justify-between">
                <div>
                  <span className="font-serif text-lg font-bold text-white block">Est. 2011</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/70">Kasaragod, Kerala</span>
                </div>
                <div className="text-right">
                  <span className="font-serif text-lg font-bold text-white block">Decor & Food</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/70">Complete Service</span>
                </div>
              </div>

            </div>

            {/* Form Column: Minimal on Mobile, Luxury Pavilion on Laptop */}
            <div className="lg:col-span-7 p-4 sm:p-7 lg:p-12 bg-surface-container-lowest flex flex-col justify-center">
              
              {formSubmitted ? (
                <div className="py-8 sm:py-12 px-4 sm:px-6 text-center animate-in fade-in zoom-in-95 duration-500">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-on-surface mb-2">
                    Inquiry Sent on WhatsApp
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant max-w-md mx-auto leading-relaxed mb-5 sm:mb-6">
                    Thank you! We have opened WhatsApp with your event details. Our team will connect with you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4.5">
                  
                  <div className="border-b border-outline-variant/30 pb-2.5 sm:pb-3 mb-2 sm:mb-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif text-lg sm:text-xl font-medium text-on-surface">
                        Event Consultation Form
                      </h4>
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-secondary font-semibold bg-secondary/10 px-2 py-0.5 rounded-full">
                        WhatsApp Proposal
                      </span>
                    </div>
                    <p className="text-[11px] text-on-surface-variant mt-0.5">
                      Share your celebration details — our team will curate a bespoke quote.
                    </p>
                  </div>

                  {/* Row 1: Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-on-surface mb-1">
                        Your Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Kumar"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-9 pr-3.5 py-2.5 sm:py-3 rounded-xl bg-surface-container-low border border-outline-variant/50 text-xs text-on-surface placeholder:text-on-surface-variant/40 focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/15 focus:outline-none transition-all"
                        />
                        <User className="w-3.5 h-3.5 text-on-surface-variant/50 absolute left-3 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-on-surface mb-1">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          required
                          placeholder="+91 99466 00000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-9 pr-3.5 py-2.5 sm:py-3 rounded-xl bg-surface-container-low border border-outline-variant/50 text-xs text-on-surface placeholder:text-on-surface-variant/40 focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/15 focus:outline-none transition-all"
                        />
                        <Phone className="w-3.5 h-3.5 text-on-surface-variant/50 absolute left-3 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Event Type */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-on-surface mb-1">
                      Event Type *
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-surface-container-low border border-outline-variant/50 text-xs text-on-surface focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/15 focus:outline-none transition-all cursor-pointer"
                    >
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Row 3: Event Date & Guest Estimate (Compact 2-col on all screens) */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-on-surface mb-1">
                        Event Date
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          value={formData.eventDate}
                          onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                          className="w-full pl-8 sm:pl-9 pr-2 sm:pr-3.5 py-2.5 sm:py-3 rounded-xl bg-surface-container-low border border-outline-variant/50 text-xs text-on-surface placeholder:text-on-surface-variant/40 focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/15 focus:outline-none transition-all"
                        />
                        <Calendar className="w-3.5 h-3.5 text-on-surface-variant/50 absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-on-surface mb-1">
                        Approx. Guests
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 200 - 500"
                        value={formData.guestCount}
                        onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-surface-container-low border border-outline-variant/50 text-xs text-on-surface placeholder:text-on-surface-variant/40 focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/15 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 4: Email Address (Optional) */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-on-surface mb-1">
                      Email Address <span className="text-[10px] text-on-surface-variant/60 font-normal lowercase">(optional)</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-9 pr-3.5 py-2.5 sm:py-3 rounded-xl bg-surface-container-low border border-outline-variant/50 text-xs text-on-surface placeholder:text-on-surface-variant/40 focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/15 focus:outline-none transition-all"
                      />
                      <Mail className="w-3.5 h-3.5 text-on-surface-variant/50 absolute left-3 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  {/* Row 5: Message / Venue details */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-on-surface mb-1">
                      Vision & Venue Details <span className="text-[10px] text-on-surface-variant/60 font-normal lowercase">(optional)</span>
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Venue location, decor preferences, catering requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-surface-container-low border border-outline-variant/50 text-xs text-on-surface placeholder:text-on-surface-variant/40 focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/15 focus:outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Action Button: Submit */}
                  <div className="pt-1.5 sm:pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 sm:py-3.5 px-6 rounded-full bg-secondary hover:bg-secondary/90 text-white font-semibold text-xs uppercase tracking-wider shadow-xs hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                    >
                      {loading ? (
                        <span>Preparing Proposal...</span>
                      ) : (
                        <>
                          <span>Request Customized Proposal</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Mobile Quick Location & Contact Footer */}
                  <div className="lg:hidden mt-3 pt-3 border-t border-outline-variant/30 flex items-center justify-between text-[11px] text-on-surface-variant">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-secondary shrink-0" />
                      <span className="truncate">Karandakkad, Kasaragod</span>
                    </div>
                    <a
                      href={`tel:${contactData.phone.replace(/\s+/g, "")}`}
                      className="text-secondary font-semibold hover:underline flex items-center gap-1 shrink-0"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Call Now</span>
                    </a>
                  </div>

                </form>
              )}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
