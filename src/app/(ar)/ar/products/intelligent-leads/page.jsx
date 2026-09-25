import Intelligentleads from "@/site-pages/products/Intelligent_leads";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("ar", {
  path: "/products/intelligent-leads",
  seoKey: "intelligentLeads",
  image: "https://bidconnectors.com/og/intelligent-leads.jpg",
});

export default function Page() {
  return <Intelligentleads />;
}
