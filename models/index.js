import pool from "../db/index.js";
import "dotenv/config";

//not currently used in routes, allows for future implementation
export async function getEverything() {
  const sqlString = `SELECT * FROM tech_links;`;
  const response = await pool.query(sqlString);
  return response.rows;
}
//not currently used in routes, allows for future implementation
export async function getByTopic(topic) {
  const sqlString = `SELECT * FROM tech_links WHERE topic LIKE $1;`;
  const values = [topic];
  const data = await pool.query(sqlString, values);
  return data;
}

export async function createNewLink(userName, link, topic) {
  const sqlString =
    "INSERT INTO tech_links (userName, link, topic, votecount) VALUES ($1, $2, $3, $4) RETURNING *;";
  const values = [userName, link, topic, 1];
  const data = await pool.query(sqlString, values);
  return data;
}

export async function updateVoteCount(id) {
  const sqlString =
    "UPDATE tech_links SET votecount = votecount + 1 WHERE id = $1;";
  const values = [id];
  const data = await pool.query(sqlString, values);
  return data;
}
