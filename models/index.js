import pool from "../db/index.js";
import "dotenv/config";

export async function getEverything() {
  const sqlString = `SELECT * FROM tech-links;`
  const response = await pool.query(sqlString);
  return response.rows
}

export async function createNewLink(userName, link, topic){
  const sqlString = "INSERT INTO tech-links (userName, link, topic, voteCount) VALUES ($1, $2, $3, $4) RETURNING *;"
  const values = [userName, link, topic, 0]
  const data = await pool.query(sqlString, values);
  console.log(`This is the returning data ${data}`);
  return data;
}



export async function createNewCat(name, human, hobby) {
  const sqlString = "INSERT INTO cats (name, human, hobby) VALUES ($1, $2, $3) RETURNING *;"
  const values = [name, human, hobby]
  // console.log(`This is the sql string ${sqlString}`);
  const data = await query(sqlString, values);
  console.log(`This is the returning data ${data}`);
  return data;
};