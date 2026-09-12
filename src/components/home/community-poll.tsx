"use client";
// Bang Wira - github.com/sepatusendal

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import * as Dialog from "@radix-ui/react-dialog";
import { Vote, Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { SanityPoll } from "@/sanity/lib/types";

const REFRESH_MS = 8000;
const OPEN_DELAY_MS = 1200;
const BAR_COLORS = ["bg-gk-red", "bg-gk-blue", "bg-gk-mustard", "bg-gk-black"] as const;

function votedKey(pollId: string) {
  return `gk-poll-voted-${pollId}`;
}

function dismissedKey(pollId: string) {
  return `gk-poll-dismissed-${pollId}`;
}

/**
 * A popup that greets first-time-this-session visitors with the active
 * poll. Stays quiet for anyone who already voted, and for anyone who
 * closed it without voting until their next new browser session.
 */
export function CommunityPoll({ initialPoll }: { initialPoll: SanityPoll | null }) {
  const [poll, setPoll] = useState(initialPoll);
  const [choice, setChoice] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const pollId = poll?._id;

  useEffect(() => {
    if (!pollId) return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    try {
      // localStorage/sessionStorage are client-only, so this can't run
      // during render — the effect is the only place to check them.
      const votedFor = localStorage.getItem(votedKey(pollId));
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setChoice(votedFor);
      const dismissed = sessionStorage.getItem(dismissedKey(pollId));
      if (!votedFor && !dismissed) {
        timer = setTimeout(() => setOpen(true), OPEN_DELAY_MS);
      }
    } catch {
      // Storage unavailable (private mode, etc.) — just skip auto-opening.
    }
    return () => clearTimeout(timer);
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

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (!next && !choice && pollId) {
      try {
        sessionStorage.setItem(dismissedKey(pollId), "1");
      } catch {
        // Non-fatal — worst case it pops up again next navigation.
      }
    }
  }

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
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-gk-black/80 data-[state=open]:animate-in data-[state=open]:fade-in data-[state=closed]:animate-out data-[state=closed]:fade-out" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-50 flex w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 flex-col gap-6 bg-gk-white p-6 brutal-border brutal-shadow data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:zoom-in-95 sm:p-8"
          aria-describedby={undefined}
        >
          <Dialog.Close className="absolute -right-3 -top-3 flex size-8 items-center justify-center bg-gk-black text-gk-white brutal-border brutal-hover">
            <X size={16} />
          </Dialog.Close>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <Badge variant="black" className="w-fit gap-1.5">
              <Vote className="size-3.5" />
              Suara Anak Muda
            </Badge>
            <span className="font-display text-xs font-bold uppercase tracking-wide text-gk-black/50">
              {total.toLocaleString("id-ID")} suara masuk
            </span>
          </div>

          <Dialog.Title className="font-display text-xl font-bold uppercase leading-tight tracking-tight text-gk-black sm:text-2xl">
            {poll.question}
          </Dialog.Title>

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
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
