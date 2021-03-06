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


Joshfire.require(['joshfire/utils/templatecompiler'], function(TemplateCompiler) {

  var tc = new TemplateCompiler();

  tc.compileDir(process.ARGV[3], process.ARGV[4], function() {
    console.log('Template compilation done');
  });

});
