
const express=require('express');
//const { query } = require('express-validator');
const { body, validationResult } = require('express-validator');
const router=express.Router();
const bcrypt = require('bcrypt');   //used in hashing the password

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

      //hashing the password using bcrypt npm package

      const saltRounds = 10;
      const secured_password =await bcrypt.hash(req.body.password,saltRounds);

    await User.create({
        name: req.body.name,
        email:req.body.email,
        password: secured_password,
      }).then(user => res.json(user))
    }catch (error){
        console.error(error.message);
        res.send("Some Unknown error is occured")
      }
});

module.exports = router;