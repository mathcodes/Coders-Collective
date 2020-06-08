DROP TABLE IF EXISTS burgers;

USE xlatwf551z0gmbbv;

CREATE TABLE burgers (
	id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(255),
    devoured BOOLEAN,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NULL,
    PRIMARY KEY(id)
    );

INSERT INTO burgers (burger_name, devoured) VALUES ('https://www.codeconquest.com/wp-content/uploads/MySQL-Cheat-Sheet-by-CodeConquestDOTcom.jpg', 0);
INSERT INTO burgers (burger_name, devoured) VALUES ('https://code.visualstudio.com/assets/updates/1_7/keyboard-shortcuts-pdf.png', 0);
INSERT INTO burgers (burger_name, devoured) VALUES ('https://www.mapsofworld.com/images-mow/world-map.jpg', 1);
 
SELECT * FROM burgers;

SELECT burger_name FROM burgers;

DELETE FROM burgers WHERE burger_name IS NULL;

DELETE FROM burgers WHERE id > 3;

DELETE FROM burgers WHERE devoured = 1;

DROP TABLE burgers;

SELECT * FROM burgers;

