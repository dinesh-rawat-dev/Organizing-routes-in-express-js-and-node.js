var express = require('express');
var router = express.Router();

// POST /signup
router.post('/', function (req, res) {
    // handle a post request to this route
});

// GET /signup/info
router.get('/info', function (req, res) {
    // handle a get request to this route
});

// etc...

module.exports = router;