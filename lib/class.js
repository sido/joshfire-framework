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


/* Simple JavaScript Inheritance
* By John Resig http://ejohn.org/
* MIT Licensed.
*/
// Inspired by base2 and Prototype
//Adapted for Joshlib
Joshfire.define(['joshfire/vendor/underscore'], function(_) {

  var initializing = false,
      fnTest = /xyz/.test(function() {
            xyz;
      }) ? (/\b__super\b/) : /.*/;

  var Class = function() {};


  // Create a new Class that inherits from this class
  Class.extend = function(prop) {
    var _super = this.prototype;

    // Instantiate a base class (but only create the instance,
    // don't run the init constructor)
    initializing = true;
    var prototype = new this();
    initializing = false;

    // Copy the properties over onto the new prototype
    for (var name in prop) {
      // Check if we're overwriting an existing function
      prototype[name] = typeof prop[name] == 'function' && typeof _super[name] == 'function' && fnTest.test(prop[name]) ? (function(name, fn) {
        return function() {
          var tmp = this.__super;

          // Add a new ._super() method that is the same method
          // but on the super-class
          this.__super = _super[name];

          // The method only need to be bound temporarily, so we
          // remove it when we're done executing
          var ret = fn.apply(this, arguments);
          this.__super = tmp;

          return ret;
        };
      })(name, prop[name]) : prop[name];
    }


    function Class() {
      // All construction is actually done in the init method
      if (!initializing && this.__constructor) this.__constructor.apply(this, arguments);
    }

    // Populate our constructed prototype object
    Class.prototype = prototype;

    // Enforce the constructor to be what we expect
    Class.constructor = Class;

    // And make this class extendable
    Class.extend = arguments.callee;

    return Class;
  };

  return function() {
    if (_.isFunction(arguments[0])) {
      return arguments[0].extend(arguments[1]);
    } else {
      return Class.extend(arguments[0]);
    }
  };
});