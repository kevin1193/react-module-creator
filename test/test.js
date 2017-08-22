'use strict';

var chai = require('chai');
var chaiFiles = require('chai-files');
var expect = chai.expect;
var moduleCreator = require('../index');

describe('#moduleCreator', function() {
    var directory = 'test-directory';
    chai.use(require('chai-fs'));
    chai.use(chaiFiles);
    var file = chaiFiles.file;

    it('should create a new module directory', function() {
        var result = moduleCreator(directory);
        expect(directory).to.be.a.directory('message');
    });

    it('should not be and empty directory', function() {
        var result = moduleCreator(directory);
        expect(directory).to.be.a.directory('message').and.not.empty;
    });

    it('should have an containers directory', function() {
        expect(directory+'/containers').to.be.a.directory('message');
    });

    it('should have an containers directory and is not empty', function() {
        expect(directory+'/containers').to.be.a.directory('message').and.not.empty;
    });

    it('should have an index.js file inside containers directory', function() {
        var filePath = directory+'/containers';
        expect(file(filePath +'/index.js')).to.exist;
    });

    it('should have an components directory', function() {
        expect(directory+'/components').to.be.a.directory('message');
    });

    it('should have an components directory and is not empty', function() {
        expect(directory+'/components').to.be.a.directory('message').and.not.empty;
    });

    it('should have an index.js file inside components directory', function() {
        var filePath = directory+'/components';
        expect(file(filePath +'/index.js')).to.exist;
    });

    it('should have an constant.js file inside module directory', function() {
        var filePath = directory;
        expect(file(filePath +'/constant.js')).to.exist;
    });

    it('should have an saga.js file inside module directory', function() {
        var filePath = directory;
        expect(file(filePath +'/saga.js')).to.exist;
    });

    it('should have an reducer.js file inside module directory', function() {
        var filePath = directory;
        expect(file(filePath +'/reducer.js')).to.exist;
    });

    it('should have an selector.js file inside module directory', function() {
        var filePath = directory;
        expect(file(filePath +'/selector.js')).to.exist;
    });
});
