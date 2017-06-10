const router = require('express').Router();
const search = require('./controllers/search.js');

module.exports = router
.get('/search',search.googleSearch)
