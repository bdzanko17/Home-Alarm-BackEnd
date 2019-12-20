var express = require('express');
var router = express.Router();


var globalna = "Alarm je ugasen";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(globalna);
});


router.get('/2', function(req, res, next) {
  globalna = "Alarm je Upaljen";
  res.send(globalna);
});



module.exports = router;
