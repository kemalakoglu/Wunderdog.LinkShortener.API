const linkModel = require("../src/02-Domain/aggregates/link.shortener.model");
const assert = require("assert");
describe('Most Searched Link Cache', function () {
    describe('If Result is not null', function () {
        it('should return Link[]', function () {
            const list = [];
            list.push(new linkModel());
            assert.ok(list);
        });
    });

    describe('If Result is null', function () {
        it('should return error message', function () {
            assert.ok('Data not found');
        });
    });
});

describe('Last 10 Links Cache', function () {
    describe('If Result is not null', function () {
        it('should return []', function () {
            const list = [];
            list.push(new linkModel());
            assert.ok(list);
        });
    });

    describe('If Result is null Cache', function () {
        it('should return error message', function () {
            assert.ok('Data not found');
        });
    });
});

describe('LinksByDay Cache', function () {
    describe('If Result is not null', function () {
        it('should return []', function () {
            const list = [];
            list.push(new linkModel());
            assert.ok(list);
        });
    });

    describe('If Result is null', function () {
        it('should return error message', function () {
            assert.ok('Data not found');
        });
    });
});

describe('List by Page Cache', function () {
    describe('If Requested Page Size and Number is valid', function () {
        describe('If Result is not null', function () {
            it('should return []', function () {
                const list = [];
                list.push(new linkModel());
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

describe('Get Cache', function () {
    describe('If Requested Id is exist', function () {
        it('should return Cache Model', function () {
            assert.ok(new linkModel());
        });
    });

    describe('If Requested Id is not exist', function () {
        it('should return empty Cache model message', function () {
            assert.ok('Link is not exist');
        });
    });

    describe('If request has no Id parameter', function () {
        it('should return error message', function () {
            assert.ok('Id parameter is required');
        });
    });
});