"use client";
// Bang Wira - github.com/sepatusendal

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "motion/react";
import { Flame, AlertTriangle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { celebrate } from "@/lib/confetti";
import type { SanityPledge } from "@/sanity/lib/types";

const pledgeFormSchema = z.object({
  name: z.string().trim().min(2, "Nama minimal 2 karakter.").max(60),
  kecamatan: z.string().trim().max(60).optional(),
  company: z.string().optional(),
});

type PledgeFormValues = z.infer<typeof pledgeFormSchema>;

const ACCENTS = ["border-gk-red", "border-gk-blue", "border-gk-mustard"] as const;

export function CommitmentWall({
  initialPledges,
  initialCount,
}: {
  initialPledges: SanityPledge[];
  initialCount: number;
}) {
  const [pledges, setPledges] = useState(initialPledges);
  const [count, setCount] = useState(initialCount);
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PledgeFormValues>({
    resolver: zodResolver(pledgeFormSchema),
    defaultValues: { name: "", kecamatan: "", company: "" },
  });

  async function onSubmit(values: PledgeFormValues) {
    setError(null);
    try {
      const res = await fetch("/api/pledge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message ?? "Gagal nyimpen komitmen.");

      setPledges((prev) => [data.pledge, ...prev]);
      setCount((prev) => prev + 1);
      celebrate();
      reset();
    } catch {
      setError(
        "Gagal nyimpen komitmen lo, kayaknya koneksi lagi rewel. Coba lagi ya.",
      );
    }
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col items-center gap-2 text-center">
        <span className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.2em] text-gk-red">
          <Flame className="size-4" />
          Dinding Komitmen
        </span>
        <div className="flex items-baseline gap-2 overflow-hidden">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={count}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="font-display text-5xl font-bold leading-none text-gk-black sm:text-6xl"
            >
              {count.toLocaleString("id-ID")}
            </motion.span>
          </AnimatePresence>
          <span className="font-display text-lg font-bold uppercase text-gk-black/50">
            orang
          </span>
        </div>
        <p className="max-w-md text-base text-gk-black/70">
          udah nulis nama mereka di sini, komitmen gerak bareng GK Bekasi.
          Giliran lo?
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="mx-auto flex w-full max-w-lg flex-col gap-3 sm:flex-row sm:items-start"
      >
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
          {...register("company")}
        />
        <div className="flex flex-1 flex-col gap-1.5">
          <Input
            placeholder="Nama lo"
            aria-label="Nama"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name ? (
            <p className="text-xs font-medium text-gk-red">{errors.name.message}</p>
          ) : null}
        </div>
        <div className="flex flex-1 flex-col gap-1.5">
          <Input placeholder="Kecamatan (opsional)" aria-label="Kecamatan" {...register("kecamatan")} />
        </div>
        <Button type="submit" disabled={isSubmitting} className="shrink-0">
          {isSubmitting ? "Nyimpen..." : "Saya Ikut"}
        </Button>
      </form>

      {error ? (
        <div
          role="alert"
          className="mx-auto flex w-full max-w-lg items-start gap-3 border-2 border-gk-red bg-gk-red/10 p-4 text-sm text-gk-black"
        >
          <AlertTriangle className="mt-0.5 size-4 shrink-0 text-gk-red" />
          <p>{error}</p>
        </div>
      ) : null}

      {pledges.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-3">
          <AnimatePresence initial={false}>
            {pledges.map((p, index) => (
              <motion.div
                key={p._id}
                layout
                initial={{ opacity: 0, scale: 0.85, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "flex flex-col gap-0.5 border-2 bg-gk-white px-4 py-2 brutal-shadow-sm",
                  ACCENTS[index % ACCENTS.length],
                  index % 2 === 0 ? "-rotate-1" : "rotate-1",
                )}
              >
                <span className="font-display text-sm font-bold uppercase tracking-tight text-gk-black">
                  {p.name}
                </span>
                {p.kecamatan ? (
                  <span className="text-[11px] font-bold uppercase tracking-wide text-gk-black/50">
                    {p.kecamatan}
                  </span>
                ) : null}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <p className="text-center text-sm text-gk-black/50">
          Belum ada yang nulis nama di sini. Jadi yang pertama, yuk.
        </p>
      )}
    </div>
  );
}
