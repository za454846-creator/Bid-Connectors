// Route (English): /construction-projects/[slug]
import ProjectDetail from "@/site-pages/projects/ProjectDetail";
import { projectMeta, projectParams } from "@/lib/projectMeta";

export const dynamicParams = false;
export const generateStaticParams = projectParams;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return projectMeta("en", slug);
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <ProjectDetail slug={slug} />;
}
