// entry-point into our back-end application

// after running "npm install dotenv" in the server directory, this config line is required to use .env
require('dotenv').config()
const express = require("express");

const app = express();

//const port = 3005;
// using env variable for PORT if it exists, else 3001
const port = process.env.PORT || 3001;


app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});