"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { getTaskById } from "@/lib/tasks";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ConfirmationContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [task, setTask] = useState(null);
  const [checked, setChecked] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    if (id) {
      setTask(getTaskById(id));
    }
    setChecked(true);
  }, [id]);

  if (!checked) return null;

  if (!task) {
    return (
      <div className="mx-auto max-w-md px-4 py-16 text-center sm:px-6">
        <p className="font-body text-base text-ink-soft">{t("confirmation.notFound")}</p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-2xl bg-teal-600 px-6 py-3 font-heading text-base font-semibold text-white shadow-soft hover:bg-teal-700"
        >
          {t("confirmation.goHome")}
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md px-4 py-16 text-center sm:px-6">
      <span className="text-5xl" aria-hidden="true">
        🎉
      </span>
      <h1 className="mt-4 font-heading text-2xl font-bold text-ink sm:text-3xl">
        {t("confirmation.title")}
      </h1>
      <p className="mt-2 font-body text-base text-ink-soft">
        {t("confirmation.message")}
      </p>

      <div className="mt-6 inline-block rounded-xl bg-teal-50 px-5 py-2.5 font-heading text-base font-semibold text-teal-600">
        {t("confirmation.taskIdLabel")}: #{task.id}
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <Link
          href="/mere-kaam"
          className="w-full rounded-2xl bg-teal-600 px-6 py-4 font-heading text-base font-semibold text-white shadow-soft hover:bg-teal-700"
        >
          {t("confirmation.viewTasks")}
        </Link>
        <Link
          href="/"
          className="w-full rounded-2xl border border-teal-600/30 bg-white px-6 py-4 font-heading text-base font-semibold text-teal-600 hover:bg-teal-50"
        >
          {t("confirmation.goHome")}
        </Link>
      </div>
    </div>
  );
}
