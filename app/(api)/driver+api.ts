import { neon } from "@neondatabase/serverless";

export async function GET(request: Request) {
  // console.log("🚀 About to fetch drivers!");
  try {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const response = await sql`SELECT * FROM drivers`;

    // console.log("🚀 SQL Query Result:", response);
    // console.log("🚀 Json Result:", Response.json({ data: response }));
    
    return Response.json({ data: response });
  } catch (error) {
    console.error("Error fetching drivers:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}