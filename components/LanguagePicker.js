"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

const LANGUAGE_KEY = "kkd_language";

export default function LanguagePicker({ onChoose }) {
  const { t, setLanguage } = useLanguage();

  function choose(lang) {
    setLanguage(lang);
    onChoose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 px-4">
      <div className="w-full max-w-sm rounded-3xl bg-white p-6 text-center shadow-soft sm:p-8">
        <h1 className="font-heading text-xl font-bold text-ink sm:text-2xl">
          {t("languagePicker.title")}
        </h1>
        <p className="mt-1.5 font-body text-sm text-ink-soft">
          {t("languagePicker.subtitle")}
        </p>

        <div className="mt-6 flex flex-col gap-3">
          <button
            type="button"
            onClick={() => choose("en")}
            className="w-full rounded-2xl border-2 border-teal-600 bg-white px-5 py-3.5 font-heading text-base font-semibold text-teal-600 hover:bg-teal-50"
          >
            {t("languagePicker.english")}
          </button>
          <button
            type="button"
            onClick={() => choose("hi")}
            className="w-full rounded-2xl bg-teal-600 px-5 py-3.5 font-heading text-base font-semibold text-white shadow-soft hover:bg-teal-700"
          >
            {t("languagePicker.hinglish")}
          </button>
        </div>
      </div>
    </div>
  );
}

export { LANGUAGE_KEY };
