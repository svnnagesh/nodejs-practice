const express = require('express');
const router = express.Router();
const jwtCls = require('./jwt');

router.post('/login', (req, res) => {
    if(req.body.userName == "vengal.nagesh" && req.body.passWord == "nagesh@123"){
        var jwtObj = {id:1, username: req.body.userName};
        res.json({ status: true, message:"success", token:jwtCls.generateUserJwtToken(jwtObj) })
    } else {
        res.json({status: false, message:'Invalid credentials'})
    }
});

module.exports = router;