DROP TABLE IF EXISTS burgers;

USE xlatwf551z0gmbbv;

CREATE TABLE burgers (
	id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(255),
    devoured BOOLEAN,
   -- createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY(id)
    );
    
SELECT * FROM burgers;

INSERT INTO burgers (burger_name, devoured) VALUES ('jaws link 1', 0);
INSERT INTO burgers (burger_name, devoured) VALUES ('jaws link 2', 0);
INSERT INTO burgers (burger_name, devoured) VALUES ('jaws link 3', 1);