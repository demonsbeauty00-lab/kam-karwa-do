"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { languageLabels } from "@/lib/i18n/translations";

function Logo() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect width="36" height="36" rx="10" fill="#0B5D52" />
      <circle cx="18" cy="18" r="9" fill="#F0A93B" />
      <path
        d="M13.5 18.5L16.5 21.5L23 14"
        stroke="#0B5D52"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Header() {
  const { t, language, setLanguage } = useLanguage();

  function toggleLanguage() {
    setLanguage(language === "en" ? "hi" : "en");
  }

  return (
    <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur border-b border-ink/5">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Logo />
          <span className="font-heading text-lg font-bold text-teal-600 sm:text-xl">
            {t("common.appName")}
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-teal-600/20 bg-white text-xs font-semibold text-teal-600 shadow-sm hover:bg-teal-50 transition-colors"
            aria-label="Change language"
          >
            {languageLabels[language]}
          </button>

          <Link
            href="/location"
            className="flex items-center gap-1.5 rounded-full border border-teal-600/20 bg-white px-3 py-2 text-sm font-medium text-teal-600 shadow-sm hover:bg-teal-50 transition-colors"
            aria-label={t("header.location")}
          >
            <span aria-hidden="true">📍</span>
            <span className="hidden sm:inline">{t("header.location")}</span>
          </Link>

          <Link
            href="/profile"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-white shadow-sm hover:bg-teal-700 transition-colors"
            aria-label={t("header.profile")}
          >
            <span aria-hidden="true">👤</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
