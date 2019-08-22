var express = require('express');
var router = express.Router();
let packageJson = require("../package.json");

/* Return index HTML */
router.get('*', function(req, res, next) {
    res.render('index', { 
        assetVersion: packageJson.version,
        isProdMode: (process.env.NODE_ENV === "production")
    });
});

module.exports = router;
