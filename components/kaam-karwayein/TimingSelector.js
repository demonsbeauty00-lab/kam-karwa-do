"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

const optionIds = ["abhi", "aaj_baad", "kal", "custom"];

export default function TimingSelector({ value, onChange, customDateTime, onCustomChange }) {
  const { t } = useLanguage();
  const labels = t("form.timingOptions");

  return (
    <div>
      <div className="flex flex-col gap-2">
        {optionIds.map((id) => {
          const active = value === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => onChange(id)}
              aria-pressed={active}
              className="flex items-center gap-2.5 rounded-xl border border-ink/10 bg-paper px-4 py-3 text-left hover:bg-paper-dark"
            >
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                  active ? "border-teal-600 bg-teal-600" : "border-ink/25 bg-white"
                }`}
                aria-hidden="true"
              >
                {active && <span className="h-2 w-2 rounded-full bg-white" />}
              </span>
              <span className="font-body text-base text-ink">{labels[id]}</span>
            </button>
          );
        })}
      </div>

      {value === "custom" && (
        <input
          type="datetime-local"
          value={customDateTime}
          onChange={(e) => onCustomChange(e.target.value)}
          className="mt-3 w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 font-body text-base text-ink focus:border-teal-600 focus:outline-none"
        />
      )}
    </div>
  );
}
