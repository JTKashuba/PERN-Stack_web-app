-- table schema for Reviews

CREATE TABLE reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
    name VARCHAR(50),
    review TEXT NOT NULL,
    rating INT NOT NULL check(rating > 0 and rating < 6)
);