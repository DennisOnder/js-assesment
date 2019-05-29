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
      let result = [];
      for (let i = 0; i < arr.length; i++) {
        result.push(function() {
          return fn(arr[i]);
        });
      }
      return result;
    },

    partial: function(fn, str1, str2) {
      return function(ending) {
        return fn(str1, str2, ending);
      };
    },

    useArguments: function(...args) {
      return args.reduce((acc, curr) => (acc += curr), 0);
    },

    callIt: function(fn) {
      const args = Array.prototype.slice.call(arguments, 1, arguments.length);
      fn.apply(null, args);
    },

    partialUsingArguments: function(fn) {
      const args = Array.prototype.slice.call(arguments, 1, arguments.length);
      return function() {
        const newArgs = args.concat(Array.prototype.slice.call(arguments));
        return fn.apply(null, newArgs);
      };
    },

    curryIt: function(fn) {
      function useArgs(fn2, args) {
        return fn2.apply(null, args);
      }

      function argsAccumulator(accumulated, expected) {
        return function(currentArg) {
          accumulated.push(currentArg);
          const allArgumentsProvided = accumulated.length === expected;
          if (allArgumentsProvided) {
            return useArgs(fn, accumulated);
          }
          return argsAccumulator(accumulated, expected);
        };
      }
      return argsAccumulator([], fn.length);
    }
  };
});
