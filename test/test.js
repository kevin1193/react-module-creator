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

    it('should have an actions directory', function() {
        expect(directory+'/actions').to.be.a.directory('message');
    });

    it('should have an actions directory and is not empty', function() {
        expect(directory+'/actions').to.be.a.directory('message').and.not.empty;
    });

    it('should have an index.js file inside actions directory', function() {
        var filePath = directory+'/actions';
        expect(file(filePath +'/index.js')).to.exist;
    });

     it('should have an constants directory and is not empty', function() {
        expect(directory+'/constants').to.be.a.directory('message').and.not.empty;
    });

    it('should have an index.js file inside constants directory', function() {
        var filePath = directory+'/constants';
        expect(file(filePath +'/index.js')).to.exist;
    });
});
