var context;
var shape = new Object();
var board;
var score;
var pac_color;
var start_time;
var time_elapsed;
var interval;
// var upKey=39;
// var downKey=37;
// var rightKey=38;
// var leftkey=40;
var upKey;
var downKey;
var rightKey;
var leftkey;
var food_remain=50;
var color5Point;
var color15Poitnt;
var color25Point;
var timeGame;
var NumOfManster;


$(document).ready(function() {
	context = canvas.getContext("2d");
	//logo window
	initial();
	//game window
	//Start();
});
function initial() {
	// document.getElementById("logo").style.display = "block";
	// document.getElementById("register").style.display = "block";
	// document.getElementById("login").style.display = "block";
	switchToWelcome();
}

function Start() {
	//initial score&time
	// document.getElementById("game_window").style.display = "block";
	board = new Array();
	score = 0;
	pac_color = "yellow";
	var cnt = 100;//num of cells
	// var food_remain = 50;//num of sweets on board
	var pacman_remain = 1;//num of pacmans?
	start_time = new Date();
	for (var i = 0; i < 10; i++) {
		board[i] = new Array();
		//put obstacles in (i=3,j=3) and (i=3,j=4) and (i=3,j=5), (i=6,j=1) and (i=6,j=2)
		for (var j = 0; j < 10; j++) { //obstacles
			if (
				(i == 3 && j == 3) ||
				(i == 3 && j == 4) ||
				(i == 3 && j == 5) ||
				(i == 6 && j == 1) ||
				(i == 6 && j == 2)
			) {
				board[i][j] = 4;
			} else {
				var randomNum = Math.random();
				if (randomNum <= (1.0 * food_remain) / cnt) { // put sweets
					food_remain--;
					board[i][j] = 1;
				} else if (randomNum < (1.0 * (pacman_remain + food_remain)) / cnt) {
					shape.i = i;
					shape.j = j;
					pacman_remain--;
					board[i][j] = 2;
				} else {
					board[i][j] = 0;
				}
				cnt--;
			}
		}
	}
	while (food_remain > 0) {//all remain sweets
		var emptyCell = findRandomEmptyCell(board);
		board[emptyCell[0]][emptyCell[1]] = 1;
		food_remain--;
	}
	//click
	keysDown = {};
	addEventListener(
		"keydown",
		function(e) {
			keysDown[e.keyCode] = true;
		},
		false
	);
	addEventListener(
		"keyup",
		function(e) {
			keysDown[e.keyCode] = false;
		},
		false
	);
	interval = setInterval(UpdatePosition, 250);
}
// get empty cell
function findRandomEmptyCell(board) {
	var i = Math.floor(Math.random() * 9 + 1);
	var j = Math.floor(Math.random() * 9 + 1);
	while (board[i][j] != 0) {
		i = Math.floor(Math.random() * 9 + 1);
		j = Math.floor(Math.random() * 9 + 1);
	}
	return [i, j];
}

function GetKeyPressed() {
	if (keysDown[upKey]) {
		return 3;
	}
	if (keysDown[downKey]) {
		return 4;
	}
	if (keysDown[leftkey]) {
		return 1;
	}
	if (keysDown[rightKey]) {
		return 2;
	}
}

function Draw() {
	canvas.width = canvas.width; //clean board
	lblScore.value = score;
	lblTime.value = time_elapsed;
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 10; j++) {
			var center = new Object();
			center.x = i * 60 + 30;
			center.y = j * 60 + 30;
			if (board[i][j] == 2) { // packman
				
				// var direction = GetKeyPressed();
				// var center_x = center.x;
				// var center_y = center.y;
				// DrawPack(direction,center_x,center_y);
				//before 
				context.beginPath();
				context.arc(center.x, center.y, 30, 0.15 * Math.PI, 1.85 * Math.PI); // half circle
				context.lineTo(center.x, center.y);
				context.fillStyle = pac_color; //color
				context.fill();
				context.beginPath();
				context.arc(center.x + 5, center.y - 15, 5, 0, 2 * Math.PI); // circle - eye
				context.fillStyle = "black"; //color
				context.fill();
			} else if (board[i][j] == 1) { // sweets
				context.beginPath();
				context.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
				context.fillStyle = "black"; //color
				context.fill();
			} else if (board[i][j] == 4) { // walls
				context.beginPath();
				context.rect(center.x - 30, center.y - 30, 60, 60);
				context.fillStyle = "grey"; //color
				context.fill();
			}
		}
	}
}
function DrawPack(direction,center_x,center_y)
{
	if (direction == 2){//right
		DrawBody(0.15,1.85,center_x,center_y);
		DrawEye(15,5,0,2,center_x,center_y);
	}
	if(direction == 1) //left
	{
		DrawBody(1.35,0.65,center_x,center_y);
		DrawEye(15,5,0,2,center_x,center_y);
	}
	if(direction == 3) //up
	{
		DrawBody(0.65,0.15,center_x,center_y)
		DrawEye(15,5,0,2,center_x,center_y)
	}
	if(direction == 4) //down
	{
		DrawBody(1.85,1.35,center_x,center_y)
		DrawEye(15,5,0,2,center_x,center_y)
	}
	else{ // _default right
		DrawBody(0.15,1.85,center_x,center_y)
		DrawEye(15,5,0,2,center_x,center_y)
	}
		
	
}
function DrawBody(startAngle,endAngle,center_x,center_y){
	context.beginPath();
	context.arc(center_x, center_y, 30, startAngle * Math.PI, endAngle * Math.PI); // half circle
	context.lineTo(center_x, center_y);
	context.fillStyle = pac_color; //color
	context.fill();
	

}
function DrawEye(centerX,centerY,startAngle,endAngle,center_x,center_y){
	context.beginPath();
	context.arc(center_x + centerX, center_y - centerY,5,startAngle, endAngle * Math.PI); // circle - eye
	context.fillStyle = "black"; //color
	context.fill();

}

function UpdatePosition() {
	board[shape.i][shape.j] = 0;
	var x = GetKeyPressed();
	if (x == 1) {
		if (shape.j > 0 && board[shape.i][shape.j - 1] != 4) { //left
			shape.j--;
		}
	}
	if (x == 2) {
		if (shape.j < 9 && board[shape.i][shape.j + 1] != 4) { ////right
			shape.j++;
		}
	}
	if (x == 3) {
		if (shape.i > 0 && board[shape.i - 1][shape.j] != 4) { //up
			shape.i--;
		}
	}
	if (x == 4) {
		if (shape.i < 9 && board[shape.i + 1][shape.j] != 4) {//down
			shape.i++;
		}
	}
	if (board[shape.i][shape.j] == 1) {
		score++;
	}
	board[shape.i][shape.j] = 2;
	var currentTime = new Date();
	time_elapsed = (currentTime - start_time) / 1000;
	if (score >= 20 && time_elapsed <= 10) {
		pac_color = "green";
	}
	if (score == 50) {
		window.clearInterval(interval);
		window.alert("Game completed");
	} else {
		Draw();
	}
}
