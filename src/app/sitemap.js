import { allProjectPaths } from "@/lib/projects";

export const dynamic = "force-static";

const SITE = "https://bidconnectors.com";

const PATHS = [
  "/",
  "/about",
  "/faq",
  "/contact-us",
  "/pricing",
  "/solutions/subcontractors",
  "/solutions/building-product-manufacturers",
  "/solutions/general-contractors",
  "/solutions/suppliers-and-distributors-solutions",
  "/solutions/service-providers",
  "/solutions/hospitality",
  "/products/project-intelligence",
  "/products/intelligent-leads",
  ...allProjectPaths(),
];

const en = (p) => (p === "/" ? `${SITE}/` : `${SITE}${p}`);
const ar = (p) => (p === "/" ? `${SITE}/ar` : `${SITE}/ar${p}`);

// Every page twice (English + Arabic) with hreflang alternates
export default function sitemap() {
  const now = new Date();
  return PATHS.flatMap((p) => {
    const alternates = { languages: { en: en(p), ar: ar(p) } };
    return [
      { url: en(p), lastModified: now, changeFrequency: "weekly", priority: p === "/" ? 1 : 0.8, alternates },
      { url: ar(p), lastModified: now, changeFrequency: "weekly", priority: p === "/" ? 0.9 : 0.7, alternates },
    ];
  });
}
