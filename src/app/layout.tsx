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
    default: "Malabar Decorators | Event Decoration & Catering in Kasaragod",
    template: "%s | Malabar Decorators",
  },
  description:
    "Malabar Decorators provides event decoration and catering services for weddings, receptions, engagements, parties, inaugurations and other special occasions in Kasaragod and surrounding areas.",
  keywords: [
    "Malabar Decorators",
    "Kasaragod Event Decorators",
    "Wedding Decoration Kasaragod",
    "Kerala Sadya Catering",
    "Stage Decoration Kasaragod",
    "Event Catering Kasaragod",
    "Biriyani Catering",
    "Mandap Decoration",
    "Karandakkad",
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
    title: "Malabar Decorators | Event Decoration & Catering in Kasaragod",
    description:
      "Event decoration and catering services for weddings, receptions, parties, and celebrations in Kasaragod, Kerala. Established in 2011.",
    images: [
      {
        url: "/images/hero/file_00000000eb0c820bbe3fae738cbee3e7.webp",
        width: 1200,
        height: 630,
        alt: "Malabar Decorators Event Decoration & Catering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Malabar Decorators | Event Decoration & Catering in Kasaragod",
    description:
      "Event decoration and catering services for weddings, receptions, and celebrations in Kasaragod, Kerala.",
    images: ["/images/hero/file_00000000eb0c820bbe3fae738cbee3e7.webp"],
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
  image: "https://malabardecorators.com/images/hero/file_00000000eb0c820bbe3fae738cbee3e7.webp",
  "@id": "https://malabardecorators.com",
  url: "https://malabardecorators.com",
  telephone: "+91 99466 92100",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Golden Arcade, 1st Floor, Opposite New Bus Stand, Karandakkad",
    addressLocality: "Kasaragod",
    addressRegion: "Kerala",
    postalCode: "671121",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.5085,
    longitude: 74.9877,
  },
  sameAs: [
    "https://www.instagram.com/malabar_decorators/?hl=en",
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
