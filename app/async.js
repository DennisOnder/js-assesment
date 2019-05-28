if (typeof define !== "function") {
  var define = require("amdefine")(module);
}

define(["jquery"], function($) {
  return {
    async: function(value) {
      return Promise.resolve(value);
    },

    manipulateRemoteData: function(url) {}
  };
});
