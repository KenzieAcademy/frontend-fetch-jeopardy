const output = document.getElementById("output")
let answer = "";
const input = document.createElement("input")
const score = 0;
output.appendChild(input)
let counter = 0;

const checkAnswer = () => {   
             
        if(input.value === answer ){
                counter += 200;
              let correct = document.createTextNode("  " + counter)
              output.appendChild(correct)

        }else{
                let wrong = document.createTextNode("wrong  " + counter) 
                output.appendChild(wrong)

        }

}
        console.log(counter)

const fetchData = () => {

        fetch("http://jservice.io/api/random")
        .then(responseObject => responseObject.json())
        .then(hydratedBody => { 
                output.dataset.charaterId = hydratedBody.id
                output.querySelector("h1").textContent = `${hydratedBody[0].question}`
                answer = `${hydratedBody[0].answer}`
                console.log(answer)
        })             
}
fetchData();

const button = document.createElement("button")
const buttonText = document.createTextNode("answer")
button.appendChild(buttonText)
output.appendChild(button)
button.addEventListener("click", checkAnswer)

const fetchButton = document.createElement("button")
const fetchButtonText = document.createTextNode("new question")
fetchButton.appendChild(fetchButtonText)
output.appendChild(fetchButton)
fetchButton.addEventListener("click", fetchData)
        
        

                                                