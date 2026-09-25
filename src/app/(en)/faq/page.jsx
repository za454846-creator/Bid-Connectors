import Faq from "@/site-pages/main/Faq";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("en", {
  path: "/faq",
  seoKey: "faqPage",
  image: "https://bidconnectors.com/og/faq.jpg",
});

export default function Page() {
  return <Faq />;
}
