import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return <>
    <Navbar/>
    
    {/* Hero Section */}
    <section className="relative min-h-screen flex items-center pt-24 pb-12 md:pb-0" style={{backgroundColor: "#fafaf8"}}>
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-lg font-semibold" style={{color: "#6b9bd1"}}>Welcome to</p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight" style={{color: "#2c2c2a"}}>
                CloudFord School Bauchi
              </h1>
            </div>
            
            <p className="text-lg leading-relaxed max-w-md" style={{color: "#5a5a58"}}>
              Where young minds grow, creativity flourishes, and every child discovers their potential in a warm, safe, and inspiring environment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/admissions">
                <button style={{backgroundColor: "#6b9bd1", color: "white"}} className="px-8 py-3 rounded-xl font-semibold hover:opacity-90 w-full sm:w-auto">
                  Enroll Now
                </button>
              </Link>
              <Link href="/about">
                <button style={{backgroundColor: "#f4d888", color: "#2c2c2a"}} className="px-8 py-3 rounded-xl font-semibold hover:opacity-90 w-full sm:w-auto">
                  Learn More
                </button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div>
                <p className="text-3xl font-bold" style={{color: "#6b9bd1"}}>500+</p>
                <p className="text-sm" style={{color: "#5a5a58"}}>Happy Students</p>
              </div>
              <div>
                <p className="text-3xl font-bold" style={{color: "#7cb96d"}}>50+</p>
                <p className="text-sm" style={{color: "#5a5a58"}}>Expert Staff</p>
              </div>
              <div>
                <p className="text-3xl font-bold" style={{color: "#f4d888"}}>25+</p>
                <p className="text-sm" style={{color: "#5a5a58"}}>Years Legacy</p>
              </div>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="hidden md:block relative h-96 rounded-3xl overflow-hidden shadow-2xl" style={{backgroundColor: "#e8e6e1"}}>
            <div className="w-full h-full flex items-center justify-center text-center" style={{backgroundColor: "#a8d0ef"}}>
              <div>
                <p className="text-4xl mb-2">🎓</p>
                <p style={{color: "#2c2c2a"}} className="font-semibold">School Life Image</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={{backgroundColor: "white"}}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{color: "#2c2c2a"}}>Why Choose CloudFord School?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div style={{backgroundColor: "#ffffff", border: "1px solid #e8e6e1"}} className="p-6 rounded-2xl">
            <div className="text-5xl mb-4">👥</div>
            <h3 className="text-2xl font-bold mb-3" style={{color: "#2c2c2a"}}>Small Class Sizes</h3>
            <p style={{color: "#5a5a58"}}>Personalized attention with a student-teacher ratio that ensures each child gets the support they need.</p>
          </div>

          <div style={{backgroundColor: "#ffffff", border: "1px solid #e8e6e1"}} className="p-6 rounded-2xl">
            <div className="text-5xl mb-4">🎓</div>
            <h3 className="text-2xl font-bold mb-3" style={{color: "#2c2c2a"}}>Experienced Teachers</h3>
            <p style={{color: "#5a5a58"}}>Our dedicated staff bring years of expertise and genuine passion for child development.</p>
          </div>

          <div style={{backgroundColor: "#ffffff", border: "1px solid #e8e6e1"}} className="p-6 rounded-2xl">
            <div className="text-5xl mb-4">🛡️</div>
            <h3 className="text-2xl font-bold mb-3" style={{color: "#2c2c2a"}}>Safe Environment</h3>
            <p style={{color: "#5a5a58"}}>A secure, nurturing space where every child can learn, grow, and thrive with confidence.</p>
          </div>

          <div style={{backgroundColor: "#ffffff", border: "1px solid #e8e6e1"}} className="p-6 rounded-2xl">
            <div className="text-5xl mb-4">🎨</div>
            <h3 className="text-2xl font-bold mb-3" style={{color: "#2c2c2a"}}>Rich Extracurriculars</h3>
            <p style={{color: "#5a5a58"}}>From sports and arts to STEM programs, we develop well-rounded students with diverse talents.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Quick Links Section */}
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={{backgroundColor: "#f9f7f3"}}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{color: "#2c2c2a"}}>Quick Access</h2>
          <p style={{color: "#5a5a58"}} className="text-lg max-w-2xl mx-auto">Everything you need to know about CloudFord School</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/about">
            <div style={{backgroundColor: "#a8d0ef"}} className="p-6 rounded-2xl cursor-pointer hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold" style={{color: "#2c2c2a"}}>About Us</h3>
                <span className="text-3xl">🏫</span>
              </div>
              <p style={{color: "#2c2c2a"}}>Discover our mission, values, and what makes us special.</p>
            </div>
          </Link>

          <Link href="/admissions">
            <div style={{backgroundColor: "#b5e7a0"}} className="p-6 rounded-2xl cursor-pointer hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold" style={{color: "#2c2c2a"}}>Admissions</h3>
                <span className="text-3xl">📋</span>
              </div>
              <p style={{color: "#2c2c2a"}}>Learn how to enroll your child and schedule a campus tour.</p>
            </div>
          </Link>

          <Link href="/contact">
            <div style={{backgroundColor: "#f4d888"}} className="p-6 rounded-2xl cursor-pointer hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold" style={{color: "#2c2c2a"}}>Contact Us</h3>
                <span className="text-3xl">📞</span>
              </div>
              <p style={{color: "#2c2c2a"}}>Get in touch with our team. We&apos;d love to hear from you.</p>
            </div>
          </Link>
        </div>
      </div>
    </section>

    <Footer/>
  </>;
}
