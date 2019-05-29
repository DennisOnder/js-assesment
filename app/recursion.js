if (typeof define !== "function") {
  var define = require("amdefine")(module);
}

define(function() {
  return {
    listFiles: function(data, dirName) {
      let result = [];
      let dirs = [];

      function readFiles(dir) {
        let file;
        let files = dir.files;

        dirs.push(dir.dir);

        for (let i = 0, len = files.length; i < len; i++) {
          file = files[i];
          if (typeof file === "string") {
            if (!dirName || dirs.indexOf(dirName) > -1) {
              result.push(files[i]);
            }
          } else {
            readFiles(files[i]);
          }
        }

        dirs.pop();
      }

      readFiles(data);

      return result;
    },

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
