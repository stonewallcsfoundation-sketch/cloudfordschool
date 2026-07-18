'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/admissions', label: 'Admissions' },
    { href: '/news', label: 'News & Events' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-zmDTc2ECk0vUAaGIFSHlOU1Bg23BTz.jpeg"
              alt="CloudFord School Logo"
              width={50}
              height={60}
              className="h-12 w-auto md:h-16"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-[#1A1A1A]">CloudFord School</h1>
              <p className="text-xs text-[#8B8B8B]">Bauchi</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#1A1A1A] hover:text-[#FF6B35] transition-colors font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/admissions"
            className="hidden lg:block btn-primary text-sm"
          >
            Enroll Now
          </Link>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-[#1A1A1A] hover:bg-[#FFF5F0] rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/admissions"
              className="block px-4 py-2 btn-primary text-center mt-4"
              onClick={() => setIsOpen(false)}
            >
              Enroll Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
