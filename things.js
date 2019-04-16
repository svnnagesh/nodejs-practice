const express = require('express');
const router = express.Router();
const dbCall = require('./dbcall.js');

router.get('/', (req, res) => {
    res.send(one('Get data from things route.'));
})

router.get('/testRouting', (req, res) => {
    res.send('test routing');
})

router.post('/new', (req, res) => {
    if(!req.body.name) {
        res.json({"message":"Please provide name"})
    } else {
        res.send(one());
    }
})


function one() {
   //return name;     
   var name = "Nagesh"
   console.log(name)
}


module.exports = router;