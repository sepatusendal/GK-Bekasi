"use client";
// Bang Wira - github.com/sepatusendal

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, AlertTriangle, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { submitToGoogleForm } from "@/lib/forms/submit";
import { siteConfig } from "@/lib/site";

const INTEREST_OPTIONS = [
  "Social Impact",
  "Education",
  "Creative",
  "Technology",
  "Entrepreneurship",
  "Community",
  "Event",
  "Media",
  "Leadership",
] as const;

const joinSchema = z.object({
  name: z.string().trim().min(2, "Nama minimal 2 karakter."),
  email: z.string().trim().min(1, "Email wajib diisi.").email("Format email tidak valid."),
  whatsapp: z
    .string()
    .trim()
    .min(8, "Nomor WhatsApp minimal 8 digit.")
    .regex(/^[0-9+\s-]+$/, "Nomor WhatsApp hanya boleh angka."),
  kecamatan: z.string().trim().min(2, "Kecamatan wajib diisi."),
  interests: z
    .array(z.string())
    .min(1, "Pilih minimal 1 minat."),
  skill: z.string().trim().optional(),
  instagram: z.string().trim().optional(),
  reason: z
    .string()
    .trim()
    .min(20, "Ceritain sedikit lagi ya, minimal 20 karakter."),
});

type JoinFormValues = z.infer<typeof joinSchema>;

export function JoinForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<JoinFormValues>({
    resolver: zodResolver(joinSchema),
    defaultValues: {
      name: "",
      email: "",
      whatsapp: "",
      kecamatan: "",
      interests: [],
      skill: "",
      instagram: "",
      reason: "",
    },
  });

  async function onSubmit(values: JoinFormValues) {
    try {
      setSubmitError(false);
      await submitToGoogleForm("join", values);
      setSubmitted(true);
    } catch {
      setSubmitError(true);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-5 py-12 text-center">
        <Badge variant="red" className="text-sm">
          <CheckCircle2 className="size-4" />
          Terkirim
        </Badge>
        <h3 className="font-display text-3xl font-bold uppercase leading-[0.95] tracking-tight text-gk-black sm:text-4xl">
          You&apos;re in. Welcome to the movement.
        </h3>
        <p className="max-w-md text-base text-gk-black/70">
          Tim GK Bekasi bakal hubungin kamu lewat WhatsApp atau email dalam
          beberapa hari ke depan. Sambil nunggu, langsung gabung grup WA-nya
          biar gak ketinggalan info.
        </p>
        <Button size="lg" className="mt-2 gap-2" asChild>
          <a
            href={siteConfig.socials.whatsappGroup}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="size-4" />
            Gabung Grup WhatsApp
          </a>
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
      <Field label="Nama Lengkap" htmlFor="name" error={errors.name?.message}>
        <Input
          id="name"
          autoComplete="name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          {...register("name")}
        />
      </Field>

      <Field label="Email" htmlFor="email" error={errors.email?.message}>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email")}
        />
      </Field>

      <Field label="Nomor WhatsApp" htmlFor="whatsapp" error={errors.whatsapp?.message}>
        <Input
          id="whatsapp"
          type="tel"
          autoComplete="tel"
          placeholder="0812xxxxxxx"
          aria-invalid={!!errors.whatsapp}
          aria-describedby={errors.whatsapp ? "whatsapp-error" : undefined}
          {...register("whatsapp")}
        />
      </Field>

      <Field label="Kecamatan" htmlFor="kecamatan" error={errors.kecamatan?.message}>
        <Input
          id="kecamatan"
          placeholder="Cikarang Utara, Tambun Selatan, dst."
          aria-invalid={!!errors.kecamatan}
          aria-describedby={errors.kecamatan ? "kecamatan-error" : undefined}
          {...register("kecamatan")}
        />
      </Field>

      <div className="flex flex-col gap-3">
        <span
          id="interests-label"
          className="font-display text-sm font-bold uppercase tracking-wide text-gk-black"
        >
          Minat
        </span>
        <Controller
          control={control}
          name="interests"
          render={({ field }) => (
            <div
              role="group"
              aria-labelledby="interests-label"
              aria-describedby={errors.interests ? "interests-error" : undefined}
              className="grid grid-cols-2 gap-3 sm:grid-cols-3"
            >
              {INTEREST_OPTIONS.map((option) => {
                const checked = field.value?.includes(option) ?? false;
                const id = `interest-${option}`;
                return (
                  <div key={option} className="flex items-center gap-2">
                    <Checkbox
                      id={id}
                      checked={checked}
                      onCheckedChange={(state) => {
                        const next = new Set(field.value ?? []);
                        if (state) {
                          next.add(option);
                        } else {
                          next.delete(option);
                        }
                        field.onChange(Array.from(next));
                      }}
                    />
                    <label htmlFor={id} className="text-sm text-gk-black">
                      {option}
                    </label>
                  </div>
                );
              })}
            </div>
          )}
        />
        {errors.interests ? (
          <p id="interests-error" className="text-xs font-medium text-gk-red">
            {errors.interests.message}
          </p>
        ) : null}
      </div>

      <Field
        label="Skill (opsional)"
        htmlFor="skill"
        error={errors.skill?.message}
        hint="Desain, nulis, ngedit video, ngomong di depan umum, apa aja."
      >
        <Input id="skill" {...register("skill")} />
      </Field>

      <Field
        label="Instagram (opsional)"
        htmlFor="instagram"
        error={errors.instagram?.message}
      >
        <Input id="instagram" placeholder="@username" {...register("instagram")} />
      </Field>

      <Field
        label="Kenapa mau gabung GK Bekasi?"
        htmlFor="reason"
        error={errors.reason?.message}
      >
        <Textarea
          id="reason"
          rows={4}
          aria-invalid={!!errors.reason}
          aria-describedby={errors.reason ? "reason-error" : undefined}
          {...register("reason")}
        />
      </Field>

      {submitError ? (
        <div
          role="alert"
          className="flex items-start gap-3 border-2 border-gk-red bg-gk-red/10 p-4 text-sm text-gk-black"
        >
          <AlertTriangle className="mt-0.5 size-4 shrink-0 text-gk-red" />
          <p>
            Formulirnya nyangkut di jalan bang, kayaknya koneksi lagi
            rewel. Coba kirim ulang, atau langsung chat kita di{" "}
            <a
              href={siteConfig.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline"
            >
              WhatsApp
            </a>{" "}
            biar cepet diproses.
          </p>
        </div>
      ) : null}

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Mengirim..." : "Gabung Sekarang"}
      </Button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {hint && !error ? (
        <p className="text-xs text-gk-black/50">{hint}</p>
      ) : null}
      {error ? (
        <p id={`${htmlFor}-error`} className="text-xs font-medium text-gk-red">
          {error}
        </p>
      ) : null}
    </div>
  );
}
