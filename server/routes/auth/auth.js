const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('je suis sur la route /auth').status(200)});

router.get('/signup', (req, res) => {
    res.send('je suis sur la route /signup').status(200)
})

router.post('/signup', function(req, res, next) {
    res.send('I am in POST signup')});

module.exports = router;