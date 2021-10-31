var express = require('express');
var path = require('path');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    // var file = path.join(__dirname, '../public/users.html');
    res.sendFile(file)
});

module.exports = router;