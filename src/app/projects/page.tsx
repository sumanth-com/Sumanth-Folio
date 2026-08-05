import Footer from "@/components/Footer";
import ProjectProofs from "@/components/ProjectProofs";
import ProjectsHero from "@/components/ProjectsHero";
import ProjectsSource from "@/components/ProjectsSource";
import SectionShell from "@/components/SectionShell";

export default function ProjectsPage() {
  return (
    <SectionShell>
      <ProjectsHero />
      <ProjectProofs />
      <ProjectsSource />
      <Footer />
    </SectionShell>
  );
}
