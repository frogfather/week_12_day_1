var express = require('express');
var router = express.Router();

router.use(require('./films.js'));

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

module.exports = router;