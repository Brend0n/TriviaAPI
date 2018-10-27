exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("questions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("questions").insert([
        {
          question:
            "Who is the only member of ZZ Top who doesn’t have a beard?",
          answer: "Frank Beard"
        },
        {
          question:
            "Who were the first television couple to be shown in bed together on prime time television?",
          answer: "Fred and Wilma Flinstone"
        },
        {
          question:
            "What starts with “e” and ends with “e” but only has one letter in it?",
          answer: "An envelope."
        },
        {
          question:
            "Can you name three consecutive days without using the words Wednesday, Friday, and Sunday?",
          answer: "Yesterday, today, and tomorrow."
        },
        {
          question: "In the world of video games, What does N.E.S. stand for?",
          answer: "Nintendo Entertainment System"
        },
        {
          question:
            "How many pairs of chromosomes are in found in the average human?",
          answer: "23."
        },
        {
          question:
            "What is the sleepiest animal in the world, sleeping around 22 hours each day?",
          answer: "Koala."
        },
        {
          question: "Which city has the largest population in the world?",
          answer: "Tokyo, Japan."
        },
        {
          question: "What does Roger mean when communicating via radio?",
          answer: "Message received."
        },
        {
          question: "Our solar system is located in what galaxy?",
          answer: "The Milky Way."
        }
      ]);
    });
};
