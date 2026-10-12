import About from "@/components/About";
import Footer from "@/components/Footer";
import MyStory from "@/components/MyStory";
import Principles from "@/components/Principles";
import SectionShell from "@/components/SectionShell";
import Skills from "@/components/Skills";
import StartProject from "@/components/StartProject";
import TechnicalJourney from "@/components/TechnicalJourney";

export default function AboutPage() {
  return (
    <SectionShell>
      <About />
      <TechnicalJourney />
      <Principles />
      <Skills />
      <MyStory />
      <StartProject />
      <Footer />
    </SectionShell>
  );
}
