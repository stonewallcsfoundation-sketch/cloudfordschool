'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-[#004E89] text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About CloudFord School</h1>
            <p className="text-xl text-gray-200">Nurturing minds, building futures since 2015</p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-[#FFF5F0] to-[#FFE8DC] rounded-xl p-8">
                <h3 className="text-3xl font-bold text-[#FF6B35] mb-4">Our Mission</h3>
                <p className="text-lg text-[#1A1A1A] leading-relaxed">
                  To provide quality, inclusive education that develops confident, creative, and compassionate learners who are prepared to excel academically and contribute positively to their communities.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#E8F5FF] to-[#D1E7F5] rounded-xl p-8">
                <h3 className="text-3xl font-bold text-[#004E89] mb-4">Our Vision</h3>
                <p className="text-lg text-[#1A1A1A] leading-relaxed">
                  To be a beacon of educational excellence in Bauchi, where every child is encouraged to discover their potential, embrace their uniqueness, and grow into responsible global citizens.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="py-16 md:py-24 bg-[#FFF5F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20photo%20of%20school%20management%2C%20staff%2C%20parents%20and%20learners%20of%20middle%20school%20section%20during%20the%20first%20graduation.-JKIEQIKlKHSxmEpCh8pKmc20OTO0Pt.jpeg"
                  alt="School Graduation"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="section-title">Our Story</h2>
                <p className="text-lg text-[#8B8B8B] mb-6">
                  Founded in 2015, CloudFord School Bauchi was established with a vision to revolutionize early childhood and primary education in our community. What started as a small initiative with a handful of students has grown into a thriving institution recognized for its commitment to excellence, innovation, and student-centered learning.
                </p>
                <p className="text-lg text-[#8B8B8B] mb-6">
                  Over the years, we have graduated hundreds of students who are making meaningful contributions to society. Our success is built on a foundation of strong academic programs, dedicated educators, and a vibrant community that genuinely cares about each child&apos;s development.
                </p>
                <p className="text-lg text-[#8B8B8B]">
                  Today, CloudFord School continues to set standards for quality education in Bauchi, maintaining our commitment to creating a warm, supportive, and inspiring learning environment for all our students.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center mb-12">Why Choose CloudFord School?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: '👨‍🏫',
                  title: 'Experienced Teachers',
                  description: 'Our faculty members are qualified professionals with years of experience in early childhood and primary education.',
                },
                {
                  icon: '📚',
                  title: 'Holistic Curriculum',
                  description: 'We balance academics with arts, sports, and character development to nurture well-rounded individuals.',
                },
                {
                  icon: '🏫',
                  title: 'Modern Facilities',
                  description: 'Our colorful, vibrant school environment is designed to inspire creativity and foster a love for learning.',
                },
                {
                  icon: '👨‍👩‍👧',
                  title: 'Community Focus',
                  description: 'We maintain strong partnerships with parents and involve families in our school activities and celebrations.',
                },
                {
                  icon: '✨',
                  title: 'Individual Attention',
                  description: 'Small class sizes ensure every student receives personalized attention and support from their teachers.',
                },
                {
                  icon: '🎯',
                  title: 'Values-Based Education',
                  description: 'We instill values of integrity, respect, and responsibility in every aspect of school life.',
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-[#F9F9F9] to-[#FFFFFF] border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{item.title}</h3>
                  <p className="text-[#8B8B8B]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 md:py-24 bg-[#004E89] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { value: 'Excellence', emoji: '⭐' },
                { value: 'Integrity', emoji: '🤝' },
                { value: 'Inclusivity', emoji: '🌍' },
                { value: 'Compassion', emoji: '❤️' },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-6xl mb-4">{item.emoji}</div>
                  <h3 className="text-2xl font-bold">{item.value}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
