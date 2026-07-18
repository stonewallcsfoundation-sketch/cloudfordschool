'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function News() {
  const newsItems = [
    {
      id: 1,
      date: 'December 15, 2024',
      title: 'Independence Day Celebration',
      excerpt: 'Our vibrant school community came together in patriotic spirit to celebrate Nigeria\'s Independence Day.',
      content: 'Students and staff dressed in green and white, participated in cultural performances, flag-raising ceremonies, and discussed the importance of national unity. It was a memorable day filled with joy, pride, and celebration.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Independence%20day%20celebration-Y3O1RwBJVIF9C7GmCGzx3osQmYC6s4.jpeg',
      category: 'Celebration',
      icon: '🎊',
    },
    {
      id: 2,
      date: 'December 1, 2024',
      title: 'Academic Excellence Recognition',
      excerpt: 'We celebrated the outstanding achievements of our top-performing students across all class levels.',
      content: 'Our annual academic excellence ceremony recognized students who demonstrated exceptional performance in academics, sports, and conduct. Parents and guardians were invited to witness their children\'s achievements and share in the celebration.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cloudford%20learners%20in%20a%20picture%20with%20the%20amiable%20royal%20father%20Alh%20Dr.%20Rilwanu%20Suleiman%20Adamu-MpFpmFLJGsH1FMtr6RurlFSnJTmbrR.jpeg',
      category: 'Achievement',
      icon: '🏆',
    },
    {
      id: 3,
      date: 'November 25, 2024',
      title: '2025 Admissions Now Open',
      excerpt: 'CloudFord School is welcoming applications for the 2025 academic session across all class levels.',
      content: 'We are thrilled to open our admissions for the upcoming academic year. We invite interested parents and guardians to visit our school, meet our dedicated teachers, and experience our warm learning environment. Early applications are encouraged.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cloud-3sv4yXRsC08ev7MAJTl0tW7uVVVBq0.jpeg',
      category: 'Admissions',
      icon: '📚',
    },
    {
      id: 4,
      date: 'November 15, 2024',
      title: 'Community Learning Day',
      excerpt: 'Students participated in interactive workshops led by community members, learning practical life skills.',
      content: 'Our Community Learning Day featured sessions on entrepreneurship, health and wellness, environmental conservation, and digital literacy. Students engaged enthusiastically and gained valuable insights from experienced professionals.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cloud%201-NEaSSFXrhJhx8mkYQPUpKaiCeJDHDx.jpeg',
      category: 'Learning',
      icon: '🌟',
    },
    {
      id: 5,
      date: 'November 1, 2024',
      title: 'New Art & Craft Program Launched',
      excerpt: 'We introduced a comprehensive art program designed to nurture creativity and artistic expression.',
      content: 'Our new Art & Craft program allows students to explore various forms of creative expression including painting, drawing, sculpture, and traditional crafts. This initiative aims to develop students\' creativity, fine motor skills, and appreciation for art.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cllll-SCwaMzuze1VTpAQn5kCAdvP0DlTV2c.jpeg',
      category: 'Programs',
      icon: '🎨',
    },
    {
      id: 6,
      date: 'October 20, 2024',
      title: 'Parent-Teacher Conference',
      excerpt: 'Engaging discussions between parents and teachers about student progress and development.',
      content: 'Our quarterly parent-teacher conference provided an opportunity for meaningful dialogue about each student\'s academic performance, behavior, and overall development. Parents appreciated the open communication and constructive feedback from our teaching staff.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cll-FgaKcj3NHdQewYemBkjmbnxZh6lo0U.jpeg',
      category: 'Community',
      icon: '👨‍👩‍👧',
    },
  ];

  const categories = ['All', 'Celebration', 'Achievement', 'Admissions', 'Learning', 'Programs', 'Community'];

  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-gradient-to-br from-[#004E89] to-[#003D6B] text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Events</h1>
            <p className="text-xl text-gray-200">Stay updated with CloudFord School happenings</p>
          </div>
        </section>

        {/* News Feed */}
        <section className="py-16 md:py-24 bg-[#FAFAF8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Featured News Item */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-12 hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-full min-h-80">
                  <Image
                    src={newsItems[0].image}
                    alt={newsItems[0].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{newsItems[0].icon}</span>
                    <span className="text-sm text-[#FF6B35] font-semibold bg-[#FFF5F0] px-3 py-1 rounded-full">{newsItems[0].category}</span>
                  </div>
                  <p className="text-sm text-[#8B8B8B] mb-3">{newsItems[0].date}</p>
                  <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">{newsItems[0].title}</h2>
                  <p className="text-lg text-[#8B8B8B] mb-6">{newsItems[0].content}</p>
                  <a href="#" className="text-[#FF6B35] font-semibold hover:underline inline-block">
                    Read Full Story →
                  </a>
                </div>
              </div>
            </div>

            {/* News Grid */}
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8">Recent Updates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {newsItems.slice(1).map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow group cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-xs text-[#FF6B35] font-semibold bg-[#FFF5F0] px-2 py-1 rounded">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-sm text-[#8B8B8B] mb-2">{item.date}</p>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#FF6B35] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#8B8B8B] mb-4">{item.excerpt}</p>
                    <a href="#" className="text-[#FF6B35] font-semibold hover:underline inline-block">
                      Read More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title mb-12">Upcoming Events</h2>
            
            <div className="space-y-6">
              {[
                {
                  date: 'January 20, 2025',
                  time: '9:00 AM - 2:00 PM',
                  event: 'Open Day - School Visit for Parents',
                  description: 'Parents and guardians are welcome to visit the school, tour our facilities, and meet our teaching staff.',
                },
                {
                  date: 'February 14, 2025',
                  time: '10:00 AM - 12:00 PM',
                  event: 'Science & Technology Fair',
                  description: 'Students will showcase innovative science projects and technological innovations in an interactive fair.',
                },
                {
                  date: 'March 7, 2025',
                  time: 'All Day',
                  event: 'Inter-School Sports Competition',
                  description: 'CloudFord School will host athletics and sports competitions with schools across Bauchi.',
                },
                {
                  date: 'April 15, 2025',
                  time: '3:00 PM - 5:00 PM',
                  event: 'End of Term Academic Excellence Awards',
                  description: 'Recognition ceremony for outstanding academic and co-curricular achievements.',
                },
              ].map((event, idx) => (
                <div
                  key={idx}
                  className="border-l-4 border-[#FF6B35] bg-gradient-to-r from-[#FFF5F0] to-white p-6 rounded-r-lg hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex gap-4 mb-3 text-sm text-[#8B8B8B]">
                        <span>📅 {event.date}</span>
                        <span>🕒 {event.time}</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{event.event}</h3>
                      <p className="text-[#8B8B8B]">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 md:py-24 bg-[#004E89] text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay In the Loop</h2>
            <p className="text-xl text-gray-200 mb-8">
              Subscribe to our newsletter to receive updates about school events, announcements, and important notices.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-3 rounded-lg text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-[#FF6B35] text-white rounded-lg font-semibold hover:bg-[#E55A24] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
