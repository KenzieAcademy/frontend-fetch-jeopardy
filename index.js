const outputQuestion = document.getElementById("outputQuestion");
let answerInput;
const buttonSubmit = document.getElementById("submitAnswer");
let answerOutput;
let userScore = document.getElementById("userScore");
let questionBundle = {};
let score = 0;

// fetch("http://jservice.io/api/random")
//   .then(responseObject => responseObject.json())
//   .then(hydratedBody => console.log(hydratedBody))





fetch('http://jservice.io/api/random')
	.then(function (responseObject) {
		return responseObject.json();
	})
	.then(function (hydratedBody) {
		console.log(hydratedBody[0]);
		questionBundle = hydratedBody[0];
		let question = document.createTextNode(questionBundle.question);
		outputQuestion.appendChild(question);
	});

function checkAnswer() {
	answerInput = document.getElementById("textInput").value;
	console.log(answerInput, "--", questionBundle.answer)
	if (answerInput == questionBundle.answer) {

		score = score + questionBundle.value;
		let scoreToAppend = document.createTextNode(score);
		userScore.appendChild(scoreToAppend);
		alert("That is.....Correct! You've earned " + questionBundle.value + " points!");
		fetch('http://jservice.io/api/random')
			.then(function (responseObject) {
				return responseObject.json();
			})
			.then(function (hydratedBody) {
				console.log(hydratedBody[0]);
				questionBundle = hydratedBody[0];
				let question = document.createTextNode(questionBundle.question);
				outputQuestion.appendChild(question);
			});
	} else {
		alert("So close! You can do it! Please try again", answerInput);
	}
}


// const outputQuestion = document.getElementById("outputQuestion");
// let answerInput;
// const buttonSubmit = document.getElementById("submitAnswer");
// let answerOutput;
// let userScore = document.getElementById("userScore");
// let questionBundle = {};
// let score = 0;

// fetch("http://jservice.io/api/random")
//   .then(responseObject => responseObject.json())
//   .then(hydratedBody => console.log(hydratedBody))





// fetch('http://jservice.io/api/categories?count=100')
// 	.then(responseObject => {
// 		return responseObject.json();
// 	})
// 	.then(categories => {
// 		const randomStartingIndex = Math.floor(Math.random() * categories.length - 6)
// 		return categories
// 			.filter(category => {
// 				if (category.clues_count < 5) return false

// 				fetch("http://jservice.io/api/category?id=" + category.id)
// 					.then(response => response.json())
// 					.then(categoryObject => {
// 						category.clues = await categoryObject.clues.filter(clue => {
// 							return Boolean(clue.question) && Boolean(clue.answer) && Boolean(clue.value)
// 						})

// 						category.clues_count = category.clues.length
// 					})

// 				return (category.clues_count < 5) ? false : true
// 			})
// 			.slice(randomStartingIndex, randomStartingIndex + 6)
// 	})
// 	.then(validCategories => {

// 		console.log(validCategories)

// 		// questionBundle = categories[0];
// 		// let question = document.createTextNode(questionBundle.question);
// 		// outputQuestion.appendChild(question);
// 	});

// function checkAnswer() {
// 	answerInput = document.getElementById("textInput").value;
// 	console.log(answerInput, "--", questionBundle.answer)
// 	if (answerInput == questionBundle.answer) {

// 		score = score + questionBundle.value;
// 		let scoreToAppend = document.createTextNode(score);
// 		userScore.appendChild(scoreToAppend);
// 		alert("That is.....Correct! You've earned " + questionBundle.value + " points!");
// 		fetch('http://jservice.io/api/random')
// 			.then(function (responseObject) {
// 				return responseObject.json();
// 			})
// 			.then(function (hydratedBody) {
// 				console.log(hydratedBody[0]);
// 				questionBundle = hydratedBody[0];
// 				let question = document.createTextNode(questionBundle.question);
// 				outputQuestion.appendChild(question);
// 			});
// 	} else {
// 		alert("So close! You can do it! Please try again", answerInput);
// 	}
// }