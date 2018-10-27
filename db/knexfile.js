// Update with your config settings.

module.exports = {
  client: "pg",
  connection: {
    host: "127.0.0.1",
    database: "trivia"
  },
  port: 5432,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    directory: __dirname + "/migrations"
  },
  seeds: {
    directory: __dirname + "/seeds"
  }
};
