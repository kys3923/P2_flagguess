const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../config/ppConfig');
const isLoggedIn = require('../middleware/isLoggedIn');
const axios = require('axios');
const { pickedCountry } = require('../public/js/game');
let game = require('../public/js/game.js')


// demo game

router.get('/demo', (req, res) => {
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(restCountry => {
        // console.log(restCountry);
        let restName = restCountry.data
        res.render('games/gamedemo', {restCountry: restCountry.data, game: game })
        // res.send(restCountry.data);
    })
});
// demo game after, redirects
router.post('/', (req, res) => {
    res.redirect('/')
});

router.post('/signup', (req, res) => {
    res.redirect('/auth/signup')
});

router.post('/score', isLoggedIn, (req, res) => {
    console.log(typeof req.user.dataValues.id, "============== currentUser")
    console.log(req.body, 'req.body ====================')
    db.score.findOrCreate({
        where: {
            round: req.body.round,
            q10score: req.body.score,
            endscore: req.body.endScore,
            streak: req.body.streak,
            userId: req.user.dataValues.id
        }
    }).then(score => {
        res.redirect('/games/10q')
    }).catch(err => {
        console.log(err, "at catch score==================")
    })
    console.log("=========================data got to the /score")
});
// get country flag from api
    // choose random array and country name
// make questions
    // listen answer to determine correct/wrong
    // if wrong answer, show correct answer
    // show details of the country
    // tell user to sign up
// redirect to sign up page


// 10q games
router.get('/10q', isLoggedIn, (req, res) => {
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(restCountry => {
        // console.log(restCountry);
        let restName = restCountry.data
        res.render('games/gameindex', {restCountry: restCountry.data, game: game })
        // res.send(restCountry.data);
    })
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
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(restCountry => {
        // console.log(restCountry);
        let restName = restCountry.data
        res.render('games/endurance', {restCountry: restCountry.data, game: game })
        // res.send(restCountry.data);
    })
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
