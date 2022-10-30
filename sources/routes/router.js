const express = require('express');
const path = require('path');

const __public = path.join(__dirname, '../../public');

/**
 * Router.
 */

const router = express.Router();

// GET home page.
router.get('/', function(req, res, next) {
  res.sendFile('html/home.html', { root: __public });
});

router.get('/test', function(req, res, next) {
  res.sendFile('html/test.html', { root: __public });
});

router.get('/client', function(req, res, next) {
  res.sendFile('html/client.html', { root: __public });
});

module.exports = router;
