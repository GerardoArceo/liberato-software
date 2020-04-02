const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = 3002;

app.use(express.static(__dirname + '/../public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/../views/parcials');
app.set('view engine', 'hbs');

app.get('/home', (req, res) => res.render('home'));
app.get('/development', (req, res) => res.render('development'));
app.get('/contact', (req, res) => res.render('contact'));
app.get('/team', (req, res) => res.render('team'));
app.get('/blog', (req, res) => res.render('blog'));

app.get('/projects/piase', (req, res) => res.render('projects/piase'));
app.get('/projects/lienzourbano', (req, res) => res.render('projects/lienzourbano'));
app.get('/projects/lietoapp', (req, res) => res.render('projects/lietoapp'));
app.get('/projects/ilaw', (req, res) => res.render('projects/ilaw'));

app.get('/team/gerardoarceo', (req, res) => res.render('team/gerardoarceo'));
app.get('/team/lilianarceo', (req, res) => res.render('team/lilianarceo'));
app.get('/team/marcocelaya', (req, res) => res.render('team/marcocelaya'));
app.get('/team/pamelaperez', (req, res) => res.render('team/pamelaperez'));

app.get('*', (req, res) => {
    const host = req.headers.host;
    if (host.includes('gerardoarceo'))
        res.render('team/gerardoarceo');
    else if (host.includes('lilianarceo'))
        res.render('team/lilianarceo');
    else if (host.includes('marcocelaya'))
        res.render('team/marcocelaya');
    else if (host.includes('pamelaperez'))
        res.render('team/pamelaperez');
    else
        res.render('home');
});

app.listen(port, console.log(`SERVER LISTENING PORT: ${ port }`));