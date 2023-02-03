const express = require('express');
const path = require('path');
const express_session = require('express-session');

// Constantes
const CONST = {
    PORT: 5000,
};

// Initializations
const app = express();
require('./lib/passport');


// settings
app.set('port', process.env.PORT || CONST.PORT);


// middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express_session({ secret: 'SECRET' })); // session secret

// Global variables
app.use((req, res, next) => {
    app.locals.user = req.user;
    next();
});

// Routes
app.use('/auth', require('./routes/authentication'));
app.use('/logs', require('./routes/logs/logs'));

// Public
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server
app.listen(app.get('port'), () => {
    console.log('server on port ' + app.get('port'));
});

module.exports = CONST;