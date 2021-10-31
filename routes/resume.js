var express = require('express');
var path = require('path');
var router = express.Router();

var routebase = path.parse(path.basename(__filename)).name;

router.get('/', function(req, res, next) {
    var file = path.join(__dirname, `../public/${routebase}.html`);
    console.log(">>> File: ", file);
    res.sendFile(file);
});

module.exports = router;