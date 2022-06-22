import express, { Router } from "express";
import logger from 'morgan'
import router  from "./routes/index.js";
const PORT = process.env.port || 9000;
const app = express();
import cors from 'cors';
//import 'dovenv/config'
app.use(cors())

//This console logs the server data
app.use(logger('dev'))
//This allow API to accept JSON data
app.use(express.json())

app.use("/",router)
 app.listen(PORT, function(){
 console.log (`Hello from the server on ${PORT}`)
 });

export default app