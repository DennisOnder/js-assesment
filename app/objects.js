if (typeof define !== "function") {
  var define = require("amdefine")(module);
}

define(function() {
  return {
    alterContext: function(fn, obj) {},

    alterObjects: function(constructor, greeting) {},

    iterate: function(obj) {
      return Object.keys(obj).map(key => `${key}: ${obj[key]}`);
    }
  };
});
