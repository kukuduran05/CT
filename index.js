// Imports
const conf  = require('dotenv');

// Initialize configuration
conf.config();

/**
 * Required External Modules
 */
const express = require("express");


/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "8000";
/**
 *  App Configuration
 */

/**
 * Routes Definitions
 */
app.get("/", (req, res) => {
    res.status(200).send("Now is running!");
});

/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});