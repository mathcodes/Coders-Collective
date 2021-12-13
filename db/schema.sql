-- schema for burgers_bd
CREATE DATABASE burgers_db;
USE burgers_db;  

-- table burgers
CREATE TABLE burgers(
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(100) NOT NULL,
devoured BOOLEAN DEFAULT false,
PRIMARY KEY(id)
);