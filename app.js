const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const _ = require('lodash');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const linkController = require('./src/04-Presentation/Controllers/link.shortener.link.controller');
const dashboardController = require('./src/04-Presentation/Controllers/link.shortener.dashboard.controller');
const kafkaProducer = require('./src/01-Infrastructure/kafka.producer');
const kafka = new kafkaProducer();
app.use('/link', linkController);
app.use('/dashboard', dashboardController);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

kafka.createTopic();

module.exports = app;