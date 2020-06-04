CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id INT auto_increment PRIMARY KEY,
    burger_name VARCHAR(255),
    devoured BOOLEAN,
);