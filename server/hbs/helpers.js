const hbs = require('hbs');


hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('active', (n1, n2) => {
    if (n1 == n2) {
        return 'active';
    } else {
        return '';
    }
});

hbs.registerHelper('s', (p1, p2) => {
    if (p1) {
        return p1;
    } else {
        return p2;
    }
});