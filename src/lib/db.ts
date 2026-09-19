import { Pool } from "pg";

/**
 * Durable lead storage.
 *
 * This app has no database yet — DATABASE_URL is not set in any deployed
 * environment as of writing. Until it is, insertLead() below throws, the API
 * route catches that, logs it, and the submission still reaches the fallback
 * console log and (if configured) the email notification. Set DATABASE_URL to
 * a standard Postgres connection string (Vercel Postgres, Neon or Supabase —
 * see .env.example) and this starts persisting on the very next deploy, no
 * code change required.
 *
 * Deliberately plain `pg` rather than a provider-specific SDK (e.g.
 * @vercel/postgres) so the same DATABASE_URL works whichever of those three
 * free-tier providers ends up hosting it.
 */

let pool: Pool | null = null;

function getPool(): Pool {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is not set — lead was not persisted to Postgres.");
  }
  if (!pool) {
    pool = new Pool({
      connectionString,
      // Hosted free-tier Postgres (Vercel Postgres, Neon, Supabase) all sit
      // behind TLS with certs that don't chain to a locally-known root in a
      // serverless runtime; this matches the standard escape hatch each of
      // their own docs recommends for exactly that setup.
      ssl: { rejectUnauthorized: false },
      // A contact form gets a handful of submissions a day, not a request
      // firehose — keep the pool small so we don't eat a free-tier
      // connection cap that's often shared with the rest of the app.
      max: 3,
    });
  }
  return pool;
}

const CREATE_TABLE_SQL = `
  CREATE TABLE IF NOT EXISTS leads (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    business TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    business_type TEXT,
    website TEXT,
    need TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
  );
`;

export interface LeadInput {
  name: string;
  business: string;
  email: string;
  phone: string;
  businessType: string;
  website: string;
  need: string;
}

/**
 * Persists one lead submission. Idempotently ensures the table exists first
 * — there is no separate migration step to run by hand, so the first insert
 * after DATABASE_URL is set self-heals the schema.
 *
 * Throws if DATABASE_URL is unset or the insert fails; callers must catch
 * this so a storage problem never turns into a 500 for the prospect
 * submitting the form.
 */
export async function insertLead(lead: LeadInput): Promise<void> {
  const client = getPool();
  await client.query(CREATE_TABLE_SQL);
  await client.query(
    `INSERT INTO leads (name, business, email, phone, business_type, website, need)
     VALUES ($1, $2, $3, $4, $5, $6, $7)`,
    [
      lead.name,
      lead.business,
      lead.email,
      lead.phone || null,
      lead.businessType || null,
      lead.website || null,
      lead.need,
    ],
  );
}
