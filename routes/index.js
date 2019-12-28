var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bmt"
});

con.connect(function (err) {
if(err)throw err;
console.log("Connected");

});

var status = "Alarm je ugasen";

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send(status);
});

router.get('/baza', function (req, res, next) {
    con.query("SELECT * FROM detektovano", function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
});

router.get('/2', function (req, res, next) {
    status = "Alarm je Upaljen";
    res.send(status);
});

router.post('/ugasi', function (req, res, next) {
    status = "Alarm je ugasen";
    let object = {stat: status}
    res.send(object);
});

router.get('/3', function (req, res, next) {

});


module.exports = router;
