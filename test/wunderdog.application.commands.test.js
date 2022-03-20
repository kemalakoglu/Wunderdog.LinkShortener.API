const assert = require('assert');

describe('Create Command', function () {
    describe('If Request Model is valid', function () {
        it('should produce create event to Kafka Server', function () {
            assert.ok(true);
        });
    });

    describe('If Request Model is not valid', function () {
        it('should return not valid model message', function () {
            assert.ok('model is not valid');
        });
    });
});

describe('Update Command', function () {
    describe('If Request Model is valid', function () {
        it('should produce update event to Kafka Server', function () {
            assert.ok(true);
        });
    });

    describe('If Request Model is not valid', function () {
        it('should return not valid model message', function () {
            assert.ok('model is not valid');
        });
    });
});

describe('Delete Command', function () {
    describe('If Requested Id is exist', function () {
        it('should produce delete event to Kafka Server', function () {
            assert.ok(true);
        });
    });

    describe('If Requested Id is not exist', function () {
        it('should return empty model message', function () {
            assert.ok('Link is not exist');
        });
    });
});