const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../config/ppConfig');
const isLoggedIn = require('../middleware/isLoggedIn');
const { sequelize } = require('../models');

// game result
router.get('/score', isLoggedIn, (req, res) => {
    res.render('scores/scoreindex.ejs');
});

// ranking
router.get('/ranking', (req, res) => {
    db.score.findAll({
        order: sequelize.literal("endscore DESC"),
        limit: 10
    })
    // include: [db.user]

    .then((scores) => {
        console.log(scores, "scores.data data here ================")
        res.render ('scores/ranking', {scores});

    })
    .catch(err => console.log(err))
    
});


// user don't have to be logged in
// db to recall current entry in desc order

module.exports = router;
