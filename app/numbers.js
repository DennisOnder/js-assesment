if (typeof define !== "function") {
  var define = require("amdefine")(module);
}

define(function() {
  return {
    valueAtBit: function(num, bit) {
      const bin = num.toString(2);
      return bit > bin.length
        ? 0
        : parseInt(bin.toString(2)[bin.length - bit], 10);
    },

    base10: function(str) {
      return parseInt(str, 2);
    },

    convertToBinary: function(num) {
      return num.toString(2);
    },

    multiply: function(a, b) {
      const precision = b.toString().split(".")[1].length;
      return parseFloat((a * b).toPrecision(precision));
    }
  };
});
