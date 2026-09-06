import Image from "next/image";

export default function MomentsInMotion() {
    const videos = [
        {
            title: "The Royal Pavilion Setup",
            duration: "3:45",
            thumbnail: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
        },
        {
            title: "Authentic Culinary Journey",
            duration: "2:10",
            thumbnail: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
        },
        {
            title: "Minimalist Floral Architecture",
            duration: "1:55",
            thumbnail: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2070&auto=format&fit=crop",
        },
        {
            title: "Celebration Highlights",
            duration: "4:20",
            thumbnail: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
        },
    ];

    return (
        <section className="py-space-2xl md:py-space-3xl overflow-hidden bg-surface" id="gallery">
            <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop mb-10">
                <div className="flex flex-col sm:flex-row items-end justify-between gap-6">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-2">MOMENTS IN MOTION</span>
                        <h2 className="font-headline-md text-headline-md text-on-surface">Experience Our Craft</h2>
                    </div>
                    <div className="flex items-center gap-3">
                        <button aria-label="Previous video" className="w-12 h-12 rounded-full border border-surface-variant flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors">
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                        <button aria-label="Next video" className="w-12 h-12 rounded-full border border-surface-variant flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors">
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Horizontal Scrolling Strip */}
            <div className="pl-gutter-mobile md:pl-gutter-tablet lg:pl-gutter-desktop max-w-max-width mx-auto">
                <div className="flex overflow-x-auto gap-6 pb-8 snap-x no-scrollbar pr-gutter-mobile md:pr-gutter-tablet lg:pr-gutter-desktop">
                    {videos.map((video, idx) => (
                        <div key={idx} className="snap-start shrink-0 w-[280px] md:w-[400px] group cursor-pointer">
                            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-surface-variant mb-4">
                                <img 
                                    alt={`Video thumbnail of ${video.title}`} 
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100" 
                                    src={video.thumbnail}
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-14 h-14 rounded-full bg-surface/30 backdrop-blur-md border border-surface-bright/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <span className="material-symbols-outlined text-surface-bright ml-1">play_arrow</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <h3 className="font-label-md text-label-md text-on-surface font-semibold">{video.title}</h3>
                                <span className="font-label-sm text-label-sm text-on-surface-variant">{video.duration}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
