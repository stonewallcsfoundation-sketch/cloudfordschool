"use client";
import Link from "next/link";
import {useState} from "react";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [{label: "Home", href: "/"}, {label: "About", href: "/about"}, {label: "Academics", href: "/academics"}, {label: "Admissions", href: "/admissions"}, {label: "Staff", href: "/staff"}, {label: "News", href: "/news"}, {label: "Gallery", href: "/gallery"}, {label: "Contact", href: "/contact"}];
  return <nav className="sticky top-0 z-50 bg-white shadow-md"><div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center"><Link href="/" className="font-bold">CloudFord School</Link><div className="hidden lg:flex space-x-4">{links.map(l => <Link key={l.href} href={l.href} className="text-sm hover:bg-[var(--color-primary-light)] px-3 py-2 rounded-lg">{l.label}</Link>)}</div></div></nav>;
}
