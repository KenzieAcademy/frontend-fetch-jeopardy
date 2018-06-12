const questionDestination = document.getElementById("question")
const categoryDestination = document.getElementById("category")
const pointsDestination = document.getElementById("points")
const answer = document.getElementById("answer")
let question = null
const pointTotal = document.getElementById("pointtotal")

document.getElementById("submit").addEventListener("click", checkAnswer)
document.getElementById("newquestion").addEventListener("click", initFetch)

let points = 0


function initFetch() {
    fetch("http://jservice.io/api/random/")
        .then(responseObject => responseObject.json())
        .then(hydratedBody => {
            console.log(hydratedBody[0])
            question = hydratedBody[0]
            categoryDestination.textContent = question.category.title
            questionDestination.textContent = question.question
            pointsDestination.textContent = question.value
    })
}

function checkAnswer(event) {
    event.preventDefault()
    console.log(answer.value, question.answer)
    if (answer.value.toLowerCase() === question.answer.toLowerCase()) {
        addScore()
    } else {
        subtractScore()
    }
}

function addScore() {
    points += Number(question.value)
    pointTotal.textContent = points
    return points
}

function subtractScore() {
    points -= Number(question.value)
    pointTotal.textContent = points
    return points
}

initFetch()