"use client";

import { useEffect, useState } from "react";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import LanguagePicker from "@/components/LanguagePicker";

const LANGUAGE_KEY = "kkd_language";

function LanguageGate({ children }) {
  const [showPicker, setShowPicker] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(LANGUAGE_KEY);
    if (!saved) {
      setShowPicker(true);
    }
    setChecked(true);
  }, []);

  // Avoid a flash of content before we know whether to show the picker.
  if (!checked) return null;

  return (
    <>
      {children}
      {showPicker && <LanguagePicker onChoose={() => setShowPicker(false)} />}
    </>
  );
}

export default function AppShell({ children }) {
  return (
    <LanguageProvider>
      <LanguageGate>{children}</LanguageGate>
    </LanguageProvider>
  );
}
