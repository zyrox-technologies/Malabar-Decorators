import { siteData } from "@/data/site";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

export default function Instagram() {
    return (
        <section className="py-space-2xl bg-surface border-t border-surface-variant">
            <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4 text-center sm:text-left">
                    <SectionHeader 
                        headline={siteData.instagram.handle}
                        subheadline={siteData.instagram.description}
                        size="sm"
                    />
                    <Button 
                        href={siteData.instagram.link} 
                        external 
                        variant="surface"
                        size="sm"
                    >
                        Follow Us
                    </Button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                    {siteData.instagram.posts.map((post, index) => (
                        <a key={index} href={post.link} target="_blank" rel="noopener noreferrer" className="relative w-full aspect-square rounded-lg overflow-hidden group border border-surface-variant">
                            <img 
                                alt={post.alt} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                src={post.image}
                            />
                            <div className="absolute inset-0 bg-inverse-surface/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="material-symbols-outlined text-surface-bright text-3xl">favorite</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
