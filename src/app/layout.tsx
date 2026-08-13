import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const serifFont = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
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
      className={`${serifFont.variable} ${sansFont.variable} scroll-smooth`}
    >
      <body className="font-sans bg-[#FAF8F2] text-[#241B18] antialiased selection:bg-[#8B1E23] selection:text-[#F2B93F] min-h-screen flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

