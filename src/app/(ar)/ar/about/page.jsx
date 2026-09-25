import About from "@/site-pages/main/About";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("ar", {
  path: "/about",
  seoKey: "about",
  image: "https://bidconnectors.com/og/about.jpg",
});

export default function Page() {
  return <About />;
}
