'use strict';
var mkdirp = require('mkdirp');
var fs = require('fs');
/**
 * Create a new module directory
 * @param {string} directory
 * @return {string}
 */

module.exports = function(directory) {
    mkdirp(directory, function (err) {
	    if (err) {
	    	throw err;
	    }
	    else {
	    	try {
	    		var actionsDir = directory + '/actions';
	    		mkdirp(actionsDir, function (err) {
	    			var indexDir = actionsDir+'/index.js';
	    			fs.writeFile(indexDir, '//Create index file here.', function (err) {
					   if (err) throw err;
					});
	    		});

	    		var constantsDir = directory + '/constants';
	    		mkdirp(constantsDir, function (err) {
	    			var indexDir = constantsDir+'/index.js';
	    			fs.writeFile(indexDir, '//Create index file here.', function (err) {
					   if (err) throw err;
					});
	    		});

	    		var containersDir = directory + '/containers';
	    		mkdirp(containersDir, function (err) {
	    			var indexDir = containersDir+'/index.js';
	    			fs.writeFile(indexDir, '//Create index file here.', function (err) {
					   if (err) throw err;
					});
	    		});

	    		var reducersDir = directory + '/reducers';
	    		mkdirp(reducersDir, function (err) {
	    			var indexDir = reducersDir+'/index.js';
	    			fs.writeFile(indexDir, '//Create index file here.', function (err) {
					   if (err) throw err;
					});
	    		});

	    		var routesDir = directory + '/routes';
	    		mkdirp(routesDir, function (err) {
	    			var indexDir = routesDir+'/index.js';
	    			fs.writeFile(indexDir, '//Create index file here.', function (err) {
					   if (err) throw err;
					});
	    		});

	    	} catch (err) {
	    		throw err
	    	}
		}
	});
};