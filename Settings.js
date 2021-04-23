
function settings(){
    chooseKeys();
    chooseBalls();
    chooseColorBall();
    chooseTimePlay();
    chooseNumOfmanster();
    switchToGame();
}

function chooseKeys(){
    downKey = asciiNum(document.getElementById("down").value);
    upKey= asciiNum(document.getElementById("up").value);
    leftkey= asciiNum(document.getElementById("left").value);
    rightKey = asciiNum(document.getElementById("right").value);
}

function asciiNum(num){
    let key= num.charCodeAt(0);
    if(key>90){
        key= key-32;
    }
    return key;
}

function chooseBalls(){
    let foodInput = document.getElementById("ballsToEat").value;
    if(foodInput>=50 && foodInput<=90){
        food_remain= foodInput;
        kindOfFood();
    }
    else{
        alert("insert between 50-90"); 
    }
}

function kindOfFood(){
    food5 = Math.round(food_remain*60/100);
    alert(food5);
    food15= Math.round(food_remain*30/100);
    alert(food15);
    food25 = food_remain -food5-food15;
    alert(food25);

}


function chooseColorBall(){
    color5Point = document.getElementById("color5").value;
    color15Point = document.getElementById("color15").value;
    color25Point = document.getElementById("color25").value;
    alert("good color")
}

function chooseTimePlay(){
    let timeInput= document.getElementById("timeForGame").value;
    if (timeInput>=60){
        timeGame = timeInput; 
    }
    else{
        alert("minimum 60 Seconds");
    } 
}
  

function chooseNumOfmanster(){
    alert("befor");
    let mansterInput = document.getElementById("numOfMansterIn").value;
    if(mansterInput<=4 && mansterInput>=1){
        numOfManster= mansterInput;
        alert("after");
    }
    else{
        alert("insert between 1-4");
    }
}

function randomSettings(){
    food_remain = Math.floor(Math.random()*(90-50))+50;
    kindOfFood();
    timeGame= Math.floor(Math.random()*100)+60;
    numOfManster = Math.floor(Math.random()*(4-1))+1;
    color5Point = getRandomColor();
    color15Point = getRandomColor();
    color25Point = getRandomColor();
    switchToGame();
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

