import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

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
  title: "Malabar Decorators | Premium Catering & Wedding Event Decoration",
  description:
    "Delicious Food & Beautiful Decor for Every Occasion. Premium catering, Nikah decor, wedding stages, reception decor & complete event management in Kannur, Kerala.",
  keywords: [
    "Malabar Decorators",
    "Kerala Catering",
    "Wedding Decoration Kannur",
    "Nikah Stage Decor",
    "Event Services Kerala",
    "Biriyani Catering",
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
      className={`${headingFont.variable} ${sansFont.variable} scroll-smooth`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-[#FAF8F2] text-[#241B18] antialiased selection:bg-[#8B1E23] selection:text-[#F2B93F] min-h-screen flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

