const outputQuestion = document.getElementById("outputQuestion");
let answerInput;
const buttonSubmit = document.getElementById("submitAnswer");
let answerOutput;
let userScore = document.getElementById("userScore");
let questionBundle = {};
let score = 0;

// fetch("http://jservice.io/api/random")
//   .then(responseObject => responseObject.json())
//   .then(hydratedBody => console.log(hydratedBody))





fetch('http://jservice.io/api/random')
  .then(function (responseObject) {
    return responseObject.json();
  })
  .then(function (hydratedBody) {
    console.log(hydratedBody[0]);
    questionBundle = hydratedBody[0];
    let question = document.createTextNode(questionBundle.question);
    outputQuestion.appendChild(question);
  });

function checkAnswer() {
  answerInput = document.getElementById("textInput").value;
  console.log(answerInput, "--", questionBundle.answer)
  if (answerInput == questionBundle.answer) {

    score = score + questionBundle.value;
    let scoreToAppend = document.createTextNode(score);
    userScore.appendChild(scoreToAppend);
    alert("That is.....Correct! You've earned " + questionBundle.value + " points!");
    fetch('http://jservice.io/api/random')
      .then(function (responseObject) {
        return responseObject.json();
      })
      .then(function (hydratedBody) {
        console.log(hydratedBody[0]);
        questionBundle = hydratedBody[0];
        let question = document.createTextNode(questionBundle.question);
        outputQuestion.appendChild(question);
      });
  } else {
    alert("So close! You can do it! Please try again", answerInput);
  }
}