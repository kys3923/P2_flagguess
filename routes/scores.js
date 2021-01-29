const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../config/ppConfig');
const isLoggedIn = require('../middleware/isLoggedIn');
const { sequelize } = require('../models');

// game result
router.get('/comment', isLoggedIn, (req, res) => {
    db.comment.findAll({
        order: [['updatedAt', 'DESC']]
    })
    .then(foundComment => {
        res.render ('scores/comment.ejs', {foundComment});
    })
    .catch(err => {
        console.log(err);
    })
});

router.post('/comment', isLoggedIn, (req, res) => {
    db.comment.findOrCreate({
        where: {
            name: req.user.dataValues.name,
            userId: req.user.dataValues.id,
            comment: req.body.comment
    }})
    .then(createdPost => {
        res.redirect('comment');
    }).catch(err => {
        console.log(err);
    })
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
