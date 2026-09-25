// Root layout — Arabic (RTL)
// Bootstrap first, then our CSS (so our styles win)
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "@/styles/site";

import SiteShell from "@/components/SiteShell";
import { rootMetadata } from "@/lib/seo";

export const metadata = rootMetadata("ar");

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return <SiteShell lang="ar">{children}</SiteShell>;
}
