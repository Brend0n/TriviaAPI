/**
 ********************************SETUP SERVER********************************
 ****************************************************************************
 */
const Knex = require("knex");

const express = require("express");

const app = express();
app.use(express.json()); // enables parsing of application/json request bodies
app.use(express.urlencoded({ extended: true })); // enables parsing of application/x-www-form-urlencoded data

/**
 ******************************** ROUTES ********************************
 ****************************************************************************
 */
app.get("/", (req, res) => res.sendFile(__dirname + "/public/index.html"));

const questions = require("./db/questions/list");
app.get("/questions", (req, res) =>
  questions.getList().then(function(data) {
    res
      .status(201)
      .json(data)
      .end();
  })
);

app.get("/questions/random", (req, res) => {
  questions.getRandom().then(function(data) {
    res
      .status(201)
      .json(data)
      .end();
  });
});

app.post("/questions", (req, res) => {
  questions
    .createQuestion({
      question: req.body.question,
      answer: req.body.answer
    })
    .then(question => res.status(200).send(JSON.stringify(question)))
    .catch(err => res.status(400).send(err.message));
});

app.delete("/questions", (req, res) => {
  let temp = {};

  questions.deleteQuestion(temp);
});

/**
 ********************************START SERVER********************************
 ****************************************************************************
 */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server up and listening on port`, PORT);
});

module.exports = app;
