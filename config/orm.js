// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },


}


module.exports = orm;

orm.selectAll ("burgers", (results) => {
  console.log(results);
})