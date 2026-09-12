import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { writeClient } from "@/sanity/lib/writeClient";
import type { SanityPoll } from "@/sanity/lib/types";

const voteSchema = z.object({
  pollId: z.string().min(1),
  optionKey: z.string().min(1),
});

const POLL_PROJECTION = `_id, question, options[]{ _key, label, "votes": coalesce(votes, 0) }`;

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON" }, { status: 400 });
  }

  const parsed = voteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ message: "Data nggak valid." }, { status: 400 });
  }
  const { pollId, optionKey } = parsed.data;

  // Confirm the option actually belongs to this poll before patching —
  // stops a crafted request from incrementing an arbitrary array path.
  const current = await writeClient.fetch<{ options: { _key: string }[] } | null>(
    `*[_type == "poll" && _id == $pollId][0]{ options[]{ _key } }`,
    { pollId },
  );

  if (!current || !current.options.some((o) => o._key === optionKey)) {
    return NextResponse.json({ message: "Pilihan nggak ditemukan." }, { status: 404 });
  }

  try {
    await writeClient
      .patch(pollId)
      .inc({ [`options[_key=="${optionKey}"].votes`]: 1 })
      .commit();

    const updated = await writeClient.fetch<SanityPoll>(
      `*[_type == "poll" && _id == $pollId][0]{ ${POLL_PROJECTION} }`,
      { pollId },
    );

    return NextResponse.json({ poll: updated });
  } catch (err) {
    return NextResponse.json(
      { message: err instanceof Error ? err.message : "Gagal nyimpen suara." },
      { status: 500 },
    );
  }
}
