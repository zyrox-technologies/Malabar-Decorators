import Link from "next/link";
import { siteData } from "@/data/site";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

export default function Services() {
    return (
        <section className="py-space-3xl md:py-space-4xl bg-surface" id="services">
            <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
                    <SectionHeader 
                        overline={siteData.services.overline}
                        headline={siteData.services.headline}
                    />
                    <Button href="/#gallery" variant="link" className="hidden md:inline-flex">
                        <span>View all galleries</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Button>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {siteData.services.items.map((service, index) => (
                        <Link key={index} href={service.link} className="group block relative overflow-hidden rounded-xl h-[450px] lg:h-[600px]">
                            <img 
                                alt={service.title} 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                                src={service.image}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/20 to-transparent transition-opacity duration-300 group-hover:from-inverse-surface/90"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="font-headline-md text-headline-md text-surface-bright mb-2">{service.title}</h3>
                                <p className="font-body-sm text-body-sm text-surface-bright/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    {service.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-8 md:hidden text-center">
                    <Button href="/#gallery" variant="link">
                        <span>View all galleries</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Button>
                </div>
            </div>
        </section>
    );
}
