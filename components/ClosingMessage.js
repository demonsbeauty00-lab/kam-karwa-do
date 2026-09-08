"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ClosingMessage() {
  const { t } = useLanguage();

  return (
    <section className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-xl text-center">
        <p className="font-heading text-xl font-semibold leading-snug text-teal-600 sm:text-2xl">
          {t("closing.message")}
        </p>
      </div>
    </section>
  );
}
