'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Admissions() {
  const [tourFormOpen, setTourFormOpen] = useState(false);

  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-gradient-to-br from-[#FF6B35] to-[#FFA500] text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
            <p className="text-xl text-gray-100">Join the CloudFord School Bauchi family</p>
          </div>
        </section>

        {/* Quick Info */}
        <section className="py-12 md:py-16 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-3xl font-bold text-[#FF6B35] mb-2">Ages 3-12</h3>
                <p className="text-[#8B8B8B]">Pre-Primary to Primary School</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#004E89] mb-2">Year-Round</h3>
                <p className="text-[#8B8B8B]">Admissions accepted throughout the year</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#F7B801] mb-2">Small Classes</h3>
                <p className="text-[#8B8B8B]">Personalized attention for every student</p>
              </div>
            </div>
          </div>
        </section>

        {/* Enrollment Process */}
        <section className="py-16 md:py-24 bg-[#FFF5F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center mb-12">Enrollment Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: '1',
                  title: 'Schedule a Visit',
                  description: 'Contact us to arrange a school tour and meet our team. This is the perfect opportunity to see our facilities and ask questions.',
                },
                {
                  step: '2',
                  title: 'Application Form',
                  description: 'Complete the online or printed application form with your child\'s personal and educational information.',
                },
                {
                  step: '3',
                  title: 'Entrance Assessment',
                  description: 'Your child will participate in a friendly assessment to ensure the right class placement and identify any special needs.',
                },
                {
                  step: '4',
                  title: 'Admission Letter',
                  description: 'Upon approval, we send the official admission letter with enrollment details and next steps for registration.',
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-8 border-2 border-[#FF6B35] relative">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#FF6B35] text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mt-2 mb-3">{item.title}</h3>
                  <p className="text-[#8B8B8B]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title mb-8">Admission Requirements</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-[#004E89] mb-6">For New Students</h3>
                <ul className="space-y-4">
                  {[
                    'Birth certificate (copy)',
                    'Recent passport photograph (4x6)',
                    'Parent/Guardian identification',
                    'Previous school records (if transferring)',
                    'Medical/vaccination records',
                    'Completed application form',
                  ].map((req, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span className="text-[#FF6B35] text-xl">✓</span>
                      <span className="text-[#1A1A1A]">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#004E89] mb-6">For Returning Students</h3>
                <ul className="space-y-4">
                  {[
                    'Completed re-enrollment form',
                    'Valid school fees payment receipt (if applicable)',
                    'Updated medical/vaccination records',
                    'Updated parent contact information',
                    'Any special requests or accommodations',
                    'Confirmation of school calendar acceptance',
                  ].map((req, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span className="text-[#FF6B35] text-xl">✓</span>
                      <span className="text-[#1A1A1A]">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Fees Information */}
        <section className="py-16 md:py-24 bg-[#E8F5FF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title mb-12">School Fees & Payment</h2>
            
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    level: 'Pre-Primary (Ages 3-4)',
                    termFee: '₦75,000',
                    annualFee: '₦225,000',
                  },
                  {
                    level: 'Primary (Ages 5-6)',
                    termFee: '₦85,000',
                    annualFee: '₦255,000',
                  },
                  {
                    level: 'Upper Primary (Ages 7-12)',
                    termFee: '₦95,000',
                    annualFee: '₦285,000',
                  },
                ].map((fee, idx) => (
                  <div key={idx} className="text-center p-6 border-2 border-[#004E89] rounded-lg">
                    <h3 className="text-lg font-bold text-[#004E89] mb-4">{fee.level}</h3>
                    <div className="mb-4">
                      <p className="text-sm text-[#8B8B8B] mb-1">Per Term</p>
                      <p className="text-3xl font-bold text-[#FF6B35]">{fee.termFee}</p>
                    </div>
                    <div>
                      <p className="text-sm text-[#8B8B8B] mb-1">Annual (3 Terms)</p>
                      <p className="text-2xl font-bold text-[#004E89]">{fee.annualFee}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#FFFEF0] border-l-4 border-[#F7B801] p-6 rounded">
              <p className="text-[#1A1A1A]">
                <strong>Note:</strong> School fees cover tuition, books, and basic materials. Additional fees may apply for extracurricular activities, field trips, and special programs. Payment plans are available. Contact our office for more information about scholarships and financial assistance.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">Ready to Join CloudFord School?</h2>
            <p className="text-xl text-[#8B8B8B] mb-12 max-w-2xl mx-auto">
              We&apos;d love to meet your child and discuss how CloudFord School can help them thrive academically and personally.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setTourFormOpen(true)}
                className="btn-primary text-lg"
              >
                Schedule a School Tour
              </button>
              <a
                href="/contact"
                className="px-8 py-3 bg-[#004E89] text-white rounded-lg font-semibold hover:bg-[#003D6B] transition-colors text-lg"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Tour Form Modal */}
          {tourFormOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 mt-24">
              <div className="bg-white rounded-xl p-8 max-w-md w-full">
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">Schedule a Tour</h3>
                
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6B35]"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6B35]"
                  />
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6B35]"
                  />
                  <input
                    type="text"
                    placeholder="Child's Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6B35]"
                  />
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6B35]">
                    <option>Select Age Group</option>
                    <option>Pre-Primary (3-4 years)</option>
                    <option>Primary Junior (5-6 years)</option>
                    <option>Primary Senior (7-12 years)</option>
                  </select>
                  
                  <div className="flex gap-4 pt-4">
                    <button
                      type="submit"
                      className="flex-1 btn-primary"
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      onClick={() => setTourFormOpen(false)}
                      className="flex-1 px-4 py-3 bg-gray-200 text-[#1A1A1A] rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
