import Pricing from "@/site-pages/main/Pricing";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("en", {
  path: "/pricing",
  seoKey: "pricingPage",
  image: "https://bidconnectors.com/og/pricing.jpg",
});

export default function Page() {
  return <Pricing />;
}
