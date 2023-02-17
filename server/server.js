// server.js is the entry-point into the back-end application

require('dotenv').config()
const express = require("express");

const app = express();

// anytime we get a "get" method from the front-end towards this 
// exact URL "http://localhost:3001/getRestaurants", it's going to hit this route in the back-end
app.get("/getRestaurants", (req, res) => {
    // could assign HTTP status with the following syntax
    //res.status(404).json({
    res.json({
        status: "success",
        restaurant: "mcdonalds"
    })
});


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});