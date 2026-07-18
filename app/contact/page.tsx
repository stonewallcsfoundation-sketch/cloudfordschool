'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-gradient-to-br from-[#004E89] to-[#003D6B] text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-xl text-gray-200">We&apos;d love to hear from you. Contact us anytime!</p>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8">Contact Information</h2>
                
                <div className="space-y-8">
                  {/* Phone */}
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📞</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1A1A1A] mb-1">Phone</h3>
                      <p className="text-[#8B8B8B]">+234 (0) XXX XXX XXXX</p>
                      <p className="text-[#8B8B8B] text-sm">Monday - Friday, 7:30 AM - 4:00 PM</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-[#004E89] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📧</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1A1A1A] mb-1">Email</h3>
                      <p className="text-[#8B8B8B]">info@cloudfordschool.edu.ng</p>
                      <p className="text-[#8B8B8B] text-sm">We respond within 24 hours</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-[#F7B801] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📍</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1A1A1A] mb-1">Location</h3>
                      <p className="text-[#8B8B8B]">CloudFord School</p>
                      <p className="text-[#8B8B8B]">Bauchi, Nigeria</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-[#2ECC71] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">🕒</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1A1A1A] mb-1">School Hours</h3>
                      <p className="text-[#8B8B8B]">7:30 AM - 4:00 PM</p>
                      <p className="text-[#8B8B8B] text-sm">Monday - Friday</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-10 pt-10 border-t border-gray-200">
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-6">Follow Us</h3>
                  <div className="flex gap-4">
                    {[
                      { name: 'Facebook', icon: 'f', link: '#' },
                      { name: 'Twitter', icon: '𝕏', link: '#' },
                      { name: 'Instagram', icon: '📷', link: '#' },
                    ].map((social) => (
                      <a
                        key={social.name}
                        href={social.link}
                        className="w-12 h-12 bg-[#F9F9F9] border border-gray-200 rounded-lg flex items-center justify-center hover:bg-[#FF6B35] hover:text-white transition-colors"
                        title={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8">Send us a Message</h2>
                
                {submitted && (
                  <div className="mb-6 p-4 bg-[#2ECC71] text-white rounded-lg">
                    ✓ Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                      placeholder="+234 XXX XXX XXXX"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="admissions">Admissions Inquiry</option>
                      <option value="academics">Academic Support</option>
                      <option value="events">Event Inquiry</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent resize-none"
                      placeholder="Your message here..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full btn-primary text-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-24 bg-[#FAFAF8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8 text-center">Find Us</h2>
            <div className="bg-gray-300 rounded-xl h-96 flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-600 text-lg">📍 CloudFord School Bauchi</p>
                <p className="text-gray-500 mt-2">Map location would appear here</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  question: 'What are the school hours?',
                  answer: 'CloudFord School operates from 7:30 AM to 4:00 PM, Monday through Friday. Extended care is available with advance notice.',
                },
                {
                  question: 'How can I schedule a school visit?',
                  answer: 'You can schedule a visit by calling us, sending an email, or filling out the contact form. We recommend visiting during school hours (10 AM - 2 PM).',
                },
                {
                  question: 'What is your admissions process?',
                  answer: 'Our admissions process includes a school visit, completed application form, entrance assessment, and submission of required documents. Please visit our Admissions page for detailed information.',
                },
                {
                  question: 'Do you offer financial assistance or scholarships?',
                  answer: 'Yes, we offer payment plans and limited scholarship opportunities. Please contact our office to discuss your specific situation.',
                },
                {
                  question: 'What extracurricular activities are available?',
                  answer: 'We offer a variety of activities including sports, arts, music, and cultural programs. Our extracurricular calendar is shared with parents at the beginning of each term.',
                },
              ].map((faq, idx) => (
                <div key={idx} className="border-l-4 border-[#FF6B35] bg-gradient-to-r from-[#FFF5F0] to-white p-6 rounded-r-lg">
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">{faq.question}</h3>
                  <p className="text-[#8B8B8B]">{faq.answer}</p>
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
