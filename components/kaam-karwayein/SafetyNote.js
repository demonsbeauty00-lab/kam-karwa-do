"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function SafetyNote() {
  const { t } = useLanguage();
  const points = t("form.safetyPoints");

  return (
    <div className="rounded-2xl bg-marigold-100 p-4 sm:p-5">
      <p className="font-heading text-sm font-semibold text-ink">
        {t("form.safetyHeading")}
      </p>
      <ul className="mt-2 space-y-1.5 font-body text-sm text-ink-soft">
        {points.map((point) => (
          <li key={point}>• {point}</li>
        ))}
      </ul>
    </div>
  );
}
