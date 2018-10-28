const Knex = require("knex");

module.exports = function(config) {
  // initialize a connection to the database, and pass this
  // to the various submodules within
  const knex = Knex({
    client: "pg",
    port: 5432,
    connection: {
      host: "127.0.0.1",
      database: "trivia"
    }
  });

  return {
    questions: require("./questions")(knex)
  };
};
