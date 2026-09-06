import Link from "next/link";
import Image from "next/image";

export default function Storytelling() {
    return (
        <section className="py-space-3xl md:py-space-4xl bg-surface-container-low border-t border-surface-variant">
            <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    {/* Left: Image */}
                    <div className="relative w-full h-[500px] lg:h-[700px] rounded-xl overflow-hidden border border-surface-variant shadow-sm group">
                        <img 
                            alt="Close up of bespoke floral arrangement on a textured table setting" 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                            src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1973&auto=format&fit=crop"
                        />
                        <div className="absolute inset-0 border border-primary-container/20 rounded-xl m-4 pointer-events-none"></div>
                    </div>
                    {/* Right: Text Content */}
                    <div className="max-w-xl">
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">THE MALABAR APPROACH</span>
                        <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface tracking-tight mb-8">
                            Curating Atmospheres that Demand to be Felt
                        </h2>
                        <div className="space-y-6 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                            <p>
                                We believe a successful event does not merely look beautiful in photographs; it envelops guests the moment they arrive. Our design process starts with understanding the emotional resonance you wish to achieve.
                            </p>
                            <p>
                                By layering structural design with sensory details—the drape of a fabric, the direction of light, the sequence of flavors—we build environments that feel both expansive and intimately personal.
                            </p>
                            <p>
                                Every Malabar celebration is a masterclass in balance. We manage the complexity behind the scenes so that your experience of the day remains completely effortless.
                            </p>
                        </div>
                        <div className="mt-10">
                            <Link href="/#contact" className="bg-primary-container hover:bg-primary text-on-primary px-8 py-3.5 rounded-lg font-label-md text-label-md tracking-wider uppercase transition-all duration-200 shadow-sm hover:shadow-md inline-block">
                                Begin your consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
