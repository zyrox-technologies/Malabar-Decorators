"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, MessageCircle, Sparkles, CheckCircle2 } from "lucide-react";

export default function Contact() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        eventType: "Nikah & Stage Decor",
        eventDate: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
        setTimeout(() => {
            setFormSubmitted(false);
            setFormData({
                name: "",
                phone: "",
                email: "",
                eventType: "Nikah & Stage Decor",
                eventDate: "",
                message: "",
            });
        }, 5000);
    };

    return (
        <section id="contact" className="py-24 sm:py-32 bg-gradient-to-b from-[#FAF8F2] via-[#F6F1E5] to-[#FAF8F2] relative overflow-hidden">
            {/* Ambient Radial Glow */}
            <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-[#F2B93F]/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    
                    {/* Left Info Panel */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#6F1014]/10 border border-[#6F1014]/20 text-[#6F1014] text-xs font-bold tracking-widest uppercase">
                                <Sparkles className="w-3.5 h-3.5" />
                                <span>Start Planning Today</span>
                            </div>

                            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                                <span className="dark-gradient-text">Ready to Plan</span> <br />
                                <span className="maroon-gradient-text">Your Special Event?</span>
                            </h2>

                            <p className="text-sm sm:text-base text-[#171110]/80 leading-relaxed font-normal">
                                Tell us about your celebration and let us make it special. Get custom catering quotes, stage designs, and complete event planning.
                            </p>
                        </div>

                        {/* Direct Contact Cards */}
                        <div className="space-y-4">
                            {/* Phone Card */}
                            <div className="group bg-white p-5 rounded-2xl border border-[#EFE8D7] hover:border-[#F2B93F] shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-4 hover:-translate-y-0.5">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6F1014] to-[#4E0A0D] text-[#F2B93F] flex items-center justify-center shrink-0 border border-[#F2B93F]/50 shadow-md group-hover:scale-105 transition-transform">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-[10px] uppercase font-bold text-[#6F1014] tracking-wider block">
                                        Direct Enquiry Line
                                    </span>
                                    <a
                                        href="tel:9946692100"
                                        className="font-display font-bold text-lg text-[#171110] hover:text-[#6F1014] transition-colors"
                                    >
                                        99466 92100
                                    </a>
                                </div>
                            </div>

                            {/* Email Card */}
                            <div className="group bg-white p-5 rounded-2xl border border-[#EFE8D7] hover:border-[#F2B93F] shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-4 hover:-translate-y-0.5">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6F1014] to-[#4E0A0D] text-[#F2B93F] flex items-center justify-center shrink-0 border border-[#F2B93F]/50 shadow-md group-hover:scale-105 transition-transform">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-[10px] uppercase font-bold text-[#6F1014] tracking-wider block">
                                        Email Address
                                    </span>
                                    <a
                                        href="mailto:info@malabardecorators.com"
                                        className="font-display font-bold text-base text-[#171110] hover:text-[#6F1014] transition-colors"
                                    >
                                        info@malabardecorators.com
                                    </a>
                                </div>
                            </div>

                            {/* Location Card */}
                            <div className="group bg-white p-5 rounded-2xl border border-[#EFE8D7] hover:border-[#F2B93F] shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-4 hover:-translate-y-0.5">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6F1014] to-[#4E0A0D] text-[#F2B93F] flex items-center justify-center shrink-0 border border-[#F2B93F]/50 shadow-md group-hover:scale-105 transition-transform">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-[10px] uppercase font-bold text-[#6F1014] tracking-wider block">
                                        Main Office & Service Region
                                    </span>
                                    <p className="font-display font-bold text-base text-[#171110]">
                                        Kannur, Kerala
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Instant Action CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <a
                                href="tel:9946692100"
                                className="flex-1 py-3.5 px-5 rounded-2xl bg-[#6F1014] hover:bg-[#8B1E23] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all border border-[#F2B93F]/40"
                            >
                                <Phone className="w-4 h-4 text-[#F2B93F]" />
                                <span>Call 99466 92100</span>
                            </a>

                            <a
                                href="https://wa.me/919946692100?text=Hi%20Malabar%20Decorators,%20I%20want%20to%20enquire%20about%20event%20booking"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 py-3.5 px-5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
                            >
                                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                                    <path d="M12.031 0C5.396 0 .013 5.385.013 12.02c0 2.12.553 4.19 1.606 6.014L.001 24l6.155-1.614c1.76.958 3.748 1.464 5.875 1.464 6.635 0 12.018-5.385 12.018-12.02C24.049 5.385 18.666 0 12.031 0zm0 22.003c-1.8 0-3.565-.484-5.105-1.4l-.366-.217-3.794.995 1.012-3.697-.238-.38C2.518 15.707 1.986 13.9 1.986 12.02c0-5.538 4.507-10.045 10.045-10.045 5.538 0 10.045 4.507 10.045 10.045 0 5.539-4.507 10.045-10.045 10.045zm5.504-7.518c-.302-.151-1.787-.882-2.063-.983-.276-.1-.477-.151-.678.151-.201.302-.78.983-.956 1.184-.176.201-.352.226-.654.075-1.688-.844-2.825-1.503-3.95-3.434-.297-.51.298-.473.854-1.587.099-.201.05-.377-.025-.528-.075-.151-.678-1.634-.929-2.238-.244-.588-.492-.508-.678-.518-.176-.008-.377-.01-.578-.01s-.528.075-.804.377c-.276.302-1.056 1.031-1.056 2.516s1.08 2.917 1.231 3.118c.151.201 2.126 3.246 5.151 4.553 1.838.793 2.56.87 3.487.732.563-.084 1.787-.73 2.039-1.433.252-.704.252-1.307.176-1.433-.075-.126-.276-.201-.578-.352z" />
                                </svg>
                                <span>WhatsApp Us</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Form Card */}
                    <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 border border-[#EFE8D7] hover:border-[#F2B93F]/60 shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 relative">
                        <div className="border-b border-[#F7F3EA] pb-5 mb-6">
                            <h3 className="font-display text-2xl font-bold text-[#171110]">
                                Send Event Enquiry
                            </h3>
                            <p className="text-xs text-[#171110]/70 mt-1">
                                Fill in your event details below and our coordinator will reach out promptly.
                            </p>
                        </div>

                        {formSubmitted ? (
                            <div className="bg-[#6F1014] text-white p-8 sm:p-10 rounded-2xl text-center space-y-4 animate-in fade-in duration-300 border border-[#F2B93F]/40 shadow-xl">
                                <CheckCircle2 className="w-14 h-14 text-[#F2B93F] mx-auto animate-bounce" />
                                <h4 className="font-display font-bold text-2xl text-[#F2B93F]">
                                    Enquiry Received Successfully!
                                </h4>
                                <p className="text-xs sm:text-sm text-[#FAF8F2]/90 max-w-md mx-auto leading-relaxed">
                                    Thank you <strong className="text-[#F2B93F]">{formData.name}</strong>. Our event planning team will contact you at{" "}
                                    <strong className="text-[#F2B93F]">{formData.phone || "your number"}</strong> shortly to discuss your custom package.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Name */}
                                    <div>
                                        <label className="block text-xs font-bold text-[#171110] mb-1.5 uppercase tracking-wider">
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="e.g. Mohammed Shafi"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-[#EFE8D7] bg-[#FAF8F2] text-xs text-[#171110] focus:border-[#6F1014] focus:bg-white focus:ring-2 focus:ring-[#F2B93F]/30 focus:outline-none transition-all"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="block text-xs font-bold text-[#171110] mb-1.5 uppercase tracking-wider">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            required
                                            placeholder="e.g. 99466 92100"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-[#EFE8D7] bg-[#FAF8F2] text-xs text-[#171110] focus:border-[#6F1014] focus:bg-white focus:ring-2 focus:ring-[#F2B93F]/30 focus:outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Email */}
                                    <div>
                                        <label className="block text-xs font-bold text-[#171110] mb-1.5 uppercase tracking-wider">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="e.g. name@example.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-[#EFE8D7] bg-[#FAF8F2] text-xs text-[#171110] focus:border-[#6F1014] focus:bg-white focus:ring-2 focus:ring-[#F2B93F]/30 focus:outline-none transition-all"
                                        />
                                    </div>

                                    {/* Event Type */}
                                    <div>
                                        <label className="block text-xs font-bold text-[#171110] mb-1.5 uppercase tracking-wider">
                                            Event Service Required *
                                        </label>
                                        <select
                                            value={formData.eventType}
                                            onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-[#EFE8D7] bg-[#FAF8F2] text-xs text-[#171110] focus:border-[#6F1014] focus:bg-white focus:ring-2 focus:ring-[#F2B93F]/30 focus:outline-none transition-all"
                                        >
                                            <option value="Nikah & Stage Decor">Nikah Stage & Venue Decor</option>
                                            <option value="Catering & Sadya">Full Event Catering & Biriyani</option>
                                            <option value="Complete Package (Catering + Decor)">Complete Package (Catering + Decor)</option>
                                            <option value="Outdoor Reception Decor">Outdoor Evening Reception Decor</option>
                                            <option value="Haldi / Mehendi Decor">Haldi & Mehendi Decor</option>
                                            <option value="Birthday & Cradle Ceremony">Birthday & Cradle Ceremony</option>
                                            <option value="Corporate / Inauguration">Inauguration & Corporate Event</option>
                                            <option value="SFX & Pyrotechnics">SFX Low Fog & Sparklers Add-on</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Event Date */}
                                <div>
                                    <label className="block text-xs font-bold text-[#171110] mb-1.5 uppercase tracking-wider">
                                        Expected Event Date
                                    </label>
                                    <input
                                        type="date"
                                        value={formData.eventDate}
                                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-[#EFE8D7] bg-[#FAF8F2] text-xs text-[#171110] focus:border-[#6F1014] focus:bg-white focus:ring-2 focus:ring-[#F2B93F]/30 focus:outline-none transition-all"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-xs font-bold text-[#171110] mb-1.5 uppercase tracking-wider">
                                        Message / Event Details & Guest Count
                                    </label>
                                    <textarea
                                        rows={4}
                                        placeholder="Provide guest count estimate, preferred theme, venue location in Kannur/Kerala..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-[#EFE8D7] bg-[#FAF8F2] text-xs text-[#171110] focus:border-[#6F1014] focus:bg-white focus:ring-2 focus:ring-[#F2B93F]/30 focus:outline-none transition-all"
                                    />
                                </div>

                                {/* Submit CTA */}
                                <button
                                    type="submit"
                                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#6F1014] to-[#8B1E23] hover:from-[#8B1E23] hover:to-[#6F1014] text-white font-bold text-xs uppercase tracking-widest shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 group cursor-pointer"
                                >
                                    <Send className="w-4 h-4 text-[#F2B93F] group-hover:translate-x-1 transition-transform" />
                                    <span>Send Event Enquiry</span>
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
