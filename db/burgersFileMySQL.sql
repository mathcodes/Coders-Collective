CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id INT auto increment PRIMARY KEY,
    burger_name VARCHAR(255),
    devoured BOOLEAN,
);

SELECT * FROM burgers