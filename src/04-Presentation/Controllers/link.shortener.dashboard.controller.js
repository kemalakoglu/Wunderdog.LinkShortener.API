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
    const response = await queries.GetLastTenLinksAsync();
    console.log("Operation is Succeeded.");
    res.send(response);
});

router.get('/getMostSearchedLinksAsync', async function (req, res, next) {

    const response = await queries.GetMostSearchedLinksAsync();
    console.log("Operation is Succeeded.");
    res.send(response);
});

router.get('/getDailyLinksAsync', async function (req, res, next) {

    const response = await queries.GetDailyLinksAsync();
    console.log("Operation is Succeeded.");
    res.send(response);

});

router.get('/listByPageAsync/:pageNum/:pageSize', jsonParser, async function (req, res, next) {
    if (!req.params.pageNum || !req.params.pageSize) {
        res.send("Page Number or Page Size is missing");
        return;
    }

    const response = await queries.GetListByPageAsync(req.params.pageSize, req.params.pageNum);
    console.log("Operation is Succeeded.");
    res.send(response);

});

module.exports = router;