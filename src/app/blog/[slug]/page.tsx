import BlogArticle from "@/components/BlogArticle";
import Footer from "@/components/Footer";
import SectionShell from "@/components/SectionShell";
import { getAllBlogSlugs, getBlogBySlug } from "@/data/blog";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  return (
    <SectionShell>
      <BlogArticle post={post} />
      <Footer />
    </SectionShell>
  );
}
