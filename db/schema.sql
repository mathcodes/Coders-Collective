DROP TABLE IF EXISTS burgers;

USE xlatwf551z0gmbbv;

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

x