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


Joshfire.define(['joshfire/input', 'joshfire/class', 'joshfire/vendor/socket.io'], function(Input, Class, io) {

  /**
  * @class Input interface for HTTP websockets
  * @name adapters_browser_inputs_http
  * @augments input
  */
  return Class(Input,
      /**
      * @lends adapters_browser_inputs_http.prototype
      */
      {

        /**
        * start
        * @function
        */
        setup: function(callbackOnReady) {

          var self = this;

          var socket = io.connect(this.options.server);

          socket.on('input', function(data) {

            console.log('websocket got', data);

            self.app.publish('input', data);

          });

        }

      });


});
