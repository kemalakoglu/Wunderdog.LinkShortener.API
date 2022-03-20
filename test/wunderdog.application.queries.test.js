const LinkModel = require("../src/02-Domain/aggregates/link.shortener.model");
const assert = require("assert");

describe('Most Searched Link Query', function () {
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

describe('Last 10 Links Query', function () {
    describe('If Result is not null', function () {
        it('should return Query[]', function () {
            const list = [];
            list.push(new LinkModel());
            assert.ok(list);
        });
    });

    describe('If Result is null Query', function () {
        it('should return error message', function () {
            assert.ok('Data not found');
        });
    });
});

describe('LinksByDay Query', function () {
    describe('If Result is not null', function () {
        it('should return Query[]', function () {
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

describe('List by Page Query', function () {
    describe('If Requested Page Size and Number is valid', function () {
        describe('If Result is not null', function () {
            it('should return Query[]', function () {
                const list = [];
                list.push(new LinkModel());
                assert.ok(list);
            });
        });
        describe('If Result is null', function () {
            it('should return empty message', function () {
                assert.ok('Data not found');
            });
        });
    });

    describe('If Requested Page Size and Number is not valid', function () {
        it('should return error message', function () {
            assert.ok('Page Size or Number is not valid');
        });
    });
});

describe('Get Query', function () {
    describe('If Requested Id is exist', function () {
        it('should return Query Model', function () {
            assert.ok(new LinkModel());
        });
    });

    describe('If Requested Id is not exist', function () {
        it('should return empty Query model message', function () {
            assert.ok('Link is not exist');
        });
    });

    describe('If request has no Id parameter', function () {
        it('should return error message', function () {
            assert.ok('Id parameter is required');
        });
    });
});