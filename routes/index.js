import { Router } from "express";
//import models( get by topic..)

const router = Router()


// basic GET route request from front-end
router.get('/',async (req,res)=>{
    res.json()
});


// POST route to take in json object from front-end
router.post('/', async (req, res) => {
    
    // const userName = req.body.userName;
    // const link = req.body.link;
    // const topic = req.body.topic;
    const result = {link: "hobby", userName: "ali", topic: "react"};

    // res.sendStatus(201);
    res.json(result);
})



// catRouter.post("/", async function (req, res) {
    
//     // there is a bug here
//     // if null or empty string is given it will still POST to the database
//     // an if statement to catch bad/error data entries?
    
//     console.log(`This is the req.body.name ${name}`);
//     console.log(`This is the req.body.human ${human}`);
//     console.log(`This is the req.body.hobby ${hobby}`);
    
//     // console.log(`This is the result: ${result}`);
//     res.json({success: true, payload: result});
//   });
export default router


// json body should have:
//      link
//      uploader name
//      topic (i.e. react)
//      

// router.post("/", async (req, res) => {
//     const { username } = req.body;
//     const createdUser = await usersModel.createUser({ username });
  
//     res.status(201).json({
//       success: true,
//       payload: createdUser,
//     });
//   });


// PATCH 
//      voteCount++