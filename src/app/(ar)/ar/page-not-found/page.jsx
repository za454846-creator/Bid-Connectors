import NotFound from "@/site-pages/main/NotFound";
import en from "@/components/Lang/en.json";
import ar from "@/components/Lang/ar.json";

const t = { en, ar }["ar"];

export const metadata = {
  title: t.notFound.metaTitle,
  robots: { index: false, follow: true },
};

export default function Page() {
  return <NotFound />;
}
