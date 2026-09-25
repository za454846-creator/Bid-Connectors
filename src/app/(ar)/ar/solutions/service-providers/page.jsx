import Serviceproviders from "@/site-pages/solutions/Serviceproviders";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("ar", {
  path: "/solutions/service-providers",
  seoKey: "serviceProviders",
  image: "https://bidconnectors.com/og/service-providers.jpg",
});

export default function Page() {
  return <Serviceproviders />;
}
