var connection = require('../config/connection.js');

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push('?')
    };

    return arr.toString();
};

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        arr.push(key + '=' + ob[key]);
    };
    // console.log(key);
    // console.log(length);
    // console.log(arr.toString());
    return arr.toString();
};

var orm = {
    all: function(tableInput, cb) {
        var queryString = 'SELECT * FROM ' + tableInput;

        connection.query(queryString, function(err, result) {
            // console.log(vals.length);
            // console.log(queryString);
            if (err) throw err;
            // console.log(vals.length);
            // console.log(queryString);
            cb(result);
        });
    },
    create: function(table, col, vals, cb) {
        var queryString = 'INSERT INTO ' + table;
        queryString = queryString + ' (';
        queryString = queryString + col.toString();
        queryString = queryString + ') ';
        queryString = queryString + 'VALUES (';
        queryString = queryString + printQuestionMarks(vals.length);
        // console.log(vals.length);
        // console.log(queryString);
        queryString = queryString + ') ';

        connection.query(queryString, vals, function(err, result) {
            if (err) throw err;
            // console.log(result);
            cb(result);
        });
    },
    update: function(table, objColVals, condition, cb) {

        var queryString = 'UPDATE ' + table;
        queryString = queryString + ' SET ';
        queryString = queryString + objToSql(objColVals);
        console.log(objColVals);
        queryString = queryString + ' WHERE ';
        queryString = queryString + condition;

        // console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            // console.log(result);
            cb(result);
        });
    }
};

module.exports = orm;