"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

const categoryDefs = [
  { id: "document", icon: "📄" },
  { id: "pickup_delivery", icon: "🛵" },
  { id: "ghar", icon: "🏠" },
  { id: "bazaar", icon: "🏪" },
  { id: "family", icon: "👨‍👩‍👧" },
  { id: "parcel", icon: "📦" },
  { id: "other", icon: "✏️" },
];

export { categoryDefs as categories };

export default function CategorySelector({ value, onChange }) {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
      {categoryDefs.map((cat) => {
        const active = value === cat.id;
        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onChange(cat.id)}
            aria-pressed={active}
            className={`flex flex-col items-center gap-1.5 rounded-2xl border-2 px-3 py-4 text-center transition-colors ${
              active
                ? "border-teal-600 bg-teal-50"
                : "border-transparent bg-paper-dark hover:bg-teal-50/60"
            }`}
          >
            <span className="text-2xl" aria-hidden="true">
              {cat.icon}
            </span>
            <span className="font-body text-xs font-medium text-ink-soft sm:text-sm">
              {t(`form.categories.${cat.id}`)}
            </span>
          </button>
        );
      })}
    </div>
  );
}
