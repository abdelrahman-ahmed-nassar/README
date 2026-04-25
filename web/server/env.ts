const neonDbUrl = process.env.NEON_DB_URL;

if (!neonDbUrl) {
  throw new Error(
    "Missing required environment variable NEON_DB_URL. Add it to web/.env or your deployment environment.",
  );
}

export const NEON_DB_URL = neonDbUrl;
