if (typeof define !== "function") {
  var define = require("amdefine")(module);
}

define(function() {
  return {
    containsNumber: function(str) {
      return /\d/.test(str);
    },

    containsRepeatingLetter: function(str) {
      return /([a-zA-Z]).*?\1/.test(str);
    },

    endsWithVowel: function(str) {
      return /[aeiou|AEIOU]$/.test(str);
    },

    captureThreeNumbers: function(str) {
      const results = /\d{3}/.exec(str);
      return results ? results[0] : false;
    },

    matchesPattern: function(str) {
      return /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/.test(str);
    },
    isUSD: function(str) {
      return /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/.test(str);
    }
  };
});
