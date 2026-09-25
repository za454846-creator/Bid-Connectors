"use client";

import Link from "next/link";
import { useLanguage } from "@/components/context/LanguageContext";

export default function NotFound() {
  const { t, localePath } = useLanguage();
  return (
    <main className="container py-5 text-center">
      <h1>{t.notFound.title}</h1>
      <p>{t.notFound.text}</p>
      <Link href={localePath("/")} className="btn btn-startfree mt-3">
        {t.notFound.backHome}
      </Link>
    </main>
  );
}
