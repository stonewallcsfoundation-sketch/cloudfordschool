import Navbar from "@/components/Navbar"; import Footer from "@/components/Footer";
export default function News() {return <>
  <Navbar/>
  <section className="py-24 px-4" style={{backgroundColor: "#fafaf8"}}>
    <div className="max-w-7xl mx-auto">
      <h1 className="text-5xl font-bold mb-6" style={{color: "#2c2c2a"}}>News & Events</h1>
      <p className="text-lg mb-12" style={{color: "#5a5a58"}}>Stay updated with the latest announcements, events, and highlights from CloudFord School.</p>
      
      <div className="space-y-6">
        {[{title: "Annual Sports Day", date: "July 28, 2024", desc: "Exciting sports competitions and activities for all students"}, {title: "Science Fair Showcase", date: "August 10, 2024", desc: "Students display their innovative science projects"}, {title: "Back to School Week", date: "September 2, 2024", desc: "Welcome ceremony and orientation for new and returning students"}, {title: "Inter-House Competition", date: "September 15, 2024", desc: "Academic and creative competitions between school houses"}, {title: "End of Term Ceremony", date: "November 20, 2024", desc: "Celebration of student achievements and awards"}, {title: "Parents Weekend", date: "October 5, 2024", desc: "Family activities and teacher-parent conferences"}].map((event, i) => (
          <div key={i} style={{backgroundColor: i % 2 === 0 ? "#a8d0ef" : "#f4d888"}} className="p-6 rounded-2xl">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-2xl font-bold" style={{color: "#2c2c2a"}}>{event.title}</h3>
              <span style={{color: "#6b9bd1"}} className="text-sm font-semibold">📅 {event.date}</span>
            </div>
            <p style={{color: "#2c2c2a"}}>{event.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  <Footer/>
</>;}
