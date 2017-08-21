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
		    	mkdirp(directory+'/constants');
		    	mkdirp(directory+'/containers');
		    	mkdirp(directory+'/reducers');
		    	mkdirp(directory+'/routes');
	    	} catch (err) {
	    		throw err
	    	}
		}
	});
};