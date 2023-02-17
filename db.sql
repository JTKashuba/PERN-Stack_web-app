-- documentation: https://www.postgresqltutorial.com/

-- table schema for yelp clone
CREATE TABLE restaurants (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL check(price_range > 0 and price_range <6)
);