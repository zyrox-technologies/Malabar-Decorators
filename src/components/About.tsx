import Link from "next/link";
import Image from "next/image";

export default function About() {
    return (
        <section className="py-space-3xl md:py-space-4xl bg-surface-container-low border-y border-surface-variant" id="about">
            <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Text Column (5 cols) */}
                    <div className="lg:col-span-5 space-y-6">
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">ABOUT MALABAR DECORATORS</span>
                        <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface tracking-tight">
                            Shaping Celebrations Through Thoughtful Design
                        </h2>
                        <div className="w-12 h-0.5 bg-primary-container"></div>
                        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                            Founded on the values of warm hospitality and structural refinement, Malabar Decorators transforms empty venues into living, breathing works of celebration art. We unite traditional craftsmanship with contemporary spatial balance.
                        </p>
                        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                            From the initial blueprint of an architectural mandap to the delicate scent of night-blooming jasmine and the warmth of candlelit tables, our team ensures every touchpoint feels curated, intimate, and effortless.
                        </p>
                        <div className="pt-2">
                            <Link href="/#services" className="inline-flex items-center gap-2 text-primary font-label-md text-label-md hover:underline decoration-primary underline-offset-8 transition-all">
                                <span>Learn about our curation method</span>
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </Link>
                        </div>
                    </div>

                    {/* Scenography Visual Column (7 cols) */}
                    <div className="lg:col-span-7">
                        <div className="relative rounded-xl overflow-hidden border border-surface-variant bg-surface group">
                            <img 
                                alt="Editorial wedding stage scenography and floral backdrop" 
                                className="w-full h-[420px] md:h-[520px] object-cover transition-transform duration-500 group-hover:scale-105" 
                                src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2070&auto=format&fit=crop"
                            />
                            <div className="absolute bottom-4 right-4 bg-surface/90 backdrop-blur-md px-4 py-2.5 rounded-lg border border-surface-variant text-right">
                                <span className="font-label-caps text-label-caps text-primary uppercase block">Couture Stagecraft</span>
                                <span className="font-headline-sm text-headline-sm text-on-surface">Minimalist Mandap Scenography</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
