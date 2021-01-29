require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const session = require('express-session');
const flash = require('connect-flash');
const helmet = require('helmet');
const passport = require('./config/ppConfig');
const isLoggedIn = require('./middleware/isLoggedIn');
const axios = require('axios');
const path = require('path');
const db = require('./models');
const { sequelize } = require('./models');
const app = express();

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);
app.use(helmet());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

// init passport config MUST happen after session config
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Write custom middleware to access the user on every response
app.use((req, res, next) => {
  let alerts = req.flash();
  res.locals.alerts = alerts;
  res.locals.currentUser = req.user;
  next();
});


app.get('/', (req, res) => {
  req.session.testVar = 'fire!!!'
  axios.get('https://restcountries.eu/rest/v2/all')
    .then(restCountry => {
        // console.log(restCountry.data);
        let restName = restCountry.data
        res.render('index', {restCountry: restCountry.data})
        // res.send(restCountry.data);
    })
  // res.render('index');
});

app.get('/profile', isLoggedIn, (req, res) => {
  console.log(req.user.dataValues.id, 'why why why????????????????????')
  db.score.findAll({
    where: {
      userId: req.user.dataValues.id,
    },
    order: [['updatedAt', 'DESC']]
  }).then(foundID => {
    console.log(foundID, "foundID ===============================")
    res.render('profile', {foundID});
  }).catch(err => console.log(err))
});

app.use('/auth', require('./routes/auth'));
// app.use('/dino', isLoggedIn, require('./routes/dinos)); <- if whole route is authorized
// 10Q route
app.use('/games', require('./routes/games'));
// endurance route
app.use('/scores', require('./routes/scores'));

var server = app.listen(process.env.PORT || 8000, ()=> console.log(`🎧You're listening to the smooth sounds of port ${process.env.PORT || 8000}🎧`));

module.exports = server;
