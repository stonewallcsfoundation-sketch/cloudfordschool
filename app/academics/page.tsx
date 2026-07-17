import Navbar from "@/components/Navbar"; import Footer from "@/components/Footer";
export default function Academics() {return <>
  <Navbar/>
  <section className="py-24 px-4" style={{backgroundColor: "#fafaf8"}}>
    <div className="max-w-7xl mx-auto">
      <h1 className="text-5xl font-bold mb-6" style={{color: "#2c2c2a"}}>Our Academic Programs</h1>
      <p className="text-lg mb-12" style={{color: "#5a5a58"}}>We offer comprehensive education from Kindergarten through Primary 5 with emphasis on foundational skills and holistic development.</p>
      
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6" style={{color: "#6b9bd1"}}>Grade Levels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div style={{backgroundColor: "#a8d0ef"}} className="p-6 rounded-xl"><h3 className="text-2xl font-bold mb-2" style={{color: "#2c2c2a"}}>Kindergarten</h3><p>Early literacy, numeracy, and social development</p></div>
          <div style={{backgroundColor: "#b5e7a0"}} className="p-6 rounded-xl"><h3 className="text-2xl font-bold mb-2" style={{color: "#2c2c2a"}}>Primary 1</h3><p>Building strong foundations in reading and math</p></div>
          <div style={{backgroundColor: "#f4d888"}} className="p-6 rounded-xl"><h3 className="text-2xl font-bold mb-2" style={{color: "#2c2c2a"}}>Primary 2-3</h3><p>Developing critical thinking skills</p></div>
          <div style={{backgroundColor: "#a8d0ef"}} className="p-6 rounded-xl"><h3 className="text-2xl font-bold mb-2" style={{color: "#2c2c2a"}}>Primary 4-5</h3><p>Advanced academics and leadership prep</p></div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6" style={{color: "#7cb96d"}}>Core Subjects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["English Language", "Mathematics", "Science", "Social Studies", "Creative Arts", "Physical Education"].map(s => <div key={s} style={{backgroundColor: "#b5e7a0"}} className="p-4 rounded-lg text-center font-semibold" style={{color: "#2c2c2a"}}>{s}</div>)}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-6" style={{color: "#2c2c2a"}}>Special Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div style={{backgroundColor: "#f4d888"}} className="p-6 rounded-xl"><div className="text-4xl mb-2">🔬</div><h3 className="text-xl font-bold mb-2" style={{color: "#2c2c2a"}}>STEM Initiative</h3><p style={{color: "#2c2c2a"}}>Hands-on science and technology programs</p></div>
          <div style={{backgroundColor: "#a8d0ef"}} className="p-6 rounded-xl"><div className="text-4xl mb-2">🎨</div><h3 className="text-xl font-bold mb-2" style={{color: "#2c2c2a"}}>Arts & Culture</h3><p style={{color: "#2c2c2a"}}>Creativity through music and drama</p></div>
          <div style={{backgroundColor: "#b5e7a0"}} className="p-6 rounded-xl"><div className="text-4xl mb-2">⚽</div><h3 className="text-xl font-bold mb-2" style={{color: "#2c2c2a"}}>Sports Excellence</h3><p style={{color: "#2c2c2a"}}>Team sports and athletic development</p></div>
          <div style={{backgroundColor: "#f4d888"}} className="p-6 rounded-xl"><div className="text-4xl mb-2">✨</div><h3 className="text-xl font-bold mb-2" style={{color: "#2c2c2a"}}>Character Education</h3><p style={{color: "#2c2c2a"}}>Building values and responsibility</p></div>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
</>;}
