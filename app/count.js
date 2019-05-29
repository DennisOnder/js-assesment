if (typeof define !== "function") {
  var define = require("amdefine")(module);
}

define(function() {
  return {
    count: function(start, end) {
      let timeout;
      function startCounter() {
        console.log(start++);
        if (start <= end) timeout = setTimeout(startCounter, 100);
      }
      startCounter();
      return {
        cancel: function() {
          timeout && clearTimeout(timeout);
        }
      };
    }
  };
});
