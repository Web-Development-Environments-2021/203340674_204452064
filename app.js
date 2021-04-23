var context;
var shape = new Object();
var monsterList =[];
var board;
var score;
var lifeGame;
var pac_color;
var start_time;
var timeGame;
var time_elapsed;
var time_remain = timeGame;
var interval;
var intervalMonster;
var upKey=38;
var downKey=40;
var rightKey=39;
var leftkey=37;
var food_remain;
var food5;
var food15;
var food25;
var color5Point;
var color15Point;
var color25Point;
var numOfManster;
var pizza;
var direction;
var start = 0.15;
var end = 1.85;
var eyeX = 5;
var eyeY = -15;
var monsterOnsweets=[false,false,false,false];
var soundGame;

$(document).ready(function() {
	context = canvas.getContext("2d");
	//logo window
	initial();
	//game window
	//Start();
});
function initial() {
	switchToWelcome();
}

function newGame(){
	updateForNewGame();
	// soundGame.stop();
	switchTosettings();	
}

function EmptyCellForMonster(){
	var cellsOfMonsters = [] //location of monster
	var corners=[[0,0],[0,9],[9,0],[9,9]]; // all corners
	var monstersRemain = numOfManster;
	var ind=0;
	while(monstersRemain!=0){
		cornerNum = Math.floor(Math.random() * monstersRemain); // choose random corner-> 0-3,0-2....
		var removedCorner = corners[cornerNum];
		cellsOfMonsters.push(removedCorner) // add corner to a new list
		corners.splice(cornerNum,1); // remove the corner from list
		monstersRemain --;
		var newMonster = new Object();
		newMonster.i = removedCorner[0];
		newMonster.j = removedCorner[1];
		monsterList[ind] = newMonster;
		ind++;
	}
	
	return cellsOfMonsters;
}
function checkIfMonsterCell(monsterLoc,i,j){
	for (var ind = 0; ind <monsterLoc.length;ind++){
		if (monsterLoc[ind][0] == i && monsterLoc[ind][1] == j){
			return true;
		}

	}
	return false;
}
function removeMonsterFromLastRound(){
	var row;
	var col;
	for (var ind = 0; ind < monsterList.length; ind++)
	{
		row = monsterList[ind].i;
		col = monsterList[ind].j;
		if (monsterOnsweets[ind])
		{
			board[row][col] = 1;
		}
		else
		{
			board[row][col]=0;
		}


	}
		}

function Start() {
	//initial score&time	
	board = new Array();
	// soundGame = new sound("test.mp3");
	// soundGame.play();
	lifeGame=5;
	score = 0;
	pac_color = "yellow";
	var cnt = 100;//num of cells
	var pacman_remain = 1;//num of pacmans?
	start_time = new Date();
	monstersLoc = EmptyCellForMonster()
	for (var i = 0; i < 10; i++) {
		board[i] = new Array();
		//put obstacles in (i=3,j=3) and (i=3,j=4) and (i=3,j=5), (i=6,j=1) and (i=6,j=2)
		for (var j = 0; j < 10; j++) { //obstacles

			if(checkIfMonsterCell(monstersLoc,i,j)){
				board[i][j] = 6;
			}
			else if  (

				(i == 3 && j == 3) ||
				(i == 3 && j == 4) ||
				(i == 3 && j == 5) ||
				(i == 6 && j == 1) ||
				(i == 6 && j == 2)
			) {
				board[i][j] = 4;
			 }
			else if(i==4 && j==4){
				board[i][j] = 7
			} 
			else {
				
				var randomNum = Math.random();
				// if (randomNum <= (1.0 * food_remain) / cnt) { // put sweets
				// 	food_remain--;
				// 	board[i][j] = 1;
				// }
				if (randomNum <= (1.0 * food5) / cnt) { // put sweets
					board[i][j] = 1;
					food5--;
					food_remain--;
				}
				else if(randomNum <= (1.0 * food15) / cnt){
					board[i][j] = 3;
					food15--;
					food_remain--;
				} 
				else if(randomNum <= (1.0 * food25) / cnt){
					food25--;
					food_remain--;
					board[i][j] = 5;
				}
				else if ((randomNum < (1.0 * (pacman_remain + food_remain)) / cnt) && pacman_remain>0) {
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
	setFoodRemaine();
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

	intervalMonster =setInterval(UpdatePositionMonsters,250);
}


function setFoodRemaine(){
	//food_remain= food_remain-food5-food25-food15;
	while (food_remain > 0) {//all remain sweets
		var emptyCell = findRandomEmptyCell(board);
		if(food5>0){
			board[emptyCell[0]][emptyCell[1]] = 1;
			food5--;
		}
		else if(food15>0){
			board[emptyCell[0]][emptyCell[1]] = 3;
			food15--;
		}
		else if(food25>0){
			board[emptyCell[0]][emptyCell[1]] = 5;
			food25--;
		}
		food_remain--;
	}
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
	if (keysDown[leftkey]) {
		return 1;
	}
	
	if (keysDown[upKey]) {
		return 2;
	}
	if (keysDown[rightKey]) {
		return 3;
	}
	if (keysDown[downKey]) {
		return 4;
	}
	
	
}

function Draw() {
	canvas.width = canvas.width; //clean board
	lblScore.value = score;
	lblPlayerName.value = document.getElementById("username").value;;
	lblLife.value = lifeGame;
	//lblTime.value = time_remain;
	lblTime.value = time_remain	
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 10; j++) {
			var center = new Object();
			center.x = i * 60 + 30;
			center.y = j * 60 + 30;
			
			if (board[i][j] == 2) { // packman	
				var center_x = center.x;
				var center_y = center.y;
				//DrawPack(direction,center_x,center_y);
				//before 
				
				if(direction == 2) //up
				{
					DrawBody(1.7,1.3,center_x,center_y)
					DrawEye(14,2,center_x,center_y);

				}
				else if(direction == 1){//left
					DrawBody(1.2,0.85,center_x,center_y)
					DrawEye(5,-15,center_x,center_y)

				}
				else if(direction==4){//down
					DrawBody(0.6,0.4,center_x,center_y);
					DrawEye(13,2,center_x,center_y);

				}
				else if(direction==3){//right
					DrawBody(0.15,1.85,center_x,center_y)
					DrawEye(5,-15,center_x,center_y)
				}
				else{
					DrawBody(start,end,center_x,center_y);
					DrawEye(eyeX,eyeY,center_x,center_y);				
				}
			} 
			else if(board[i][j]==7){ //pizza
				context.beginPath();
				context.arc(center.x, center.y, 15, 0, 1.5 * Math.PI); // circle
				context.fillStyle = "black"; //color
				context.fill();
			}
			else if (board[i][j] == 1 || board[i][j]==3|| board[i][j]==5) { // sweets
				DrawDiffFood(board[i][j],center.x,center.y);
			
			} else if (board[i][j] == 4) { // walls
				context.beginPath();
				context.rect(center.x - 30, center.y - 30, 60, 60);
				context.fillStyle = "grey"; //color
				context.fill();
			}
			else if(board[i][j] == 6 ){ //monster
				context.beginPath();
				context.arc(center.x, center.y, 15, 0, 1.5 * Math.PI); // circle
				context.fillStyle = "red"; //color
				context.fill();
			}
		}
	}
}

function DrawDiffFood(num,x,y){
	context.beginPath();
	context.arc(x, y, 15, 0, 2 * Math.PI); // circle
	if(num==1){
		context.fillStyle = color5Point;
	}
	else if(num==3){
		context.fillStyle = color15Point;
	}
	else if(num===5){
		context.fillStyle = color25Point;
	}
	context.fill();
}

function DrawBody(startAngle,endAngle,center_x,center_y){
	start = startAngle;
	end = endAngle;
	context.beginPath();
	context.arc(center_x, center_y, 30, startAngle * Math.PI, endAngle * Math.PI); // half circle
	context.lineTo(center_x, center_y);
	context.fillStyle = pac_color; //color
	context.fill();
	

}
function DrawEye(locX,locY,center_x,center_y){
	eyeX = locX;
	eyeY = locY
	context.beginPath();
	context.arc(center_x + locX, center_y + locY,5,0, 2 * Math.PI); // circle - eye
	context.fillStyle = "black"; //color
	context.fill();

}

function UpdatePosition() {
	board[shape.i][shape.j] = 0;
	var x = GetKeyPressed();
	direction = x;

	if (x == 2) {
		if (shape.j > 0 && board[shape.i][shape.j - 1] != 4) { //left
			shape.j--;
		}
	}
	if (x == 1) {
		if (shape.i > 0 && board[shape.i - 1][shape.j] != 4) { //up
			shape.i--;
		}
	}
	if (x == 4) {
		if (shape.j < 9 && board[shape.i][shape.j + 1] != 4) { ////right
			shape.j++;
		}
	}
	
	if (x == 3) {
		if (shape.i < 9 && board[shape.i + 1][shape.j] != 4) {//down
			shape.i++;
		}
	}
	if (board[shape.i][shape.j] == 1) {
		score= score+5;
	}
	if (board[shape.i][shape.j] == 3) {
		score= score+15;
	}
	if (board[shape.i][shape.j] ==5) {
		score= score+25;
	}
	//pac on monster
	if (board[shape.i][shape.j] == 6) 
	{
		
		if (lifeGame != 0) 
		{
			lifeGame = lifeGame -1;
			if(score-10 < 0)
			{
				score = 0;
			}
			else
			{
				score = score - 10;
			}
			//update monster from start
			removeMonsterFromLastRound()
			monstersLoc = EmptyCellForMonster();
			locateMonster(monstersLoc);

			shape.i = findRandomEmptyCell(board)[0] ;
			shape.j = findRandomEmptyCell(board)[1] ;

					
		}
		else //live is over
		{
			alert("game over");
			window.clearInterval(intervalMonster);
			window.clearInterval(interval);
		}
	}
	board[shape.i][shape.j] = 2;
	var currentTime = new Date();
	time_elapsed = (currentTime - start_time) / 1000;
	time_remain = timeGame - time_elapsed;
	if( time_remain <= 0){
		window.clearInterval(intervalMonster)
		window.clearInterval(interval);
		window.alert("TTTTTime");
	}
	if (score >= 80 && time_elapsed <= 10) {
		pac_color = "green";
	}
	if (score == 100) {
		window.clearInterval(intervalMonster)
		window.clearInterval(interval);
		window.alert("Game completed");
	} else {
		

		Draw();	
	}
}
function locateMonster(monsterLoc)
{
	monsterOnsweets=[false,false,false,false];
	for (var mon = 0; mon < monsterLoc.length; mon++)
	{
		var i = monsterLoc[mon][0];
		var j = monsterLoc[mon][1];
		board[i][j] = 6;
	}
}
// this function check if monster can move to one from 4 direction
// cant move when exist wall or if exist other monster
function UpdatePositionMonsters()
{
	var pacX = shape.i;
	var pacY = shape.j;
	var monX;
	var monY;
	var minDis = Math.sqrt(9*9 + 9*9);
	var minDir;
	var currDis;
	
	for (var ind = 0; ind < monsterList.length; ind++)
	{
		var row = monsterList[ind].i;
		var col = monsterList[ind].j;
		minDis = Math.sqrt(9*9 + 9*9);
		minDir = 5;
		if(col > 0 && board[row][col - 1] != 4) //no wall in left
		{
			if(board[row][col - 1] != 6) // no monster in left
			{
				monX = row;
				monY = col-1
				currDis = Math.sqrt(Math.pow(monX - pacX,2) + Math.pow(monY - pacY,2));
				if(currDis<=minDis)
				{
					minDis = currDis;
					minDir = 1
				}
			}
		}
		if(row > 0 && board[row - 1][col] != 4) // no walls up 
		{
			if(board[row-1][col] != 6) // no monster up
			{
				monX = row - 1;
				monY = col;
				currDis = Math.sqrt(Math.pow(monX - pacX,2) + Math.pow(monY - pacY,2));
				if(currDis<=minDis)
				{
					minDis = currDis;
					minDir = 2
				}			
			}
		}
		if(col < 9 && board[row][col + 1] != 4)//no walls right 
		{
			if(board[row][col+1] != 6) // no monster right
			{
				monX = row;
				monY = col+1;
				currDis = Math.sqrt(Math.pow(monX - pacX,2) + Math.pow(monY - pacY,2));
				if(currDis<=minDis)
				{
					minDis = currDis;
					minDir = 3
				}			

			}
		}		
		
		if (row < 9 && board[row + 1][col] != 4) //no walls down
		{	
			if(board[row+1][col] != 6) // no monster down
			{
				monX = row+1;
				monY = col;
				currDis = Math.sqrt(Math.pow(monX - pacX,2) + Math.pow(monY - pacY,2));
				if(currDis<=minDis)
				{
					minDis = currDis;
					minDir = 4
				}			
			}
		}
		
		
		if(monsterOnsweets[ind]){ // monster was on sweet and need to return the sweet
			board[row][col]=1;
		}
		else{board[row][col]=0;} //empty call
		
		if(minDir==1)
		{
			if(board[row][col-1] == 1){
				monsterOnsweets[ind] = true;
			}
			else{//wasnt sweets before
				monsterOnsweets[ind] =false;}
			monsterList[ind].j--;
			
		}
		else if(minDir==2)
		{
			if(board[row-1][col] == 1){
				monsterOnsweets[ind] = true;
			}
			else{//wasnt sweets before
				monsterOnsweets[ind] =false;}
			monsterList[ind].i--;
			
		}
		else if(minDir==3)
		{
			if(board[row][col+1] == 1){
				monsterOnsweets[ind] = true;
			}
			else{//wasnt sweets before
				monsterOnsweets[ind] =false;}
			monsterList[ind].j++;
			
		}
		if (minDir == 4)
		{
			if(board[row+1][col] == 1)
			{
				monsterOnsweets[ind] = true;
			}
			else{//wasnt sweets before
				monsterOnsweets[ind] =false;}
			monsterList[ind].i++;
			
		}
		
		row = monsterList[ind].i;
		col = monsterList[ind].j;
		board[row][col] = 6;
		
	}
}

function UpdatePostionpizza(){
	
}

