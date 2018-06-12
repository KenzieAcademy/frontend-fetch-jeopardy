let questionPlace = document.getElementById("question")
let questionCountDisplay = document.getElementById("totalcount")
let questionTotalPoints = document.getElementById("totalvalue")
let questionCount = 0
let randomObject = {}
let button = document.getElementById("button")
let totalPointsEarned = 0
let totalPointsPossible = 0
button.addEventListener('click', compareAnswer)
fetchQuestion()
questionCountDisplay.textContent = questionCount
questionTotalPoints.textContent = totalPointsPossible

function fetchQuestion() {
    fetch("http://jservice.io/api/random")
        .then(responseObject => responseObject.json())
        .then(hydrateBody => {
            console.log(hydrateBody[0])
            // console.log(hydrateBody[0].question)
            // console.log(hydrateBody[0].answer)
            questionPlace.innerHTML = hydrateBody[0].question
            randomObject = hydrateBody[0]
        })
}

function compareAnswer() {
    let userAnswer = document.getElementById("input").value
    userAnswer.toLowerCase()
    questionCount += 1
    // console.log(questionCount)

    let points = document.getElementById("points")

    if (userAnswer.toLowerCase() === randomObject.answer.toLowerCase()) {
        totalPointsEarned += randomObject.value
        points.textContent = totalPointsEarned
        alert("Your answer was correct.  Points: " + randomObject.value)
    } else {
        alert("Correct answer was '" + randomObject.answer + "' Your answer was '" + userAnswer + " '")
    }
    totalPointsPossible += randomObject.value
    questionCountDisplay.textContent = questionCount
    questionTotalPoints.textContent = totalPointsPossible
    fetchQuestion()

}


    // .then(hydrateBody => {
    //     console.log(hydrateBody[0].question)
    // })
