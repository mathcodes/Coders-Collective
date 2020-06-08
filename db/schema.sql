DROP TABLE IF EXISTS burgers;

USE nerb6r4rzr1rtn3h;

CREATE TABLE burgers (
	id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(255),
    devoured BOOLEAN,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NULL,
    PRIMARY KEY(id)
    );
    
SELECT * FROM burgers;

SELECT burger_name FROM burgers;

DELETE FROM burgers WHERE burger_name IS NULL;

DELETE FROM burgers WHERE id > 3;

DELETE FROM burgers WHERE devoured = 1;

DROP TABLE burgers;

SELECT * FROM burgers;

