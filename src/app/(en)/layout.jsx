// Root layout — English (LTR)
// Bootstrap first, then our CSS (so our styles win)
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/site";

import SiteShell from "@/components/SiteShell";
import { rootMetadata } from "@/lib/seo";

export const metadata = rootMetadata("en");

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return <SiteShell lang="en">{children}</SiteShell>;
}
