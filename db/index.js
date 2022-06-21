import pg from "pg"; 
import 'dotenv/config' //makes .env work


// pools will use environment variables
// for connection information
 const pool = new pg.Pool({
    user: process.env.PGUSER,
    host:process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,   
    ssl:{rejectUnauthorized:false} 
})

// function query(test,params,callback){
//     return pool.query(test,params,callback)
// }

// pool.query('SELECT NOW()', (err, res) => {
//     console.log(err, res)
//     pool.end()
//   })

//export default query
export default pool