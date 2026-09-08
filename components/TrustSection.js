"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function TrustSection() {
  const { t } = useLanguage();
  const points = t("trust.points");

  return (
    <section className="bg-teal-600 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center font-heading text-xl font-semibold text-white sm:text-2xl">
          {t("trust.heading")}
        </h2>

        <ul className="mt-6 space-y-3">
          {points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 rounded-2xl bg-white/10 px-4 py-3"
            >
              <span
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-marigold-500 text-sm text-teal-900"
                aria-hidden="true"
              >
                ✓
              </span>
              <span className="font-body text-base text-white">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
