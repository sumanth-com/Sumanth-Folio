import About from "@/components/About";
import Footer from "@/components/Footer";
import MyStory from "@/components/MyStory";
import Principles from "@/components/Principles";
import SectionShell from "@/components/SectionShell";
import Skills from "@/components/Skills";
import StartProject from "@/components/StartProject";

export default function AboutPage() {
  return (
    <SectionShell>
      <About />
      <Principles />
      <Skills />
      <MyStory />
      <StartProject />
      <Footer />
    </SectionShell>
  );
}
