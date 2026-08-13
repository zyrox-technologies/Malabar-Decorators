"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, MessageCircle, Calendar, Sparkles, CheckCircle2 } from "lucide-react";

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
        <section id="contact" className="py-20 bg-[#FAF8F2] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left Info Panel */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="space-y-3">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6F1014]/10 border border-[#6F1014]/20 text-[#6F1014] text-xs font-bold tracking-widest uppercase">
                                Start Planning
                            </div>
                            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#241B18] leading-tight">
                                Ready to Plan <br />
                                <span className="text-[#6F1014]">Your Special Event?</span>
                            </h2>
                            <p className="text-sm text-[#241B18]/80 leading-relaxed font-normal">
                                Tell us about your celebration and let us make it special. Get custom catering quotes, stage designs, and complete event planning.
                            </p>
                        </div>

                        {/* Direct Contact Cards */}
                        <div className="space-y-4">
                            {/* Phone Card */}
                            <div className="bg-white p-5 rounded-2xl border border-[#EFE8D7] shadow-md flex items-center gap-4 hover:border-[#6F1014]/40 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-[#6F1014] text-[#F2B93F] flex items-center justify-center shrink-0 border border-[#F2B93F]/40 shadow-sm">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-[10px] uppercase font-bold text-[#6F1014] tracking-wider block">
                                        Phone / Call Now
                                    </span>
                                    <a
                                        href="tel:9946692100"
                                        className="font-display font-bold text-lg text-[#241B18] hover:text-[#6F1014] transition-colors"
                                    >
                                        99466 92100
                                    </a>
                                </div>
                            </div>

                            {/* Email Card */}
                            <div className="bg-white p-5 rounded-2xl border border-[#EFE8D7] shadow-md flex items-center gap-4 hover:border-[#6F1014]/40 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-[#6F1014] text-[#F2B93F] flex items-center justify-center shrink-0 border border-[#F2B93F]/40 shadow-sm">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-[10px] uppercase font-bold text-[#6F1014] tracking-wider block">
                                        Email Address
                                    </span>
                                    <a
                                        href="mailto:info@malabardecorators.com"
                                        className="font-display font-bold text-base text-[#241B18] hover:text-[#6F1014] transition-colors"
                                    >
                                        info@malabardecorators.com
                                    </a>
                                </div>
                            </div>

                            {/* Location Card */}
                            <div className="bg-white p-5 rounded-2xl border border-[#EFE8D7] shadow-md flex items-center gap-4 hover:border-[#6F1014]/40 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-[#6F1014] text-[#F2B93F] flex items-center justify-center shrink-0 border border-[#F2B93F]/40 shadow-sm">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-[10px] uppercase font-bold text-[#6F1014] tracking-wider block">
                                        Main Office & Service Region
                                    </span>
                                    <p className="font-display font-bold text-base text-[#241B18]">
                                        Kannur, Kerala
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Direct Instant Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <a
                                href="tel:9946692100"
                                className="flex-1 py-3 px-4 rounded-xl bg-[#6F1014] hover:bg-[#8B1E23] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
                            >
                                <Phone className="w-4 h-4 text-[#F2B93F]" />
                                <span>Call 99466 92100</span>
                            </a>

                            <a
                                href="https://wa.me/919946692100?text=Hi%20Malabar%20Decorators,%20I%20want%20to%20enquire%20about%20event%20booking"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
                            >
                                <MessageCircle className="w-4 h-4 fill-current" />
                                <span>WhatsApp Us</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Form Card */}
                    <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#EFE8D7] shadow-2xl relative">
                        <h3 className="font-display text-2xl font-bold text-[#241B18] mb-1">
                            Send Event Enquiry
                        </h3>
                        <p className="text-xs text-[#241B18]/70 mb-6">
                            Fill in your event details below and our coordinator will reach out promptly.
                        </p>

                        {formSubmitted ? (
                            <div className="bg-[#6F1014] text-white p-8 rounded-2xl text-center space-y-3 animate-in fade-in duration-300">
                                <CheckCircle2 className="w-12 h-12 text-[#F2B93F] mx-auto" />
                                <h4 className="font-display font-bold text-xl text-[#F2B93F]">
                                    Thank You for Your Enquiry!
                                </h4>
                                <p className="text-xs text-[#FAF8F2]/90 max-w-md mx-auto">
                                    Our team at Malabar Decorators has received your details. We will contact you at{" "}
                                    <strong className="text-[#F2B93F]">{formData.phone || "your phone number"}</strong> shortly.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Name */}
                                    <div>
                                        <label className="block text-xs font-bold text-[#241B18] mb-1.5">
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="e.g. Mohammed Shafi"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-[#EFE8D7] bg-[#FAF8F2] text-xs text-[#241B18] focus:border-[#6F1014] focus:bg-white focus:outline-none transition-all"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="block text-xs font-bold text-[#241B18] mb-1.5">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            required
                                            placeholder="e.g. 99466 92100"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-[#EFE8D7] bg-[#FAF8F2] text-xs text-[#241B18] focus:border-[#6F1014] focus:bg-white focus:outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Email */}
                                    <div>
                                        <label className="block text-xs font-bold text-[#241B18] mb-1.5">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="e.g. name@example.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-[#EFE8D7] bg-[#FAF8F2] text-xs text-[#241B18] focus:border-[#6F1014] focus:bg-white focus:outline-none transition-all"
                                        />
                                    </div>

                                    {/* Event Type */}
                                    <div>
                                        <label className="block text-xs font-bold text-[#241B18] mb-1.5">
                                            Event Service Required *
                                        </label>
                                        <select
                                            value={formData.eventType}
                                            onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-[#EFE8D7] bg-[#FAF8F2] text-xs text-[#241B18] focus:border-[#6F1014] focus:bg-white focus:outline-none transition-all"
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
                                    <label className="block text-xs font-bold text-[#241B18] mb-1.5">
                                        Expected Event Date
                                    </label>
                                    <input
                                        type="date"
                                        value={formData.eventDate}
                                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-[#EFE8D7] bg-[#FAF8F2] text-xs text-[#241B18] focus:border-[#6F1014] focus:bg-white focus:outline-none transition-all"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-xs font-bold text-[#241B18] mb-1.5">
                                        Message / Event Details & Guest Count
                                    </label>
                                    <textarea
                                        rows={4}
                                        placeholder="Provide guest count estimate, preferred theme, venue location in Kannur/Kerala..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-[#EFE8D7] bg-[#FAF8F2] text-xs text-[#241B18] focus:border-[#6F1014] focus:bg-white focus:outline-none transition-all"
                                    />
                                </div>

                                {/* Submit CTA */}
                                <button
                                    type="submit"
                                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#6F1014] to-[#8B1E23] hover:from-[#8B1E23] hover:to-[#6F1014] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                                >
                                    <Send className="w-4 h-4 text-[#F2B93F]" />
                                    <span>Send Enquiry</span>
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
