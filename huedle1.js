let answerValues = []; //an array containing the r, g, and b values of the answer color
let answerColor = ""; //answer color

let turnCounter = 0; //counts the number of turns for the labels

//raw input variables
//input from each guess
let guess1Input = []; //each array holds the r, g, b of the guess
let guess2Input = [];
let guess3Input = [];
let guess4Input = [];
let guess5Input = [];
let guess6Input = [];

var valid; //boolean checks if the input is valid

//initializes circle sector colors to black
let guessColors = ["black", "black", "black", "black", "black", "black"];


function guess() { // numberentered
	++turnCounter; //checks turn number
	
	//document.getElementById("message").innerHTML += "turn " + turnCounter + "<br>";
	
	if (turnCounter == 1) {
		guess1Input[0] = document.getElementById("r1").value; //assigns raw input to the variables
		guess1Input[1] = document.getElementById("g1").value;
		guess1Input[2] = document.getElementById("b1").value;

		valid = isValid(guess1Input[0], guess1Input[1], guess1Input[2]); //checks if the variables are valid
		checkRGB(guess1Input[0], guess1Input[1], guess1Input[2]); //checks how correct the values are 
	}

	if (turnCounter == 2) {
		guess2Input[0] = document.getElementById("r2").value;
		guess2Input[1] = document.getElementById("g2").value;
		guess2Input[2] = document.getElementById("b2").value;

		valid = isValid(guess2Input[0], guess2Input[1], guess2Input[2]);
		checkRGB(guess2Input[0], guess2Input[1], guess2Input[2]);
	}

	if (turnCounter == 3) {
		guess3Input[0] = document.getElementById("r3").value;
		guess3Input[1] = document.getElementById("g3").value;
		guess3Input[2] = document.getElementById("b3").value;

		valid = isValid(guess3Input[0], guess3Input[1], guess3Input[2]);
		checkRGB(guess3Input[0], guess3Input[1], guess3Input[2]);
	}

	if (turnCounter == 4) {
		guess4Input[0] = document.getElementById("r4").value;
		guess4Input[1] = document.getElementById("g4").value;
		guess4Input[2] = document.getElementById("b4").value;

		valid = isValid(guess4Input[0], guess4Input[1], guess4Input[2]);
		checkRGB(guess4Input[0], guess4Input[1], guess4Input[2]);
	}

	if (turnCounter == 5) {
		guess5Input[0] = document.getElementById("r5").value;
		guess5Input[1] = document.getElementById("g5").value;
		guess5Input[2] = document.getElementById("b5").value;

		valid = isValid(guess5Input[0], guess5Input[1], guess5Input[2]);
		checkRGB(guess5Input[0], guess5Input[1], guess5Input[2]);
	}

	if (turnCounter == 6) {
		guess6Input[0] = document.getElementById("r6").value;
		guess6Input[1] = document.getElementById("g6").value;
		guess6Input[2] = document.getElementById("b6").value;

		valid = isValid(guess6Input[0], guess6Input[1], guess6Input[2]);
		checkRGB(guess6Input[0], guess6Input[1], guess6Input[2]);
	}
}

function run() {
	enableInput();
	selectRGB(); //selects answer color
	answerColor = "rgb(" + answerValues[0] + ", " + answerValues[1] + ", " + answerValues[2] + ")"; //prints the rgb values 	
	generateCircle(guessColors); //initializes circle values to all black
	//document.getElementById("message").innerHTML += answerColor + " turn " + turnCounter + "<br>";
}

function enableInput() { //allows the user to enter guess values for the next turn in the input boxes
	document.getElementById("r" + (turnCounter + 1)).disabled = false;
	document.getElementById("g" + (turnCounter + 1)).disabled = false;
	document.getElementById("b" + (turnCounter + 1)).disabled = false;
}

function disableInput(num) { //prevents the user from entering the guess values for previous turns or skipping ahead
	document.getElementById("r" + num).disabled = true;
	document.getElementById("g" + num).disabled = true;
	document.getElementById("b" + num).disabled = true;
}

function isValid(r, g, b) {
	if (r == Number(r) && r > 0 && r <= 255) {
		if (g == Number(g) && g > 0 && g <= 255) {
			if (b == Number(b) && b > 0 && b <= 255) 
				return true;
		}
	}
	return false;
}

function checkRGB(r, g, b) { //checks how accurate rgb is
	let errorMessage = "!isvalid error <br>";
	if (valid) {
		disableInput(turnCounter);
		if(turnCounter < 6) //checks if turnCounter is less than six to implement the enableInput
			enableInput(); //enableInput doesn't need to be called on the last guess
	
		
		let thisGuess = [checkR(r), checkG(g), checkB(b)];

		if (thisGuess[0] == "#00cc66" && thisGuess[1] == "#00cc66" && thisGuess[2] == "#00cc66")
			win();
		if ((thisGuess[0] != "#00cc66" || thisGuess[1] != "#00cc66" || thisGuess[2] != "#00cc66") && turnCounter == 6)
			lose();
			
		/*document.getElementById("message").innerHTML += "r: " + thisGuess[0] + "<br>"; //checks r guess
		document.getElementById("message").innerHTML += "g: " + thisGuess[1] + "<br>"; //checks g guess
		document.getElementById("message").innerHTML += "b: " + thisGuess[2] + "<br>"; //checks b guess*/
		
		let thisColor = "rgb(" + r + "," + g + "," + b + ")";
		//document.getElementById("message").innerHTML += "color: " + thisColor + "<br>";
		
		guessColors[turnCounter - 1] = thisColor;
			
		generateCircle(guessColors);
		
		document.getElementById("r" + turnCounter).style.backgroundColor = thisGuess[0];  
		document.getElementById("g" + turnCounter).style.backgroundColor = thisGuess[1];  
		document.getElementById("b" + turnCounter).style.backgroundColor = thisGuess[2];  

	}
	else {
		//document.getElementById("message").innerHTML += errorMessage;
		turnCounter--;
		//document.getElementById("message").innerHTML += turnCounter;
		error();
	}
}

function error() {
	var modal = document.getElementById("errorModal");
	var span = document.getElementsByClassName("close")[0];

	document.getElementById("error-message-continued").innerHTML = "check that each value is between 1<br>and 225 and that all values have been entered";

	modal.style.display = "block";
	span.onclick = function() {
		modal.style.display = "none";
	}
	  
	window.onclick = function(event) {
		if (event.target == modal)
		  modal.style.display = "none";
	}
}

function win() {
	var modal = document.getElementById("winModal");
	var span = document.getElementsByClassName("close")[0];

	document.getElementById("win-message").innerHTML = "<br> the exact answer was " + answerColor;
	//modal.style.backgroundColor(answerColor);
	modal.style.display = "block";
	span.onclick = function() {
		modal.style.display = "none";
	}

	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
}

function lose() {
	var modal = document.getElementById("loseModal");
	var span = document.getElementsByClassName("close")[0];

	document.getElementById("lose-message").innerHTML = "<br> the exact answer was " + answerColor;

	modal.style.display = "block";
	span.onclick = function() {
		modal.style.display = "none";
	}

	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
}

function instructions() {
	var modal = document.getElementById("instructionModal");
	var span = document.getElementsByClassName("close")[0];

	modal.style.display = "block";
	span.onclick = function() {
		modal.style.display = "none";
	}

	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
}

function checkR(rVal) { //checks r value
	if (Math.abs(rVal - answerValues[0]) <= 5) //if guess is correct --> green
		return "#00cc66";
	if (Math.abs(rVal - answerValues[0]) <= 15) //if guess is rlly close --> red
		return "#ff3300";
	if (Math.abs(rVal - answerValues[0]) <= 25) //if guess is pretty close --> organey pink
		return "#ff6666";
	if (Math.abs(rVal - answerValues[0]) <= 50) //if guess is close --> pink
		return "#ff66ff";
	if (Math.abs(rVal - answerValues[0]) <= 100) //if guess is far --> purple
		return "#9966ff";
	if (Math.abs(rVal - answerValues[0]) <= 150) //if guess is pretty far --> blueish purple
		return "#6666ff";
	if (Math.abs(rVal - answerValues[0]) <= 200) //if guess is really far -->  blue
		return "#3399ff";
	return "#99ccff"; //if guess is way off --> light blue
}

function checkG(gVal) { //checks g value
	if (Math.abs(gVal - answerValues[1]) <= 5)
		return "#00cc66"; // if guess is correct --> green
	if (Math.abs(gVal - answerValues[1]) <= 15)
		return "#ff3300"; // if guess is rlly close --> red
	if (Math.abs(gVal - answerValues[1]) <= 25)
		return "#ff6666"; // if guess is pretty close --> organey pink
	if (Math.abs(gVal - answerValues[1]) <= 50)
		return "#ff66ff"; // if guess is close --> pink
	if (Math.abs(gVal - answerValues[1]) <= 100)
		return "#9966ff"; // if guess is far -->  purple
	if (Math.abs(gVal - answerValues[1]) <= 150)
		return "#6666ff"; // if guess is pretty far --> blueish purple
	if (Math.abs(gVal - answerValues[1]) <= 200)
		return "#3399ff"; // if guess is really far --> blue
	return "#99ccff"; // if guess is way off --> light blue
}

function checkB(bVal) { //checks b value
	if (Math.abs(bVal - answerValues[2]) <= 5)
		return "#00cc66"; // if guess is correct --> green
	if (Math.abs(bVal - answerValues[2]) <= 15)
		return "#ff3300"; // if guess is rlly close --> red
	if (Math.abs(bVal - answerValues[2]) <= 25)
		return "#ff6666"; // if guess is pretty close --> organey pink
	if (Math.abs(bVal - answerValues[2]) <= 50)
		return "#ff66ff"; // if guess is close --> pink
	if (Math.abs(bVal - answerValues[2]) <= 100)
		return "#9966ff"; // if guess is far -->  purple
	if (Math.abs(bVal - answerValues[2]) <= 150)
		return "#6666ff"; // if guess is pretty far --> blueish purple
	if (Math.abs(bVal - answerValues[2]) <= 200)
		return "#3399ff"; // if guess is really far --> blue
	return "#99ccff"; // if guess is way off --> light blue
}

/* generating circle and color to guess */

function selectRGB() {
	answerValues[0] = Math.floor(Math.random() * 240) + 10;
	answerValues[1] = Math.floor(Math.random() * 240) + 10;
	answerValues[2] = Math.floor(Math.random() * 240) + 10;	
}

function generateCircle(guessColors) {
	var c = document.getElementById("circleCanvas");
	var ctx = c.getContext("2d");
	ctx.lineWidth = 10;
	ctx.strokeStyle = answerColor;
	
	//outer circle
	ctx.beginPath();
	ctx.arc(375, 330, 325, 0, 2 * Math.PI, true);
	ctx.stroke(); //https://www.w3schools.com/tags/canvas_arc.asp
	ctx.moveTo(375, 330);
	ctx.closePath();
	ctx.fillStyle = 'black';
	ctx.fill(); //https://www.html5canvastutorials.com/tutorials/html5-canvas-shape-fill/
	
	//sector 1
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 325, 0, -1/3 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = guessColors[0];
	ctx.fill();
	
	//sector 2
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 325, -1/3 * Math.PI, -2/3 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = guessColors[1];
	ctx.fill();
	
	//sector 3
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 325, -2/3 * Math.PI, -3/3 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = guessColors[2];
	ctx.fill();
	
	//sector 4
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 325, -3/3 * Math.PI, -4/3 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = guessColors[3];
	ctx.fill();
	
	//sector 5 
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 325, -4/3 * Math.PI, -5/3 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = guessColors[4];
	ctx.fill();
	
	//sector 6
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 325, -5/3 * Math.PI, -6/3 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = guessColors[5];
	ctx.fill();
	
	//last line
	ctx.beginPath();
	ctx.lineWidth = 5;
	ctx.moveTo(375, 330);
	ctx.lineTo(700, 330);
	ctx.stroke();
	ctx.closePath();
	
	//inner circle
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 150, 0, 2 * Math.PI);
	ctx.lineWidth = 10;
	ctx.stroke();
	ctx.fillStyle = answerColor;
	ctx.fill();
}