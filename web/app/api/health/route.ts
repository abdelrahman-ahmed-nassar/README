import { pool } from "../../../server/db";

export async function GET() {
  try {
    await pool.query("SELECT 1");
    return new Response(
      JSON.stringify({ status: "ok", database: "connected" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        status: "error",
        database: "unavailable",
        message: String(error),
      }),
      {
        status: 503,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
