// store.js
// Provides easy interaction with localStorage
// ---
// Part of the Riggr SPA framework <https://github.com/Fluidbyte/Riggr> and released
// under the MIT license. This notice must remain intact.
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.store = factory();
  }
}(this, function () {

  var store = {

    // Check type of data
    checkType: function (obj) {
      return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
    },

    // Set item
    set: function (name, data, session) {
      // Check if object
      if (this.checkType(data) === 'object' || this.checkType(data) === 'array') {
        // Stringify contents
        data = JSON.stringify(data);
      }
      // Set in lS
      this.getStorage(session).setItem(name, data);
    },

    // Get (and parse) item
    get: function (name, session) {
      var data;
      try {
        // If this is JSON, parse it
        data = JSON.parse(this.getStorage(session).getItem(name));
      } catch (e) {
        // Just send back the string
        data = this.getStorage(session).getItem(name);
      }
      // Send it back
      return data;
    },

    // Remove item
    remove: function (name, session) {
      this.getStorage(session).removeItem(name);
    },

    getStorage: function (session) {
      return (session) ? sessionStorage : localStorage;
    }

  };

  return store;

}));
