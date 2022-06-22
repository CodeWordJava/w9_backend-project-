import pool from "../index.js";
import "dotenv/config"
import fakeData from "../lib.js";

async function populateTable(){
 
    for (let i = 0; i < fakeData.length; i++) {
      const res = await pool.query (`INSERT INTO tech_links (link, userName, topic)
    VALUES ($1, $2, $3) RETURNING *;`,
    [fakeData[i].link, fakeData[i].userName, fakeData[i].topic] 
    );
    console.log (res.rows,"table populated")
 }
}
populateTable();