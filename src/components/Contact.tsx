"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

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
        <section id="contact" className="py-24 bg-[#FAF8F2] relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                
                <div className="bg-[#A2272E] rounded-sm py-20 px-6 sm:px-12 flex flex-col items-center justify-center text-center shadow-lg relative overflow-hidden">
                    {/* Minimal decorative element - subtle pattern or gradient if needed */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent pointer-events-none" />
                    
                    <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                        <h2 className="font-display text-4xl sm:text-5xl font-medium text-white tracking-tight">
                            Book Your Event
                        </h2>
                        
                        <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed max-w-lg mx-auto pb-4">
                            Tell us about your upcoming event, and our team will get back to you with a customized proposal.
                        </p>
                        
                        {formSubmitted ? (
                            <div className="bg-white/10 p-4 rounded-sm backdrop-blur-sm border border-white/20">
                                <p className="text-white font-medium">Thank you! We&apos;ll be in touch shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch justify-center gap-3 sm:gap-0 max-w-xl mx-auto w-full">
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter your email address..."
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full sm:w-auto flex-1 px-6 py-4 rounded-sm sm:rounded-r-none border-none bg-white text-xs text-[#241B18] focus:ring-2 focus:ring-white/50 focus:outline-none placeholder:text-[#241B18]/40"
                                />
                                <button
                                    type="submit"
                                    className="px-8 py-4 rounded-sm sm:rounded-l-none bg-[#241B18] text-white font-bold text-[10px] tracking-widest uppercase hover:bg-[#171110] transition-colors flex items-center justify-center gap-2"
                                >
                                    Request Consultation
                                    <ArrowRight className="w-4 h-4 text-white/70" />
                                </button>
                            </form>
                        )}
                    </div>
                </div>

            </div>
        </section>
    );
}
