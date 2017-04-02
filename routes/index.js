var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('index');        //change send to render (index.ejs)
});

module.exports = router;