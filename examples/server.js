/*!
 * Joshfire Framework 0.9.0
 * http://framework.joshfire.com/
 *
 * Copyright 2011, Joshfire
 * Dual licensed under the GPL Version 2 and a Commercial license.
 * http://framework.joshfire.com/license
 *
 * Date: Wed Jun 29 16:25:37 2011
 */


Joshfire = {define: function(a,b) {_ = b();}};
require('../lib/vendor/underscore.js');

var express = require('express');
var fs = require('fs');
var expressApp = express.createServer();

testPath = __dirname + '/';
expressApp.use(express.static(testPath));



expressApp.listen(10000);
