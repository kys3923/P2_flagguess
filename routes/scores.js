const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../config/ppConfig');
const isLoggedIn = require('../middleware/isLoggedIn');

// game result
router.get('/score', isLoggedIn, (req, res) => {
    res.render('scores/scoreindex.ejs');
});
// determine if the current game is 10q or endurance
// db to recall current entry
// give a choice to play again, show profile(badge), show ranking page, or redirect to index
// add comment call
// db to record/edit comments
// redirect to current page


// ranking
router.get('/ranking', (req, res) => {
    res.render ('scores/ranking.ejs');
})
// user don't have to be logged in
// db to recall current entry in desc order
// give a choice to sign up if user is not logged in
// add comments
// no option to create/edit comment to not logged in user
// redirect to current page

module.exports = router;
