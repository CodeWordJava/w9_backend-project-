import pg from "pg";
import { db } from "../config/index.js";
//import "dotenv/config"; //makes .env work

// pools will use environment variables
// for connection information
// const pool = new pg.Pool({
//   user: process.env.PGUSER,
//   host: process.env.PGHOST,
//   database: process.env.PGDATABASE,
//   password: process.env.PGPASSWORD,
//   port: process.env.PGPORT,
//   ssl: { rejectUnauthorized: false },
// });

export const pool = new pg.Pool({
  connectionString: db.DATABASE_URL,
 
    ssl:{ rejectUnauthorized: false },
});



export default pool;
