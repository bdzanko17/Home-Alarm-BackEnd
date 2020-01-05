var express = require('express');
var router = express.Router();
var mysql = require('mysql');

//Konekcija sa bazom
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bmt"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected");
});

var status = "Alarm je ugasen";

//Get status of alarmm
router.get('/', function (req, res, next) {
    res.send(status);
});

//Get history from database
router.get('/baza', function (req, res, next) {
    con.query("SELECT * FROM detektovano", function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
});


//Route for alarming server, sent from arduino !
router.get('/2', function (req, res, next) {
    status = "Alarm je Upaljen";
    var ubaci ="INSERT INTO detektovano () VALUES  () ";
    con.query(ubaci, function (err,result) {
        if(err) throw err;
    });
    res.send(status);
});

//Turning off alarm, sent from fronted !
router.post('/ugasi', function (req, res, next) {
    status = "Alarm je ugasen";
    let object = {stat: status} //json
    res.send(object);
});

module.exports = router;
