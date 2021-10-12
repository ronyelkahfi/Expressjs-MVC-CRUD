const express = require('express');
const router  = express.Router();
const usermodel   = require('../models/usermodels')
router.get('/user',(req,res)=> {
    res.send("this is user page");
});

module.exports = router;