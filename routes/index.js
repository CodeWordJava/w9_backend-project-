import { Router } from "express";
//import models( get by topic..)
import  { getEverything, createNewLink, getByTopic, updateVoteCount }  from "../models/index.js";
const router = Router()


//GET by topic route
//      returns a big object as an array of objects.
//      will need a params of topic which we take from the req.params?
//      
//GET everything route
//      returns everything from the database
router.get("/everything", async (req, res) => {
    const searchTopic = req.query.topic;
    if (searchTopic){
      const result = await getByTopic(searchTopic);
      res.json({Success: true, data: result});
    } else {  
        const resObject = await getEverything()
        // console.log (resObject)
        res.json({ success: true, data: resObject});
    }; 
});
// basic GET route request from front-end
// router.get('/',async (req,res)=>{
//     res.json({link: "https://example.org/bottle.php#bone", userName: "Jase Pruitt", topic: "CSS", votCount: 2});
// });


// POST route to take in json object from front-end
router.post('/create', async (req, res) => {

    // there is a bug here
//     // if null or empty string is given it will still POST to the database
//     // an if statement to catch bad/error data entries?
    
    const userName = req.body.userName;
    const link = req.body.link;
    const topic = req.body.topic;
    console.log(req.body)
    // const result = await createNewLink(userName, link, topic);
    // res.json({success: true, data: result});
    if (!userName || !link || !topic) {
        throw new err;
    } else {
        const result = await createNewLink(userName, link, topic);
        res.json({success: true, data: result});
    }
});
     // console.log(`This is the result: ${result}`);
//     res.json({success: true, payload: result});

//  // router.post("/", async (req, res) => {
//     const { username } = req.body;
//     const createdUser = await usersModel.createUser({ username });
  
router.patch("/updatedvote", async (req, res) => {
    const idToPatch = req.body.id;
    console.log(`id number from req.body ${idToPatch}`);
    if (!idToPatch){
        res.json({sucess: false, reason: "no id number given"});
    } else {
        const result = await updateVoteCount(idToPatch);
        res.json({success: true, data: result});
    }
});
    
//   body: JSON.stringify({id: `${id}`})
// PATCH ropute to update the voteCount on database
// PATCH 
//      voteCount++



export default router
