import pool from '../index.js'
import 'dotenv/config'


const sqlStr = `CREATE TABLE IF NOT EXISTS tech_library (
	id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY ,
    topic TEXT,
    link TEXT,
    Username TEXT,
    );`

async function createTable(){
    const response = await pool.query(sqlStr)
    console.log (response)
    }
    createTable()