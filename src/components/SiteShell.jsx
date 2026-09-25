import { LanguageProvider } from "@/components/context/LanguageContext";
import Navbar from "@/components/Mainlayout/Navbar";
import Footer from "@/components/Mainlayout/Footer";
import PageSchema from "@/components/PageSchema";

// Shared shell for both root layouts (English / Arabic).
// <html lang dir> is set on the server, so Arabic pages are RTL from the first paint.
export default function SiteShell({ lang, children }) {
  const isRTL = lang === "ar";

  return (
    <html lang={lang} dir={isRTL ? "rtl" : "ltr"}>
      <head>
        <meta name="theme-color" content="#0F172A" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Cairo:wght@400;600;700;800&display=swap"
        />
      </head>
      <body>
        <LanguageProvider lang={lang}>
          <div className="lang-page">
            <Navbar />
            {children}
            <Footer />
            <PageSchema />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
