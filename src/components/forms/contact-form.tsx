"use client";
// Bang Wira - github.com/sepatusendal

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { submitToGoogleForm } from "@/lib/forms/submit";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Nama minimal 2 karakter."),
  email: z.string().trim().min(1, "Email wajib diisi.").email("Format email tidak valid."),
  message: z.string().trim().min(10, "Pesan minimal 10 karakter."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  async function onSubmit(values: ContactFormValues) {
    await submitToGoogleForm("contact", values);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-10 text-center">
        <Badge variant="red" className="text-sm">
          <CheckCircle2 className="size-4" />
          Terkirim
        </Badge>
        <h3 className="font-display text-2xl font-bold uppercase leading-tight tracking-tight text-gk-black">
          Pesan lo udah nyampe.
        </h3>
        <p className="max-w-sm text-base text-gk-black/70">
          Kita bakal balas secepatnya. Makasih udah reach out ke GK Bekasi.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
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

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
      </Button>
    </form>
  );
}
