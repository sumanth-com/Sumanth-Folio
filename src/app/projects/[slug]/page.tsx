import Footer from "@/components/Footer";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import SectionShell from "@/components/SectionShell";
import { getAllProjectSlugs, getProjectBySlug } from "@/data/projects";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <SectionShell>
      <ProjectCaseStudy project={project} />
      <Footer />
    </SectionShell>
  );
}
