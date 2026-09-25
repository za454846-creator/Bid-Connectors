import Hospitality from "@/site-pages/solutions/Hospitality";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("en", {
  path: "/solutions/hospitality",
  seoKey: "hospitality",
  image: "https://bidconnectors.com/og/hospitality.jpg",
});

export default function Page() {
  return <Hospitality />;
}
