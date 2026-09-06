import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative pt-space-xl pb-space-3xl md:pt-space-2xl md:pb-space-4xl overflow-hidden bg-surface" id="hero">
            <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
                {/* Hero Top Editorial Content */}
                <div className="text-center max-w-3xl mx-auto mb-space-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container rounded-lg border border-surface-variant mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                        <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">EVENT MANAGEMENT • STAGE DECOR • CATERING</span>
                    </div>
                    <h1 className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface tracking-tight mb-6">
                        Beautiful Spaces. <br className="hidden sm:block"/><span className="italic font-normal">Meaningful Celebrations.</span>
                    </h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-8 max-w-2xl mx-auto">
                        Malabar Decorators designs and orchestrates bespoke celebration environments through architectural stage decoration, couture floral styling, and exquisite culinary hospitality.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/#contact" className="w-full sm:w-auto bg-primary-container hover:bg-primary text-on-primary px-8 py-3.5 rounded-lg font-label-md text-label-md tracking-wider uppercase transition-transform duration-200 hover:-translate-y-0.5">
                            Plan Your Event
                        </Link>
                        <Link href="/#services" className="w-full sm:w-auto bg-transparent border border-on-surface text-on-surface hover:bg-surface-container hover:border-primary-container hover:text-primary-container px-8 py-3.5 rounded-lg font-label-md text-label-md tracking-wider uppercase transition-colors duration-200">
                            Explore Our Work
                        </Link>
                    </div>
                </div>

                {/* Hero Featured Media Showcase */}
                <div className="relative w-full rounded-xl overflow-hidden border border-surface-variant shadow-sm group">
                    <img 
                        alt="Cinematic luxury wedding banquet under pavilion with bespoke chandeliers and floral arrangements" 
                        className="w-full h-[380px] sm:h-[500px] lg:h-[620px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]" 
                        src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/60 via-transparent to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 flex flex-col sm:flex-row justify-between sm:items-end text-surface-bright">
                        <div className="max-w-md">
                            <span className="font-label-caps text-label-caps text-tertiary-fixed tracking-widest uppercase">Signature Scenography</span>
                            <p className="font-headline-md text-headline-md text-surface-bright mt-1">The Royal Pavilion Wedding</p>
                        </div>
                        <div className="hidden md:flex items-center gap-3 text-surface-bright/80 font-label-sm text-label-sm">
                            <span>Bespoke Lighting</span>
                            <span>•</span>
                            <span>Floral Architecture</span>
                            <span>•</span>
                            <span>Banqueting</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
