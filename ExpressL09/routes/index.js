var express = require('express');
var router = express.Router();
var staticModels = require('../staticModels/planets');
var models = require('../models/starTrekPlanets');
/* GET home page. */
router.get('/staticPlanets', function (req, res, next) {

  res.send(JSON.stringify(
    staticModels.planet
  ));
});
router.get('/starTrekPlanets', function(req, res, next) {
  res.send(JSON.stringify(
    models.starTrekPlanets
    ));
});

module.exports = router;
