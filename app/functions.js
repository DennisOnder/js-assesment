if (typeof define !== "function") {
  var define = require("amdefine")(module);
}

define(function() {
  return {
    argsAsArray: function(fn, arr) {
      return fn(...arr);
    },

    speak: function(fn, obj) {
      return fn.call(obj);
    },

    functionFunction: function(str) {
      return function(str1) {
        return `${str}, ${str1}`;
      };
    },

    makeClosures: function(arr, fn) {
      function closure() {
        return arr.map(v => fn(v));
      }
      closure();
    },

    partial: function(fn, str1, str2) {},

    useArguments: function(...args) {
      return args.reduce((acc, curr) => (acc += curr), 0);
    },

    callIt: function(fn) {},

    partialUsingArguments: function(fn) {},

    curryIt: function(fn) {}
  };
});
