var express = require('express');
var router = express.Router();
var api = require('../movieDatabaseApi')

/* GET home page. */
router.post('/', function(req, res, next) {
  debugger;
  api(req.body.path, req.body.args)
  .then(function(data) {
    res.send(data);
  })
  .catch(function(error) {
    console.log("Error! " + error)
    res.status(500);
  })

});

module.exports = router;
