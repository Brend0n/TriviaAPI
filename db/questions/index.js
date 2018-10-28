const Knex = require("knex");

const Question = function(dbQuestion) {
  this.id = dbQuestion.id;
  this.question = dbQuestion.question;
  this.answer = dbQuestion.answer;
  this.created_at = dbQuestion.created_at;
  this.updated_at = dbQuestion.updated_at;
};

Channel.prototype.serialize = function() {
  return {
    id: this.id,
    question: this.question,
    answer: this.answer,
    created_at: this.created_at,
    updated_at: this.updated_at
  };
};

module.exports = function() {
  const knex = Knex({
    client: "pg",
    port: 5432,
    connection: {
      host: "127.0.0.1",
      database: "trivia"
    }
  });

  return {
    list: require("./list")(knex, Question)
    // create: require("./create")(knex, Question),};
  };
};
