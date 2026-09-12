"use client";
// Bang Wira - github.com/sepatusendal

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

function getGreeting(hour: number) {
  if (hour >= 4 && hour < 11) return "Pagi-pagi udah niat gerak? Gaspol.";
  if (hour >= 11 && hour < 15) return "Siang-siang gini, tetep semangat gerak ya.";
  if (hour >= 15 && hour < 18) return "Sore-sore enaknya mikirin gerakan apa lagi.";
  if (hour >= 18 && hour < 23) return "Malam produktif, GK Bekasi emang nggak pernah tidur.";
  return "Begadang demi gerakan? Keren, tapi istirahat juga ya.";
}

/**
 * Reads the visitor's own device clock — whatever timezone their phone or
 * browser is set to — so it never assumes WIB. Renders nothing until after
 * mount to avoid a server/client mismatch (the server has no idea what time
 * it is where the visitor actually is).
 */
export function TimeGreeting({ className }: { className?: string }) {
  const [greeting, setGreeting] = useState<string | null>(null);

  useEffect(() => {
    // The device clock is client-only and can't be read during render —
    // rendering nothing until this effect fires avoids a server/client
    // mismatch (the server has no idea what time it is for this visitor).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setGreeting(getGreeting(new Date().getHours()));
  }, []);

  if (!greeting) return null;

  return <p className={cn("text-sm text-gk-black/50", className)}>{greeting}</p>;
}
