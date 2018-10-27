// const environment = process.env.NODE_ENV;
const config = require("../knexfile.js");
console.log(config);
module.exports = require("knex")(config);
