import Navbar from "@/components/Navbar"; import Footer from "@/components/Footer";
export default function Admissions() {return <>
  <Navbar/>
  <section className="py-24 px-4" style={{backgroundColor: "#fafaf8"}}>
    <div className="max-w-7xl mx-auto">
      <h1 className="text-5xl font-bold mb-6" style={{color: "#2c2c2a"}}>Admissions</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-4" style={{color: "#6b9bd1"}}>Enrollment Process</h2>
          <ol className="space-y-4">
            {["Submit application form", "Provide required documents", "Attend assessment & interview", "Receive admission decision", "Complete registration"].map((step, i) => (
              <li key={i} className="flex gap-4">
                <span style={{backgroundColor: "#6b9bd1", color: "white"}} className="flex items-center justify-center w-8 h-8 rounded-full font-bold flex-shrink-0">{i+1}</span>
                <span style={{color: "#2c2c2a"}} className="pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4" style={{color: "#7cb96d"}}>Requirements</h2>
          <ul className="space-y-2">
            {["Birth Certificate", "Immunization Records", "Medical Examination", "Parent/Guardian ID", "Proof of Address", "Previous School Records"].map((req, i) => (
              <li key={i} style={{backgroundColor: "#b5e7a0"}} className="p-3 rounded-lg" style={{color: "#2c2c2a"}}>✓ {req}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6" style={{color: "#2c2c2a"}}>School Fees</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{grade: "Kindergarten", fee: "₦150,000/term"}, {grade: "Primary 1-3", fee: "₦180,000/term"}, {grade: "Primary 4-5", fee: "₦200,000/term"}].map(f => (
            <div key={f.grade} style={{backgroundColor: "#f4d888"}} className="p-6 rounded-xl text-center">
              <h3 className="text-xl font-bold mb-2" style={{color: "#2c2c2a"}}>{f.grade}</h3>
              <p className="text-2xl font-bold" style={{color: "#6b9bd1"}}>{f.fee}</p>
            </div>
          ))}
        </div>
        <p className="text-sm mt-4" style={{color: "#5a5a58"}}>*Fees include tuition, materials, and activities. Payment plans available.</p>
      </div>

      <div className="bg-center p-12 rounded-2xl text-center" style={{backgroundColor: "#6b9bd1"}}>
        <h2 className="text-3xl font-bold mb-4" style={{color: "white"}}>Ready to Join Us?</h2>
        <p className="text-lg mb-6" style={{color: "white"}}>Schedule a campus tour and meet our team</p>
        <button style={{backgroundColor: "white", color: "#6b9bd1"}} className="px-8 py-3 rounded-xl font-bold hover:opacity-90">Schedule a Tour</button>
      </div>
    </div>
  </section>
  <Footer/>
</>;}
