import { NextResponse } from "next/server";

/**
 * The demo sites' quote forms post here.
 *
 * It validates like a real endpoint so the forms behave like real forms, and
 * then deliberately does nothing with the result: these are demonstrations of
 * fictional businesses, and storing or forwarding what a visitor types into one
 * would be collecting data we have no reason to hold.
 */
export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Malformed body." }, { status: 400 });
  }

  const data = payload as Record<string, unknown>;
  const name = typeof data?.name === "string" ? data.name.trim() : "";
  const phone = typeof data?.phone === "string" ? data.phone.trim() : "";
  const jobType = typeof data?.jobType === "string" ? data.jobType.trim() : "";

  if (!name || !phone || !jobType) {
    return NextResponse.json(
      { ok: false, error: "Name, phone and job type are required." },
      { status: 422 },
    );
  }

  /* Intentionally not persisted, forwarded or logged. */
  return NextResponse.json({ ok: true, demo: true });
}
