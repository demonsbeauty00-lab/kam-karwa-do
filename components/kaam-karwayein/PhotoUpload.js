"use client";

import { useRef } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function PhotoUpload({ files, onChange }) {
  const inputRef = useRef(null);
  const { t } = useLanguage();

  function handleFiles(e) {
    const selected = Array.from(e.target.files || []);
    const withPreview = selected.map((file) => ({
      name: file.name,
      size: file.size,
      previewUrl: URL.createObjectURL(file),
    }));
    onChange([...files, ...withPreview]);
    e.target.value = "";
  }

  function removeFile(index) {
    onChange(files.filter((_, i) => i !== index));
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*,.pdf"
        multiple
        onChange={handleFiles}
        className="hidden"
      />
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="w-full rounded-xl border-2 border-dashed border-teal-600/40 bg-teal-50 px-4 py-4 font-body text-sm font-medium text-teal-600 hover:bg-teal-100"
      >
        {t("form.photoButton")}
      </button>

      {files.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2.5">
          {files.map((file, i) => (
            <div key={i} className="relative w-20">
              {file.previewUrl && file.name.match(/\.(jpe?g|png|gif|webp)$/i) ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={file.previewUrl}
                  alt={file.name}
                  className="h-20 w-20 rounded-lg object-cover ring-1 ring-ink/10"
                />
              ) : (
                <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-paper-dark text-2xl ring-1 ring-ink/10">
                  📎
                </div>
              )}
              <button
                type="button"
                onClick={() => removeFile(i)}
                aria-label={`Remove ${file.name}`}
                className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-ink text-xs text-white"
              >
                ✕
              </button>
              <p className="mt-1 truncate font-body text-[11px] text-ink-faint">
                {file.name}
              </p>
            </div>
          ))}
        </div>
      )}

      <p className="mt-2 font-body text-xs text-ink-faint">{t("form.photoNote")}</p>
    </div>
  );
}
