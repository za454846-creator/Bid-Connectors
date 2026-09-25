import Buildingproductmanufctures from "@/site-pages/solutions/Buildingproductmanufctures";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("ar", {
  path: "/solutions/building-product-manufacturers",
  seoKey: "manufacturers",
  image: "https://bidconnectors.com/og/building-product-manufacturers.jpg",
});

export default function Page() {
  return <Buildingproductmanufctures />;
}
