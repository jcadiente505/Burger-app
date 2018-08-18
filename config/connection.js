const mysql = require('mysql');
let connection;
if (process.env.JAWSDB_URL){
    connection.createConnection(process.env.JAWSDB_URL)
}
else {
    connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
});
}

connection.connect(err => {
    if (err) throw err;
    console.log("Connected!")
});

module.exports = connection