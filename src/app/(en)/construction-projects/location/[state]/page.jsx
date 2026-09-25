// Route (English): /construction-projects/location/[state]
import ProjectsListing from "@/site-pages/projects/ProjectsListing";
import { stateMeta, stateParams } from "@/lib/projectMeta";

export const dynamicParams = false;
export const generateStaticParams = stateParams;

export async function generateMetadata({ params }) {
  const { state } = await params;
  return stateMeta("en", state);
}

export default async function Page({ params }) {
  const { state } = await params;
  return <ProjectsListing kind="state" slug={state} />;
}
