import ContactUs from "@/site-pages/main/ContactUs";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("ar", {
  path: "/contact-us",
  seoKey: "contact",
  image: "https://bidconnectors.com/og/contact.jpg",
});

export default function Page() {
  return <ContactUs />;
}
