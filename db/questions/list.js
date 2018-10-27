// const Knex = require("knex");
// const knex = Knex({
//   client: "pg",
//   port: 5432,
//   connection: {
//     host: "127.0.0.1",
//     database: "trivia"
//   }
// });

let getList = function() {
  return knex.select().from("questions");
};

let getRandom = function() {
  return knex
    .select()
    .count()
    .from("questions")
    .then(function(count) {
      console.log("count", count[0].count);
      console.log("count", count[0].count);
      const id = Math.floor(Math.random() * count[0].count) + 1;
      console.log("id", id);
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

module.exports = {
  getList,
  getRandom
};
