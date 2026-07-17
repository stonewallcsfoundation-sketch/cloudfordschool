"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { useState } from "react";

export default function Gallery() {
  const [selected, setSelected] = useState("all");

  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-xl opacity-90">Moments from CloudFord School</p>
        </div>
      </section>

      <Section bg="light">
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {["All", "Classroom", "Events", "Sports", "Facilities"].map(cat => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-6 py-2 rounded-full font-semibold ${
                selected === cat
                  ? "bg-[var(--color-primary)] text-white"
                  : "bg-white text-[var(--color-text-light)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array(12).fill(null).map((_, i) => (
            <div key={i} className="rounded-3xl overflow-hidden bg-white shadow-lg">
              <div className="w-full aspect-square bg-gradient-to-br from-[var(--color-primary-light)] to-[var(--color-accent-light)] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-2">📸</div>
                  <p className="text-sm text-[var(--color-text-light)]">Photo {i + 1}</p>
                </div>
              </div>
              <div className="p-4">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[var(--color-background)]">
                  Gallery
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Footer />
    </>
  );
}
