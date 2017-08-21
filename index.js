'use strict';
var mkdirp = require('mkdirp');
/**
 * Create a new module directory
 * @param {string} locale
 * @return {string}
 */

module.exports = function(directory) {
    mkdirp(directory, function (err) {
	    if (err) {
	    	console.error(err);
	    }
	    else {
	    	mkdirp(directory+'/actions');
	    	mkdirp(directory+'/constants');
	    	mkdirp(directory+'/containers');
	    	mkdirp(directory+'/reducers');
	    	mkdirp(directory+'/routes');
		}
	});
};

function _getFullPat(directory){

}