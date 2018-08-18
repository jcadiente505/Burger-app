const mysql = require('mysql');
if (process.env.JAWSDB_URL){
    connection.createConnection(process.env.JAWSDB_URL)
}
else {
    const connection = mysql.createConnection({
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