export const dynamic = "force-static";

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/page-not-found", "/ar/page-not-found"] }],
    sitemap: "https://bidconnectors.com/sitemap.xml",
  };
}
