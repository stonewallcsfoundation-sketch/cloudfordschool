import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#004E89] text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">CloudFord School</h3>
            <p className="text-sm text-gray-200">
              Nurturing bright minds in a warm, supportive learning environment since 2015.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-[#F7B801] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-[#F7B801] transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-[#F7B801] transition-colors">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#F7B801] transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>📞 +234 XXX XXX XXXX</li>
              <li>📧 info@cloudfordschool.edu.ng</li>
              <li>📍 Bauchi, Nigeria</li>
              <li className="pt-2">Hours: 7:30 AM - 4:00 PM (Mon-Fri)</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#F7B801] transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-[#F7B801] transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-[#F7B801] transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-400 pt-8 text-center text-sm text-gray-200">
          <p>&copy; 2025 CloudFord School Bauchi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
