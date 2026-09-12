import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { writeClient } from "@/sanity/lib/writeClient";

const pledgeSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Nama minimal 2 karakter.")
    .max(60, "Nama kepanjangan.")
    .refine((v) => !/https?:\/\/|www\./i.test(v), "Nama nggak boleh mengandung link."),
  kecamatan: z.string().trim().max(60).optional(),
  // Honeypot: real users never fill this.
  company: z.string().optional(),
});

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON" }, { status: 400 });
  }

  const parsed = pledgeSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: parsed.error.issues[0]?.message ?? "Data nggak valid." },
      { status: 400 },
    );
  }

  if (parsed.data.company) {
    // Honeypot tripped — pretend it worked, don't tip the bot off.
    return NextResponse.json({
      pledge: {
        _id: "hp",
        name: parsed.data.name,
        kecamatan: parsed.data.kecamatan ?? null,
        _createdAt: new Date().toISOString(),
      },
    });
  }

  try {
    const doc = await writeClient.create({
      _type: "pledge",
      name: parsed.data.name,
      kecamatan: parsed.data.kecamatan || undefined,
    });

    return NextResponse.json({
      pledge: {
        _id: doc._id,
        name: doc.name as string,
        kecamatan: (doc.kecamatan as string) ?? null,
        _createdAt: doc._createdAt,
      },
    });
  } catch (err) {
    return NextResponse.json(
      { message: err instanceof Error ? err.message : "Gagal nyimpen komitmen." },
      { status: 500 },
    );
  }
}
