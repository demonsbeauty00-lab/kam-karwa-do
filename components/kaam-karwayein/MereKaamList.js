"use client";

import { useEffect, useState } from "react";
import { getTasks } from "@/lib/tasks";
import { categories } from "@/components/kaam-karwayein/CategorySelector";
import { useLanguage } from "@/lib/i18n/LanguageContext";

function categoryIcon(id) {
  return categories.find((c) => c.id === id)?.icon || "📋";
}

export default function MereKaamList() {
  const [tasks, setTasks] = useState(null);
  const { t } = useLanguage();

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  if (tasks === null) return null;

  if (tasks.length === 0) {
    return (
      <p className="mx-auto max-w-md px-4 py-10 text-center font-body text-base text-ink-soft sm:px-6">
        {t("mereKaam.empty")}
      </p>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6">
      <div className="flex flex-col gap-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-ink/5"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl" aria-hidden="true">
                  {categoryIcon(task.category)}
                </span>
                <div>
                  <p className="font-heading text-base font-semibold text-ink">
                    {t(`form.categories.${task.category}`)}
                  </p>
                  <p className="mt-0.5 line-clamp-2 font-body text-sm text-ink-soft">
                    {task.description}
                  </p>
                </div>
              </div>
              <span className="rounded-full bg-marigold-100 px-2.5 py-1 font-body text-xs font-medium text-ink whitespace-nowrap">
                {t("mereKaam.statusSearching")}
              </span>
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-ink/5 pt-2.5">
              <span className="font-body text-xs text-ink-faint">
                #{task.id}
              </span>
              <span className="font-body text-sm font-semibold text-teal-600">
                ₹{task.budget}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
