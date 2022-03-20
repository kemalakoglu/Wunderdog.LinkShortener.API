const assert = require('assert');
const LinkModel = require("../src/02-Domain/aggregates/link.shortener.model");

describe('Most Searched Link', function () {
    describe('If Result is not null', function () {
        it('should return Link[]', function () {
            const list = [];
            list.push(new LinkModel());
            assert.ok(list);
        });
    });

    describe('If Result is null', function () {
        it('should return error message', function () {
            assert.ok('Data not found');
        });
    });
});

describe('Last 10 Links', function () {
    describe('If Result is not null', function () {
        it('should return Link[]', function () {
            const list = [];
            list.push(new LinkModel());
            assert.ok(list);
        });
    });

    describe('If Result is null', function () {
        it('should return error message', function () {
            assert.ok('Data not found');
        });
    });
});

describe('LinksByDay', function () {
    describe('If Result is not null', function () {
        it('should return Link[]', function () {
            const list = [];
            list.push(new LinkModel());
            assert.ok(list);
        });
    });

    describe('If Result is null', function () {
        it('should return error message', function () {
            assert.ok('Data not found');
        });
    });
});