const _ = require("lodash");
const express = require('express');
const router = express.Router();
const rest = require('rest');
const mime = require('rest/interceptor/mime');
const errorCode = require('rest/interceptor/errorCode');
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

    const response = await queries.GetAsync(req.params.id)
    console.log("Create operation is Succeeded.");
    res.send(response);
});

router.post('/create', jsonParser, async function (req, res, next) {
    const client = rest.wrap(mime)
        .wrap(errorCode, { code: 500 });

    if (!req.body.link) {
        res.send("Request Body is Invalid");
        return;
    }

    client({ path: req.body.link }).then(
        function (response) {
            if (response.status.code == 200) {
                (async () => {
                    await commands.CreateAsync(req.body);
                    console.log("Create operation is Succeeded.");
                    res.send(true);
                })();
            }
        },
    ).catch(
        function (response) {
            console.error('response error: ', response);
        }
    );
});

router.put('/update', jsonParser, async function (req, res, next) {
    const client = rest.wrap(mime)
        .wrap(errorCode, { code: 500 });

    if (!req.body.link || !req.body.id) {
        res.send("Request Body is Invalid");
        return;
    }

    client({ path: req.body.link }).then(
        function (response) {
            if (response.status.code == 200) {
                (async () => {
                    await commands.UpdateAsync(req.body);
                    console.log("Update operation is Succeeded.");
                    res.send(true);
                })();
            }
        },
    ).catch(
        function (response) {
            console.error('response error: ', response);
        }
    );
});

router.delete('/delete/:id', async function (req, res, next) {

    if (!req.params.id) {
        res.send("Request Parameter is missing");
        return;
    }

    await commands.DeleteAsync(req.params.id);
    console.log("Update operation is Succeeded.");
    res.send(true);

});

module.exports = router;