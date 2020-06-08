var express = require('express'),
    bodyParser = require('body-parser'),
    expressSession = require('express-session'),
    consign = require('consign');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(expressSession({
    secret: 'asjdihquiowdfeuiofhue',
    resave: false,
    saveUninitialized: false
}));

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

app.use(function (err, req, res, next) {
    res.status(404).render('errors/404')
    next();
})

app.use(function (req, res, next) {
    res.status(500).render('errors/500')
    next();
});

module.exports = app;