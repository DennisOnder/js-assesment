if (typeof define !== "function") {
  var define = require("amdefine")(module);
}

define(["jquery"], function($) {
  return {
    async: function(value) {
      return Promise.resolve(value);
    },

    manipulateRemoteData: function(url) {
      return new Promise((resolve, reject) => {
        $.ajax({
          type: "GET",
          url,
          dataType: "json",
          success: function(response) {
            let result = [];
            for (let [key, value] of Object.entries(response.people)) {
              result.push(value.name);
            }
            resolve(result.sort());
          }
        });
      });
    }
  };
});
