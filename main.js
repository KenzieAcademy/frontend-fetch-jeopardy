const output = document.getElementById("output")
function fetchNewQuestion(){
fetch("http://jservice.io/api/random")
    .then(responseObject => responseObject.json())
    .then(hydratedBody => {
        output.querySelector("h1").textContent = hydratedBody[0].question
        output.querySelector("h2").textContent = "Points Value: " + hydratedBody[0].value
        output.querySelector("h3").textContent = "Category: " + hydratedBody[0].category.title.toUpperCase()
        gameAnswer = hydratedBody[0].answer
        pointValue = hydratedBody[0].value
    })
}

fetchNewQuestion()

const inputBox = document.getElementById("input")
const button = document.getElementById("submit")

function checkAnswer() {
    const runningTotal = document.getElementById("runningtotal")
    const convertedTextInput = inputBox.value.toLowerCase()
    const convertedAnswerText = gameAnswer.toLowerCase()
    if(convertedTextInput === convertedAnswerText){
        pointValue += pointValue
        runningTotal.textContent = "Total Points: " + pointValue
        fetchNewQuestion()
    }else{
        fetchNewQuestion()
    }
}
button.addEventListener("click", checkAnswer)

