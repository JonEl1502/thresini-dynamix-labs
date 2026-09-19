import { Resend } from "resend";
import { SITE } from "@/data/site";
import type { LeadInput } from "@/lib/db";

/**
 * Best-effort email notification on top of the durable DB write in db.ts.
 *
 * RESEND_API_KEY is not set in any deployed environment as of writing — sign
 * up free at https://resend.com, create a key under API Keys, and set it as
 * RESEND_API_KEY (see .env.example). Until then this throws immediately and
 * the caller swallows it; the lead is still captured by insertLead().
 */
export async function sendLeadNotification(lead: LeadInput): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set — lead notification email was not sent.");
  }

  const resend = new Resend(apiKey);
  const to = process.env.LEAD_NOTIFY_EMAIL || SITE.email;
  // resend.dev sends without any domain verification, but only Resend
  // account owners can receive at it — fine as a default for a single-owner
  // inbox, but swap RESEND_FROM_EMAIL in once thresini.com (or another real
  // domain) is registered and verified with Resend, so it isn't wearing
  // someone else's sending domain in the "From" line indefinitely.
  const from = process.env.RESEND_FROM_EMAIL || "ThreSiNi Leads <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to,
    subject: `New lead: ${lead.business} (${lead.need})`,
    text: [
      `Name: ${lead.name}`,
      `Business: ${lead.business}`,
      `Email: ${lead.email}`,
      `Phone: ${lead.phone || "(not given)"}`,
      `Business type: ${lead.businessType || "(not given)"}`,
      `Website: ${lead.website || "(not given)"}`,
      `Need: ${lead.need}`,
    ].join("\n"),
  });

  if (error) {
    throw new Error(`Resend rejected the send: ${error.message}`);
  }
}
