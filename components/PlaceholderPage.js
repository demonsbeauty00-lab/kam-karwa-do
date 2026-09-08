"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function PlaceholderPage({ translationKey }) {
  const { t } = useLanguage();
  const title = t(`placeholders.${translationKey}.title`);
  const description = t(`placeholders.${translationKey}.desc`);

  return (
    <main className="min-h-screen bg-paper flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-md text-center">
          <h1 className="font-heading text-2xl font-bold text-ink sm:text-3xl">
            {title}
          </h1>
          <p className="mt-3 font-body text-base text-ink-soft">{description}</p>
          <Link
            href="/"
            className="mt-8 inline-block rounded-2xl bg-teal-600 px-6 py-3 font-heading text-base font-semibold text-white shadow-soft hover:bg-teal-700 transition-colors"
          >
            {t("common.backToHome")}
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
