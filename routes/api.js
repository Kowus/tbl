var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// Get v1
router.use('/v1', require('./v1/index'));

module.exports = router;
