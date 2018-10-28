window.onload = () => {
  let answerTxt = "Taj Mahal";
  let questionTxt =
    "Which building, completed in 1653 at a cost of 32 million Rupees, took 22 years to build?";

  let answer = document.getElementById("answer");

  let question = document.getElementById("question");

  let btnShow = document.getElementById("show");
  btnShow.addEventListener("click", () => {
    answer.innerHTML = answerTxt;
  });
  let btnNew = document.getElementById("new");
  btnNew.addEventListener("click", loadNewQuestion());

  function loadNewQuestion() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(this.responseText);
        console.log(response);
      }
    };
    xhttp.open("GET", "localhost:3000/questions/random", true);
    xhttp.send();
  }
};
