// config.js
/**
 * Module facilitates point three in twelve factor application.
 * Store config in the environment.
 * It allows for named import of environment variables
 * and central management of them.
 */
require('dotenv').config();

const DEFAULT_PORT = 3000;
const DEFAULT_DB_URI = "dummy default";
const DEFAULT_SECRET_KEY = "dummy default";
const DEFAULT_ANOTHER_CONFIG = "dummy default";

const config = {
    PORT: process.env.PORT || DEFAULT_PORT,
    dbURI: process.env.DB_URI || DEFAULT_DB_URI,
    secretKey: process.env.SECRET_KEY || DEFAULT_SECRET_KEY,
    anotherConfig: process.env.ANOTHER_CONFIG || DEFAULT_ANOTHER_CONFIG,
};

module.exports = config;
