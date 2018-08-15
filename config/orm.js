const connection = require("../config/connection.js");
// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}



// =============== ORM ======================== //
const orm = {
  selectAll:function(tableInput, cb){
    var queryString=`SELECT * FROM ${tableInput} ORDER BY id ASC`;
    connection.query(queryString, function(error, data){
        if(error) throw error;
        cb(data);
    });
},
//insertOne()
insertOne:function(tableInput, col, val, cb){
    var queryString = `INSERT INTO ${tableInput}(${col.toString()})VALUES(?)`;
    connection.query(queryString, [val], function(error, data){
        if(error) throw error;
        cb(data);
    });
},
//updateOne() function that will update the Boolean value
updateOne:function(col, val, id_col, id, cb){
    var queryString = `SET ${col}=${val}} WHERE ${id_col}=${id}`;
    connection.query(queryString, function(error, data){
        if(error) throw error;
        cb(data);
    });
}


}

//exported in module.exports
module.exports = orm;