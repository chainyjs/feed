module.exports = function(opts, next) {
	var chain = this

	// Default opts to an object if it doesn't exist
	if ( !opts )  opts = {}

	// Use the chain's data as the url
	opts.url = this.data

	// Read the feed and apply it's content to the chain
	require('feedr').create().readFeed(opts, function(err, result){
		if (err)  return next(err)
		chain.data = result
		return next()
	})
}