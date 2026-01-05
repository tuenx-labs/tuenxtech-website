import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tuenx Technologies | Enterprise Solutions",
  description: "Global digital transformation partner specializing in AI, Cloud, and Software Engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children} 
        {/* DO NOT put <Navbar /> or <Footer /> here, 
            because they are already inside your page.tsx files */}
      </body>
    </html>
  );
}