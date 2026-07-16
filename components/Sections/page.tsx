import Navbar from "@/components/Sections/Navbar";
import Hero from "@/components/Sections/Hero";
import Stats from "@/components/Sections/Stats";
import About from "@/components/Sections/About";
import Timeline from "@/components/Sections/Timeline";
/* import ResearchAreas from "@/components/Sections/ResearchAreas"; */
import Projects from "@/components/Sections/Projects";
import ResearchFootprints from "@/components/Sections/ResearchFootprintsClient";
import Tools from "@/components/Sections/Tools";
import Publications from "@/components/Sections/Publications";
import Contact from "@/components/Sections/Contact";
import Footer from "@/components/Sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Timeline />
      {/* <ResearchAreas /> */}
      <Projects />
      <ResearchFootprints />
      <Tools />
      <Publications />
      <Contact />
      <Footer />
    </main>
  );
}