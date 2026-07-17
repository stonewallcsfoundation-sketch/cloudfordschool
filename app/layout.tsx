import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plus = Plus_Jakarta_Sans({variable: "--font-geist-sans", subsets: ["latin"], weight: ["400", "500", "600", "700"]});

export const metadata: Metadata = {title: "CloudFord School Bauchi", description: "Elementary school with quality education"};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return <html lang="en"><body className={`${plus.variable} flex flex-col`}>{children}</body></html>;
}
