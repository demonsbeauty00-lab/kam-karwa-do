export default function FormSection({ label, helperText, children }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-ink/5 sm:p-5">
      {label && (
        <label className="mb-2 block font-heading text-base font-semibold text-ink">
          {label}
        </label>
      )}
      {children}
      {helperText && (
        <p className="mt-2 font-body text-xs text-ink-faint">{helperText}</p>
      )}
    </div>
  );
}
