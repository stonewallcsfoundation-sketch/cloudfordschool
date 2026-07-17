"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Gallery() {
  const [selected, setSelected] = useState("all");

  return (
    <>
      <Navbar />
      <section className="text-white py-16 px-4" style={{backgroundColor: "#6b9bd1"}}>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-xl opacity-90">Moments from CloudFord School</p>
        </div>
      </section>

      <section className="py-16 px-4" style={{backgroundColor: "#fafaf8"}}>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {["All", "Classroom", "Events", "Sports", "Facilities"].map(cat => (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                style={{backgroundColor: selected === cat ? "#6b9bd1" : "white", color: selected === cat ? "white" : "#5a5a58"}}
                className="px-6 py-2 rounded-full font-semibold"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array(12).fill(null).map((_, i) => (
              <div key={i} className="rounded-2xl overflow-hidden bg-white shadow-lg">
                <div className="w-full aspect-square flex items-center justify-center" style={{backgroundColor: i % 3 === 0 ? "#a8d0ef" : i % 3 === 1 ? "#b5e7a0" : "#f4d888"}}>
                  <div className="text-center">
                    <div className="text-5xl mb-2">📸</div>
                    <p className="text-sm" style={{color: "#2c2c2a"}}>Photo {i + 1}</p>
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{backgroundColor: "#f9f7f3", color: "#6b9bd1"}}>
                    Gallery
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
