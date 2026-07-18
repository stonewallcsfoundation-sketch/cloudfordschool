'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const galleryItems = [
    {
      id: 1,
      category: 'Celebrations',
      title: 'Independence Day Celebration',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Independence%20day%20celebration-Y3O1RwBJVIF9C7GmCGzx3osQmYC6s4.jpeg',
    },
    {
      id: 2,
      category: 'School Life',
      title: 'Students with Royal Father',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cloudford%20learners%20in%20a%20picture%20with%20the%20amiable%20royal%20father%20Alh%20Dr.%20Rilwanu%20Suleiman%20Adamu-MpFpmFLJGsH1FMtr6RurlFSnJTmbrR.jpeg',
    },
    {
      id: 3,
      category: 'Community',
      title: 'School Event & Community Engagement',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cloud-3sv4yXRsC08ev7MAJTl0tW7uVVVBq0.jpeg',
    },
    {
      id: 4,
      category: 'Learning',
      title: 'Active Classroom Learning',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cloud%201-NEaSSFXrhJhx8mkYQPUpKaiCeJDHDx.jpeg',
    },
    {
      id: 5,
      category: 'Celebrations',
      title: 'Cultural Dance & Celebration',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cllll-SCwaMzuze1VTpAQn5kCAdvP0DlTV2c.jpeg',
    },
    {
      id: 6,
      category: 'Community',
      title: 'Parent & Community Gathering',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cll-FgaKcj3NHdQewYemBkjmbnxZh6lo0U.jpeg',
    },
    {
      id: 7,
      category: 'Achievements',
      title: 'Graduation & Success',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20photo%20of%20school%20management%2C%20staff%2C%20parents%20and%20learners%20of%20middle%20school%20section%20during%20the%20first%20graduation.-JKIEQIKlKHSxmEpCh8pKmc20OTO0Pt.jpeg',
    },
  ];

  const categories = ['All', 'School Life', 'Learning', 'Celebrations', 'Community', 'Achievements'];

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-gradient-to-br from-[#F7B801] to-[#FF6B35] text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
            <p className="text-xl text-gray-100">Celebrating moments from CloudFord School Bauchi</p>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="py-12 md:py-16 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all ${
                    selectedCategory === category
                      ? 'bg-[#FF6B35] text-white shadow-lg'
                      : 'bg-[#F9F9F9] text-[#1A1A1A] hover:bg-[#FFF5F0] border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 md:py-24 bg-[#FAFAF8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-80 cursor-pointer"
                >
                  {/* Image */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-[#F7B801] text-sm font-semibold mb-2">{item.category}</p>
                    <h3 className="text-white text-lg font-bold">{item.title}</h3>
                  </div>

                  {/* Icon */}
                  <div className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xl">🖼️</span>
                  </div>
                </div>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <p className="text-2xl text-[#8B8B8B]">No images found in this category</p>
              </div>
            )}
          </div>
        </section>

        {/* About Our Moments */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center mb-8">Celebrating Our Community</h2>
            <p className="text-lg text-[#8B8B8B] text-center mb-8">
              These photos capture the vibrant spirit of CloudFord School Bauchi. From academic achievements to cultural celebrations, community events to everyday learning moments, each image tells a story of growth, joy, and togetherness.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-center">
              {[
                {
                  title: 'Learning Moments',
                  description: 'Capturing students engaged in active learning across our classrooms and facilities.',
                  icon: '📚',
                },
                {
                  title: 'Celebrations',
                  description: 'Colorful moments from school events, cultural celebrations, and community gatherings.',
                  icon: '🎉',
                },
                {
                  title: 'Achievements',
                  description: 'Documenting the successes and milestones our students reach throughout the year.',
                  icon: '🏆',
                },
              ].map((item, idx) => (
                <div key={idx} className="p-6">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{item.title}</h3>
                  <p className="text-[#8B8B8B]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Share Your Photos */}
        <section className="py-16 md:py-24 bg-[#FFF5F0]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">Share Your CloudFord Moments</h2>
            <p className="text-xl text-[#8B8B8B] mb-8">
              Do you have photos from CloudFord School events? We&apos;d love to feature them in our gallery! Send us your favorite memories and help us celebrate our vibrant school community.
            </p>
            <a
              href="/contact"
              className="btn-primary text-lg inline-block"
            >
              Send Us Your Photos
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
