import { storytellingData } from "@/data/storytelling";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

export default function Storytelling() {
    return (
        <section className="py-space-3xl md:py-space-4xl bg-surface-container-low border-t border-surface-variant">
            <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    {/* Left: Image */}
                    <div className="relative w-full h-[500px] lg:h-[700px] rounded-xl overflow-hidden border border-surface-variant shadow-sm group">
                        <img 
                            alt={storytellingData.image.alt} 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                            src={storytellingData.image.src}
                        />
                        <div className="absolute inset-0 border border-primary-container/20 rounded-xl m-4 pointer-events-none"></div>
                    </div>
                    {/* Right: Text Content */}
                    <div className="max-w-xl">
                        <SectionHeader 
                            overline={storytellingData.overline}
                            headline={storytellingData.headline}
                            size="xl"
                            className="mb-8"
                        />
                        <div className="space-y-6 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                            {storytellingData.paragraphs.map((paragraph, index) => (
                                <p key={index}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                        <div className="mt-10">
                            <Button href={storytellingData.cta.href}>
                                {storytellingData.cta.label}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
