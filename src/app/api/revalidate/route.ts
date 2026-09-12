import { revalidatePath } from "next/cache";
import { parseBody } from "next-sanity/webhook";
import { NextResponse, type NextRequest } from "next/server";

// Configure this as a GROQ-powered webhook in Sanity Manage -> API -> Webhooks,
// pointed at https://<your-domain>/api/revalidate, with the same secret set
// below as SANITY_REVALIDATE_SECRET in both places. Optional: without it,
// content still shows up within 60s via time-based revalidation on each page.
const PATH_BY_TYPE: Record<string, string[]> = {
  program: ["/programs", "/"],
  event: ["/events", "/"],
  story: ["/stories", "/"],
  galleryItem: ["/gallery"],
  impactMetric: ["/"],
  leadershipMember: ["/about"],
  poll: ["/"],
  pledge: ["/about"],
};

export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json(
      { message: "SANITY_REVALIDATE_SECRET not configured" },
      { status: 500 },
    );
  }

  try {
    const { isValidSignature, body } = await parseBody<{
      _type?: string;
      slug?: string;
    }>(req, secret);

    if (!isValidSignature) {
      return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
    }

    if (!body?._type) {
      return NextResponse.json({ message: "Missing _type in payload" }, { status: 400 });
    }

    const paths = new Set(PATH_BY_TYPE[body._type] ?? []);
    if (body.slug) {
      const detailBase =
        body._type === "program"
          ? "/programs"
          : body._type === "event"
            ? "/events"
            : body._type === "story"
              ? "/stories"
              : null;
      if (detailBase) paths.add(`${detailBase}/${body.slug}`);
    }

    paths.forEach((p) => revalidatePath(p));

    return NextResponse.json({ revalidated: true, paths: [...paths] });
  } catch (err) {
    return NextResponse.json(
      { message: err instanceof Error ? err.message : "Unknown error" },
      { status: 500 },
    );
  }
}
