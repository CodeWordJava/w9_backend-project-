import pool from "../db/index.js";
import "dotenv/config";

export async function getEverything() {
  const sqlString = `SELECT * FROM tech_links;`
  const response = await pool.query(sqlString);
  return response.rows
};

export async function getByTopic(topic) {
  const sqlString = `SELECT * FROM tech_links WHERE topic LIKE $1;` 
  const values = [topic]
  const data = await pool.query(sqlString, values);
  return data;
};

export async function createNewLink(userName, link, topic){
  const sqlString = "INSERT INTO tech_links (userName, link, topic, votecount) VALUES ($1, $2, $3, $4) RETURNING *;"
  const values = [userName, link, topic, 0]
  const data = await pool.query(sqlString, values);
  // console.log(`This is the returning data ${data}`);
  return data;
};
