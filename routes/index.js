var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var file = path.join(__dirname, 'public/index.html');
    res.sendFile(file, { title: 'Express' });
});

module.exports = router;