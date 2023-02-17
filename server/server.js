// server.js is the entry-point into the back-end application

require('dotenv').config()
const express = require("express");
const morgan = require('morgan');

const app = express();


app.use((req, res, next) => {
    console.log("this is an example of custom middleware");
    next();
});

// example of middleware package "morgan", HTTP request logger middleware for node.js
app.use(morgan("dev"));

// the callback function "(req, res) => {};"" is referred to as a route handler
// the route handler gets access to the request object and the response object

// Get All Restaurants
app.get("/api/v1/restaurants", (req, res) => {
    console.log("route handler ran");
    // could assign HTTP status with the following syntax
    //res.status(200).json({
    res.json({
        status: "success",
        data: {
            restaurant: ["mcdonalds", "wendys"]   
        }
    });
});

// Get One Restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params);
});

// Create Restaurant
app.post("/api/v1/restaurants", (req, res) => {
    console.log(req)
});


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});