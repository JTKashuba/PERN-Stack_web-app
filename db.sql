-- in psql on windows: command "\?" for help menu 

-- command to create a postgres database: CREATE DATABASE dbname;

-- command to connect to database: \c dbname

-- documentation at: https://www.postgresqltutorial.com/


-- more datatypes available. ex: could use float for price,
-- but using INT for sake of simplicity
--CREATE TABLE products(
--    id INT
--    name VARCHAR(50),
--    price INT,
--    on_sale boolean
--);

-- command to list all tables within a database: \d
-- command to list all items in a specific table: \d products (aka: \d table_name)

--modifying columns (add or drop column)
--ALTER TABLE products ADD COLUMN featured boolean;
--ALTER TABLE products DROP COLUMN featured;

--DROP DATABASE dbname;
-------------------------------------------------------------------

-- creating table schema for yelp clone

CREATE TABLE restaurants (
    id INT,
    name VARCHAR(50),
    location VARCHAR(50),
    price_range INT
);

-- inserting a new row into a table
INSERT INTO restaurants (id, name, location, price_range) values (1, 'mcdonalds', 'new york', 3);
-- command to view all the columns for all rows of data in a table: select * from restaurants;
-- command to view specific columns for all rows of data in a table: select name, price_range from restaurants;


-- useless entries will cause semantic errors
INSERT INTO restaurants (price_range) values(5);
-- in this example, a new row will have no id, name, or location; hence, this entry is useless


--let's fix the restaurants table. first drop the table
DROP TABLE restaurants;

-- command to make each entry into a database automatically create it's own id: id BIGSERIAL
-- to make sure certain data is always passed in for specific columns: NOT NULL
-- id is now the PRIMARY KEY
-- price_range now has a conditional check
CREATE TABLE restaurants (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL check(price_range > 0 and price_range <6)
);

INSERT INTO restaurants (name, location, price_range) values ('wendys', 'denver', 3);
SELECT * FROM restaurants;
-- now useless entries like this will throw errors and not be added to the table
INSERT INTO restaurants (location, price_range) values ('denver', 3);




