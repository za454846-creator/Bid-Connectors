import Projectintelligence from "@/site-pages/products/Project_intelligence";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("ar", {
  path: "/products/project-intelligence",
  seoKey: "projectIntelligence",
  image: "https://bidconnectors.com/og/project-intelligence.jpg",
});

export default function Page() {
  return <Projectintelligence />;
}
