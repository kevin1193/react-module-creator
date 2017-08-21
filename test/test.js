'use strict';

var chai = require('chai');
var expect = chai.expect;
var moduleCreator = require('../index');

describe('#moduleCreator', function() {
    var directory = 'test-directory';
    chai.use(require('chai-fs'));
    it('should create a new module directory', function() {
        var result = moduleCreator(directory);
        expect(directory).to.be.a.directory('message');
    });

    it('should not be and empty directory', function() {
        var result = moduleCreator(directory);
        expect(directory).to.be.a.directory('message').and.not.empty;
    });
});
