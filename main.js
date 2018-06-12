const output = document.getElementById("output")
let answer = ""
let score = ""

function getQuestion() {

    fetch("http://jservice.io/api/random")
        .then(responseObject => responseObject.json())
        .then(hydratedBody => {
            console.log(hydratedBody)
            output.dataset.characterId = hydratedBody.id
            output.querySelector("h1").textContent = `${hydratedBody[0].question}`
            answer = hydratedBody[0].answer
            console.log(answer)
            score = hydratedBody[0].value
        })
    document.getElementById("nextQuestion").addEventListener("click", getQuestion);

}

getQuestion();





function checkAnswerBox() {
    const typedText = document.getElementById("input").value;

    if (typedText.toLowerCase === answer.toLowerCase) {
        let div = document.createElement("div");
        let response = document.createTextNode("That is Correct!");
        div.appendChild(response);
        document.getElementById("result").appendChild(div);
    } else {
        let div = document.createElement("div");
        let response = document.createTextNode("WRONG!")
        div.appendChild(response);
        document.getElementById("result").appendChild(div)
    }
}
document.getElementById("findButton").addEventListener("click", checkAnswerBox);
document.getElementById("input").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        checkAnswerBox()
    }
})