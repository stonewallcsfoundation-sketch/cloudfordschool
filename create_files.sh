#!/bin/bash

# Create layout.tsx
cat > app/layout.tsx << 'EOF'
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plus = Plus_Jakarta_Sans({variable: "--font-geist-sans", subsets: ["latin"], weight: ["400", "500", "600", "700"]});

export const metadata: Metadata = {title: "CloudFord School Bauchi", description: "Elementary school with quality education"};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return <html lang="en"><body className={`${plus.variable} flex flex-col`}>{children}</body></html>;
}
EOF

# Create globals.css
cat > app/globals.css << 'EOF'
@import "tailwindcss";
:root {--color-background: #fafaf8; --color-foreground: #2c2c2a; --color-primary: #6b9bd1; --color-primary-light: #a8d0ef; --color-secondary: #f4d888; --color-accent: #7cb96d; --color-accent-light: #b5e7a0; --color-text-light: #5a5a58; --color-border: #e8e6e1; --color-card: #ffffff; --radius: 1.5rem;}
@theme inline {--font-sans: var(--font-geist-sans); --color-background: var(--color-background); --color-foreground: var(--color-foreground); --color-primary: var(--color-primary); --color-primary-light: var(--color-primary-light); --color-secondary: var(--color-secondary); --color-accent: var(--color-accent); --color-accent-light: var(--color-accent-light); --color-text-light: var(--color-text-light); --color-border: var(--color-border); --color-card: var(--color-card); --radius: var(--radius);}
html {background-color: var(--color-background);}
body {background: var(--color-background); color: var(--color-foreground);}
EOF

# Create page.tsx  
cat > app/page.tsx << 'EOF'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Home() {
  return <>
    <Navbar/>
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h1 className="text-6xl font-bold text-[var(--color-foreground)]">CloudFord School Bauchi</h1>
            <p className="text-lg text-[var(--color-text-light)]">Where young minds grow, creativity flourishes, and every child discovers their potential.</p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-[var(--color-primary)] text-white rounded-xl font-semibold">Enroll Now</button>
              <button className="px-8 py-4 bg-[var(--color-secondary)] text-[var(--color-foreground)] rounded-xl font-semibold">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
  </>;
}
EOF

# Create Navbar.tsx
cat > components/Navbar.tsx << 'EOF'
"use client";
import Link from "next/link";
import {useState} from "react";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [{label: "Home", href: "/"}, {label: "About", href: "/about"}, {label: "Academics", href: "/academics"}, {label: "Admissions", href: "/admissions"}, {label: "Staff", href: "/staff"}, {label: "News", href: "/news"}, {label: "Gallery", href: "/gallery"}, {label: "Contact", href: "/contact"}];
  return <nav className="sticky top-0 z-50 bg-white shadow-md"><div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center"><Link href="/" className="font-bold">CloudFord School</Link><div className="hidden lg:flex space-x-4">{links.map(l => <Link key={l.href} href={l.href} className="text-sm hover:bg-[var(--color-primary-light)] px-3 py-2 rounded-lg">{l.label}</Link>)}</div></div></nav>;
}
EOF

# Create Footer.tsx
cat > components/Footer.tsx << 'EOF'
export default function Footer() {
  return <footer className="bg-[var(--color-foreground)] text-white py-12"><div className="max-w-7xl mx-auto px-4 text-center"><p>&copy; 2024 CloudFord School Bauchi. All rights reserved.</p></div></footer>;
}
EOF

# Create other page stubs
cat > app/about/page.tsx << 'EOF'
import Navbar from "@/components/Navbar"; import Footer from "@/components/Footer";
export default function About() {return <><Navbar/><section className="py-24"><div className="max-w-7xl mx-auto"><h1 className="text-4xl font-bold mb-4">About Us</h1><p>CloudFord School Bauchi - your child's home for learning and growth.</p></div></section><Footer/></>;  }
EOF

cat > app/academics/page.tsx << 'EOF'
import Navbar from "@/components/Navbar"; import Footer from "@/components/Footer";
export default function Academics() {return <><Navbar/><section className="py-24"><div className="max-w-7xl mx-auto"><h1 className="text-4xl font-bold mb-4">Academics</h1><p>Quality education from Kindergarten through Primary 5.</p></div></section><Footer/></>;  }
EOF

cat > app/admissions/page.tsx << 'EOF'
import Navbar from "@/components/Navbar"; import Footer from "@/components/Footer";
export default function Admissions() {return <><Navbar/><section className="py-24"><div className="max-w-7xl mx-auto"><h1 className="text-4xl font-bold mb-4">Admissions</h1><p>Enroll your child today. Schedule a campus tour.</p></div></section><Footer/></>;  }
EOF

cat > app/staff/page.tsx << 'EOF'
import Navbar from "@/components/Navbar"; import Footer from "@/components/Footer";
export default function Staff() {return <><Navbar/><section className="py-24"><div className="max-w-7xl mx-auto"><h1 className="text-4xl font-bold mb-4">Our Staff</h1><p>Meet our dedicated team of educators.</p></div></section><Footer/></>;  }
EOF

cat > app/news/page.tsx << 'EOF'
import Navbar from "@/components/Navbar"; import Footer from "@/components/Footer";
export default function News() {return <><Navbar/><section className="py-24"><div className="max-w-7xl mx-auto"><h1 className="text-4xl font-bold mb-4">News & Events</h1><p>Stay updated with school announcements.</p></div></section><Footer/></>;  }
EOF

cat > app/contact/page.tsx << 'EOF'
"use client"; 
import Navbar from "@/components/Navbar"; import Footer from "@/components/Footer"; import {useState} from "react";
export default function Contact() {const [submitted, setSubmitted] = useState(false); const handleSubmit = (e: React.FormEvent) => {e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 2000);}; return <><Navbar/><section className="py-24"><div className="max-w-7xl mx-auto"><h1 className="text-4xl font-bold mb-4">Contact Us</h1><p className="mb-6">Phone: +234 (0) 701 234 5678</p><form onSubmit={handleSubmit} className="max-w-md space-y-4"><input type="text" placeholder="Name" className="w-full px-4 py-2 border rounded-lg" required/><input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg" required/><textarea placeholder="Message" rows={5} className="w-full px-4 py-2 border rounded-lg" required/><button type="submit" className="w-full px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg">{submitted ? "✓ Sent" : "Send"}</button></form></div></section><Footer/></>;  }
EOF

echo "All files created!"
