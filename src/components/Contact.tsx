"use client";

import { useState } from "react";
import { contactData } from "@/data/contact";
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare, Calendar, User, Sparkles } from "lucide-react";

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
    <section id="contact" className="py-16 md:py-24 bg-surface relative overflow-hidden border-t border-outline-variant/30">
      
      {/* Ambient background illumination */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-2.5">
            <span className="w-8 h-[1px] bg-secondary/60"></span>
            <span className="font-label-caps text-[11px] text-secondary uppercase tracking-[0.25em] font-semibold">
              RESERVE YOUR CELEBRATION
            </span>
            <span className="w-8 h-[1px] bg-secondary/60"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-on-surface font-normal leading-tight">
            Let&apos;s Design Something <span className="italic font-serif text-secondary font-medium">Extraordinary</span>
          </h2>

          <p className="font-body-sm text-sm md:text-base text-on-surface-variant max-w-xl mx-auto mt-3.5 leading-relaxed">
            Every grand celebration begins with a conversation. Share your date, vision, and scale — our team will curate a bespoke proposal.
          </p>
        </div>

        {/* Master Luxury Booking Pavilion Card */}
        <div className="max-w-5xl mx-auto bg-surface-container-lowest rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/40">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Dark Royal Maroon VIP Concierge Panel */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#410001] via-[#790504] to-[#2B0001] text-white p-8 sm:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden">
              
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
                  <span className="font-serif text-lg font-bold text-white block">15+ Years</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/70">Of Event Artistry</span>
                </div>
                <div className="text-right">
                  <span className="font-serif text-lg font-bold text-white block">★ 4.9 / 5</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/70">Client Satisfaction</span>
                </div>
              </div>

            </div>

            {/* Right Column: Premium Booking Form */}
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 bg-surface-container-lowest flex flex-col justify-center">
              
              {formSubmitted ? (
                <div className="py-12 px-6 text-center animate-in fade-in zoom-in-95 duration-500">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-on-surface mb-2">
                    Inquiry Sent on WhatsApp
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant max-w-md mx-auto leading-relaxed mb-6">
                    Thank you! We have opened WhatsApp with your event details. Our senior scenographer will connect with you shortly.
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
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  
                  <div className="border-b border-outline-variant/30 pb-3 mb-4">
                    <h4 className="font-serif text-xl font-medium text-on-surface">
                      Event Consultation Form
                    </h4>
                    <p className="text-[11px] text-on-surface-variant">
                      Fill out the details below, or send directly via WhatsApp.
                    </p>
                  </div>

                  {/* Row 1: Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-on-surface mb-1.5">
                        Your Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Acharya"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/50 text-xs text-on-surface placeholder:text-on-surface-variant/40 focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/15 focus:outline-none transition-all"
                        />
                        <User className="w-4 h-4 text-on-surface-variant/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-on-surface mb-1.5">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          required
                          placeholder="+91 99466 00000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/50 text-xs text-on-surface placeholder:text-on-surface-variant/40 focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/15 focus:outline-none transition-all"
                        />
                        <Phone className="w-4 h-4 text-on-surface-variant/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Email & Event Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-on-surface mb-1.5">
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/50 text-xs text-on-surface placeholder:text-on-surface-variant/40 focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/15 focus:outline-none transition-all"
                        />
                        <Mail className="w-4 h-4 text-on-surface-variant/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-on-surface mb-1.5">
                        Event Type *
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/50 text-xs text-on-surface focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/15 focus:outline-none transition-all cursor-pointer"
                      >
                        {eventTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Event Date & Guest Estimate */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-on-surface mb-1.5">
                        Expected Event Date
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          value={formData.eventDate}
                          onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/50 text-xs text-on-surface placeholder:text-on-surface-variant/40 focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/15 focus:outline-none transition-all"
                        />
                        <Calendar className="w-4 h-4 text-on-surface-variant/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-on-surface mb-1.5">
                        Approximate Guests
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 500 - 1,000 guests"
                        value={formData.guestCount}
                        onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/50 text-xs text-on-surface placeholder:text-on-surface-variant/40 focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/15 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Message / Venue details */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-on-surface mb-1.5">
                      Tell Us About Your Vision & Venue
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Venue location, floral preferences, stage themes, catering requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/50 text-xs text-on-surface placeholder:text-on-surface-variant/40 focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/15 focus:outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Action Buttons: Submit & WhatsApp */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    
                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-secondary hover:bg-secondary/90 text-white font-semibold text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                    >
                      {loading ? (
                        <span>Processing...</span>
                      ) : (
                        <>
                          <span>Request Customized Proposal</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>

                    {/* Quick WhatsApp Send */}
                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="w-full sm:w-auto py-3.5 px-5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shrink-0"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </button>

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
