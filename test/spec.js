const app = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
chai.should();

const Knex = require("knex");
const knex = Knex({
  client: "pg",
  port: 5432,
  connection: {
    host: "127.0.0.1",
    database: "trivia"
  }
});

describe.only("The Trivia API server", () => {
  let request;
  beforeEach(() => {
    request = chai.request(app);
  });

  describe("GET /questions - return a list of questions", () => {
    it("should return status 201", async () => {
      const res = await request.get("/questions");
      res.should.have.status(201);
    });

    it("should return a list of JSON object", async () => {
      const res = await request.get("/questions");
      JSON.parse(res.text).length.should.equal(10);
    });
  });

  describe("GET /questions/random - return 1 random question", () => {
    let id1;
    it("should return status 201", async () => {
      const res = await request.get("/questions/random");
      id1 = JSON.parse(res.text)[0].id;
      res.should.have.status(201);
    });

    it("should return different JSON object", async () => {
      const res2 = await request.get("/questions/random");
      let id2 = JSON.parse(res2.text)[0].id;
      id1.should.not.equal(id2);
    });
  });

  describe("POST /questions - Be able to create new questions", () => {
    let countBefore;
    let resNewQuestion;
    const newQuestion = {
      question:
        "In hockey, how many players from each team are allowed to be on the ice at the same time?",
      answer: "Six"
    };
    before(async () => {
      request = chai.request(app);
      resNewQuestion = await request.post("/questions").send(newQuestion);
    });

    it("should return a status 200 when POST new questions", async () => {
      //   let resNewQuestion = await request.post("/questions").send(newQuestion);
      resNewQuestion.status.should.equal(200);
      const res = await request.get("/questions");
      countBefore = JSON.parse(res.text).length;
      console.log("CountAfter", countBefore);
    });

    it("should add a new Question to the Database", async () => {
      resNewQuestion = await request.post("/questions").send(newQuestion);
      knex
        .select()
        .count()
        .from("questions")
        .then(function(count) {
          Number(count[0].count).should.be.equal(countBefore + 1);
        });
    });
  });

  //   describe("DELETE /questions- delete a question", () => {
  //     xit("should return status 201 if question exist", async () => {
  //       const res = await request.get("/questions/random");
  //       id1 = JSON.parse(res.text)[0].id;
  //       res.should.have.status(201);
  //     });

  //     xit("should return different JSON object", async () => {
  //       const res2 = await request.get("/questions/random");
  //       let id2 = JSON.parse(res2.text)[0].id;
  //       id1.should.not.equal(id2);
  //     });
  //   });
});
