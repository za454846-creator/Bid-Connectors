import Subcontractors from "@/site-pages/solutions/Subcontractors";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("ar", {
  path: "/solutions/subcontractors",
  seoKey: "subcontractors",
  image: "https://bidconnectors.com/og/subcontractors.jpg",
});

export default function Page() {
  return <Subcontractors />;
}
