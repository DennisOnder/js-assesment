if (typeof define !== "function") {
  var define = require("amdefine")(module);
}

define(function() {
  return {
    indexOf: function(arr, item) {
      return arr.indexOf(item);
    },

    sum: function(arr) {
      return arr.reduce((total, current) => (total += current), 0);
    },

    remove: function(arr, item) {
      // for (let i = 0; i < arr.length; i++) {
      //   if (arr[i] === item) arr.splice(i, 1);
      // }
      // return arr;
      return arr.filter(v => v !== item);
    },

    removeWithoutCopy: function(arr, item) {
      for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i] === item) {
          arr.splice(i, 1);
          i--;
          len--;
        }
      }
      return arr;
    },

    append: function(arr, item) {
      // arr.push(item);
      return [...arr, item];
    },

    truncate: function(arr) {
      arr.pop();
      return arr;
    },

    prepend: function(arr, item) {
      // arr.unshift(item);
      return [item, ...arr];
    },

    curtail: function(arr) {
      arr.shift();
      return arr;
    },

    concat: function(arr1, arr2) {
      return [...arr1, ...arr2];
    },

    insert: function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count: function(arr, item) {
      let count = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) count++;
      }
      return count;
    },

    duplicates: function(arr) {
      let duplicates = [];
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] === arr[j] && !duplicates.includes(arr[i]))
            duplicates.push(arr[i]);
        }
      }
      return duplicates;
    },

    square: function(arr) {
      return arr.map(v => v * v);
    },

    findAllOccurrences: function(arr, target) {
      let occurences = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) occurences.push(i);
      }
      return occurences;
    }
  };
});
