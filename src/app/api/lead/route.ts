import { NextResponse } from "next/server";

/**
 * The single integration point for the PRD §13 lead form. It validates and
 * acknowledges; wiring it to a CRM, an inbox or a queue happens here and
 * nowhere else in the app.
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
  const business = typeof data?.business === "string" ? data.business.trim() : "";
  const email = typeof data?.email === "string" ? data.email.trim() : "";
  const need = typeof data?.need === "string" ? data.need.trim() : "";

  if (!name || !business || !email || !need) {
    return NextResponse.json(
      { ok: false, error: "Name, business name, email and need are required." },
      { status: 422 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email." }, { status: 422 });
  }

  console.info("[lead] %s · %s · %s", business, email, need);

  return NextResponse.json({ ok: true });
}
