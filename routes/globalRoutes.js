const express = require('express');
const router  = express.Router();
const Tweets  = require("../controllers/tweets")
router.get('/',(req,res)=> {
    res.send("lol")
});

module.exports = router;