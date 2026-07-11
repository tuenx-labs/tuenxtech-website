import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tuenx Technologies | Enterprise Digital Transformation",
  description: "Global leader in AI, Cloud Computing, and Enterprise Engineering. We build the digital infrastructure that powers the world's leading organizations.",
  keywords: ["Enterprise AI", "Cloud Transformation", "Software Engineering", "Tuenx", "Tech Consulting"],
  authors: [{ name: "Tuenx Technologies" }],
  openGraph: {
    title: "Tuenx Technologies - Engineering the Future",
    description: "Discover how Tuenx helps enterprises scale with AI and Cloud Native solutions.",
    url: "https://tuenxtech-website.vercel.app",
    siteName: "Tuenx Technologies",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${newsreader.variable} ${inter.className} bg-white text-[#0B1220] antialiased`}>
        {children}
      </body>
    </html>
  );
}
