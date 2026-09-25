// Route (English): /construction-projects/trade/[trade]
import ProjectsListing from "@/site-pages/projects/ProjectsListing";
import { tradeMeta, tradeParams } from "@/lib/projectMeta";

export const dynamicParams = false;
export const generateStaticParams = tradeParams;

export async function generateMetadata({ params }) {
  const { trade } = await params;
  return tradeMeta("en", trade);
}

export default async function Page({ params }) {
  const { trade } = await params;
  return <ProjectsListing kind="trade" slug={trade} />;
}
