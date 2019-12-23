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

var globalna = "Alarm je ugasen";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(globalna);
});


router.get('/2', function(req, res, next) {
  globalna = "Alarm je Upaljen";
  res.send(globalna);
});

router.get('/3', function(req, res, next) {

});


module.exports = router;
