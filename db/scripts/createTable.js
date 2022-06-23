import pool from '../index.js'
import 'dotenv/config'



const sqlStr = `CREATE TABLE IF NOT EXISTS tech_links (
	id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY ,
    link TEXT,
    userName TEXT,
    topic TEXT,
    votecount INT
    );`

async function createTable(){
    const response = await pool.query(sqlStr)
    console.log (response)
};

createTable()