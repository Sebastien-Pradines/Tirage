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

// GET game page.
router.get('/game', function(req, res, next) {
  res.sendFile('html/game.html', { root: __public });
});

// GET controls page.
router.get('/controls', function(req, res, next) {
  res.sendFile('html/controls.html', { root: __public });
});

module.exports = router;
