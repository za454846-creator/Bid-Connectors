import Suppliersdistributors from "@/site-pages/solutions/Suppliersdistributors";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("ar", {
  path: "/solutions/suppliers-and-distributors-solutions",
  seoKey: "suppliers",
  image: "https://bidconnectors.com/og/suppliers-distributors.jpg",
});

export default function Page() {
  return <Suppliersdistributors />;
}
