const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const login = require('./login');
const things = require('./things.js');
const contact = require('./contact.js');
const cors = require('cors');
const jwt = require('./jwt');
const config = require('./config');
const port = 3200;

app.use(bodyParser.urlencoded({ parameterLimit: 100000, limit: '50mb', extended: false }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/hello', (req, res) => {
    res.send('Hellooooo');
})

app.post('/hello', (req, res) => {
    res.send('asdfadfasdfasd');
})

app.all('/test', (req, res) => {
    res.send('using all method');
})

app.get('/name/:id', (req, res) => {
    res.send('The id you specified is ' + req.params.id);
})

app.use('/things', things);
app.use('/login', login);
app.use((req, res, next)=> {
    let token = req.headers.token || req.body.token;
    if(token) {
        try {
            req.jwt = jwt.decodeUserJwtToken(token);
            next();
        } catch(err) {
            if(err.message == 'jwt expired') {
                res.status(401).json({ status: false, message: "Session Expired" });
            } else {
                res.status(401).json({ status: false, message: "Invalid token" });
            }
        }
    } else {
        res.status(404).json({ status: false, message: "Page Not Found" });
    }
})
app.use('/contact', contact);

app.listen(port, () => {
    console.log('Your server connection with port : ' + port);
});