//setup mysql connection
var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        // if working locally, else statement provides parameters for connecting to local MySQL database
        host: "localhost",
        user: "root",
        port: '8000',
        password: "tY4ENvt@A",
        database: "burgers_db"
    });
};

//Make connection and if there is an error, provide info using err.stack
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
});

//export connection for our ORM to use. NOTICE "var connection = require('../config/connection.js');" at the top of orm.js
module.exports = connection;