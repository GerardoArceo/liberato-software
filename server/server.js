const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = 3002;

app.use(express.static(__dirname + '/../public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/../views/parcials');
app.set('view engine', 'hbs');

app.get('/home', (req, res) => res.render('home', {
    activeIndex: 0,
}));
app.get('/development', (req, res) => res.render('development', {
    title: 'Desarrollo LS',
    activeIndex: 0,
}));
app.get('/team', (req, res) => res.render('team', {
    title: 'Equipo LS',
    activeIndex: 1,
}));
app.get('/contact', (req, res) => res.render('contact', {
    title: 'Contacto LS',
    activeIndex: 1,
}));
app.get('/blog', (req, res) => res.render('blog', {
    title: 'Blog LS',
    activeIndex: 2,
}));

app.get('/projects/piase', (req, res) => res.render('projects/piase', {
    title: 'PIASE',
    theme: 'light',
    activeIndex: 0,
}));
app.get('/projects/lienzourbano', (req, res) => res.render('projects/lienzourbano', {
    title: 'Lienzo Urbano',
    theme: 'light',
    activeIndex: 0,
}));
app.get('/projects/lietoapp', (req, res) => res.render('projects/lietoapp', {
    title: 'Lie to App',
    theme: 'light',
    activeIndex: 0,
}));
app.get('/projects/ilaw', (req, res) => res.render('projects/ilaw', {
    title: 'iLaw',
    theme: 'light',
    activeIndex: 0,
}));

app.get('/gerardoarceo', (req, res) => res.render('team/gerardoarceo', {
    title: 'Gerardo Arceo',
    activeIndex: 1,
}));
app.get('/lilianarceo', (req, res) => res.render('team/lilianarceo', {
    title: 'Lilián Arceo',
    activeIndex: 1,
}));
app.get('/marcocelaya', (req, res) => res.render('team/marcocelaya', {
    title: 'Marco Celaya',
    activeIndex: 1,
}));
app.get('/pamelaperez', (req, res) => res.render('team/pamelaperez', {
    title: 'Pamela Pérez',
    activeIndex: 1,
}));

app.get('*', (req, res) => {
    const host = req.headers.host;
    if (host.includes('gerardoarceo'))
        res.render('team/gerardoarceo', {
            title: 'Gerardo Arceo',
            activeIndex: 1,
        });
    else
        res.render('home', {
            activeIndex: 0,
        });
});

app.listen(port, console.log(`SERVER LISTENING PORT: ${ port }`));