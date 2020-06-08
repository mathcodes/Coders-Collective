DROP TABLE IF EXISTS burgers;

USE xlatwf551z0gmbbv;

CREATE TABLE burgers (
	id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(255),
    devoured BOOLEAN NOT NULL DEFAULT 1,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NULL,
    PRIMARY KEY(id)
    );
    
UPDATE burgers
SET devoured = 1
WHERE devoured = 0;

INSERT INTO burgers (burger_name, devoured) VALUES ('https://cdn.sqltutorial.org/wp-content/uploads/2016/04/SQL-Cheet-Sheet-1.png', 1);
INSERT INTO burgers (burger_name, devoured) VALUES ('https://code.visualstudio.com/assets/updates/1_7/keyboard-shortcuts-pdf.png', 0);
INSERT INTO burgers (burger_name, devoured) VALUES ('https://www.mapsofworld.com/images-mow/world-map.jpg', 1);
 
SELECT * FROM burgers;

SELECT burger_name FROM burgers;

DELETE FROM burgers WHERE burger_name IS NULL;

DELETE FROM burgers WHERE devoured NOT 3;

DELETE FROM burgers WHERE devoured = 1;

DROP TABLE burgers;

SELECT * FROM burgers;

