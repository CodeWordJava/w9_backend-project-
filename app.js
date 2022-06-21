import express, { Router } from "express";
import logger from 'morgan'
import router  from "./routes/index.js";
const PORT = 3000;
const app = express();
//import 'dovenv/config'

//This console logs the server data
app.use(logger('dev'))
//This allow API to accept JSON data
app.use(express.json())

app.use("/",router)
app.listen(PORT, function(){
console.log (`Hello from the server on ${PORT}`)
});

export default app