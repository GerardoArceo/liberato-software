const fs = require('fs');
const https = require('https');

const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = 3002;

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parcials');
app.set('view engine', 'hbs');

app.get('/home', (req, res) => res.render('home'));
app.get('/development', (req, res) => res.render('development'));
app.get('/gerardoarceo', (req, res) => res.render('gerardoarceo'));
app.get('/contact', (req, res) => res.render('contact'));
app.get('/team', (req, res) => res.render('team'));
app.get('/blog', (req, res) => res.render('blog'));

app.get('/piase', (req, res) => res.render('projects/piase'));
app.get('/lienzourbano', (req, res) => res.render('projects/lienzourbano'));
app.get('/lietoapp', (req, res) => res.render('projects/lietoapp'));
app.get('/ilaw', (req, res) => res.render('projects/ilaw'));

app.get('*', (req, res) => {
    const host = req.headers.host;
    console.log('HOST:' + host);
    switch (host) {
        case 'gerardoarceo':
            res.render('gerardoarceo');
        default:
            res.render('home');
    }
});

app.listen(port, console.log(`SERVER LISTENING PORT: ${ port }`));