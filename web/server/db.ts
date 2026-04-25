import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { NEON_DB_URL } from "./env";

export const pool = new Pool({
  connectionString: NEON_DB_URL,
  ssl: { rejectUnauthorized: false },
});

export const db = drizzle(pool);
