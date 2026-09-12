"use client";
// Bang Wira - github.com/sepatusendal

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { submitToGoogleForm } from "@/lib/forms/submit";
import { siteConfig } from "@/lib/site";
import { celebrate } from "@/lib/confetti";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Nama minimal 2 karakter."),
  email: z.string().trim().min(1, "Email wajib diisi.").email("Format email tidak valid."),
  message: z.string().trim().min(10, "Pesan minimal 10 karakter."),
  // Honeypot: real users never see or fill this field, bots that
  // auto-fill every input do. Caught silently — no error shown.
  company: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "", company: "" },
  });

  async function onSubmit(values: ContactFormValues) {
    if (values.company) {
      // Honeypot tripped — pretend it worked so the bot moves on.
      setSubmitted(true);
      return;
    }
    try {
      setSubmitError(false);
      await submitToGoogleForm("contact", values);
      setSubmitted(true);
      celebrate();
    } catch {
      setSubmitError(true);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-10 text-center">
        <Badge variant="red" className="text-sm">
          <CheckCircle2 className="size-4" />
          Terkirim
        </Badge>
        <h3 className="font-display text-2xl font-bold uppercase leading-tight tracking-tight text-gk-black">
          Pesan kamu udah nyampe.
        </h3>
        <p className="max-w-sm text-base text-gk-black/70">
          Kita bakal balas secepatnya. Makasih udah reach out ke GK Bekasi.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
        {...register("company")}
      />

      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-name">Nama</Label>
        <Input
          id="contact-name"
          autoComplete="name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          {...register("name")}
        />
        {errors.name ? (
          <p id="contact-name-error" className="text-xs font-medium text-gk-red">
            {errors.name.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-email">Email</Label>
        <Input
          id="contact-email"
          type="email"
          autoComplete="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          {...register("email")}
        />
        {errors.email ? (
          <p id="contact-email-error" className="text-xs font-medium text-gk-red">
            {errors.email.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-message">Pesan</Label>
        <Textarea
          id="contact-message"
          rows={5}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          {...register("message")}
        />
        {errors.message ? (
          <p id="contact-message-error" className="text-xs font-medium text-gk-red">
            {errors.message.message}
          </p>
        ) : null}
      </div>

      {submitError ? (
        <div
          role="alert"
          className="flex items-start gap-3 border-2 border-gk-red bg-gk-red/10 p-4 text-sm text-gk-black"
        >
          <AlertTriangle className="mt-0.5 size-4 shrink-0 text-gk-red" />
          <p>
            Pesannya nyangkut di jalan bang, kayaknya koneksi lagi rewel.
            Coba kirim ulang, atau langsung samperin kita di{" "}
            <a
              href={siteConfig.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline"
            >
              WhatsApp
            </a>
            , lebih cepet nyampe.
          </p>
        </div>
      ) : null}

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
      </Button>
    </form>
  );
}
