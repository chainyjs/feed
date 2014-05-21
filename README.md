
<!-- TITLE/ -->

# Feed action for [ChainyJS](http://chainy.bevry.me)

<!-- /TITLE -->


<!-- BADGES/ -->

[![Build Status](http://img.shields.io/travis-ci/chainy-plugins/chainy-plugin-feed.png?branch=master)](http://travis-ci.org/chainy-plugins/chainy-plugin-feed "Check this project's build status on TravisCI")
[![NPM version](http://badge.fury.io/js/chainy-plugin-feed.png)](https://npmjs.org/package/chainy-plugin-feed "View this project on NPM")
[![Dependency Status](https://david-dm.org/chainy-plugins/feed.png?theme=shields.io)](https://david-dm.org/chainy-plugins/feed)
[![Development Dependency Status](https://david-dm.org/chainy-plugins/feed/dev-status.png?theme=shields.io)](https://david-dm.org/chainy-plugins/feed#info=devDependencies)<br/>
[![Gittip donate button](http://img.shields.io/gittip/bevry.png)](https://www.gittip.com/bevry/ "Donate weekly to this project using Gittip")
[![Flattr donate button](http://img.shields.io/flattr/donate.png?color=yellow)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](http://img.shields.io/paypal/donate.png?color=yellow)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")
[![BitCoin donate button](http://img.shields.io/bitcoin/donate.png?color=yellow)](https://coinbase.com/checkouts/9ef59f5479eec1d97d63382c9ebcb93a "Donate once-off to this project using BitCoin")
[![Wishlist browse button](http://img.shields.io/wishlist/browse.png?color=yellow)](http://amzn.com/w/2F8TXKSNAFG4V "Buy an item on our wishlist for us")

<!-- /BADGES -->


<!-- CHAINY_DOCUMENTATION/ -->

<!-- DESCRIPTION/ -->

Chainy action that sets the chain data with the parsed results of a request, includes caching

<!-- /DESCRIPTION -->


Accepts a single argument, that can be a url string, a url function, or an object of options to send to feedr

If the url property is a function, it will be called with the current chain data and the return value will be used as the url

``` javascript
require('chainy-core').create().require('set feed log')
	.set('http://some.url').feed().log()  // result data of some url
```

<!-- /CHAINY_DOCUMENTATION -->


<!-- INSTALL/ -->

## Install

### [NPM](http://npmjs.org/)
- Use: `require('chainy-plugin-feed')`
- Install: `npm install --save chainy-plugin-feed`

### [Browserify](http://browserify.org/)
- Use: `require('chainy-plugin-feed')`
- Install: `npm install --save chainy-plugin-feed`
- CDN URL: `//wzrd.in/bundle/chainy-plugin-feed@0.1.0`

### [Ender](http://ender.jit.su/)
- Use: `require('chainy-plugin-feed')`
- Install: `ender add chainy-plugin-feed`

<!-- /INSTALL -->


<!-- HISTORY/ -->

## History
[Discover the change history by heading on over to the `HISTORY.md` file.](https://github.com/chainy-plugins/chainy-plugin-feed/blob/master/HISTORY.md#files)

<!-- /HISTORY -->


<!-- CONTRIBUTE/ -->

## Contribute

[Discover how you can contribute by heading on over to the `CONTRIBUTING.md` file.](https://github.com/chainy-plugins/chainy-plugin-feed/blob/master/CONTRIBUTING.md#files)

<!-- /CONTRIBUTE -->


<!-- BACKERS/ -->

## Backers

### Maintainers

These amazing people are maintaining this project:

- Benjamin Lupton <b@lupton.cc> (https://github.com/balupton)

### Sponsors

No sponsors yet! Will you be the first?

[![Gittip donate button](http://img.shields.io/gittip/bevry.png)](https://www.gittip.com/bevry/ "Donate weekly to this project using Gittip")
[![Flattr donate button](http://img.shields.io/flattr/donate.png?color=yellow)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](http://img.shields.io/paypal/donate.png?color=yellow)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")
[![BitCoin donate button](http://img.shields.io/bitcoin/donate.png?color=yellow)](https://coinbase.com/checkouts/9ef59f5479eec1d97d63382c9ebcb93a "Donate once-off to this project using BitCoin")
[![Wishlist browse button](http://img.shields.io/wishlist/browse.png?color=yellow)](http://amzn.com/w/2F8TXKSNAFG4V "Buy an item on our wishlist for us")

### Contributors

No contributors yet! Will you be the first?
[Discover how you can contribute by heading on over to the `CONTRIBUTING.md` file.](https://github.com/chainy-plugins/chainy-plugin-feed/blob/master/CONTRIBUTING.md#files)

<!-- /BACKERS -->


<!-- LICENSE/ -->

## License

Licensed under the incredibly [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT license](http://creativecommons.org/licenses/MIT/)

Copyright &copy; 2014+ Bevry Pty Ltd <us@bevry.me> (http://bevry.me)

<!-- /LICENSE -->


