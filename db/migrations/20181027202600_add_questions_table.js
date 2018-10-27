exports.up = function(knex, Promise) {
  // create the 'questions' table with three columns
  return knex.schema.createTable("questions", t => {
    t.increments() // auto-incrementing id column
      .index(); // index this column

    t.string("question").notNullable(); // add a not-null constraint to this column

    t.string("answer").notNullable(); // add a not-null constraint to this column

    t.timestamp("created_at").defaultTo(knex.fn.now()); // default to insert time
    t.timestamp("updated_at").defaultTo(knex.fn.now()); // default to insert time
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("questions");
};
