import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Dock from "@/components/Dock";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Blog />
      <Skills />
      <Timeline />
      <Dock />
      <Contact />
    </main>
  );
}
