const _ = require("lodash");
const express = require('express');
const router = express.Router();
const applicationQueries = require('../../03-Application/wunderdog.application.queries');
const queries = new applicationQueries();
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

router.get('/getById/:id', jsonParser, async function (req, res, next) {
    if (!req.params.id) {
        res.send("Request Parameter is missing");
        return;
    }

    const response = await queries.getAsync(req.params.id)
    console.log("Get operation is Succeeded.");

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(response));
});

router.get('/getByTranId/:tranId', jsonParser, async function (req, res, next) {
    if (!req.params.tranId) {
        res.send("Request Parameter is missing");
        return;
    }

    const response = await queries.getByTransactionIdAsync(req.params.tranId)
    console.log("Get operation is Succeeded.");

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(response));
});

router.get('/getLastTenLinksAsync', async function (req, res, next) {
    const response = await queries.getLastTenLinksAsync();
    console.log("Operation is Succeeded.");

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(response));
});

router.get('/getDailyLinksAsync', async function (req, res, next) {

    const response = await queries.getDailyLinksAsync();
    console.log("Operation is Succeeded.");

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(response));

});

router.get('/listByPageAsync', jsonParser, async function (req, res, next) {
    const response = await queries.getListByPageAsync();
    console.log("Operation is Succeeded.");

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(response));

});

module.exports = router;