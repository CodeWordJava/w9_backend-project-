import pool from '../index.js'

async function dropTable(){
    const result = await pool.query(`DROP TABLE tech_library`)
    console.log(result);
}

dropTable();