"use client";
// Bang Wira - github.com/sepatusendal

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Vote, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { SanityPoll } from "@/sanity/lib/types";

const REFRESH_MS = 8000;
const BAR_COLORS = ["bg-gk-red", "bg-gk-blue", "bg-gk-mustard", "bg-gk-black"] as const;

function votedKey(pollId: string) {
  return `gk-poll-voted-${pollId}`;
}

export function CommunityPoll({ initialPoll }: { initialPoll: SanityPoll | null }) {
  const [poll, setPoll] = useState(initialPoll);
  const [choice, setChoice] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const pollId = poll?._id;

  useEffect(() => {
    if (!pollId) return;
    try {
      // localStorage is client-only, so this can't be read during render —
      // the effect is the only place to learn whether this browser already voted.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setChoice(localStorage.getItem(votedKey(pollId)));
    } catch {
      // localStorage unavailable (private mode, etc.) — just skip the check.
    }
  }, [pollId]);

  useEffect(() => {
    if (!pollId) return;
    const interval = setInterval(async () => {
      try {
        const res = await fetch("/api/poll/active");
        const data = await res.json();
        if (!data.poll) return;
        setPoll(data.poll);
      } catch {
        // Skip this tick — try again on the next interval.
      }
    }, REFRESH_MS);
    return () => clearInterval(interval);
  }, [pollId]);

  async function vote(optionKey: string) {
    if (!poll || choice || submitting) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/poll/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pollId: poll._id, optionKey }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message ?? "Gagal vote.");

      setPoll(data.poll);
      setChoice(optionKey);
      try {
        localStorage.setItem(votedKey(poll._id), optionKey);
      } catch {
        // Non-fatal — the vote still landed, just won't persist across reloads.
      }
    } catch {
      // Silently ignore — buttons stay interactive so they can just retry.
    } finally {
      setSubmitting(false);
    }
  }

  if (!poll) return null;

  const total = poll.options.reduce((sum, o) => sum + o.votes, 0);

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-6 bg-gk-white p-6 brutal-border brutal-shadow sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Badge variant="black" className="w-fit gap-1.5">
          <Vote className="size-3.5" />
          Suara Anak Muda
        </Badge>
        <span className="font-display text-xs font-bold uppercase tracking-wide text-gk-black/50">
          {total.toLocaleString("id-ID")} suara masuk
        </span>
      </div>

      <h3 className="font-display text-xl font-bold uppercase leading-tight tracking-tight text-gk-black sm:text-2xl">
        {poll.question}
      </h3>

      <div className="flex flex-col gap-3">
        {poll.options.map((option, index) => {
          const percent = total > 0 ? Math.round((option.votes / total) * 100) : 0;
          const isChoice = choice === option._key;

          if (choice) {
            return (
              <div key={option._key} className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-1.5 font-display text-sm font-bold uppercase text-gk-black">
                    {isChoice ? <Check className="size-3.5 text-gk-red" /> : null}
                    {option.label}
                  </span>
                  <span className="font-display text-sm font-bold text-gk-black/60">
                    {percent}%
                  </span>
                </div>
                <div className="h-3 w-full overflow-hidden border-2 border-gk-black bg-gk-bg">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${percent}%` }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className={cn("h-full", BAR_COLORS[index % BAR_COLORS.length])}
                  />
                </div>
              </div>
            );
          }

          return (
            <button
              key={option._key}
              type="button"
              disabled={submitting}
              onClick={() => vote(option._key)}
              className="flex items-center justify-between border-2 border-gk-black bg-gk-white px-4 py-3 text-left font-display text-sm font-bold uppercase tracking-tight text-gk-black brutal-hover disabled:opacity-60"
            >
              {option.label}
            </button>
          );
        })}
      </div>

      {!choice ? (
        <p className="text-xs text-gk-black/50">
          Pilih satu, hasilnya langsung keliatan buat semua orang.
        </p>
      ) : (
        <p className="text-xs text-gk-black/50">Makasih udah nyuarain pendapat lo.</p>
      )}
    </div>
  );
}
