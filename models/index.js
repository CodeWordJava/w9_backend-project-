import pool from "../db/index.js";
import "dotenv/config";

export function getEverything() {
  const sqlString = `SELECT * FROM tech_library;`
  const response = await pool.query(sqlString);
  return response.rows
}
