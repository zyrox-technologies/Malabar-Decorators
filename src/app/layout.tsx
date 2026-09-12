import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/common/SmoothScrollProvider";

const headingFont = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const sansFont = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://malabardecorators.com"),
  title: {
    default: "Malabar Decorators | Premium Catering & Wedding Event Decoration",
    template: "%s | Malabar Decorators",
  },
  description:
    "Delicious Food & Beautiful Decor for Every Occasion. Premium catering, Nikah decor, wedding stages, reception decor & complete event management across Kannur, Kozhikode, Kasaragod and North Kerala.",
  keywords: [
    "Malabar Decorators",
    "Kerala Catering",
    "Wedding Decoration Kannur",
    "Nikah Stage Decor",
    "Event Services Kerala",
    "Biriyani Catering",
    "Stage Decoration",
    "Wedding Planners Kerala",
    "North Kerala Decorators",
  ],
  authors: [{ name: "Malabar Decorators" }],
  creator: "Malabar Decorators",
  publisher: "Malabar Decorators",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://malabardecorators.com",
    siteName: "Malabar Decorators",
    title: "Malabar Decorators | Premium Catering & Wedding Event Decoration",
    description:
      "Delicious Food & Beautiful Decor for Every Occasion. Luxury stage scenography, authentic Malabar feasts, and complete event production in Kerala.",
    images: [
      {
        url: "/images/hero-wedding.webp",
        width: 1200,
        height: 630,
        alt: "Malabar Decorators Luxury Wedding Stage Scenography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Malabar Decorators | Premium Catering & Wedding Event Decoration",
    description:
      "Delicious Food & Beautiful Decor for Every Occasion. Premium stage scenography and banquet catering in Kerala.",
    images: ["/images/hero-wedding.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Malabar Decorators",
  image: "https://malabardecorators.com/images/hero-wedding.webp",
  "@id": "https://malabardecorators.com",
  url: "https://malabardecorators.com",
  telephone: "+91 99466 92100",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kuthuparamba Road",
    addressLocality: "Kannur",
    addressRegion: "Kerala",
    postalCode: "670001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 11.8745,
    longitude: 75.3704,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "08:00",
    closes: "21:00",
  },
  priceRange: "₹₹ - ₹₹₹₹",
  sameAs: [
    "https://instagram.com/malabardecorators",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${headingFont.variable} ${sansFont.variable} scroll-smooth`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-[#FAF8F2] text-[#241B18] antialiased selection:bg-[#8B1E23] selection:text-[#F2B93F] min-h-screen flex flex-col overflow-x-hidden">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
