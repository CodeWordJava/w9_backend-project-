import pool from '../index'
import 'dotenv/config'


const sqlStr = `CREATE TABLE IF NOT EXISTS tech_library (
	id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY ,
    topic TEXT,
    link TEXT,
    userName TEXT,
    voteCount INT,
    );`;

async function createTable(){
    const response = await pool.query(sqlStr)
    console.log (response)
    }
    createTable()