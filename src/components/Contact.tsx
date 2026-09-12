"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { contactData } from "@/data/contact";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Users, 
  Paperclip, 
  ArrowRight, 
  CheckCircle2, 
  X,
  ChevronDown
} from "lucide-react";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    message: "",
  });

  const eventTypes = [
    "Wedding & Stage Decor",
    "Nikah & Grand Reception",
    "Haldi & Mehendi Styling",
    "Traditional Kerala Sadhya Feast",
    "Malabar Dum Biriyani Feast",
    "Corporate & Inauguration",
    "SFX & Pyrotechnic Entry",
    "Other Bespoke Celebration",
  ];

  const cleanPhone = contactData.phone.replace(/\s+/g, "");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selected = Array.from(e.target.files).slice(0, 5);
      setFiles((prev) => [...prev, ...selected].slice(0, 5));
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let uploadedUrls: string[] = [];

      // 1. If images are attached, upload to get public shareable URLs
      if (files.length > 0) {
        const uploadFormData = new FormData();
        files.forEach((file) => uploadFormData.append("files", file));

        const res = await fetch("/api/upload", {
          method: "POST",
          body: uploadFormData,
        });

        if (res.ok) {
          const data = await res.json();
          const origin = typeof window !== "undefined" ? window.location.origin : "";
          uploadedUrls = (data.urls || []).map((u: string) => `${origin}${u}`);
        }
      }

      // 2. Prepare structured WhatsApp message
      const imagesText = uploadedUrls.length > 0
        ? `\n\n📸 *Reference Images (${uploadedUrls.length}):*\n${uploadedUrls.map((u, i) => `${i + 1}. ${u}`).join("\n")}`
        : "";

      const waText = `*NEW EVENT CONSULTATION REQUEST*\n━━━━━━━━━━━━━━━━━━━━\n👤 *Name:* ${formData.name}\n📞 *Phone:* ${formData.phone}\n✉️ *Email:* ${formData.email || "Not provided"}\n🎉 *Event Type:* ${formData.eventType || "Not specified"}\n📅 *Date:* ${formData.eventDate || "Flexible / TBD"}\n👥 *Approx. Guests:* ${formData.guestCount || "TBD"}\n🏛️ *Vision & Venue:* ${formData.message || "Please share proposal and pricing."}${imagesText}\n━━━━━━━━━━━━━━━━━━━━\n_Sent via Malabar Decorators Website_`;

      const cleanPhoneDigits = contactData.phone.replace(/[^0-9]/g, "");
      const waUrl = `https://wa.me/${cleanPhoneDigits}?text=${encodeURIComponent(waText)}`;

      // 3. If mobile device supports sharing actual image files directly to WhatsApp
      let sharedDirectly = false;
      if (
        files.length > 0 &&
        typeof navigator !== "undefined" &&
        navigator.canShare &&
        navigator.canShare({ files })
      ) {
        try {
          await navigator.share({
            title: "Event Consultation Request",
            text: waText,
            files: files,
          });
          sharedDirectly = true;
        } catch (shareErr) {
          console.log("Web Share dismissed, falling back to direct WhatsApp link:", shareErr);
        }
      }

      // 4. Fallback or primary direct WhatsApp redirection
      if (!sharedDirectly) {
        window.open(waUrl, "_blank");
      }

      setFormSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      // Even if network error occurs, still open WhatsApp with local text
      const cleanPhoneDigits = contactData.phone.replace(/[^0-9]/g, "");
      const fallbackText = `*EVENT CONSULTATION REQUEST*\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Event:* ${formData.eventType}\n*Date:* ${formData.eventDate}\n*Guests:* ${formData.guestCount}\n*Vision:* ${formData.message}`;
      window.open(`https://wa.me/${cleanPhoneDigits}?text=${encodeURIComponent(fallbackText)}`, "_blank");
      setFormSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hello Malabar Decorators,\nI would like to inquire about booking an event.\n*Name:* ${formData.name || "Client"}\n*Phone:* ${formData.phone || "N/A"}\n*Email:* ${formData.email || "N/A"}\n*Event Type:* ${formData.eventType || "Event Consultation"}\n*Date:* ${formData.eventDate || "TBD"}\n*Guests:* ${formData.guestCount || "TBD"}\n*Vision & Venue:* ${formData.message || "Please share proposal."}`
    );
    window.open(`https://wa.me/${cleanPhone.replace("+", "")}?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#FDFBF7] relative overflow-hidden border-t border-[#790504]/10">
      
      {/* Ambient background illumination */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#790504]/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#C59B27]/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Column Split Container */}
        <div className="bg-[#FAF8F5] rounded-3xl border border-[#EAE2D8] shadow-xs overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* LEFT COLUMN: Event Consultation & Story */}
            <div className="lg:col-span-6 p-7 sm:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-[#EAE2D8] flex flex-col justify-between">
              
              <div>
                {/* Overline with line */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[11px] font-bold tracking-[0.25em] text-[#790504] uppercase">
                    EVENT CONSULTATION
                  </span>
                  <span className="w-12 h-[1px] bg-[#790504]/30" />
                </div>

                {/* Main Headline */}
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[3.25rem] text-[#1E1B19] font-normal leading-[1.12] tracking-tight">
                  Let&apos;s Plan <br />
                  Something <br />
                  <span className="text-[#790504] italic font-serif">Extraordinary.</span>
                </h2>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm text-[#59413D]/80 mt-4 mb-8 leading-relaxed max-w-md">
                  Share your ideas with us and we&apos;ll craft a customised proposal for your special occasion.
                </p>

                {/* Middle: Contact Details + Arch Photo */}
                <div className="flex flex-col sm:flex-row items-start justify-between gap-6 sm:gap-8 mb-8">
                  
                  {/* Vertical Contact Info Stack */}
                  <div className="space-y-6 flex-1">
                    
                    {/* 1. Phone */}
                    <a 
                      href={`tel:${cleanPhone}`}
                      className="flex items-center gap-4 group transition-transform"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#FAF2EE] border border-[#790504]/15 flex items-center justify-center text-[#790504] shrink-0 group-hover:bg-[#790504] group-hover:text-white transition-colors shadow-2xs">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-sm font-bold text-[#1E1B19] block group-hover:text-[#790504] transition-colors">
                          {contactData.phoneDisplay}
                        </span>
                        <span className="text-[10px] uppercase tracking-widest text-[#59413D]/70 font-semibold block">
                          TALK TO US
                        </span>
                      </div>
                    </a>

                    {/* 2. Email */}
                    <a 
                      href={`mailto:${contactData.email}`}
                      className="flex items-center gap-4 group transition-transform"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#FAF2EE] border border-[#790504]/15 flex items-center justify-center text-[#790504] shrink-0 group-hover:bg-[#790504] group-hover:text-white transition-colors shadow-2xs">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs sm:text-sm font-bold text-[#1E1B19] block group-hover:text-[#790504] transition-colors">
                          {contactData.email}
                        </span>
                        <span className="text-[10px] uppercase tracking-widest text-[#59413D]/70 font-semibold block">
                          OFFICIAL INQUIRIES
                        </span>
                      </div>
                    </a>

                    {/* 3. Address */}
                    <a 
                      href="https://maps.google.com/?q=Malabar+Decorators+Valanchery" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 group transition-transform"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#FAF2EE] border border-[#790504]/15 flex items-center justify-center text-[#790504] shrink-0 group-hover:bg-[#790504] group-hover:text-white transition-colors shadow-2xs mt-0.5">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs sm:text-[13px] font-bold text-[#1E1B19] leading-snug block group-hover:text-[#790504] transition-colors">
                          {contactData.address[0]}<br />
                          {contactData.address[1]}
                        </span>
                        <span className="text-[10px] uppercase tracking-widest text-[#59413D]/70 font-semibold block mt-1">
                          VISIT OUR STUDIO
                        </span>
                      </div>
                    </a>

                  </div>

                  {/* Arched Banquet Image with Overlay */}
                  <div className="relative w-36 sm:w-40 md:w-44 h-72 sm:h-80 shrink-0 self-center sm:self-auto rounded-t-[75px] rounded-b-xl overflow-hidden shadow-md border border-[#EAE2D8]">
                    <Image
                      src="/contact-showcase/banquet-arch.png"
                      alt="Luxury candlelit wedding banquet table setting"
                      fill
                      sizes="(max-width: 640px) 144px, 176px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Floating badge inside image */}
                    <div className="absolute bottom-4 right-3 text-right">
                      <div className="w-8 h-[1px] bg-white/40 ml-auto mb-1.5" />
                      <p className="text-[8.5px] uppercase tracking-[0.25em] text-white/90 font-medium leading-tight">
                        MORE <br />
                        THAN <br />
                        EVENTS
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom Trust Stats & Tagline */}
              <div className="pt-6 border-t border-[#EAE2D8] mt-6">
                <div className="flex items-center gap-8 sm:gap-12">
                  <div>
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1E1B19] block">
                      15+
                    </span>
                    <span className="text-[9.5px] uppercase tracking-widest text-[#59413D]/70 font-semibold block mt-0.5">
                      YEARS OF EVENT ARTISTRY
                    </span>
                  </div>

                  <div className="w-px h-8 bg-[#EAE2D8]" />

                  <div>
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1E1B19] block">
                      4.9 / 5
                    </span>
                    <span className="text-[9.5px] uppercase tracking-widest text-[#59413D]/70 font-semibold block mt-0.5">
                      CLIENT SATISFACTION
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#59413D]/60 font-semibold">
                    PEOPLE &nbsp;•&nbsp; PLACES &nbsp;•&nbsp; POSSIBILITIES
                  </p>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Interactive Inquiry Form */}
            <div className="lg:col-span-6 p-7 sm:p-10 lg:p-12 flex flex-col justify-between bg-[#FAF8F5]">
              
              {formSubmitted ? (
                <div className="py-16 px-6 text-center animate-in fade-in zoom-in-95 duration-500 my-auto">
                  <div className="w-16 h-16 rounded-full bg-[#FAF2EE] text-[#790504] border border-[#790504]/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#1E1B19] mb-2">
                    Inquiry Received
                  </h3>
                  <p className="text-xs sm:text-sm text-[#59413D]/80 max-w-md mx-auto leading-relaxed mb-6">
                    Thank you! Our senior event scenographer and culinary team will review your requirements and share a bespoke proposal shortly.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white border border-[#EAE2D8] hover:bg-[#FAF2EE] text-[#1E1B19] transition-colors shadow-2xs"
                    >
                      Submit Another Inquiry
                    </button>
                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#701A1E] text-white hover:bg-[#8B1E23] transition-colors shadow-2xs flex items-center gap-1.5"
                    >
                      Connect on WhatsApp →
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  
                  {/* Top Overline */}
                  <div className="mb-6">
                    <h3 className="text-[11px] font-bold tracking-[0.25em] text-[#790504] uppercase">
                      TELL US ABOUT YOUR EVENT
                    </h3>
                  </div>

                  {/* Row 1: Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-[#1E1B19] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Acharya"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-xl bg-[#FDFBF7] border border-[#EAE2D8] text-xs text-[#1E1B19] placeholder:text-[#59413D]/40 focus:bg-white focus:border-[#790504] focus:ring-1 focus:ring-[#790504]/20 focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-[#1E1B19] mb-1.5">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-3.5 h-3.5 text-[#59413D]/50 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="tel"
                          required
                          placeholder="+91 99466 00000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-9 pr-3.5 py-3 rounded-xl bg-[#FDFBF7] border border-[#EAE2D8] text-xs text-[#1E1B19] placeholder:text-[#59413D]/40 focus:bg-white focus:border-[#790504] focus:ring-1 focus:ring-[#790504]/20 focus:outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Email & Event Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-[#1E1B19] mb-1.5">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="w-3.5 h-3.5 text-[#59413D]/50 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="email"
                          required
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-9 pr-3.5 py-3 rounded-xl bg-[#FDFBF7] border border-[#EAE2D8] text-xs text-[#1E1B19] placeholder:text-[#59413D]/40 focus:bg-white focus:border-[#790504] focus:ring-1 focus:ring-[#790504]/20 focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-[#1E1B19] mb-1.5">
                        Event Type *
                      </label>
                      <div className="relative">
                        <Calendar className="w-3.5 h-3.5 text-[#59413D]/50 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <select
                          required
                          value={formData.eventType}
                          onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                          className="w-full pl-9 pr-8 py-3 rounded-xl bg-[#FDFBF7] border border-[#EAE2D8] text-xs text-[#1E1B19] focus:bg-white focus:border-[#790504] focus:ring-1 focus:ring-[#790504]/20 focus:outline-none transition-all appearance-none cursor-pointer"
                        >
                          <option value="" disabled>Select event type</option>
                          {eventTypes.map((type, i) => (
                            <option key={i} value={type}>{type}</option>
                          ))}
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-[#59413D]/50 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Expected Event Date & Approximate Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-[#1E1B19] mb-1.5">
                        Expected Event Date *
                      </label>
                      <div className="relative">
                        <Calendar className="w-3.5 h-3.5 text-[#59413D]/50 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="date"
                          required
                          value={formData.eventDate}
                          onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                          className="w-full pl-9 pr-3.5 py-3 rounded-xl bg-[#FDFBF7] border border-[#EAE2D8] text-xs text-[#1E1B19] placeholder:text-[#59413D]/40 focus:bg-white focus:border-[#790504] focus:ring-1 focus:ring-[#790504]/20 focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-[#1E1B19] mb-1.5">
                        Approximate Guests
                      </label>
                      <div className="relative">
                        <Users className="w-3.5 h-3.5 text-[#59413D]/50 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          placeholder="e.g. 500 - 1,000 guests"
                          value={formData.guestCount}
                          onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                          className="w-full pl-9 pr-3.5 py-3 rounded-xl bg-[#FDFBF7] border border-[#EAE2D8] text-xs text-[#1E1B19] placeholder:text-[#59413D]/40 focus:bg-white focus:border-[#790504] focus:ring-1 focus:ring-[#790504]/20 focus:outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 4: Tell Us About Your Vision & Venue */}
                  <div>
                    <label className="block text-[11px] font-bold text-[#1E1B19] mb-1.5">
                      Tell Us About Your Vision & Venue
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Venue location, themes, preferences, catering requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-xl bg-[#FDFBF7] border border-[#EAE2D8] text-xs text-[#1E1B19] placeholder:text-[#59413D]/40 focus:bg-white focus:border-[#790504] focus:ring-1 focus:ring-[#790504]/20 focus:outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Row 5: Attach Reference Images (Optional) */}
                  <div>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept="image/*"
                      multiple
                      className="hidden"
                    />
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className="p-3.5 sm:p-4 rounded-xl border border-[#EAE2D8] bg-[#FDFBF7] hover:bg-white transition-colors cursor-pointer flex items-center justify-between gap-3 group shadow-2xs"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-[#FAF2EE] text-[#790504] flex items-center justify-center shrink-0 group-hover:bg-[#790504] group-hover:text-white transition-colors">
                          <Paperclip className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#1E1B19]">
                            Attach Reference Images (Optional)
                          </p>
                          <p className="text-[10.5px] text-[#59413D]/70 mt-0.5">
                            You can upload moodboards, venue photos, or inspiration (Max 5 files)
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-[#790504] hidden sm:inline">
                        Browse
                      </span>
                    </div>

                    {/* Attached Files List */}
                    {files.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {files.map((f, idx) => (
                          <span 
                            key={idx}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#FAF2EE] text-[#790504] text-[11px] font-medium border border-[#790504]/20"
                          >
                            <span className="max-w-[120px] truncate">{f.name}</span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                removeFile(idx);
                              }}
                              className="hover:text-black"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-[#701A1E] hover:bg-[#851D22] text-white font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all shadow-sm active:scale-[0.99] disabled:opacity-70 mt-2"
                  >
                    <span>{loading ? "Sending Details..." : "REQUEST PROPOSAL"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* Bottom WhatsApp Link */}
                  <div className="flex items-center gap-4 pt-4">
                    <div className="flex-1 h-[1px] bg-[#EAE2D8]" />
                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="inline-flex items-center gap-2 text-[11px] font-bold text-[#59413D] hover:text-[#790504] tracking-wider uppercase transition-colors"
                    >
                      <span className="text-[#59413D]/70 font-semibold">OR CHAT ON WHATSAPP</span>
                      <div className="w-6 h-6 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                        </svg>
                      </div>
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
