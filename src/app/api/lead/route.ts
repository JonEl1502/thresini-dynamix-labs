import { NextResponse } from "next/server";
import { insertLead, type LeadInput } from "@/lib/db";
import { sendLeadNotification } from "@/lib/email";

/**
 * The single integration point for the PRD §13 lead form. It validates,
 * persists to Postgres (durable — see src/lib/db.ts), then best-effort
 * emails a notification (see src/lib/email.ts).
 *
 * The DB write is the source of truth and runs on its own, awaited and
 * caught independently of the email send: if RESEND_API_KEY is missing or
 * Resend rejects the send, the submitter still sees success and the lead is
 * still sitting in Postgres. If DATABASE_URL isn't set yet either (true for
 * every environment as of writing — see .env.example), both attempts throw,
 * both are caught, and the submission still lands in Vercel's function logs
 * via the console.info below so nothing is silently and totally lost.
 */
export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Malformed body." }, { status: 400 });
  }

  const data = payload as Record<string, unknown>;
  const str = (key: string) => (typeof data?.[key] === "string" ? (data[key] as string).trim() : "");

  const lead: LeadInput = {
    name: str("name"),
    business: str("business"),
    email: str("email"),
    phone: str("phone"),
    businessType: str("businessType"),
    website: str("website"),
    need: str("need"),
  };

  if (!lead.name || !lead.business || !lead.email || !lead.need) {
    return NextResponse.json(
      { ok: false, error: "Name, business name, email and need are required." },
      { status: 422 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(lead.email)) {
    return NextResponse.json({ ok: false, error: "Invalid email." }, { status: 422 });
  }

  // Always logged, regardless of what follows — the one guaranteed record.
  console.info("[lead] %s · %s · %s", lead.business, lead.email, lead.need);

  // Layer 1: durable storage. Independent of the email step below — a
  // failure here is caught and logged, never thrown back to the submitter.
  try {
    await insertLead(lead);
  } catch (error) {
    console.error("[lead] Postgres write failed:", error);
  }

  // Layer 2: best-effort notification on top. Never allowed to affect the
  // response — a missing/invalid RESEND_API_KEY or a Resend outage fails
  // silently from the submitter's point of view, by design.
  try {
    await sendLeadNotification(lead);
  } catch (error) {
    console.error("[lead] Email notification failed:", error);
  }

  return NextResponse.json({ ok: true });
}
