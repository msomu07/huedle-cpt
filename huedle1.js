/*
Ideas!
 * make the text of the guesses change color depending on how close they are to the correct answer (abs difference)
 * when guess is within 5, it turns green
 * when guess is exact, it turns yellow!
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
let answerValues = []; //an array containing the r, g, and b values of the answer color
let answerColor = ""; //answer color

/*
let x1Input = document.querySelector("#x1"); // starting row
x1Input.addEventListener("input", numberEntered, false);

let y1Input = document.querySelector("#y1"); // starting column
y1Input.addEventListener("input", numberEntered, false);

let x2Input = document.querySelector("#x2"); // ending row
x2Input.addEventListener("input", numberEntered, false);

let y2Input = document.querySelector("#y2"); // ending column
y2Input.addEventListener("input", numberEntered, false);
*/

function run() {
	selectRGB();
	answerColor = "rgb(" + answerValues[0] + ", " + answerValues[1] + ", " + answerValues[2] + ")";
	generateCircle("black", "black", "black", "black", "black");
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
