// components/home/consultation-form.tsx
"use client";

import React, { useEffect, useState, useRef } from "react";
import { z } from "zod";
import Button from "./common/button";

const consultationSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name is too long"),
  state: z.string().min(2, "Please select your state"),
  phone: z
    .string()
    .regex(/^[6-9][0-9]{9}$/, "Enter a valid 10-digit Indian mobile number"),
  loanType: z.string().min(1, "Please select a product type"),
});

type ConsultationFormValues = z.infer<typeof consultationSchema>;
type FormErrors = Partial<Record<keyof ConsultationFormValues, string>>;

const LOAN_OPTIONS = [
  { value: "cash-credit", label: "CASH CREDIT LIMIT" },
  { value: "overdraft", label: "OVER DRAFT LIMIT" },
  { value: "home-loan", label: "HOME LOAN" },
  { value: "personal-loan", label: "PERSONAL LOAN" },
  { value: "business-loan", label: "BUSINESS LOAN" },
  { value: "project-loan", label: "PROJECT LOAN" },
  { value: "loan-against-property", label: "LOAN AGAINST PROPERTY" },
  { value: "npa-ots-funding", label: "NPA & OTS FUNDING" },
  { value: "bridge-finance", label: "BRIDGE FINANCE" },
  { value: "stressed-asset-finance", label: "STRESSED ASSET FINANCE" },
];

const INDIAN_STATES = [
  "Andaman & Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra & Nagar Haveli and Daman & Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu & Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

interface DropdownProps {
  value: string;
  onChange: (val: string) => void;
  error?: string;
  options: { value: string; label: string }[];
  placeholder: string;
}

function CustomDropdown({
  value,
  onChange,
  error,
  options,
  placeholder,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selected = options.find((o) => o.value === value);

  return (
    <div ref={wrapperRef} className="relative w-full h-auto self-start">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((p) => !p)}
        className={`w-full flex items-center justify-between bg-black/3 border rounded-2xl px-5 h-13 sm:h-14 text-[16px] sm:text-sm transition-colors focus:outline-none hover:bg-black/5 ${
          error
            ? "border-red-500/60"
            : open
              ? "border-cyprus bg-white"
              : "border-transparent"
        }`}
      >
        {/* ♿ A11Y FIX: Contrast badha diya taaki Lighthouse pass ho */}
        <span
          className={
            selected
              ? "text-cyprus font-semibold"
              : "text-cyprus/60 font-medium"
          }
        >
          {selected ? selected.label : placeholder}
        </span>
        <svg
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          className="transition-transform duration-200 text-cyprus/70 shrink-0 ml-2"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M4 6l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}

      {open && (
        <div className="absolute left-0 right-0 mt-2 rounded-2xl border border-border bg-surface shadow-2xl z-50 overflow-hidden flex flex-col">
          <div
            role="listbox"
            className="max-h-48 overflow-y-auto overscroll-contain touch-pan-y"
          >
            {options.map((opt) => (
              <button
                key={opt.value}
                type="button"
                role="option"
                aria-selected={value === opt.value}
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
                className={`w-full text-left px-4 py-3 transition-colors flex items-center justify-between ${
                  value === opt.value
                    ? "text-cyprus bg-cyprus/5 font-semibold"
                    : "text-muted hover:text-cyprus hover:bg-black/2"
                }`}
              >
                <span>{opt.label}</span>
                {value === opt.value && (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="text-cyprus shrink-0 ml-2"
                  >
                    <path
                      d="M2.5 7l3.5 3.5 5.5-6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

interface ConsultationFormProps {
  preselectedLoan?: string;
}

export default function ConsultationForm({
  preselectedLoan = "",
}: ConsultationFormProps) {
  const [form, setForm] = useState<ConsultationFormValues>({
    fullName: "",
    state: "",
    phone: "",
    loanType: preselectedLoan,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setForm((prev) => ({ ...prev, loanType: preselectedLoan }));
  }, [preselectedLoan]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setSubmitError("");
    const result = consultationSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0] as keyof ConsultationFormValues] =
          issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        throw new Error(json.error || "Failed to submit request.");
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error("Submit failed:", err);
      setSubmitError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const setField =
    (field: keyof ConsultationFormValues) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((p) => ({ ...p, [field]: e.target.value }));
      if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined }));
      if (submitError) setSubmitError("");
    };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyNumbers = e.target.value.replace(/\D/g, "");
    setForm((p) => ({ ...p, phone: onlyNumbers }));
    if (errors.phone) setErrors((p) => ({ ...p, phone: undefined }));
    if (submitError) setSubmitError("");
  };

  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl bg-surface p-4 sm:p-6 border border-border/80 shadow-[0_25px_60px_-15px_rgba(0,71,65,0.08)]">
      <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyprus/4 blur-3xl" />

      <div className="relative mb-8">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-cyprus">
          Tell Us What You Need
        </h3>
        <p className="mt-2 text-base font-medium text-muted leading-relaxed">
          Share a few details and our team will get in touch to guide you
          through the right loan option.
        </p>
      </div>

      {submitted ? (
        <div className="py-12 text-center space-y-3">
          <div className="w-12 h-12 bg-cyprus/10 text-cyprus rounded-full flex items-center justify-center mx-auto font-bold text-lg">
            ✓
          </div>
          <h4 className="font-serif text-xl font-bold text-cyprus">
            Request Received
          </h4>
          <p className="text-sm text-muted">
            Thank you, {form.fullName}. Our financial expert will call you back
            shortly at +91 {form.phone}.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative space-y-5">
          {submitError && (
            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm font-medium text-center">
              {submitError}
            </div>
          )}

          <div>
            <label
              htmlFor="full-name"
              className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-cyprus"
            >
              Full Name
            </label>
            <input
              id="full-name"
              type="text"
              name="name"
              autoComplete="name"
              disabled={isSubmitting}
              value={form.fullName}
              onChange={setField("fullName")}
              placeholder="e.g., Daksh Rawat"
              className={`h-13 sm:h-14 w-full rounded-2xl bg-black/3 px-5 text-[16px] sm:text-sm font-medium text-cyprus outline-none transition-all duration-300 placeholder:text-cyprus/50 hover:bg-black/5 focus:bg-white focus:ring-2 focus:ring-cyprus/20 border ${errors.fullName ? "border-red-500" : "border-transparent focus:border-cyprus"}`}
            />
            {errors.fullName && (
              <p className="mt-1.5 text-xs text-red-500">{errors.fullName}</p>
            )}
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="state"
                className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-cyprus"
              >
                State
              </label>
              <CustomDropdown
                value={form.state}
                onChange={(val) => {
                  setForm((p) => ({ ...p, state: val }));
                  if (errors.state)
                    setErrors((p) => ({ ...p, state: undefined }));
                }}
                error={errors.state}
                options={INDIAN_STATES.map((s) => ({ value: s, label: s }))}
                placeholder="Select state"
              />
            </div>
            <div>
              <label
                htmlFor="loan-type"
                className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-cyprus"
              >
                Loan Type
              </label>
              <CustomDropdown
                value={form.loanType}
                onChange={(val) => {
                  setForm((p) => ({ ...p, loanType: val }));
                  if (errors.loanType)
                    setErrors((p) => ({ ...p, loanType: undefined }));
                }}
                error={errors.loanType}
                options={LOAN_OPTIONS}
                placeholder="Select loan"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-cyprus"
            >
              Mobile Number
            </label>
            <div
              className={`flex h-13 sm:h-14 overflow-hidden rounded-2xl bg-black/3 border transition-all duration-300 focus-within:bg-white focus-within:ring-2 focus-within:ring-cyprus/20 hover:bg-black/5 ${errors.phone ? "border-red-500" : "border-transparent focus-within:border-cyprus"}`}
            >
              {/* ♿ A11Y FIX: +91 text contrast enhanced */}
              <span className="flex items-center px-5 text-[16px] sm:text-sm font-bold text-cyprus/80 bg-black/2 border-r border-black/5">
                +91
              </span>
              <input
                id="phone"
                type="tel"
                name="tel"
                autoComplete="tel"
                disabled={isSubmitting}
                inputMode="numeric"
                maxLength={10}
                value={form.phone}
                onChange={handlePhoneChange}
                placeholder="98765 43210"
                className="min-w-0 flex-1 bg-transparent px-4 text-[16px] sm:text-sm font-medium text-cyprus outline-none placeholder:text-cyprus/50"
              />
            </div>
            {errors.phone && (
              <p className="mt-1.5 text-xs text-red-500">{errors.phone}</p>
            )}
          </div>

          <div className="pt-2">
            <Button
              disabled={isSubmitting}
              className="w-full rounded-2xl py-4 text-sm font-bold tracking-wide shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:py-4.5 sm:text-base flex items-center justify-center gap-2 bg-cyprus text-sand"
            >
              {isSubmitting ? "Submitting Request..." : "Get Free Consultation"}
            </Button>
            {/* ♿ A11Y FIX: Subtitle contrast improved */}
            <p className="mt-3 text-center text-xs font-medium text-cyprus/75">
              Our team will contact you shortly.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
