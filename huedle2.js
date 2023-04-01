let answer1Values = [];
let answer2Values = [];
let answer3Values = [];

let answer1Color = "";
let answer2Color = "";
let answer3Color = "";

let guessColor1 = "black";
let guessColor2 = "black";
let guessColor3 = "black";
let guessColor4 = "black";
let guessColor5 = "black";
let guessColor6 = "black";
let guessColor7 = "black";
let guessColor8 = "black";
let guessColor9 = "black";
let guessColor10 = "black";

function run() {
	selectRGB(); //selects answer colors
	answer1Color = "rgb(" + answer1Values[0] + ", " + answer1Values[1] + ", " + answer1Values[2] + ")"; //prints the rgb values for answer1	
	answer2Color = "rgb(" + answer2Values[0] + ", " + answer2Values[1] + ", " + answer2Values[2] + ")"; //prints the rgb values for answer2
	answer3Color = "rgb(" + answer3Values[0] + ", " + answer3Values[1] + ", " + answer3Values[2] + ")"; //prints the rgb values for answer3	
	generateCircle(guessColor1, guessColor2, guessColor3, guessColor4, guessColor5, guessColor6, guessColor7, guessColor8, guessColor9, guessColor10); //initializes circle values to all black
	//document.getElementById("message").innerHTML += answerColor + " turn " + turnCounter + "<br>";
}

function selectRGB() {
	answer1Values[0] = Math.floor(Math.random() * 250) + 5;
	answer1Values[1] = Math.floor(Math.random() * 250) + 5;
	answer1Values[2] = Math.floor(Math.random() * 250) + 5;
	
	answer2Values[0] = Math.floor(Math.random() * 250) + 5;
	answer2Values[1] = Math.floor(Math.random() * 250) + 5;
	answer2Values[2] = Math.floor(Math.random() * 250) + 5;	
	
	answer3Values[0] = Math.floor(Math.random() * 250) + 5;
	answer3Values[1] = Math.floor(Math.random() * 250) + 5;
	answer3Values[2] = Math.floor(Math.random() * 250) + 5;		
}

function generateCircle(s1, s2, s3, s4, s5, s6, s7, s8, s9, s10) {
	var c = document.getElementById("circleCanvas");
	var ctx = c.getContext("2d");
	ctx.lineWidth = 10;
	ctx.strokeStyle = "grey";
	
	//circle1
	//outer circle
	ctx.beginPath();
	ctx.arc(235, 300, 225, 0, 2 * Math.PI, true);
	ctx.stroke(); //https://www.w3schools.com/tags/canvas_arc.asp
	ctx.moveTo(375, 330);
	ctx.closePath();
	ctx.fillStyle = 'black';
	ctx.fill(); //https://www.html5canvastutorials.com/tutorials/html5-canvas-shape-fill/
	
	/*//sector 1
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 325, 0, -1/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = s1;
	ctx.fill();
	
	//sector 2
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 325, -1/5 * Math.PI, -2/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = s2;
	ctx.fill();
	
	//sector 3
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 325, -2/5 * Math.PI, -3/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = s3;
	ctx.fill();
	
	//sector 4
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 325, -3/5 * Math.PI, -4/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = s4;
	ctx.fill();
	
	//sector 5 
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 325, -4/5 * Math.PI, -5/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = s5;
	ctx.fill();
	
	//sector 6
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 325, -5/5 * Math.PI, -6/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = s6;
	ctx.fill();
	
	//sector 7
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 325, -6/5 * Math.PI, -7/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = s7;
	ctx.fill();
	
	//sector 8
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 325, -7/5 * Math.PI, -8/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = s8;
	ctx.fill();
	
	//sector 9 
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 325, -8/5 * Math.PI, -9/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = s9;
	ctx.fill();
	
	//sector 10
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 325, -9/5 * Math.PI, -10/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = s10;
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
	ctx.fillStyle = answer1Color;
	ctx.fill();*/
	
	//circle2
	//outer circle
	ctx.beginPath();
	ctx.arc(715, 300, 225, 0, 2 * Math.PI, true);
	ctx.stroke(); //https://www.w3schools.com/tags/canvas_arc.asp
	ctx.moveTo(375, 1100);
	ctx.closePath();
	ctx.fillStyle = 'black';
	ctx.fill(); //https://www.html5canvastutorials.com/tutorials/html5-canvas-shape-fill/
	
	/*//sector 1
	ctx.beginPath();
	ctx.moveTo(375, 1000);
	ctx.arc(375, 1000, 325, 0, -1/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = s1;
	ctx.fill();
	
	//sector 2
	ctx.beginPath();
	ctx.moveTo(375, 700);
	ctx.arc(375, 700, 325, -1/5 * Math.PI, -2/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = s2;
	ctx.fill();
	
	//sector 3
	ctx.beginPath();
	ctx.moveTo(375, 700);
	ctx.arc(375, 330, 325, -2/5 * Math.PI, -3/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = s3;
	ctx.fill();
	
	//sector 4
	ctx.beginPath();
	ctx.moveTo(375, 700);
	ctx.arc(375, 700, 325, -3/5 * Math.PI, -4/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = s4;
	ctx.fill();
	
	//sector 5 
	ctx.beginPath();
	ctx.moveTo(375, 700);
	ctx.arc(375, 700, 325, -4/5 * Math.PI, -5/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = s5;
	ctx.fill();
	
	//sector 6
	ctx.beginPath();
	ctx.moveTo(375, 700);
	ctx.arc(375, 700, 325, -5/5 * Math.PI, -6/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = s6;
	ctx.fill();
	
	//sector 7
	ctx.beginPath();
	ctx.moveTo(375, 700);
	ctx.arc(375, 700, 325, -6/5 * Math.PI, -7/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = s7;
	ctx.fill();
	
	//sector 8
	ctx.beginPath();
	ctx.moveTo(375, 700);
	ctx.arc(375, 700, 325, -7/5 * Math.PI, -8/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = s8;
	ctx.fill();
	
	//sector 9 
	ctx.beginPath();
	ctx.moveTo(375, 700);
	ctx.arc(375, 700, 325, -8/5 * Math.PI, -9/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = s9;
	ctx.fill();
	
	//sector 10
	ctx.beginPath();
	ctx.moveTo(375, 700);
	ctx.arc(375, 700, 325, -9/5 * Math.PI, -10/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = s10;
	ctx.fill();
	
	//last line
	ctx.beginPath();
	ctx.lineWidth = 5;
	ctx.moveTo(375, 700);
	ctx.lineTo(700, 700);
	ctx.stroke();
	ctx.closePath();
	
	//inner circle
	ctx.beginPath();
	ctx.moveTo(375, 700);
	ctx.arc(375, 700, 150, 0, 2 * Math.PI);
	ctx.lineWidth = 10;
	ctx.stroke();
	ctx.fillStyle = answer2Color;
	ctx.fill();*/
	
	//circle3
	//outer circle
	ctx.beginPath();
	ctx.arc(1195, 300, 225, 0, 2 * Math.PI, true);
	ctx.stroke(); //https://www.w3schools.com/tags/canvas_arc.asp
	ctx.moveTo(375, 1870);
	ctx.closePath();
	ctx.fillStyle = 'black';
	ctx.fill(); //https://www.html5canvastutorials.com/tutorials/html5-canvas-shape-fill/
	
	/*//sector 1
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 325, 0, -1/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = s1;
	ctx.fill();
	
	//sector 2
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 325, -1/5 * Math.PI, -2/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = s2;
	ctx.fill();
	
	//sector 3
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 325, -2/5 * Math.PI, -3/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = s3;
	ctx.fill();
	
	//sector 4
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 325, -3/5 * Math.PI, -4/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = s4;
	ctx.fill();
	
	//sector 5 
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 325, -4/5 * Math.PI, -5/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = s5;
	ctx.fill();
	
	//sector 6
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 325, -5/5 * Math.PI, -6/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = s6;
	ctx.fill();
	
	//sector 7
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 325, -6/5 * Math.PI, -7/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = s7;
	ctx.fill();
	
	//sector 8
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 325, -7/5 * Math.PI, -8/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = s8;
	ctx.fill();
	
	//sector 9 
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 325, -8/5 * Math.PI, -9/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = s9;
	ctx.fill();
	
	//sector 10
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 325, -9/5 * Math.PI, -10/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = s10;
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
	ctx.fillStyle = answer3Color;
	ctx.fill();*/
}
