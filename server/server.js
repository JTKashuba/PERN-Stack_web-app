// server.js is the entry-point into the back-end application

require('dotenv').config();
const express = require("express");
const cors = require("cors");
const db = require('./db');
const morgan = require('morgan');

const app = express();

// CORS middleware allows app to communicate between back- and front-end
// Without it, the Express server will only accept requests from the same domain
// causing an error since they are on two distinct domains (ports 3000 and 3001)
app.use(cors());

// JSON middleware
app.use(express.json());


// CRUD Operations ///////////////////////////////////////////////

/* IMPORTANT LESSON

    The following template string syntax is bad practice

const results = await db.query(`SELECT * FROM restaurants where id = ${req.params.id}`);

    It leaves the application vulnerable to SQL injection attacks; hence, 
    it's never recommended to use any kind of string interpolation or template literals within a query.

    Instead, use a parameterized query with the following syntax

const results = await db.query("SELECT * FROM restaurants WHERE id = $1", [req.params.id]);
*/

/*
Create
*/

// Create Restaurant
app.post("/api/v1/restaurants", async (req, res) => {
    //console.log(req.body);
    try {
        const results = await db.query("INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) RETURNING *", [req.body.name, req.body.location, req.body.price_range]);
        //console.log(results);
        //console.log(results.rows[0]);
        res.status(201).json({
            status: "success",
            data: {
                restaurant: results.rows[0]
            }
        });
    } catch(err) {
        console.log(err);
    }
});

/*
Read 
*/

// Get All Restaurants
app.get("/api/v1/restaurants", async (req, res) => {
    try {
        //const results = await db.query("SELECT * FROM restaurants;");
        const restaurantRatingsData = await db.query("SELECT * FROM restaurants LEFT OUTER JOIN (SELECT restaurant_id, COUNT(*), TRUNC(AVG(rating), 1) AS average_rating FROM reviews GROUP BY restaurant_id) reviews ON restaurants.id = reviews.restaurant_id;");
        //console.log("results", results);
        //console.log("restaurant ratings data", restaurantRatingsData);
        res.status(200).json({
            status: "success",
            results: restaurantRatingsData.rows.length,
            data: {
                restaurants: restaurantRatingsData.rows
            }
        });
    } catch(err) {
        console.log(err);
    }
});

// Get One Restaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
    //console.log(req.params.id);
    try {
        const restaurant = await db.query("SELECT * FROM restaurants LEFT OUTER JOIN (SELECT restaurant_id, COUNT(*), TRUNC(AVG(rating), 1) AS average_rating FROM reviews GROUP BY restaurant_id) reviews ON restaurants.id = reviews.restaurant_id WHERE id = $1;", [req.params.id]);
        //console.log(results);
        const reviews = await db.query("SELECT * FROM reviews WHERE restaurant_id = $1", [req.params.id]);
        res.status(200).json({
            status: "success",
            data: {
                restaurant: restaurant.rows[0],
                reviews: reviews.rows
            }
        });
    } catch(err) {
        console.log(err);
    }
});

/* 
Update 
*/

// Update Restaurant
app.put("/api/v1/restaurants/:id", async (req, res) => {
    //console.log(req.params.id);
    //console.log(req.body);
    try {
        const results = await db.query("UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *", [req.body.name, req.body.location, req.body.price_range, req.params.id]);
        //console.log(results);
        res.status(200).json({
            status: "success",
            data: {
                restaurant: results.rows[0]
            }
        });
    } catch(err) {
        console.log(err);
    }
});


/* 
Delete 
*/

// Delete Restaurant
app.delete("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const results = await db.query("DELETE FROM restaurants WHERE id = $1", [req.params.id]);
        res.status(204).json({
            status: "success"
        });
    } catch(err) {
        console.log(err);
    }
});

app.post("/api/v1/restaurants/:id/addReview", async (req, res) => {
    try {
        const newReview = await db.query("INSERT INTO reviews (restaurant_id, name, review, rating) VALUES ($1, $2, $3, $4) RETURNING *", 
                            [req.params.id, req.body.name, req.body.review, req.body.rating]);
                            res.status(201).json({
                                status: 'success',
                                data: {
                                    review: newReview.rows[0]
                                }
                            })
    } catch(err) {
        console.log(err);
    }
})

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});