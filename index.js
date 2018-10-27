/**
 ********************************START SERVER********************************
 ****************************************************************************
 */
const Knex = require("knex");

const express = require("express");
const knex = Knex({
  client: "pg",
  port: 5432,
  connection: {
    host: "127.0.0.1",
    database: "trivia"
  }
});

const app = express();
app.get("/hello", (req, res) => res.send("My WORrLD!!"));

const questions = require("./db/questions/list");
app.get("/questions", (req, res) =>
  questions.getList().then(function(data) {
    res.status(201).json(data);
  })
);

app.get("/questions/random", (req, res) =>
  questions.getRandom().then(function(data) {
    res.status(201).json(data);
  })
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server up and listening on port`, PORT);
});

// const knex = Knex({
//   client: config.client,
//   port: config.connection.port,
//   connection: {
//     host: config.connection.host,
//     database: config.connection.database
//   }
// });
