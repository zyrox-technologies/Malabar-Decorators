import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { contactData } from "@/data/contact";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactInquirePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background selection:bg-primary selection:text-on-primary">
      <Navbar />

      <main className="flex-1">
        {/* Page Banner Header */}
        <section className="pt-12 pb-8 bg-surface-container-low border-b border-surface-variant text-center">
          <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
            <span className="font-label-caps text-label-caps text-secondary tracking-[0.16em] uppercase block mb-3">
              CONTACT & INQUIRE • CONSULTATION
            </span>
            <h1 className="font-headline-xl text-headline-xl text-on-surface max-w-3xl mx-auto leading-tight mb-4">
              Let&apos;s Plan Your Celebration Together.
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Have an upcoming wedding, reception, or family function? Connect with our scenographers and culinary team today.
            </p>
          </div>
        </section>

        {/* Direct Contact Cards */}
        <section className="py-12 bg-surface">
          <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 rounded-xl bg-surface-container-low border border-surface-variant flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary-container text-surface">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Call Us</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-2">Speak directly with our event manager</p>
                  <a href={`tel:${contactData.phone.replace(/\s+/g, '')}`} className="font-label-md text-label-md text-primary font-semibold hover:underline">
                    {contactData.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-surface-container-low border border-surface-variant flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary-container text-surface">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Email Us</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-2">Send us your detailed event brief</p>
                  <a href={`mailto:${contactData.email}`} className="font-label-md text-label-md text-primary font-semibold hover:underline">
                    {contactData.email}
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-surface-container-low border border-surface-variant flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary-container text-surface">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Visit Office</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {contactData.address[0]}<br />{contactData.address[1]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
