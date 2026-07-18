import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CloudFord School Bauchi | Quality Education for All',
  description: 'CloudFord School Bauchi - Nurturing bright minds in a warm, supportive environment. Quality education with experienced teachers, modern facilities, and community focus.',
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
