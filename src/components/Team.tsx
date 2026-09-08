import { teamData } from "@/data/team";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Team() {
    return (
        <section className="py-space-3xl md:py-space-4xl bg-surface-container-low border-t border-surface-variant">
            <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
                {/* Section Header */}
                <SectionHeader 
                    overline={teamData.overline}
                    headline={teamData.headline}
                    align="center"
                    className="mb-16"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {teamData.members.map((member, index) => (
                        <div key={index} className="group relative bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden mb-6 border border-surface-variant">
                                <img 
                                    alt={`Portrait of ${member.role}`} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0" 
                                    src={member.image}
                                />
                            </div>
                            <div className="text-center">
                                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">{member.name}</h3>
                                <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase block mb-3">{member.role}</span>
                                <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm mx-auto">
                                    {member.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
