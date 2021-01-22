const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../config/ppConfig');
const isLoggedIn = require('../middleware/isLoggedIn');


// 10q games
router.get('/10q', isLoggedIn, (req, res) => {
    res.render('games/gameindex.ejs');
});
// get country flag from api
    // choose random array and country name
// make questions
    // listen answer to determin correct/wrong
    // if wrong answer, show correct answer
    // db to record current score
// next question
// after 10q, show score page for 10q


// endurance games
router.get('/endurance', isLoggedIn, (req, res) => {
    res.render('games/gameindex.ejs');
});
// get country flag from api
    // choose random array and country name
// make questions
    // listen answer to determine correct/wrong
    // if wrong answer, show correct answer
    // record current score
    // after wrong answer input, show score page for endurance
// next question

module.exports = router;
