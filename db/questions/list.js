const Knex = require("knex");
const knex = Knex({
  client: "pg",
  port: 5432,
  connection: {
    host: "127.0.0.1",
    database: "trivia"
  }
});

let getList = function() {
  return knex.select().from("questions");
};

let getRandom = function() {
  return knex
    .select()
    .count()
    .from("questions")
    .then(function(count) {
      const id = Math.floor(Math.random() * count[0].count) + 1;
      return knex
        .select()
        .from("questions")
        .where("id", id);
    });
  // .catch(err => {
  //   // throw unknown errors
  //   throw err;
  // });
};

let createQuestion = function(question) {
  return knex("questions")
    .insert({
      question: question.question,
      answer: question.answer
    })
    .then(() => {
      return knex
        .select()
        .from("questions")
        .where("question", question.question);
    });
};

let deleteQuestion = function(question) {
  return knex("questions")
    .where(question)
    .del();
};

module.exports = {
  getList,
  getRandom,
  createQuestion,
  deleteQuestion
};
