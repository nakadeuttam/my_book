const express=require('express');
const fetchUserData = require('../middleware/fetchUser');
const router =express.Router();
const Notes = require('../models_mongo/Notes');
const { body, validationResult } = require('express-validator');

//post endpoint to read notes
router.get('/Your_notes',fetchUserData , async(req, res)=>{
    const notes=await Notes.find({user:req.user.id});
    res.json(notes);
});

//End_point to create Notes
router.post('/createNote',fetchUserData ,[      //validation part
    body('title',"Please enter valid title").exists(),
    body('description',"Please enter valid description").isLength({min:5})
] ,
async(req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try{
        const {title,description} = req.body;
        const note= new Notes({title,description,user:req.user.id});
        const saved_Note=await note.save();
        res.json(saved_Note);
    }catch(error){
        console.error(error.message);
        res.status(500).send("Something went Wrong")
    }
});

module.exports = router;