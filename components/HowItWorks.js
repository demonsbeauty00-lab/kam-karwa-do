"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function HowItWorks() {
  const { t } = useLanguage();
  const steps = t("howItWorks.steps");

  return (
    <section className="px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-8 text-center font-heading text-xl font-semibold text-ink sm:text-2xl">
          {t("howItWorks.heading")}
        </h2>

        <ol className="relative">
          {steps.map((step, i) => (
            <li key={step.title} className="relative flex gap-4 pb-8 last:pb-0">
              {i !== steps.length - 1 && (
                <span
                  className="absolute left-[19px] top-10 h-full w-0.5 bg-teal-100"
                  aria-hidden="true"
                />
              )}
              <span
                className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-600 font-heading text-base font-semibold text-white"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <div className="pt-1.5">
                <h3 className="font-heading text-base font-semibold text-ink sm:text-lg">
                  {step.title}
                </h3>
                <p className="mt-0.5 font-body text-sm text-ink-faint sm:text-base">
                  {step.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
