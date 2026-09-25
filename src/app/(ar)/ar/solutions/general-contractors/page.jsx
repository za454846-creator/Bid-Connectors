import Generalcontractors from "@/site-pages/solutions/Generalcontractors";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("ar", {
  path: "/solutions/general-contractors",
  seoKey: "generalContractors",
  image: "https://bidconnectors.com/og/general-contractors.jpg",
});

export default function Page() {
  return <Generalcontractors />;
}
