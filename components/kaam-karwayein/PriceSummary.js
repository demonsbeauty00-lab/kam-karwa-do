"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function PriceSummary({ budget }) {
  const { t } = useLanguage();
  const amount = Number(budget) || 0;

  return (
    <div className="rounded-2xl border border-teal-600/20 bg-teal-50 p-4 sm:p-5">
      <div className="flex items-center justify-between font-body text-sm text-ink-soft">
        <span>{t("form.priceBudget")}</span>
        <span className="font-semibold text-ink">₹{amount || "___"}</span>
      </div>
      <div className="mt-1.5 flex items-center justify-between font-body text-sm text-ink-soft">
        <span>{t("form.priceFee")}</span>
        <span className="font-semibold text-ink">{t("form.priceFeeValue")}</span>
      </div>
      <div className="mt-2 flex items-center justify-between border-t border-teal-600/20 pt-2 font-body text-base">
        <span className="font-semibold text-ink">{t("form.priceTotal")}</span>
        <span className="font-heading font-bold text-teal-600">
          ₹{amount || "___"}
        </span>
      </div>
      <p className="mt-2 font-body text-xs text-ink-faint">{t("form.paymentNote")}</p>
    </div>
  );
}
