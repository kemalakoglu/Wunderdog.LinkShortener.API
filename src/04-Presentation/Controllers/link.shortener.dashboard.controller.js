const _ = require("lodash");
const express = require('express');
const router = express.Router();
const rest = require('rest');
const mime = require('rest/interceptor/mime');
const errorCode = require('rest/interceptor/errorCode');
const applicationQueries = require('../../03-Application/wunderdog.application.queries');
const queries = new applicationQueries();
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

router.get('/getLastTenLinksAsync', async function (req, res, next) {
    const response = await queries.getLastTenLinksAsync();
    console.log("Operation is Succeeded.");
    res.send(response);
});

router.get('/getDailyLinksAsync', async function (req, res, next) {

    const response = await queries.getDailyLinksAsync();
    console.log("Operation is Succeeded.");
    res.send(response);

});

router.get('/listByPageAsync', jsonParser, async function (req, res, next) {
    const response = await queries.getListByPageAsync();
    console.log("Operation is Succeeded.");
    res.send(response);

});

module.exports = router;