(function(){
	"use strict";

	// Import
	var expect = require('chai').expect,
		joe = require('joe')

	// Test
	joe.describe('feed plugin', function(describe,it){
		var Chainy = require('chainy-core').subclass().require('set').addExtension('feed', require('../'))
		it("should work", function(next){
			Chainy.create()
				.set('https://raw.githubusercontent.com/chainy-plugins/set/master/package.json')
				.feed()
				.done(function(err, result){
					if (err)  return next(err)
					expect(result && result.name).to.equal('chainy-plugin-set')
					return next()
				})
		})
	})
})()