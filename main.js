const output = document.getElementById("output");
const input = document.getElementById("input");
const button = document.getElementById("button");
const point = document.getElementById("value");
let question;
let answer;
let pointVal;
let pointTot = 0;

fetch("http://jservice.io/api/random")
    .then(response => response.json())
    .then(hydrated => {
        question = `${hydrated[0].question}`;
        output.textContent = question;
        answer = `${hydrated[0].answer}`.toLowerCase();
        pointVal = `${hydrated[0].value}`
        console.log(answer);
        console.log(pointVal);
    });
    
button.onclick = function() {
    let playAns = input.value.toLowerCase();

    console.log(playAns)
    if (answer === playAns) {
        console.log(pointTot);
        pointTot += Number(pointVal);
        point.textContent = pointTot;
    } else {
        console.log("no");
    }
}