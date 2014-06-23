"use strict";
module.exports = function(value, opts, next) {
	// Default opts to an object if it doesn't exist
	if ( opts == null )  opts = {}

	// Use the chain's data as the url
	opts.url = value

	// Read the feed and apply it's content to the chain
	require('feedr').create().readFeed(opts, function(err,result,headers){
		return next(err, result)
	})
}
module.exports.extensionType = 'action'