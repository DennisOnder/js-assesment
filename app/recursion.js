if (typeof define !== "function") {
  var define = require("amdefine")(module);
}

define(function() {
  return {
    listFiles: function(data, dirName) {},

    permute: function(arr) {
      let result = [];
      for (let i = 0; i < arr.length; i = i + 1) {
        let permutations = this.permute(
          arr.slice(0, i).concat(arr.slice(i + 1))
        );
        if (!permutations.length) {
          result.push([arr[i]]);
        } else {
          for (let j = 0; j < permutations.length; j = j + 1) {
            result.push([arr[i]].concat(permutations[j]));
          }
        }
      }
      return result;
    }
  };
});
