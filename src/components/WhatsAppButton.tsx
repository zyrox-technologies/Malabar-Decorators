"use client";

export default function WhatsAppButton() {
    const whatsappUrl =
        "https://wa.me/919946692100?text=Hi%20Malabar%20Decorators,%20I%20would%20like%20to%20enquire%20about%20your%20services";

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_rgba(37,211,102,0.5)] hover:shadow-[0_15px_30px_rgba(37,211,102,0.7)] hover:scale-110 active:scale-95 transition-all duration-300 group"
            aria-label="Chat with Malabar Decorators on WhatsApp"
        >
            {/* Animated Pulse Outer Ring */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping pointer-events-none" />

            {/* Official WhatsApp Logo SVG */}
            <svg
                className="w-8 h-8 sm:w-9 sm:h-9 fill-current relative z-10"
                viewBox="0 0 24 24"
            >
                <path d="M12.031 0C5.396 0 .013 5.385.013 12.02c0 2.12.553 4.19 1.606 6.014L.001 24l6.155-1.614c1.76.958 3.748 1.464 5.875 1.464 6.635 0 12.018-5.385 12.018-12.02C24.049 5.385 18.666 0 12.031 0zm0 22.003c-1.8 0-3.565-.484-5.105-1.4l-.366-.217-3.794.995 1.012-3.697-.238-.38C2.518 15.707 1.986 13.9 1.986 12.02c0-5.538 4.507-10.045 10.045-10.045 5.538 0 10.045 4.507 10.045 10.045 0 5.539-4.507 10.045-10.045 10.045zm5.504-7.518c-.302-.151-1.787-.882-2.063-.983-.276-.1-.477-.151-.678.151-.201.302-.78.983-.956 1.184-.176.201-.352.226-.654.075-1.688-.844-2.825-1.503-3.95-3.434-.297-.51.298-.473.854-1.587.099-.201.05-.377-.025-.528-.075-.151-.678-1.634-.929-2.238-.244-.588-.492-.508-.678-.518-.176-.008-.377-.01-.578-.01s-.528.075-.804.377c-.276.302-1.056 1.031-1.056 2.516s1.08 2.917 1.231 3.118c.151.201 2.126 3.246 5.151 4.553 1.838.793 2.56.87 3.487.732.563-.084 1.787-.73 2.039-1.433.252-.704.252-1.307.176-1.433-.075-.126-.276-.201-.578-.352z" />
            </svg>

            {/* Hover Tooltip */}
            <span className="absolute right-full mr-3 whitespace-nowrap bg-[#171110] text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-[#F2B93F]/40">
                Chat on WhatsApp
            </span>
        </a>
    );
}
