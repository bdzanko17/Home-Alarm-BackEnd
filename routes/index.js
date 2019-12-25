var express = require('express');
var router = express.Router();
// //var mysql = require('mysql');
//
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: ""
// });
//
// con.connect(function (err) {
// if(err)throw err;
// console.log("Connected");
// var sql = "INSERT INTO "
//
// });

var status = "Alarm je ugasen";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(status);
});


router.get('/2', function(req, res, next) {
  status = "Alarm je Upaljen";
  res.send(status);
});

router.post('/',function (req,res,next) {
  console.log(req.body.statuss);
  res.send('proslo');
});

router.get('/3', function(req, res, next) {

});


module.exports = router;
