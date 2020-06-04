Write SQL queries this file that do the following:

  --  * Create the `burgers_db`.
  -- Drops the burgers_db if it already exists --
DROP DATABASE IF EXISTS burgers_db;

-- Create the database burgers_db and specified it for use.
CREATE DATABASE burgers_db;

  --  * Switch to or use the `burgers_db`.
  USE burgers_db;

-- Create the table plans.
CREATE TABLE movies (
  PRIMARY KEY (id),
  burger_name STRING_AGG NOT NULL,
  devoured BOOLEAN NOT NULL
);
  --  * Create a `burgers` table with these fields:
  --    * **id**: an auto incrementing int that serves as the primary key.
  --    * **burger_name**: a string.
  --    * **devoured**: a boolean.
