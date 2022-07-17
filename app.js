import cors from "cors";
import express, { Router } from "express";
import logger from "morgan";
import router from "./routes/index.js";

const PORT = process.env.PORT || 3000;
const app = express();

//import 'dovenv/config'
app.use(cors());
// this negated the 404 on the favicon that keeps getting thrown
app.get('/favicon.ico', (req, res) => res.status(204));
//This console logs the server data
app.use(logger("dev"));
//This allow API to accept JSON data
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/", router);


app.listen(PORT, function () {
  console.log(`Hello from the server on ${PORT}`);
});

export default app;
