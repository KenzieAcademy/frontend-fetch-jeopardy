const output = document.getElementById('output');
const textField = document.getElementById('textField');
const submitBtn = document.getElementById('submit');
const points = document.getElementById('points');
let gameQuestion;
let gameAnswer;
let gamePoints;
let textValue;
function fetchNewQuestion() {
  fetch('http://jservice.io/api/random')
    .then(responseObject => responseObject.json())
    .then(
      hydratedBody => (
        (gameQuestion = hydratedBody[0].question),
        (gameAnswer = hydratedBody[0].answer),
        (output.textContent = gameQuestion),
        (gamePoints = hydratedBody[0].value)
      )
    );
}

document.getElementById('newQuestion').addEventListener('click', fetchNewQuestion);
submitBtn.addEventListener('click', getUserText);
function getUserText() {
  textValue = textField.value;
  console.log(textValue);
  if (textValue.toLowerCase() === gameAnswer.toLowerCase()) {
    alert('correct');
    points.textContent += gamePoints;
    fetchNewQuestion();
  } else {
    alert('incorrect');
  }
}

fetchNewQuestion();
