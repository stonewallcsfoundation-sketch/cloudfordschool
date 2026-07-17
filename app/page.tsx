import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Home() {
  return <>
    <Navbar/>
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h1 className="text-6xl font-bold text-[var(--color-foreground)]">CloudFord School Bauchi</h1>
            <p className="text-lg text-[var(--color-text-light)]">Where young minds grow, creativity flourishes, and every child discovers their potential.</p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-[var(--color-primary)] text-white rounded-xl font-semibold">Enroll Now</button>
              <button className="px-8 py-4 bg-[var(--color-secondary)] text-[var(--color-foreground)] rounded-xl font-semibold">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
  </>;
}
