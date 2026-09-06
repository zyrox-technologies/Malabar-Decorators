export default function Instagram() {
    return (
        <section className="py-space-2xl bg-surface border-t border-surface-variant">
            <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4 text-center sm:text-left">
                    <div>
                        <h2 className="font-headline-sm text-headline-sm text-on-surface">@malabardecorators</h2>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Daily inspiration from our latest celebrations</p>
                    </div>
                    <a 
                        href="https://instagram.com" 
                        rel="noopener noreferrer" 
                        target="_blank"
                        className="inline-flex items-center gap-2 bg-surface-container hover:bg-surface-variant text-on-surface px-6 py-2.5 rounded-lg font-label-sm text-label-sm tracking-wider uppercase transition-colors"
                    >
                        Follow Us
                    </a>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                    {/* Post 1 */}
                    <a href="#" target="_blank" className="relative w-full aspect-square rounded-lg overflow-hidden group border border-surface-variant">
                        <img 
                            alt="Instagram feed post showing floral centerpieces" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
                        />
                        <div className="absolute inset-0 bg-inverse-surface/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="material-symbols-outlined text-surface-bright text-3xl">favorite</span>
                        </div>
                    </a>

                    {/* Post 2 */}
                    <a href="#" target="_blank" className="relative w-full aspect-square rounded-lg overflow-hidden group border border-surface-variant">
                        <img 
                            alt="Instagram feed post showing table setting" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                            src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop"
                        />
                        <div className="absolute inset-0 bg-inverse-surface/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="material-symbols-outlined text-surface-bright text-3xl">favorite</span>
                        </div>
                    </a>

                    {/* Post 3 */}
                    <a href="#" target="_blank" className="relative w-full aspect-square rounded-lg overflow-hidden group border border-surface-variant">
                        <img 
                            alt="Instagram feed post showing stage decor" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                            src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2070&auto=format&fit=crop"
                        />
                        <div className="absolute inset-0 bg-inverse-surface/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="material-symbols-outlined text-surface-bright text-3xl">favorite</span>
                        </div>
                    </a>

                    {/* Post 4 */}
                    <a href="#" target="_blank" className="relative w-full aspect-square rounded-lg overflow-hidden group border border-surface-variant">
                        <img 
                            alt="Instagram feed post showing lighting" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
                        />
                        <div className="absolute inset-0 bg-inverse-surface/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="material-symbols-outlined text-surface-bright text-3xl">favorite</span>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
