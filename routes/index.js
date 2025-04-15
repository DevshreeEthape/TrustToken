const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tokenized Feedback System' });
  router.get('/about', (req, res) => res.render('about'));
  router.get('/contact', (req, res) => res.render('contact'));
  router.get('/transactions', (req, res) => res.render('transactions'));
  router.get('/redeem-history', (req, res) => res.render('redeem-history'));
});

module.exports = router;
