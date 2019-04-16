const express = require('express');
const router = express.Router();
const dbCall = require('./dbcall.js');

router.post('/contactDetails', (req, res) => {
    console.log(req.body);
    if(req.body.id) {
        dbCall.httpCall('GET', 'https://jsonplaceholder.typicode.com/posts', true, "", function(data) {
            if(data) {
                var parseData = JSON.parse(data);
                var saveData = [];
                for(var i = 0; i < parseData.length; i++) {
                    if(parseData[i].userId == req.body.id) {
                        //saveData += JSON.stringify(parseData[i]);
                        saveData.push({ id: parseData[i]["id"], title: parseData[i]["title"], body: parseData[i]["body"] });
                    } 
                }
                //console.log(saveData);
                res.json({status:true, data: saveData});
            } else {
                res.json({status: false, message:'Wrong call'})
            }        
        })
   } else {       
       res.json({status: false, message:'Wrong id entered'})
    }
});

module.exports = router;