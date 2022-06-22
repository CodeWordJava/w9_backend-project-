import pool from "../index.js";
import "dotenv/config"
import fakeData from "../lib.js";

async function populateTable(){
 
    for (let i = 0; i < fakeData.length; i++) {
      const res = await pool.query (`INSERT INTO tech-links (userName, link, topic)
    VALUES ($1, $2, $3) RETURNING *;`,
    [fakeData[i].userName, fakeData[i].link, fakeData[i].topic] 
    );
    console.log (res.rows,"table populated")
 }
}
populateTable();