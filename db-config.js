const knex = require("knex");
const configs = require("./knexfile");

const environment = process.env.NODE_ENV || "development";
const config = configs[environment];

module.exports = knex(config);
