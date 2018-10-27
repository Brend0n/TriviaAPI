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

module.exports = knex => {
  return {
    // create: require("./create")(knex, Question),
    list: require("./list")(knex, Question)
  };
};
