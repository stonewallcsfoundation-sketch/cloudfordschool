"use client"; 
import Navbar from "@/components/Navbar"; import Footer from "@/components/Footer"; import {useState} from "react";
export default function Contact() {const [submitted, setSubmitted] = useState(false); const handleSubmit = (e: React.FormEvent) => {e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 2000);}; return <>
  <Navbar/>
  <section className="py-24 px-4" style={{backgroundColor: "#fafaf8"}}>
    <div className="max-w-7xl mx-auto">
      <h1 className="text-5xl font-bold mb-6" style={{color: "#2c2c2a"}}>Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-6" style={{color: "#6b9bd1"}}>Get in Touch</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold mb-2" style={{color: "#2c2c2a"}}>Phone</h3>
              <p style={{color: "#5a5a58"}}>+234 (0) 701 234 5678</p>
            </div>
            <div>
              <h3 className="font-bold mb-2" style={{color: "#2c2c2a"}}>Email</h3>
              <p style={{color: "#5a5a58"}}>info@cloudfordschool.edu.ng</p>
            </div>
            <div>
              <h3 className="font-bold mb-2" style={{color: "#2c2c2a"}}>Address</h3>
              <p style={{color: "#5a5a58"}}>123 Education Avenue<br/>Bauchi, Bauchi State<br/>Nigeria</p>
            </div>
            <div>
              <h3 className="font-bold mb-2" style={{color: "#2c2c2a"}}>Hours</h3>
              <p style={{color: "#5a5a58"}}>Monday - Friday: 8:00 AM - 4:00 PM<br/>Saturday - Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6" style={{color: "#7cb96d"}}>Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" placeholder="Your Name" style={{backgroundColor: "white", border: "2px solid #e8e6e1"}} className="w-full px-4 py-2 rounded-lg" required/>
            <input type="email" placeholder="Your Email" style={{backgroundColor: "white", border: "2px solid #e8e6e1"}} className="w-full px-4 py-2 rounded-lg" required/>
            <textarea placeholder="Your Message" rows={4} style={{backgroundColor: "white", border: "2px solid #e8e6e1"}} className="w-full px-4 py-2 rounded-lg" required/>
            <button type="submit" style={{backgroundColor: "#6b9bd1", color: "white"}} className="w-full px-4 py-3 rounded-lg font-bold hover:opacity-90">{submitted ? "✓ Message Sent!" : "Send Message"}</button>
          </form>
        </div>
      </div>

      <div className="p-8 rounded-2xl" style={{backgroundColor: "#a8d0ef"}}>
        <h2 className="text-2xl font-bold mb-2" style={{color: "#2c2c2a"}}>Map Location</h2>
        <div className="w-full h-80 bg-gradient-to-br from-[#d4e8f7] to-[#b5d5f0] rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="text-5xl mb-2">📍</div>
            <p style={{color: "#2c2c2a"}}>School Location Map</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
</>;}
