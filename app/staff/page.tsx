import Navbar from "@/components/Navbar"; import Footer from "@/components/Footer";
export default function Staff() {return <>
  <Navbar/>
  <section className="py-24 px-4" style={{backgroundColor: "#fafaf8"}}>
    <div className="max-w-7xl mx-auto">
      <h1 className="text-5xl font-bold mb-6" style={{color: "#2c2c2a"}}>Our Dedicated Team</h1>
      <p className="text-lg mb-12" style={{color: "#5a5a58"}}>Meet the experienced educators who are committed to nurturing your child's growth and development.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Array(9).fill(null).map((_, i) => (
          <div key={i} className="text-center">
            <div style={{backgroundColor: "#a8d0ef"}} className="w-full aspect-square rounded-2xl flex items-center justify-center mb-4">
              <div className="text-6xl">👤</div>
            </div>
            <h3 className="text-xl font-bold mb-1" style={{color: "#2c2c2a"}}>Staff Member {i+1}</h3>
            <p style={{color: "#6b9bd1"}} className="text-sm">Position/Subject</p>
            <p style={{color: "#5a5a58"}} className="text-sm mt-2">Click to upload staff photo</p>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 rounded-2xl" style={{backgroundColor: "#b5e7a0"}}>
        <h2 className="text-2xl font-bold mb-2" style={{color: "#2c2c2a"}}>Upload Staff Photos</h2>
        <p style={{color: "#2c2c2a"}}>Click on any profile above to upload a staff member's photo and update their information.</p>
      </div>
    </div>
  </section>
  <Footer/>
</>;}
