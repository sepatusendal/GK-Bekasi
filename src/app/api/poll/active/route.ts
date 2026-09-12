import { NextResponse } from "next/server";
import { writeClient } from "@/sanity/lib/writeClient";
import type { SanityPoll } from "@/sanity/lib/types";

// Used for the client's periodic refresh so vote tallies feel live for
// everyone watching, not just the person who just voted. Reads through
// the non-CDN client so a vote is reflected within seconds, not ~60s.
export async function GET() {
  const poll = await writeClient.fetch<SanityPoll | null>(
    `*[_type == "poll" && isActive == true] | order(_createdAt desc) [0] {
      _id, question, options[]{ _key, label, "votes": coalesce(votes, 0) }
    }`,
  );

  return NextResponse.json({ poll: poll ?? null });
}
