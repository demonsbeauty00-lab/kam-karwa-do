"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const links = [
    { label: t("footer.about"), href: "/about" },
    { label: t("footer.help"), href: "/help" },
    { label: t("footer.terms"), href: "/terms" },
    { label: t("footer.privacy"), href: "/privacy" },
  ];

  return (
    <footer className="border-t border-ink/10 bg-paper-dark px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm text-ink-soft hover:text-teal-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="font-body text-xs text-ink-faint">
          © {new Date().getFullYear()} {t("common.appName")}. {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}
