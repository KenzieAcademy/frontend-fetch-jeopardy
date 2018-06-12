const output = document.getElementById("output")


fetch("http://jservice.io/api/random")
    .then(responseObject => responseObject.json())
    .then(hydratedBody => { 
            console.log(hydratedBody)
            output.dataset.charaterId = hydratedBody.id
            output.querySelector("h1").textContent = `${hydratedBody[0].question}`
            const input = document.createElement("input")
            output.appendChild(input)
            const button = document.createElement("button")
            let buttonText = document.createTextNode("answer")
            button.appendChild(buttonText)
            output.appendChild(button)
            button.dataset.id = button
    })




button.addEventListener("click", )