export default function Team() {
    return (
        <section className="py-space-3xl md:py-space-4xl bg-surface-container-low border-t border-surface-variant">
            <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">THE VISIONARIES</span>
                    <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mt-2">
                        The Minds Behind the Magic
                    </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {/* Team Member 1 */}
                    <div className="group">
                        <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden mb-6 border border-surface-variant">
                            <img 
                                alt="Portrait of Lead Event Designer" 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0" 
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                            />
                        </div>
                        <div className="text-center">
                            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Amina Rahman</h3>
                            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase block mb-3">Lead Scenographer</span>
                            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm mx-auto">
                                Master of floral architecture and spatial flow. Amina ensures every venue feels intimate regardless of scale.
                            </p>
                        </div>
                    </div>
                    
                    {/* Team Member 2 */}
                    <div className="group">
                        <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden mb-6 border border-surface-variant">
                            <img 
                                alt="Portrait of Executive Chef" 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0" 
                                src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1968&auto=format&fit=crop"
                            />
                        </div>
                        <div className="text-center">
                            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Tariq Al-Fayed</h3>
                            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase block mb-3">Executive Chef</span>
                            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm mx-auto">
                                Curator of authentic regional banquets, blending generational recipes with modern gastronomic presentation.
                            </p>
                        </div>
                    </div>
                    
                    {/* Team Member 3 */}
                    <div className="group">
                        <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden mb-6 border border-surface-variant">
                            <img 
                                alt="Portrait of Technical Director" 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0" 
                                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop"
                            />
                        </div>
                        <div className="text-center">
                            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Imran Khan</h3>
                            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase block mb-3">Technical Director</span>
                            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm mx-auto">
                                The invisible hand behind flawless lighting, soundscapes, and structural engineering that supports the magic.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
