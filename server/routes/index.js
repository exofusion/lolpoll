var RiotAPI = require('../api.js');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/summoner_icon/:summonerName', function (req, res, next) {
  RiotAPI.getSummonerIcon(req.params['summonerName'], (icon_id) => { res.send(icon_id); });
});

module.exports = router;
