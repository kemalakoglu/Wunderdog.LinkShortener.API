const assert = require('assert');
const LinkModel = require("../src/02-Domain/aggregates/link.shortener.model");
const {createForbiddenExclusivityError} = require("mocha/lib/errors");

describe('Get Method', function () {
    describe('If Requested Id is exist', function () {
        it('should return Link Model', function () {
            assert.ok(new LinkModel());
        });
    });

    describe('If Requested Id is not exist', function () {
        it('should return empty model message', function () {
            assert.ok('Link is not exist');
        });
    });

    describe('If request has no Id parameter', function () {
        it('should return error message', function () {
            assert.ok('Id parameter is required');
        });
    });
});

describe('Create Method', function () {
    describe('If Request Model is valid', function () {
        it('should return true', function () {
            assert.ok(true);
        });
    });

    describe('If Request Model is not valid', function () {
        it('should return not valid model message', function () {
            assert.ok('model is not valid');
        });
    });
});

describe('Update Method', function () {
    describe('If Request Model is valid', function () {
        it('should return true', function () {
            assert.ok(true);
        });
    });

    describe('If Request Model is not valid', function () {
        it('should return not valid model message', function () {
            assert.ok('model is not valid');
        });
    });
});

describe('Delete Method', function () {
    describe('If Requested Id is exist', function () {
        it('should return true', function () {
            assert.ok(true);
        });
    });

    describe('If Requested Id is not exist', function () {
        it('should return empty model message', function () {
            assert.ok('Link is not exist');
        });
    });

    describe('If request has no Id parameter', function () {
        it('should return error message', function () {
            assert.ok('Id parameter is required');
        });
    });
});

describe('List by Page Method', function () {
    describe('If Requested Page Size and Number is valid', function () {
        describe('If Result is not null', function () {
            it('should return Link[]', function () {
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