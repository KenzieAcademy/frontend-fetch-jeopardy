const output = document.getElementById("output")

// fetch("http://jservice.io/api/random")
//   .then(responseObject => responseObject.json())
//   .then(hydratedBody => let hydratedBody = hydratedBody)





fetch('http://jservice.io/api/random')
  .then(function(responseObject) {
    return responseObject.json();
  })
  .then(function(hydratedBody) {
    console.log(hydratedBody)
    
    console.log(hydratedBody.question);

  });