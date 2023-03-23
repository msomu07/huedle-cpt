/* Ideas!
 * make the text of the guesses change color depending on how close they are to the correct answer (abs difference)
 * when guess is within 5, it turns green
 * when guess is exact, it turns yellow!
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
let answerValues = []; //an array containing the r, g, and b values of the answer color
let answerColor = ""; //answer color
let turnCounter = 0; //counts the number of turns for the labels

//variables
//guess1
let r1 = document.querySelector("#r1"); // guess 1 r
r1Input.addEventListener("input", numberEntered, false);

let g1 = document.querySelector("#g1"); // guess 1 g
g1Input.addEventListener("input", numberEntered, false);

let b1 = document.querySelector("#b1"); // guess 1 b
b1Input.addEventListener("input", numberEntered, false);

//guess2
let r2 = document.querySelector("#r2"); // guess 2 r
r2Input.addEventListener("input", numberEntered, false);

let g2 = document.querySelector("#g2"); // guess 2 g
g2Input.addEventListener("input", numberEntered, false);

let b2 = document.querySelector("#b2"); // guess 2 b
b2Input.addEventListener("input", numberEntered, false);

//guess3
let r3 = document.querySelector("#r3"); // guess 3 r
r3Input.addEventListener("input", numberEntered, false);

let g3 = document.querySelector("#g3"); // guess 3 g
g3Input.addEventListener("input", numberEntered, false);

let b3 = document.querySelector("#b3"); // guess 3 b
b3Input.addEventListener("input", numberEntered, false);

//guess4
let r4 = document.querySelector("#r4"); // guess 4 r
r4Input.addEventListener("input", numberEntered, false);

let g4 = document.querySelector("#g4"); // guess 4 g
g4Input.addEventListener("input", numberEntered, false);

let b4 = document.querySelector("#b4"); // guess 4 b
b4Input.addEventListener("input", numberEntered, false);

//guess5
let r5 = document.querySelector("#r5"); // guess 5 r
r5Input.addEventListener("input", numberEntered, false);

let g5 = document.querySelector("#g5"); // guess 5 g
g5Input.addEventListener("input", numberEntered, false);

let b5 = document.querySelector("#b5"); // guess 5 b
b5Input.addEventListener("input", numberEntered, false);

//guess6
let r6 = document.querySelector("#r6"); // guess 6 r
r6Input.addEventListener("input", numberEntered, false);

let g6 = document.querySelector("#g6"); // guess 6 g
g6Input.addEventListener("input", numberEntered, false);

let b6 = document.querySelector("#b6"); // guess 6 b
b6Input.addEventListener("input", numberEntered, false);

let message = "";
function run() {
	selectRGB();
	answerColor = "rgb(" + answerValues[0] + ", " + answerValues[1] + ", " + answerValues[2] + ")";
	generateCircle("black", "black", "black", "black", "black");
	turncounter = 1;
	document.getElementById("message").innerHTML += answerColor + "<br>";
}

function checkRGB() { //checks how accurate rgb is
	if(turnCounter = 1) { //determines what input should be checked
		document.getElementById("message").innerHTML += "r: " + checkR(r1) + "<br>"; //checks r guess
		document.getElementById("message").innerHTML += "g: " + checkG(g1) + "<br>"; //checks g guess
		document.getElementById("message").innerHTML += "b: " + checkB(b1) + "<br>"; //checks b guess
	}
	else if(turnCounter = 2) {
		checkR(r2);
		checkG(g2);
		checkB(b2);
	}
	else if(turnCounter = 3) {
		checkR(r3);
		checkG(g3);
		checkB(b3);
	}
	else if(turnCounter = 4) {
		checkR(r4);
		checkG(g4);
		checkB(b4);
	}
	else if(turnCounter = 5) {
		checkR(r5);
		checkG(g5);
		checkB(b5);
	}
	else if(turnCounter = 6) {
		checkR(r6);
		checkG(g6);
		checkB(b6);
	}
	turnCounter++; //next turn
}

function checkR(rVal) { //checks r value
	document.getElementById("message").innerHTML += rVal + ", " + answerValues[0];
	if (Math.abs(rVal - answerValues[0]) == 0) //if guess is exact --> yellow
		return "yellow";
	if (Math.abs(rVal - answerValues[0]) <= 5) //if guess is correct --> green
		return "green";
	if (Math.abs(rVal - answerValues[0]) <= 15) //if guess is rlly close --> dark red
		return "darkred";
	if (Math.abs(rVal - answerValues[0]) <= 25) //if guess is pretty close --> red
		return "red";
	if (Math.abs(rVal - answerValues[0]) <= 50) //if guess is close --> purple
		return "purple";
	if (Math.abs(rVal - answerValues[0]) <= 100) //if guess is far --> slateblue
		return "slateblue";
	if (Math.abs(rVal - answerValues[0]) <= 150) //if guess is pretty far --> blue
		return "blue";
	if (Math.abs(rVal - answerValues[0]) <= 200) //if guess is really far --> light blue
		return "lightblue";
	return "white"; //if guess is way off --> white
}

function checkG(gVal) { //checks g value
	if (Math.abs(gVal - answerValues[1]) == 0)
		return "yellow";
	if (Math.abs(gVal - answerValues[1]) <= 5)
		return "green";
	if (Math.abs(gVal - answerValues[1]) <= 15)
		return "darkred";
	if (Math.abs(gVal - answerValues[1]) <= 25)
		return "red";
	if (Math.abs(gVal - answerValues[1]) <= 50)
		return "purple";
	if (Math.abs(gVal - answerValues[1]) <= 100)
		return "slateblue";
	if (Math.abs(gVal - answerValues[1]) <= 150)
		return "blue";
	if (Math.abs(gVal - answerValues[1]) <= 200)
		return "lightblue";
	return "white";
}

function checkB(bVal) { //checks b value
	if (Math.abs(bVal - answerValues[2]) == 0)
		return "yellow";
	if (Math.abs(bVal - answerValues[2]) <= 5)
		return "green";
	if (Math.abs(bVal - answerValues[2]) <= 15)
		return "darkred";
	if (Math.abs(bVal - answerValues[2]) <= 25)
		return "red";
	if (Math.abs(bVal - answerValues[2]) <= 50)
		return "purple";
	if (Math.abs(bVal - answerValues[2]) <= 100)
		return "slateblue";
	if (Math.abs(bVal - answerValues[2]) <= 150)
		return "blue";
	if (Math.abs(bVal - answerValues[2]) <= 200)
		return "lightblue";
	return "white";
}

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
