export default function Pillars() {
    return (
        <section className="py-space-3xl md:py-space-4xl">
            <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">THE MALABAR STANDARD</span>
                    <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mt-2">
                        Architecture, Florals & Hospitality in Synchrony
                    </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Pillar 01 */}
                    <div className="p-8 bg-surface-container-low border border-surface-variant rounded-xl flex flex-col justify-between hover:border-primary-container transition-colors duration-300">
                        <div>
                            <span className="font-label-caps text-label-caps text-primary tracking-widest block mb-4">01 / DISCIPLINE</span>
                            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Thoughtful Planning</h3>
                            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                                Dedicated event choreography and timeline orchestrations that respect cultural significance and smooth logistical cadence.
                            </p>
                        </div>
                        <div className="mt-8 pt-4 border-t border-surface-variant flex items-center text-outline text-xs">
                            <span>Rigorous Floor Plans</span>
                        </div>
                    </div>

                    {/* Pillar 02 */}
                    <div className="p-8 bg-surface-container-low border border-surface-variant rounded-xl flex flex-col justify-between hover:border-primary-container transition-colors duration-300">
                        <div>
                            <span className="font-label-caps text-label-caps text-primary tracking-widest block mb-4">02 / CRAFTSMANSHIP</span>
                            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Creative Decoration</h3>
                            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                                Architectural botanicals, hand-dyed silks, sculptural wooden backdrops, and bespoke stage proportions designed to flatter cameras and guests.
                            </p>
                        </div>
                        <div className="mt-8 pt-4 border-t border-surface-variant flex items-center text-outline text-xs">
                            <span>Custom Scenography</span>
                        </div>
                    </div>

                    {/* Pillar 03 */}
                    <div className="p-8 bg-surface-container-low border border-surface-variant rounded-xl flex flex-col justify-between hover:border-primary-container transition-colors duration-300">
                        <div>
                            <span className="font-label-caps text-label-caps text-primary tracking-widest block mb-4">03 / SENSORY</span>
                            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Attention to Detail</h3>
                            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                                Warm-spectrum ambient lighting, textured stoneware, hand-selected seasonal blooms, and tailored table linen densities.
                            </p>
                        </div>
                        <div className="mt-8 pt-4 border-t border-surface-variant flex items-center text-outline text-xs">
                            <span>Tactile Materiality</span>
                        </div>
                    </div>

                    {/* Pillar 04 */}
                    <div className="p-8 bg-surface-container-low border border-surface-variant rounded-xl flex flex-col justify-between hover:border-primary-container transition-colors duration-300">
                        <div>
                            <span className="font-label-caps text-label-caps text-primary tracking-widest block mb-4">04 / HARMONY</span>
                            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Coordinated Hospitality</h3>
                            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                                End-to-end alignment between decor styling and artisanal catering courses so banqueting flows naturally with stage rites.
                            </p>
                        </div>
                        <div className="mt-8 pt-4 border-t border-surface-variant flex items-center text-outline text-xs">
                            <span>Impeccable Flow</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
