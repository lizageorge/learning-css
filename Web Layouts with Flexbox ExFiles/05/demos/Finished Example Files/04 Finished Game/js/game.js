// Variables - Getting the text to udpate
var questionLabel = document.getElementById('questionLabel');
var questionText = document.getElementById('questionText');
var optionA = document.getElementById('optionA');
var optionB = document.getElementById('optionB');
var optionC = document.getElementById('optionC');
var optionD = document.getElementById('optionD');
var questionImage = document.getElementById('questionImage');

// Game objects
var scoreLabel = document.querySelector('.scoreLabel');

// Game variables
var score = 0;
var selectedPoints = 0;

// Show questions
function showQuestion(e){
	
	switch(e){
		case 1:
			// Populate question data
			getQuestionData(e);
			// Open modal
			$('#questionModal').modal();
			disableButton(event.target);
			break;
		case 2:
			// Populate question data
			getQuestionData(e);
			// Open modal
			$('#questionModal').modal();
			disableButton(event.target);
			break;
		case 3:
			// Populate question data
			getQuestionData(e);
			// Open modal
			$('#questionModal').modal();
			disableButton(event.target);
			break;
		case 4:
			// Populate question data
			getQuestionData(e);
			// Open modal
			$('#questionModal').modal();
			disableButton(event.target);
			break;
		case 5:
			// Populate question data
			getQuestionData(e);
			// Open modal
			$('#questionModal').modal();
			disableButton(event.target);
			break;
		case 6:
			// Populate question data
			getQuestionData(e);
			// Open modal
			$('#questionModal').modal();
			disableButton(event.target);
			break;
		case 7:
			// Populate question data
			getQuestionData(e);
			// Open modal
			$('#questionModal').modal();
			disableButton(event.target);
			break;
		case 8:
			// Populate question data
			getQuestionData(e);
			// Open modal
			$('#questionModal').modal();
			disableButton(event.target);
			break;
		case 9:
			// Populate question data
			getQuestionData(e);
			// Open modal
			$('#questionModal').modal();
			disableButton(event.target);
			break;
		default:
			alert("Did not work")
	}
}

// Generate question data
function getQuestionData(e){
	// Update question
	questionLabel.innerHTML = questions["question" + e].questionLabel
	questionText.innerHTML = questions["question" + e].questionText;
	questionImage.src = questions["question" + e].questionImage;
	// Update answers
	optionA.innerHTML = questions["question" + e].optionA.responseText;
	optionB.innerHTML = questions["question" + e].optionB.responseText;
	optionC.innerHTML = questions["question" + e].optionC.responseText;
	optionD.innerHTML = questions["question" + e].optionD.responseText;
	// Update correct
	updateCurrentCorrect(questions["question" + e].optionA.correctResponse, questions["question" + e].optionB.correctResponse, questions["question" + e].optionC.correctResponse, questions["question" + e].optionD.correctResponse);
	// Update current selected points
	selectedPoints = event.target.innerHTML;
}

// Add correct label for question
function updateCurrentCorrect(a, b, c, d){
	if (a == true) {
		optionA.classList.add('correct');
	} else if(b == true){
		optionB.classList.add('correct');
	} else if(c == true){
		optionC.classList.add('correct');
	} else if(d == true){
		optionD.classList.add('correct');
	}
}

// Disable the button after selected
function disableButton(e){
	e.style.cursor = 'auto';
	e.classList.remove('gamePiece');
	e.classList.add('gamePieceAnswered');
	e.onclick = '';
}

// Check question answer
function submitQuestion(){
	if (event.target.classList.contains('correct')) {
		alert('This is correct');
		updateScore(parseInt(selectedPoints));
		$('#questionModal').modal('hide');

	} else{
		alert('This is not correct');
		$('#questionModal').modal('hide');
	}
}

// Update score
function updateScore(e){
	score = score + e;
	scoreLabel.innerHTML = "SCORE: " + score;
}

// Remove all correct labels
$("#questionModal").on("hidden.bs.modal", function () {
    optionA.classList.remove('correct');
    optionB.classList.remove('correct');
    optionC.classList.remove('correct');
    optionD.classList.remove('correct');
});

// Show leaderboard
function showLeaderBoard(){
	$('#leaderBoard').modal('show');
}