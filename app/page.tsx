'use client';

import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[500px] md:min-h-[600px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35] via-[#FFA500] to-[#004E89]" />
          
          {/* Hero Image Overlay */}
          <div className="absolute inset-0 opacity-30">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cloud-3sv4yXRsC08ev7MAJTl0tW7uVVVBq0.jpeg"
              alt="CloudFord School"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center py-20 md:py-32">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
              Welcome to CloudFord School Bauchi
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl text-balance">
              Where Every Child&apos;s Potential Shines Bright ✨
            </p>
            <p className="text-lg text-gray-100 mb-12 max-w-2xl">
              Quality education in a warm, supportive community that celebrates every student&apos;s unique gifts.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/admissions"
                className="btn-primary bg-white text-[#FF6B35] hover:bg-gray-100 text-lg font-semibold"
              >
                Start Your Journey
              </Link>
              <Link
                href="/about"
                className="px-8 py-3 bg-[#004E89] text-white rounded-lg font-semibold hover:bg-[#003D6B] transition-colors border-2 border-white text-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center mb-12">Explore Our School</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Admissions */}
              <Link href="/admissions" className="group">
                <div className="bg-gradient-to-br from-[#FFF5F0] to-[#FFE8DC] rounded-xl p-8 hover:shadow-lg transition-shadow h-full">
                  <div className="w-16 h-16 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-3xl">📝</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">Admissions</h3>
                  <p className="text-[#8B8B8B] mb-4">
                    Learn about our enrollment process, requirements, and schedule a tour of our facilities.
                  </p>
                  <span className="text-[#FF6B35] font-semibold group-hover:underline">Explore →</span>
                </div>
              </Link>

              {/* Card 2: About Us */}
              <Link href="/about" className="group">
                <div className="bg-gradient-to-br from-[#E8F5FF] to-[#D1E7F5] rounded-xl p-8 hover:shadow-lg transition-shadow h-full">
                  <div className="w-16 h-16 bg-[#004E89] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-3xl">🏫</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">About Us</h3>
                  <p className="text-[#8B8B8B] mb-4">
                    Discover our mission, vision, and what makes CloudFord School special.
                  </p>
                  <span className="text-[#004E89] font-semibold group-hover:underline">Learn More →</span>
                </div>
              </Link>

              {/* Card 3: Gallery */}
              <Link href="/gallery" className="group">
                <div className="bg-gradient-to-br from-[#FFFEF0] to-[#FFF8DC] rounded-xl p-8 hover:shadow-lg transition-shadow h-full">
                  <div className="w-16 h-16 bg-[#F7B801] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-3xl">🎨</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">Gallery</h3>
                  <p className="text-[#8B8B8B] mb-4">
                    See our vibrant school life, events, and community celebrations.
                  </p>
                  <span className="text-[#F7B801] font-semibold group-hover:underline">View Gallery →</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="py-16 md:py-24 bg-[#FFF5F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title">A Community Built on Trust</h2>
                <p className="text-lg text-[#8B8B8B] mb-6">
                  At CloudFord School Bauchi, we believe every child deserves a warm, nurturing environment where they can learn, grow, and thrive. Our experienced teachers and supportive community create the perfect foundation for academic excellence and personal development.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex gap-3 items-start">
                    <span className="text-[#FF6B35] font-bold text-xl">✓</span>
                    <span className="text-[#1A1A1A]">Experienced, dedicated teachers</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[#FF6B35] font-bold text-xl">✓</span>
                    <span className="text-[#1A1A1A]">Modern learning facilities</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[#FF6B35] font-bold text-xl">✓</span>
                    <span className="text-[#1A1A1A]">Vibrant school community</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[#FF6B35] font-bold text-xl">✓</span>
                    <span className="text-[#1A1A1A]">Holistic child development</span>
                  </li>
                </ul>
                <Link href="/about" className="btn-primary">
                  Discover More
                </Link>
              </div>
              <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cloudford%20learners%20in%20a%20picture%20with%20the%20amiable%20royal%20father%20Alh%20Dr.%20Rilwanu%20Suleiman%20Adamu-MpFpmFLJGsH1FMtr6RurlFSnJTmbrR.jpeg"
                  alt="CloudFord Students"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center mb-12">Latest Updates</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  date: 'Dec 15, 2024',
                  title: 'Independence Day Celebration',
                  excerpt: 'Our vibrant community came together for a colorful Independence Day celebration...',
                  icon: '🎉',
                },
                {
                  date: 'Dec 1, 2024',
                  title: 'New Admissions Open',
                  excerpt: 'We are delighted to announce our admissions for the 2025 academic session...',
                  icon: '📚',
                },
                {
                  date: 'Nov 25, 2024',
                  title: 'School Annual Event',
                  excerpt: 'Students showcased their talents and achievements at our annual gathering...',
                  icon: '⭐',
                },
              ].map((news, idx) => (
                <div key={idx} className="bg-gradient-to-br from-[#F9F9F9] to-[#FFFFFF] rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="flex gap-3 items-start mb-4">
                    <span className="text-3xl">{news.icon}</span>
                    <span className="text-sm text-[#FF6B35] font-semibold">{news.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">{news.title}</h3>
                  <p className="text-[#8B8B8B] text-sm">{news.excerpt}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/news" className="btn-primary">
                See All News & Events
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
