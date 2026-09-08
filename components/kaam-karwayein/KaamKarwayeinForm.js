"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import FormSection from "./FormSection";
import CategorySelector from "./CategorySelector";
import LocationField from "./LocationField";
import TimingSelector from "./TimingSelector";
import PhotoUpload from "./PhotoUpload";
import SafetyNote from "./SafetyNote";
import PriceSummary from "./PriceSummary";
import { saveTask, getProfile, saveProfile } from "@/lib/tasks";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function KaamKarwayeinForm() {
  const router = useRouter();
  const { t } = useLanguage();

  const [description, setDescription] = useState("");
  const [voiceNote, setVoiceNote] = useState(false);
  const [category, setCategory] = useState("");
  const [pickupAddress, setPickupAddress] = useState("");
  const [dropAddress, setDropAddress] = useState("");
  const [timing, setTiming] = useState("abhi");
  const [customDateTime, setCustomDateTime] = useState("");
  const [budget, setBudget] = useState("");
  const [files, setFiles] = useState([]);
  const [extraDetails, setExtraDetails] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  // Placeholder: existing profile, if the customer filled it in before.
  // No login system exists yet — this is a simple stand-in.
  useEffect(() => {
    const profile = getProfile();
    if (profile) {
      setContactName(profile.name || "");
      setContactPhone(profile.phone || "");
    }
  }, []);

  function validate() {
    const newErrors = {};
    const errs = t("form.errors");

    if (description.trim().length < 5) newErrors.description = errs.description;
    if (!category) newErrors.category = errs.category;
    if (!pickupAddress.trim()) newErrors.pickupAddress = errs.pickupAddress;
    if (!dropAddress.trim()) newErrors.dropAddress = errs.dropAddress;
    if (timing === "custom" && !customDateTime) newErrors.timing = errs.timing;
    if (!budget || Number(budget) <= 0) newErrors.budget = errs.budget;
    if (!contactName.trim()) newErrors.contactName = errs.contactName;
    if (!/^\d{10}$/.test(contactPhone.trim())) newErrors.contactPhone = errs.contactPhone;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validate()) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setSubmitting(true);

    saveProfile({ name: contactName.trim(), phone: contactPhone.trim() });

    const task = saveTask({
      description: description.trim(),
      category,
      pickupAddress: pickupAddress.trim(),
      dropAddress: dropAddress.trim(),
      timing,
      customDateTime: timing === "custom" ? customDateTime : null,
      budget: Number(budget),
      fileNames: files.map((f) => f.name),
      extraDetails: extraDetails.trim(),
      contactName: contactName.trim(),
      contactPhone: contactPhone.trim(),
    });

    setSubmitting(false);

    if (task) {
      router.push(`/kaam-karwana-hai/confirmation?id=${task.id}`);
    } else {
      setErrors({ form: t("form.errors.formGeneric") });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-2xl px-4 py-6 sm:px-6">
      <div className="flex flex-col gap-4">
        {errors.form && (
          <div className="rounded-xl bg-red-50 px-4 py-3 font-body text-sm text-red-700">
            {errors.form}
          </div>
        )}

        {/* 1. Kaam kya hai */}
        <FormSection label={t("form.whatTaskLabel")}>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder={t("form.whatTaskPlaceholder")}
            rows={4}
            className="w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 font-body text-base text-ink placeholder:text-ink-faint focus:border-teal-600 focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setVoiceNote(true)}
            className="mt-2 flex items-center gap-1.5 rounded-full border border-marigold-500 bg-marigold-100 px-4 py-2 font-body text-sm font-medium text-ink hover:bg-marigold-300/60"
          >
            <span aria-hidden="true">🎤</span> {t("form.voiceButton")}
          </button>
          {voiceNote && (
            <p className="mt-1.5 font-body text-xs text-ink-faint">
              {t("form.voiceNote")}
            </p>
          )}
          {errors.description && (
            <p className="mt-1.5 font-body text-xs text-red-600">
              {errors.description}
            </p>
          )}
        </FormSection>

        {/* 2. Category */}
        <FormSection label={t("form.categoryLabel")}>
          <CategorySelector value={category} onChange={setCategory} />
          {errors.category && (
            <p className="mt-2 font-body text-xs text-red-600">
              {errors.category}
            </p>
          )}
        </FormSection>

        {/* 3. Pickup */}
        <FormSection label={t("form.pickupLabel")}>
          <LocationField
            value={pickupAddress}
            onChange={setPickupAddress}
            placeholderKey="form.pickupPlaceholder"
          />
          {errors.pickupAddress && (
            <p className="mt-1.5 font-body text-xs text-red-600">
              {errors.pickupAddress}
            </p>
          )}
        </FormSection>

        {/* 4. Drop */}
        <FormSection label={t("form.dropLabel")}>
          <LocationField
            value={dropAddress}
            onChange={setDropAddress}
            placeholderKey="form.dropPlaceholder"
          />
          {errors.dropAddress && (
            <p className="mt-1.5 font-body text-xs text-red-600">
              {errors.dropAddress}
            </p>
          )}
        </FormSection>

        {/* 5. Timing */}
        <FormSection label={t("form.timingLabel")}>
          <TimingSelector
            value={timing}
            onChange={setTiming}
            customDateTime={customDateTime}
            onCustomChange={setCustomDateTime}
          />
          {errors.timing && (
            <p className="mt-1.5 font-body text-xs text-red-600">
              {errors.timing}
            </p>
          )}
        </FormSection>

        {/* 6. Budget */}
        <FormSection label={t("form.budgetLabel")} helperText={t("form.budgetHelper")}>
          <div className="flex items-center gap-2 rounded-xl border border-ink/15 bg-paper px-4 py-3 focus-within:border-teal-600">
            <span className="font-body text-base text-ink-faint">₹</span>
            <input
              type="number"
              min="0"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="0"
              className="w-full bg-transparent font-body text-base text-ink outline-none"
            />
          </div>
          {errors.budget && (
            <p className="mt-1.5 font-body text-xs text-red-600">
              {errors.budget}
            </p>
          )}
        </FormSection>

        {/* 7. Photo */}
        <FormSection label={t("form.photoLabel")}>
          <PhotoUpload files={files} onChange={setFiles} />
        </FormSection>

        {/* 8. Extra details */}
        <FormSection label={t("form.extraLabel")}>
          <textarea
            value={extraDetails}
            onChange={(e) => setExtraDetails(e.target.value)}
            placeholder={t("form.extraPlaceholder")}
            rows={3}
            className="w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 font-body text-base text-ink placeholder:text-ink-faint focus:border-teal-600 focus:outline-none"
          />
        </FormSection>

        {/* 9. Contact info */}
        <FormSection label={t("form.contactLabel")}>
          <div className="flex flex-col gap-3">
            <div>
              <input
                type="text"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder={t("form.namePlaceholder")}
                className="w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 font-body text-base text-ink placeholder:text-ink-faint focus:border-teal-600 focus:outline-none"
              />
              {errors.contactName && (
                <p className="mt-1.5 font-body text-xs text-red-600">
                  {errors.contactName}
                </p>
              )}
            </div>
            <div>
              <input
                type="tel"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                placeholder={t("form.phonePlaceholder")}
                className="w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 font-body text-base text-ink placeholder:text-ink-faint focus:border-teal-600 focus:outline-none"
              />
              {errors.contactPhone && (
                <p className="mt-1.5 font-body text-xs text-red-600">
                  {errors.contactPhone}
                </p>
              )}
            </div>
          </div>
          <p className="mt-2 font-body text-xs text-ink-faint">{t("form.contactNote")}</p>
        </FormSection>

        {/* 10. Price summary */}
        <PriceSummary budget={budget} />

        {/* 11. Safety note */}
        <SafetyNote />

        {/* 12. Submit */}
        <button
          type="submit"
          disabled={submitting}
          className="mt-2 w-full rounded-2xl bg-teal-600 px-6 py-4 text-center font-heading text-lg font-semibold text-white shadow-soft hover:bg-teal-700 active:scale-[0.99] disabled:opacity-70"
        >
          {submitting ? t("form.submitting") : t("form.submitButton")}
        </button>
      </div>
    </form>
  );
}
