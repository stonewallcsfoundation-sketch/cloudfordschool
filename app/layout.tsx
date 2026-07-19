import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CloudFord School Bauchi | Quality Education for All',
  description: 'CloudFord School Bauchi - Nurturing bright minds in a warm, supportive environment. Quality education with experienced teachers, modern facilities, and community focus.',
  keywords: 'CloudFord School, Bauchi, Primary School, Secondary School, Education, Nigeria',
  authors: [{ name: 'CloudFord School' }],
  metadataBase: new URL('https://cloudfordschool.com'),
  alternates: {
    canonical: 'https://cloudfordschool.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cloudfordschool.com',
    title: 'CloudFord School Bauchi | Quality Education for All',
    description: 'CloudFord School Bauchi - Nurturing bright minds in a warm, supportive environment. Quality education with experienced teachers, modern facilities, and community focus.',
    siteName: 'CloudFord School Bauchi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CloudFord School Bauchi',
    description: 'Quality Education for All',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
