const express = require('express');
const router = express.Router();
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const xhr = new XMLHttpRequest();

function dbCall() { }

dbCall.prototype.httpCall = function(method, url, async, params, callback) {
    //var xhttp = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            callback(this.responseText);
        }
    }
    if(method == 'GET') {
        xhr.open(method, url, async);
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.send();
    } else {
        xhr.open(method, url, async);
        xhr.send(params);
    }
    
}


module.exports = new dbCall();