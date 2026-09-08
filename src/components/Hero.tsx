import { heroData } from "@/data/hero";
import Button from "@/components/ui/Button";

export default function Hero() {
    return (
        <section className="relative pt-space-xl pb-space-3xl md:pt-space-2xl md:pb-space-4xl overflow-hidden bg-surface" id="hero">
            <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
                {/* Hero Top Editorial Content */}
                <div className="text-center max-w-3xl mx-auto mb-space-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container rounded-lg border border-surface-variant mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                        <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">{heroData.overline}</span>
                    </div>
                    <h1 
                        className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface tracking-tight mb-6"
                        dangerouslySetInnerHTML={{ __html: heroData.headline }}
                    />
                    <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-8 max-w-2xl mx-auto">
                        {heroData.description}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button href={heroData.primaryCta.href} className="w-full sm:w-auto">
                            {heroData.primaryCta.label}
                        </Button>
                        <Button href={heroData.secondaryCta.href} variant="outline" className="w-full sm:w-auto">
                            {heroData.secondaryCta.label}
                        </Button>
                    </div>
                </div>

                {/* Hero Featured Media Showcase */}
                <div className="relative w-full rounded-xl overflow-hidden border border-surface-variant shadow-sm group">
                    <img 
                        alt="Cinematic luxury wedding banquet under pavilion with bespoke chandeliers and floral arrangements" 
                        className="w-full h-[380px] sm:h-[500px] lg:h-[620px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]" 
                        src={heroData.featured.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/60 via-transparent to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 flex flex-col sm:flex-row justify-between sm:items-end text-surface-bright">
                        <div className="max-w-md">
                            <span className="font-label-caps text-label-caps text-tertiary-fixed tracking-widest uppercase">{heroData.featured.overline}</span>
                            <p className="font-headline-md text-headline-md text-surface-bright mt-1">{heroData.featured.title}</p>
                        </div>
                        <div className="hidden md:flex items-center gap-3 text-surface-bright/80 font-label-sm text-label-sm">
                            {heroData.featured.tags.map((tag, index) => (
                                <span key={index}>
                                    {tag}
                                    {index < heroData.featured.tags.length - 1 && <span className="mx-3">•</span>}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
