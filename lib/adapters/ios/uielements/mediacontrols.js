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


Joshfire.define(['joshfire/uielement', 'joshfire/class'], function(UIElement, Class) {


  /**
  * No media controls on iOS, native video player
  * @class
  * @name adapters_ios_uielements_mediacontrols
  * @extends {uielement}
  */
  return Class(UIElement,
      /**
      * @lends adapters_android_uielements_list.prototype
      */
      { type: 'MediaControls',
        /**
        * @function init
        *
        */
        init: function() {
        },


        /**
        * @function inner html
        * returns {String} empty
        */
        getInnerHtml: function() {
          return '';
        },
        /**
        * @ignore
        * @function refresh
        *
        */
        refresh: function() {

        },

        /**
        * @ignore
        *@function
        *
        */
        show: function() {

        },
        /**
        * @ignore
        * @function
        *
        */
        hide: function() {

        }


      });


});
