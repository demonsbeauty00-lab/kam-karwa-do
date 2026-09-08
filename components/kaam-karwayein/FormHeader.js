"use client";

import { useRouter } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function FormHeader({ titleKey, subtitleKey }) {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <div className="sticky top-0 z-40 bg-paper/95 backdrop-blur border-b border-ink/5 px-4 py-3 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <button
          type="button"
          onClick={() => router.back()}
          className="flex items-center gap-1 font-body text-sm font-medium text-teal-600 hover:text-teal-700"
        >
          <span aria-hidden="true">←</span> {t("formHeader.back")}
        </button>

        <h1 className="mt-2 font-heading text-2xl font-bold text-ink sm:text-3xl">
          {t(titleKey)}
        </h1>
        {subtitleKey && (
          <p className="mt-1 font-body text-sm text-ink-soft sm:text-base">
            {t(subtitleKey)}
          </p>
        )}
      </div>
    </div>
  );
}
