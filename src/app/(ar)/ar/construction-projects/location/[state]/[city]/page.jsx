// Route (Arabic): /ar/construction-projects/location/[state]/[city]
import ProjectsListing from "@/site-pages/projects/ProjectsListing";
import { cityMeta, cityParams } from "@/lib/projectMeta";

export const dynamicParams = false;
export const generateStaticParams = cityParams;

export async function generateMetadata({ params }) {
  const { state, city } = await params;
  return cityMeta("ar", state, city);
}

export default async function Page({ params }) {
  const { state, city } = await params;
  return <ProjectsListing kind="city" slug={state} citySlug={city} />;
}
