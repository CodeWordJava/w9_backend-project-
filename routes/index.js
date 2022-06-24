import { Router } from "express";
import {
  getEverything,
  createNewLink,
  getByTopic,
  updateVoteCount,
} from "../models/index.js";
const router = Router();

//GET by topic route
//GET everything route
//returns everything from the database
router.get("/everything", async (req, res) => {
  const searchTopic = req.query.topic;
  if (searchTopic) {
    const result = await getByTopic(searchTopic);
    res.json({ Success: true, data: result });
  } else {
    const resObject = await getEverything();
    res.json({ success: true, data: resObject });
  }
});

// POST route to take in json object from front-end
router.post("/create", async (req, res) => {
  const userName = req.body.userName;
  const link = req.body.link;
  const topic = req.body.topic;
  if (!userName || !link || !topic) {
    res.json({ sucess: false, reason: "incorrect data input" });
  } else {
    const result = await createNewLink(userName, link, topic);
    res.json({ success: true, data: result });
  }
});

//Sends update request to the database (Patch)
router.patch("/updatedvote", async (req, res) => {
  const idToPatch = req.body.id;
  console.log(`id number from req.body ${idToPatch}`);
  if (!idToPatch) {
    res.json({ sucess: false, reason: "no id number given" });
  } else {
    const result = await updateVoteCount(idToPatch);
    res.json({ success: true, data: result });
  }
});

export default router;
