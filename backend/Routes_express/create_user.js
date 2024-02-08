
const express=require('express');
const { query } = require('express-validator');
const { body, validationResult } = require('express-validator');
const router=express.Router();
const User = require('../models_mongo/User')

router.post('/',[
    body("name","Name must be min 3 letter").isLength({min:3}),
    body("email" , "Enter valid email").isEmail(),
    body("password" , "Enter valid password").isLength({min:8})
],async (req,res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try{
    const check_duplicate=await User.findOne({email:req.body.email})
    if(check_duplicate){
      return res.status(200).send('The user is found with this email..... "Login Or Use different email')
    }
    await User.create({
        name: req.body.name,
        email:req.body.email,
        password: req.body.password,
      }).then(user => res.json(user))
    }catch (error){
        console.error(error.message);
        res.send("Some Unknown error is occured")
      }
});

module.exports = router;