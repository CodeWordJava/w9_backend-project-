import pool from "../index.js";

async function dropTable() {
  const result = await pool.query(`DROP TABLE tech_links`);
  console.log(result);
}

dropTable();
