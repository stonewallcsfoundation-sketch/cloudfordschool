import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plus = Plus_Jakarta_Sans({variable: "--font-geist-sans", subsets: ["latin"], weight: ["400", "500", "600", "700"]});

export const metadata: Metadata = {title: "CloudFord School Bauchi", description: "Elementary school with quality education"};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return <html lang="en" className="scroll-smooth bg-[var(--color-background)]"><body className={`${plus.variable} min-h-full flex flex-col antialiased`}>{children}</body></html>;
}
