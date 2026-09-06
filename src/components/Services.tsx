import Link from "next/link";
import Image from "next/image";

export default function Services() {
    return (
        <section className="py-space-3xl md:py-space-4xl bg-surface" id="services">
            <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">PORTFOLIO OF EXPERTISE</span>
                        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mt-2">
                            Curated Event Experiences
                        </h2>
                    </div>
                    <Link href="/#gallery" className="hidden md:inline-flex items-center gap-2 text-primary font-label-md text-label-md hover:underline decoration-primary underline-offset-8 transition-all">
                        <span>View all galleries</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {/* Service 1 */}
                    <Link href="#" className="group block relative overflow-hidden rounded-xl h-[450px] lg:h-[600px]">
                        <img 
                            alt="Elaborate wedding stage setup with floral chandeliers" 
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/20 to-transparent transition-opacity duration-300 group-hover:from-inverse-surface/90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="font-headline-md text-headline-md text-surface-bright mb-2">Stage Decoration</h3>
                            <p className="font-body-sm text-body-sm text-surface-bright/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                Bespoke architectural backdrops, couture floristry, and lighting design for unforgettable wedding ceremonies.
                            </p>
                        </div>
                    </Link>

                    {/* Service 2 */}
                    <Link href="#" className="group block relative overflow-hidden rounded-xl h-[450px] lg:h-[600px]">
                        <img 
                            alt="Gourmet catering presentation with traditional Kerala delicacies" 
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                            src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/20 to-transparent transition-opacity duration-300 group-hover:from-inverse-surface/90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="font-headline-md text-headline-md text-surface-bright mb-2">Culinary Excellence</h3>
                            <p className="font-body-sm text-body-sm text-surface-bright/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                Authentic regional banquets, modern gastronomy, and impeccable table-side hospitality.
                            </p>
                        </div>
                    </Link>

                    {/* Service 3 */}
                    <Link href="#" className="group block relative overflow-hidden rounded-xl h-[450px] lg:h-[600px]">
                        <img 
                            alt="Elegant outdoor evening event setup with ambient lighting" 
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/20 to-transparent transition-opacity duration-300 group-hover:from-inverse-surface/90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="font-headline-md text-headline-md text-surface-bright mb-2">Event Planning</h3>
                            <p className="font-body-sm text-body-sm text-surface-bright/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                Comprehensive event orchestration, timeline management, and seamless on-the-day coordination.
                            </p>
                        </div>
                    </Link>
                </div>

                <div className="mt-8 md:hidden text-center">
                    <Link href="/#gallery" className="inline-flex items-center gap-2 text-primary font-label-md text-label-md hover:underline decoration-primary underline-offset-8">
                        <span>View all galleries</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
