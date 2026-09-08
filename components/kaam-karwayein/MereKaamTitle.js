"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function MereKaamTitle() {
  const { t } = useLanguage();

  return (
    <h1 className="mx-auto max-w-2xl px-4 pt-6 font-heading text-2xl font-bold text-ink sm:px-6 sm:text-3xl">
      {t("mereKaam.title")}
    </h1>
  );
}
