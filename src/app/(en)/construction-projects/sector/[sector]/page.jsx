// Route (English): /construction-projects/sector/[sector]
import ProjectsListing from "@/site-pages/projects/ProjectsListing";
import { sectorMeta, sectorParams } from "@/lib/projectMeta";

export const dynamicParams = false;
export const generateStaticParams = sectorParams;

export async function generateMetadata({ params }) {
  const { sector } = await params;
  return sectorMeta("en", sector);
}

export default async function Page({ params }) {
  const { sector } = await params;
  return <ProjectsListing kind="sector" slug={sector} />;
}
