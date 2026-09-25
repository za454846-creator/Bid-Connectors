import Home from "@/site-pages/main/Home";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("en", {
  path: "/",
  seoKey: "home",
  image: "https://bidconnectors.com/og-image.jpg",
});

export default function Page() {
  return <Home />;
}
