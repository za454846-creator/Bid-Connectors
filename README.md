# Bid Connectors — Next.js (Static Export for cPanel)

Yeh website **Next.js 15 (App Router)** par hai aur **static HTML** mein export hoti hai,
is liye kisi bhi cPanel / shared hosting par chalti hai (Node.js ki zaroorat nahi).

- English: `https://bidconnectors.com/about`
- Arabic:  `https://bidconnectors.com/ar/about`

---

## 1. Apne computer par chalana

```bash
npm install        # sirf pehli dafa
npm run dev        # http://localhost:3000
```

## 2. Live ke liye build banana

```bash
npm run build
```

Is se **`out/`** folder banta hai. Yahi folder hosting par jata hai.
Build ko local check karna ho to: `npm run start` (phir http://localhost:3000 kholein).

## 3. cPanel par upload

1. cPanel → **File Manager** → `public_html`
2. Purani files ka **backup** lein (Compress → Download)
3. Purani React (CRA) files delete karein (`static/`, `index.html`, `asset-manifest.json` waghera).
   Agar `public_html` mein login/register app ka folder hai (`bidconnectors/`), use **mat** chhedein.
4. `out/` folder ke **andar** ki saari files upload karein (folder khud nahi, us ka content)
5. Zaroor check karein ke **`.htaccess`** bhi upload hui hai
   (File Manager → Settings → "Show Hidden Files" on karein)

Test karein: `/`, `/about`, `/ar`, `/ar/about`, aur koi ghalat URL (404 page aana chahiye).

---

## 4. Folder structure (sab kuch `src/` ke andar)

```
src/
  site-pages/                  ← AAP KE PAGES (pehle wala src/pages)
    main/                        Home, About, Faq, ContactUs, Pricing, NotFound
    solutions/                   Subcontractors, Generalcontractors, Buildingproductmanufctures,
                                 Suppliersdistributors, Hospitality, Serviceproviders
    products/                    Project_intelligence, Intelligent_leads
  components/                  Navbar, Footer, Home sections, LanguageContext
    Lang/                        en.json, ar.json  ← saara text yahan
  styles/                      Saari CSS (site.js mein sahi tarteeb se import)
  lib/                         seo.js (title, canonical, hreflang), schema.js
  app/                         URLs (Next.js routing) — sirf chhote wrapper files
    (en)/layout.jsx              English: <html lang="en" dir="ltr">
    (en)/solutions/hospitality/page.jsx   -> /solutions/hospitality
    (ar)/layout.jsx              Arabic:  <html lang="ar" dir="rtl">
    (ar)/ar/solutions/hospitality/page.jsx -> /ar/solutions/hospitality
    sitemap.js, robots.js
public/
  images/                      Saari images
  .htaccess                    cPanel ke URL rules
```

**Design / code badalna ho** to `src/site-pages/...` mein file kholein.
`src/app/.../page.jsx` sirf batata hai ke kaunsa page kis URL par khulega.

> Folder ka naam `src/pages` is liye nahi rakha ke Next.js mein `pages` naam
> purane "Pages Router" ke liye reserved hai. Us naam se routes aapas mein takra jate.

## 5. Aam kaam

**Text badalna:** `src/components/Lang/en.json` aur `ar.json` mein. Dono files mein keys same rakhein.

**Naya page banana (misal: `/careers`):**
1. `src/site-pages/main/Careers.jsx` banayein (upar `"use client";` likhein)
2. `en.json` / `ar.json` mein `"careers": { "seo": { "title": "...", "description": "..." }, ... }`
3. Do route files:
   - `src/app/(en)/careers/page.jsx`
   - `src/app/(ar)/ar/careers/page.jsx`
   ```jsx
   import Careers from "@/views/Careers";
   import { pageMetadata } from "@/lib/seo";
   export const metadata = pageMetadata("en", { path: "/careers", seoKey: "careers" }); // Arabic file mein "ar"
   export default function Page() { return <Careers />; }
   ```
4. `src/app/sitemap.js` ki list mein `"/careers"` add karein

**Image lagana:** file `public/images/` mein rakhein, code mein `"/images/naam.webp"` likhein.
File naam mein space na rakhein.

**Internal link:** `import Link from "next/link"` aur `<Link href={localePath("/pricing")}>`.
`localePath` Arabic page par khud `/ar/pricing` bana deta hai.

---

## 6. React (CRA) se kya badla

| Pehle | Ab |
|---|---|
| `react-scripts` (Create React App) | `next` |
| `react-router-dom` + `App.js` routes | `app/` folder routing |
| `react-helmet-async` + `PageSeo` | `lib/seo.js` + Next metadata (server par banta hai) |
| `public/index.html` wali direction script | Layout khud `<html dir>` set karta hai |
| CDN se Bootstrap swap | npm Bootstrap: English layout LTR, Arabic layout RTL |
| `import img from "../assets/Images/x.webp"` | `"/images/x.webp"` |
| Har component mein CSS import | `src/styles/site.js` mein ek jagah |

Language switch par ab poora page load hota hai (English aur Arabic alag layouts hain,
alag `<html dir>` ke saath). Curtain animation waisi hi chalti hai.
