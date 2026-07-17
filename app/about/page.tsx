import Navbar from "@/components/Navbar"; import Footer from "@/components/Footer";
export default function About() {return <>
  <Navbar/>
  <section className="py-24 px-4" style={{backgroundColor: "#fafaf8"}}>
    <div className="max-w-7xl mx-auto">
      <h1 className="text-5xl font-bold mb-4" style={{color: "#2c2c2a"}}>About CloudFord School Bauchi</h1>
      <p className="text-lg mb-12" style={{color: "#5a5a58"}}>CloudFord School Bauchi is dedicated to providing quality education that nurtures young minds and prepares them for success.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-4" style={{color: "#6b9bd1"}}>Our Mission</h2>
          <p className="text-lg mb-4" style={{color: "#5a5a58"}}>To provide an inclusive, nurturing educational environment that develops intellectually curious, emotionally intelligent, and socially responsible children.</p>
          <p style={{color: "#5a5a58"}}>We believe every child has unique potential and deserves an education that celebrates their individuality while building strong foundational skills.</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4" style={{color: "#7cb96d"}}>Our Vision</h2>
          <p className="text-lg mb-4" style={{color: "#5a5a58"}}>To be the leading elementary school in Bauchi, recognized for academic excellence, innovative teaching methods, and holistic child development.</p>
          <p style={{color: "#5a5a58"}}>We aspire to create a generation of confident, creative learners who contribute positively to society.</p>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-6" style={{color: "#2c2c2a"}}>Our History</h2>
        <p className="text-lg mb-4" style={{color: "#5a5a58"}}>Founded 25 years ago, CloudFord School Bauchi has built a legacy of excellence in early childhood and primary education. Starting with a small group of dedicated educators and passionate parents, we have grown to serve over 500 students while maintaining our commitment to personalized, quality education.</p>
        <p className="text-lg" style={{color: "#5a5a58"}}>Throughout our journey, we've evolved our teaching methods, invested in modern facilities, and expanded our curriculum to meet the changing needs of our students.</p>
      </div>
    </div>
  </section>
  <Footer/>
</>;}
