"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const categoryDefs = [
  { icon: "📄", key: "document", tint: "bg-teal-50", ring: "hover:ring-teal-400/40" },
  { icon: "🛵", key: "pickupDelivery", tint: "bg-marigold-100", ring: "hover:ring-marigold-500/50" },
  { icon: "🏠", key: "ghar", tint: "bg-teal-50", ring: "hover:ring-teal-400/40" },
  { icon: "🏪", key: "bazaar", tint: "bg-marigold-100", ring: "hover:ring-marigold-500/50" },
  { icon: "👨‍👩‍👧", key: "family", tint: "bg-teal-50", ring: "hover:ring-teal-400/40" },
  { icon: "✍️", key: "other", tint: "bg-marigold-100", ring: "hover:ring-marigold-500/50" },
];

export default function TaskCategories() {
  const { t } = useLanguage();

  return (
    <section className="px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-5 text-center font-heading text-xl font-semibold text-ink sm:text-2xl">
          {t("homeCategories.sectionTitle")}
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {categoryDefs.map((cat) => (
            <Link
              key={cat.key}
              href="/kaam-karwana-hai"
              className={`flex flex-col items-center gap-2 rounded-2xl ${cat.tint} px-3 py-5 text-center shadow-sm ring-1 ring-transparent transition-all ${cat.ring} hover:shadow-soft`}
            >
              <span className="text-3xl" aria-hidden="true">
                {cat.icon}
              </span>
              <span className="font-body text-sm font-medium text-ink-soft sm:text-base">
                {t(`homeCategories.${cat.key}`)}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
