"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden px-4 pt-10 pb-12 sm:px-6 sm:pt-14">
      {/* soft background shape, purely decorative */}
      <svg
        className="pointer-events-none absolute -top-16 -right-24 h-72 w-72 opacity-40 sm:h-96 sm:w-96"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <path
          fill="#CFE6E1"
          d="M45.9,-58.3C58.8,-49.3,68.1,-34.4,71.8,-18.1C75.4,-1.8,73.4,15.9,65.4,30.4C57.4,44.9,43.4,56.2,27.6,63.1C11.8,70,-5.8,72.5,-21.9,68C-38,63.5,-52.6,52,-61.5,37.1C-70.4,22.2,-73.6,3.9,-69.7,-12.3C-65.8,-28.5,-54.8,-42.6,-41.2,-51.6C-27.6,-60.6,-11.4,-64.5,3.6,-68.7C18.6,-72.9,33,-67.3,45.9,-58.3Z"
          transform="translate(100 100)"
        />
      </svg>

      <div className="relative mx-auto max-w-2xl text-center">
        <h1 className="font-heading text-3xl font-bold leading-tight text-ink sm:text-4xl">
          {t("hero.title")}
        </h1>
        <p className="mt-3 font-body text-lg text-ink-soft sm:text-xl">
          {t("hero.subtitle")}
        </p>

        <div className="mt-8 flex flex-col items-center gap-4">
          <Link
            href="/kaam-karwana-hai"
            className="w-full max-w-sm rounded-2xl bg-teal-600 px-6 py-4 text-center font-heading text-lg font-semibold text-white shadow-soft transition-transform hover:scale-[1.02] hover:bg-teal-700 active:scale-[0.99] sm:w-auto sm:px-10"
          >
            {t("hero.primaryButton")}
          </Link>

          <Link
            href="/bolkar-kaam-batayein"
            className="flex items-center gap-2 rounded-full border-2 border-marigold-500 bg-marigold-100 px-5 py-3 font-body text-base font-medium text-ink hover:bg-marigold-300/60 transition-colors"
          >
            <span aria-hidden="true">🎤</span>
            {t("hero.voiceButton")}
          </Link>
        </div>
      </div>
    </section>
  );
}
