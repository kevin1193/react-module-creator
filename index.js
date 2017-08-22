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
	    		var containersDir = directory + '/containers';
	    		mkdirp(containersDir, function (err) {
	    			var indexDir = containersDir+'/index.js';
	    			fs.writeFile(indexDir, '//Create index file here.', function (err) {
					   if (err) throw err;
					});
	    		});

	    		var componentsDir = directory + '/components';
	    		mkdirp(componentsDir, function (err) {
	    			var indexDir = componentsDir+'/index.js';
	    			fs.writeFile(indexDir, '//Create index file here.', function (err) {
					   if (err) throw err;
					});
	    		});


	    		fs.writeFile(directory + '/constant.js', '//Create index file here.', function (err) {
    			  	if (err) throw err;
				});

				fs.writeFile(directory + '/saga.js', '//Create index file here.', function (err) {
    			  	if (err) throw err;
				});

				fs.writeFile(directory + '/reducer.js', '//Create index file here.', function (err) {
    			  	if (err) throw err;
				});


				fs.writeFile(directory + '/selector.js', '//Create index file here.', function (err) {
    			  	if (err) throw err;
				});
	    	} catch (err) {
	    		throw err
	    	}
		}
	});
};