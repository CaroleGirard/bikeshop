var express = require('express');
var router = express.Router();
var dataBike = [
 {name:"BIKO45" ,url:"/images/bike-1.jpg" ,price:679, quantite:1 },
 {name:"ZOOK07" ,url:"/images/bike-2.jpg" ,price:999, quantite:1 },
 {name:"TITANS" ,url:"/images/bike-3.jpg" ,price:799, quantite:1 },
 {name:"CEWO" ,url:"/images/bike-4.jpg" ,price:1300, quantite:1 },
 {name:"AMIG039" ,url:"/images/bike-5.jpg" ,price:479, quantite:1 },
 {name:"LIK099" ,url:"/images/bike-6.jpg" ,price:869, quantite:1 }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {dataBike});
});

var dataCardBike = [];

router.get('/shop', function(req, res, next) {
 
  dataCardBike.push({name: req.query.name, url: req.query.url, price: req.query.price, quantite: 1});
  res.render('shop', {dataCardBike});
});

router.get('/delete-shop', function(req, res, next) {
  dataCardBike.splice(req.query.position,1)
  res.render('shop', {dataCardBike});
});

router.post('/update-shop', function(req, res, next) {
 var position= req.body.position;
 var newQuantite= req.body.quantite;
 dataCardBike[position].quantite = newQuantite 
  res.render('shop', {dataCardBike});
});


module.exports = router;
