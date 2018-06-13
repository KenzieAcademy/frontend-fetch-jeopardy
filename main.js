const output = document.getElementById("output");
let answer = "";
let points;

function getQuestion() {

    fetch("http://jservice.io/api/random")
        .then(responseObject => responseObject.json())
        .then(hydratedBody => {
            console.log(hydratedBody);
            output.dataset.characterId = hydratedBody.id
            output.querySelector("h2").textContent = `${hydratedBody[0].category.title}`
            output.querySelector("h3").textContent = `${hydratedBody[0].question}`
            answer = hydratedBody[0].answer
            points = hydratedBody[0].value
            console.log(points);
            console.log(answer);

        })
    document.getElementById("nextQuestion").addEventListener("click", getQuestion);
}

getQuestion();



function checkAnswerBox() {
    const typedText = document.getElementById("input").value;

    if (typedText.toLowerCase() === answer.toLowerCase()) {
        let div = document.createElement("div");
        let response = document.createTextNode(("That is Correct! ") + points + (" points"));
        div.appendChild(response);
        document.getElementById("result").appendChild(div)
    } else {
        let div = document.createElement("div");
        let response = document.createTextNode("WRONG! 0 points");
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

function resetResponse() {

}