
const express=require('express');
const { query } = require('express-validator');
const { body, validationResult } = require('express-validator');
const router=express.Router();
const User = require('../models_mongo/User')

router.post('/',[
    body("name","Name must be min 3 letter").isLength({min:3}),
    body("email" , "Enter valid email").isEmail(),
    body("password" , "Enter valid password").isLength({min:8})
],(req,res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    User.create({
        name: req.body.name,
        email:req.body.email,
        password: req.body.password,
      }).then(user => res.json(user)).catch(err=>{console.log(err), res.json({error: "please Enter unique email",message:"The email is already registered"})});
});

module.exports = router;