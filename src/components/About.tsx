import { siteData } from "@/data/site";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

export default function About() {
    return (
        <section className="py-space-3xl md:py-space-4xl bg-surface-container-low border-y border-surface-variant" id="about">
            <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Text Column (5 cols) */}
                    <div className="lg:col-span-5 space-y-6">
                        <SectionHeader 
                            overline={siteData.about.overline}
                            headline={siteData.about.headline}
                            size="xl"
                            className="mb-8"
                        />
                        <div className="w-12 h-0.5 bg-primary-container"></div>
                        {siteData.about.paragraphs.map((paragraph, index) => (
                            <p key={index} className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                        <div className="pt-2">
                            <Button href={siteData.about.cta.href} variant="link">
                                <span>{siteData.about.cta.label}</span>
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </Button>
                        </div>
                    </div>

                    {/* Scenography Visual Column (7 cols) */}
                    <div className="lg:col-span-7">
                        <div className="relative rounded-xl overflow-hidden border border-surface-variant bg-surface group">
                            <img 
                                alt={siteData.about.image.alt} 
                                className="w-full h-[420px] md:h-[520px] object-cover transition-transform duration-500 group-hover:scale-105" 
                                src={siteData.about.image.src}
                            />
                            <div className="absolute bottom-4 right-4 bg-surface/90 backdrop-blur-md px-4 py-2.5 rounded-lg border border-surface-variant text-right">
                                <span className="font-label-caps text-label-caps text-primary uppercase block">{siteData.about.image.captionOverline}</span>
                                <span className="font-headline-sm text-headline-sm text-on-surface">{siteData.about.image.captionTitle}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
