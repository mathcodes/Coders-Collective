var mysql = require("mysql");

var connection;
console.log("connection line 4"); //console.log used for testing
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    console.log("connection line 8"); //console.log used for testing
    connection = mysql.createConnection({
        // console.log("connection line10");  //console.log used for testing
        host: "localhost",
        user: "root",
        port: '3306',
        password: "tY4ENvt@A",
        database: "burgers_db"
            // console.log("connection line16"); console.log("connection line16"); SyntaxError: Unexpected identifier   //console.log used for testing
    });
    console.log("connection line 18"); //console.log used for testing
};
console.log("connection line 20"); //console.log used for testing

connection.connect(function(err) {
    console.log("connection line 23"); //console.log used for testing
    if (err) {
        console.log("connection line 25"); //console.log used for testing
        console.error("error connecting: " + err.stack);
        console.log("connection line 27"); //console.log used for testing
        return;
        console.log("connection line 29"); //console.log used for testing
    }
    console.log("connection line 31"); //console.log used for testing
});
console.log("connection line 33"); //console.log used for testing
module.exports = connection;
console.log("connection line 35"); //console.log used for testing