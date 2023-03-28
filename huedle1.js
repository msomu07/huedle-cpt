/* Ideas!
 * add modals
 * add an instructions modal that displays the color key diagram thing
 * the win/lose modal should contain the exact answer values
 * make input boxes unclickable after button has been pressed***
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
let answerValues = []; //an array containing the r, g, and b values of the answer color
let answerColor = ""; //answer color
let turnCounter = 0; //counts the number of turns for the labels
let message = "";

//raw input variables
//guess 1
let r1Input;
let g1Input;
let b1Input;

//guess 2
let r2Input;
let g2Input;
let b2Input;

//guess 3
let r3Input;
let g3Input;
let b3Input;

//guess 4
let r4Input;
let g4Input;
let b4Input;

//guess 5
let r5Input;
let g5Input;
let b5Input;

//guess 6
let r6Input;
let g6Input;
let b6Input;

var valid; //boolean checks if the input is valid

//circle colors
let guessColor1 = "black";
let guessColor2 = "black";
let guessColor3 = "black";
let guessColor4 = "black";
let guessColor5 = "black";
let guessColor6 = "black";


function guess() { // numberentered
	++turnCounter;
	document.getElementById("message").innerHTML += "turn " + turnCounter + "<br>";
	if (turnCounter == 1) {
		r1Input = document.getElementById("r1").value;
		g1Input = document.getElementById("g1").value;
		b1Input = document.getElementById("b1").value;

		valid = isValid(r1Input, b1Input, g1Input);
		checkRGB(r1Input, g1Input, b1Input);
	}

	if (turnCounter == 2) {
		r2Input = document.getElementById("r2").value;
		g2Input = document.getElementById("g2").value;
		b2Input = document.getElementById("b2").value;

		valid = isValid(r2Input, b2Input, g2Input);
		checkRGB(r2Input, g2Input, b2Input);
	}

	if (turnCounter == 3) {
		r3Input = document.getElementById("r3").value;
		g3Input = document.getElementById("g3").value;
		b3Input = document.getElementById("b3").value;

		valid = isValid(r3Input, b3Input, g3Input);
		checkRGB(r3Input, g3Input, b3Input);
	}

	if (turnCounter == 4) {
		r4Input = document.getElementById("r4").value;
		g4Input = document.getElementById("g4").value;
		b4Input = document.getElementById("b4").value;

		valid = isValid(r4Input, b4Input, g4Input);
		checkRGB(r4Input, g4Input, b4Input);
	}

	if (turnCounter == 5) {
		r5Input = document.getElementById("r5").value;
		g5Input = document.getElementById("g5").value;
		b5Input = document.getElementById("b5").value;

		valid = isValid(r5Input, b5Input, g5Input);
		checkRGB(r5Input, g5Input, b5Input);
	}

	if (turnCounter == 6) {
		r6Input = document.getElementById("r6").value;
		g6Input = document.getElementById("g6").value;
		b6Input = document.getElementById("b6").value;

		valid = isValid(r6Input, b6Input, g6Input);
		checkRGB(r6Input, g6Input, b6Input);
	}
}

function run() {
	selectRGB(); //selects answer color
	answerColor = "rgb(" + answerValues[0] + ", " + answerValues[1] + ", " + answerValues[2] + ")"; //prints the rgb values 	
	generateCircle(guessColor1, guessColor2, guessColor3, guessColor4, guessColor5, guessColor6); //initializes circle values to all black
	document.getElementById("message").innerHTML += answerColor + " turn " + turnCounter + "<br>";
}

function isValid(r, g, b) {
	if (r == Number(r) && r >= 0 && r <= 255) {
		if (g == Number(r) && g >= 0 && g <= 255) {
			if (b == Number(b) && b >= 0 && b <= 255) 
				return true;
		}
	}
	return false;
}

function checkRGB(r, g, b) { //checks how accurate rgb is
	let errorMessage = "!isvalid error <br>"; // error;*/
	//if (valid) {
		let thisR = checkR(r);
		let thisG = checkG(g);
		let thisB = checkB(b);

		if (thisR == "#00cc66" && thisG == "#00cc66" && thisB == "#00cc66")
			win()
			
		//document.getElementById("message").innerHTML += "YO WON OMG" + "<br>";
		
		document.getElementById("message").innerHTML += "r: " + thisR + "<br>"; //checks r guess
		document.getElementById("message").innerHTML += "g: " + thisG + "<br>"; //checks g guess
		document.getElementById("message").innerHTML += "b: " + thisB + "<br>"; //checks b guess
		
		let thisColor = "rgb(" + r + "," + g + "," + b + ")";
		document.getElementById("message").innerHTML += "color: " + thisColor + "<br>";
		
		if(turnCounter == 1)
			guessColor1 = thisColor;
		if(turnCounter == 2)
			guessColor2 = thisColor;
		if(turnCounter == 3)
			guessColor3 = thisColor;
		if(turnCounter == 4)
			guessColor4 = thisColor;
		if(turnCounter == 5)
			guessColor5 = thisColor;
		if(turnCounter == 6)
			guessColor6 = thisColor;
			
		generateCircle(guessColor1, guessColor2, guessColor3, guessColor4, guessColor5, guessColor6);
		
		document.getElementById("r" + turnCounter).style.backgroundColor = thisR;  
		document.getElementById("g" + turnCounter).style.backgroundColor = thisG;  
		document.getElementById("b" + turnCounter).style.backgroundColor = thisB;  

	//}
	/*else
		document.getElementById("message").innerHTML += errorMessage;*/
}

function win() {
	var modal = document.getElementById("myModal");
	var span = document.getElementsByClassName("close")[0];

	document.getElementById("win-message").innerHTML = "YOU WIN!!!";

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
	answerValues[0] = Math.floor(Math.random() * 250) + 5;
	answerValues[1] = Math.floor(Math.random() * 250) + 5;
	answerValues[2] = Math.floor(Math.random() * 250) + 5;	
}

function generateCircle(s1, s2, s3, s4, s5, s6) {
	var c = document.getElementById("circleCanvas");
	var ctx = c.getContext("2d");
	ctx.lineWidth = 10;
	ctx.strokeStyle = "grey";
	
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
	ctx.fillStyle = s1;
	ctx.fill();
	
	//sector 2
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 325, -1/3 * Math.PI, -2/3 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = s2;
	ctx.fill();
	
	//sector 3
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 325, -2/3 * Math.PI, -3/3 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = s3;
	ctx.fill();
	
	//sector 4
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 325, -3/3 * Math.PI, -4/3 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = s4;
	ctx.fill();
	
	//sector 5 
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 325, -4/3 * Math.PI, -5/3 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = s5;
	ctx.fill();
	
	//sector 6
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 325, -5/3 * Math.PI, -6/3 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = s6;
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