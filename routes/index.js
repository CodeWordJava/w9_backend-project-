import { Router } from "express";
//import models( get by topic..)

const router = Router()


//GET by topic route
//      returns a big object as an array of objects.
//      will need a params of topic which we take from the req.params?
//      
//GET everything route
//      returns everything from the database

// basic GET route request from front-end
router.get('/',async (req,res)=>{
    res.json({link: "https://example.org/bottle.php#bone", userName: "Jase Pruitt", topic: "CSS", votCount: 2});
});




// POST route to take in json object from front-end
router.post('/', async (req, res) => {

    // there is a bug here
//     // if null or empty string is given it will still POST to the database
//     // an if statement to catch bad/error data entries?
    
    // const userName = req.body.userName;
    // const link = req.body.link;
    // const topic = req.body.topic;
    const result = {link: "hobby", userName: "ali", topic: "react"};

     // console.log(`This is the result: ${result}`);
//     res.json({success: true, payload: result});

//  // router.post("/", async (req, res) => {
//     const { username } = req.body;
//     const createdUser = await usersModel.createUser({ username });
  
//     res.status(201).json({
//       success: true,
//       payload: createdUser,
    // res.sendStatus(201);
    res.json(result);
});

//PATCH ropute to update the voteCount on database
// PATCH 
//      voteCount++



export default router
