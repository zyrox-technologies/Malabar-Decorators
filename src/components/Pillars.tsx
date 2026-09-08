import { pillarsData } from "@/data/pillars";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Pillars() {
    return (
        <section className="py-space-3xl md:py-space-4xl">
            <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
                <SectionHeader 
                    overline={pillarsData.overline}
                    headline={pillarsData.headline}
                    align="center"
                    className="mb-16"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pillarsData.items.map((pillar, index) => (
                        <div key={index} className="p-8 bg-surface-container-low border border-surface-variant rounded-xl flex flex-col justify-between hover:border-primary-container transition-colors duration-300">
                            <div>
                                <span className="font-label-caps text-label-caps text-primary tracking-widest block mb-4">{pillar.id}</span>
                                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">{pillar.title}</h3>
                                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                                    {pillar.description}
                                </p>
                            </div>
                            <div className="mt-8 pt-4 border-t border-surface-variant flex items-center text-outline text-xs">
                                <span>{pillar.footer}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
