const _ = require("lodash");
const express = require('express');
const router = express.Router();
const applicationQueries = require('../../03-Application/wunderdog.application.queries');
const applicationCommands = require('../../03-Application/wunderdog.application.commands');
const commands = new applicationCommands();
const queries = new applicationQueries();
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();


router.get('/:id', jsonParser, async function (req, res, next) {
    if (!req.params.id) {
        res.send("Request Parameter is missing");
        return;
    }

    const response = await queries.getAsync(req.params.id)
    console.log("Get operation is Succeeded.");
    res.send(response);
});

router.get('/getByTranId/:tranId', jsonParser, async function (req, res, next) {
    if (!req.params.tranId) {
        res.send("Request Parameter is missing");
        return;
    }

    const response = await queries.getByTransactionIdAsync(req.params.tranId)
    console.log("Get operation is Succeeded.");
    res.send(response);
});

router.post('/create', jsonParser, async function (req, res, next) {
    if (!req.body.link) {
        res.send("Request Body is Invalid");
        return;
    }
    const result = await commands.CreateAsync(req.body);
    console.log("Create operation is Succeeded.");
    res.send(true);

});

router.delete('/delete/:id', async function (req, res, next) {

    if (!req.params.id) {
        res.send("Request Parameter is missing");
        return;
    }

    await commands.DeleteAsync(req.params.id);
    console.log("Delete operation is Succeeded.");
    res.send(true);

});

module.exports = router;