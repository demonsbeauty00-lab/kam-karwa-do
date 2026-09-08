"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { reverseGeocode } from "@/lib/geocode";

export default function LocationField({ value, onChange, placeholderKey }) {
  const { t } = useLanguage();
  const [status, setStatus] = useState("idle"); // idle | locating | resolving
  const [locError, setLocError] = useState("");

  function useCurrentLocation() {
    setLocError("");

    if (!("geolocation" in navigator)) {
      setLocError(t("form.locNoSupport"));
      return;
    }

    setStatus("locating");
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setStatus("resolving");

        try {
          const address = await reverseGeocode(latitude, longitude);
          onChange(address);
        } catch (err) {
          console.error("Address lookup failed:", err);
          setLocError(t("form.locAddressFailed"));
          onChange(`(${latitude.toFixed(5)}, ${longitude.toFixed(5)})`);
        }

        setStatus("idle");
      },
      (err) => {
        setStatus("idle");
        if (err.code === err.PERMISSION_DENIED) {
          setLocError(t("form.locDenied"));
        } else {
          setLocError(t("form.locGeneric"));
        }
      }
    );
  }

  const buttonLabel =
    status === "locating"
      ? t("form.locating")
      : status === "resolving"
      ? t("form.locResolving")
      : t("form.useLocation");

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t(placeholderKey)}
        className="w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 font-body text-base text-ink placeholder:text-ink-faint focus:border-teal-600 focus:outline-none"
      />
      <button
        type="button"
        onClick={useCurrentLocation}
        disabled={status !== "idle"}
        className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-teal-600/30 bg-teal-50 px-3 py-1.5 font-body text-sm font-medium text-teal-600 hover:bg-teal-100 disabled:opacity-60"
      >
        <span aria-hidden="true">📍</span>
        {buttonLabel}
      </button>
      {locError && (
        <p className="mt-1.5 font-body text-xs text-red-600">{locError}</p>
      )}
    </div>
  );
}
