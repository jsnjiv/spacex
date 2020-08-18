const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const request = require('request');
const cors = require('cors');
const { get } = require('http');
const axios = require('axios');
const path = require('path');


const port = process.env.PORT || 3000;
const router = express.Router();

app.use(cors());
app.use(express.static('/'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());


router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});


router.get('/satellites', (req, res) => {
    let query = JSON.parse(req.query.filter);
    let uri = "https://api.spacexdata.com/v3/launches?limit=100";
    if (query.year) {
        uri = uri + "&launch_year=" + query.year;
    }
    if (query.launch) {
        uri = uri + "&launch_success=" + (query.launch == 'True' ? true : false);
    }
    if (query.landed) {
        uri = uri + "&land_success=" + (query.landed == 'True' ? true : false);
    }
    axios({
            method: 'get',
            url: uri,
            responseType: 'json'
        })
        .then(function(response) {
            res.json(response.data);
        }).catch((err) => {
            console.log("Error", err)
        });
})



app.use('/', router);
app.listen(port, (err) => {
    if (!err) {
        console.log("Server listening on port " + port + ' ...');
    }
});