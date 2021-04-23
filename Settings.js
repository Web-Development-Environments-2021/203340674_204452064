
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
    // alert(food5);
    food15= Math.round(food_remain*30/100);
    // alert(food15);
    food25 = food_remain -food5-food15;
    // alert(food25);

}

function chooseColorBall(){
    color5Point = document.getElementById("color5").value;
    color15Point = document.getElementById("color15").value;
    color25Point = document.getElementById("color25").value;
    alert("good color");
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
    let mansterInput = document.getElementById("numOfMansterIn").value;
    if(mansterInput<=4 && mansterInput>=1){
        numOfManster= mansterInput;
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
    alert(numOfManster+"manser");
    color5Point = getRandomColor();
    color15Point = getRandomColor();
    color25Point = getRandomColor();
    updateTextInRandom();
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

function updateTextInRandom(){
    
    up.value=upKey;
    down.value=leftkey;
    left.value=rightKey;
    right.value=rightKey
    ballsToEat.value =food_remain;
    color5.value=color5Point;
    color15.value= color15Point;
    color25.value= color25Point;
    timeForGame.value= timeGame;
    numOfMansterIn.value= numOfManster;
}

function readOnlyStettings(){
    document.getElementById("up").readOnly= true;
    document.getElementById("down").readOnly= true;
    document.getElementById("left").readOnly= true;
    document.getElementById("right").readOnly= true;
    document.getElementById("ballsToEat").readOnly= true;
    document.getElementById("color5").readOnly= true;
    document.getElementById("color15").readOnly= true;
    document.getElementById("color25").readOnly= true;
    document.getElementById("timeForGame").readOnly= true;
    document.getElementById("numOfMansterIn").readOnly= true;
    // document.getElementById("settings_window").children().readOnly= true;
}

function updateForNewGame(){
    $('#settingsbutton').show();
    $('#randombutton').show();
    $('#pForchooseKey').show();
    $('#pForchooseBalls').show();
    $('#pForchoosecolor').show();
    $('#pForchoosetime').show();
    $('#pForchoosemanster').show();
    document.getElementById("up").readOnly= false;
    document.getElementById("down").readOnly= false;
    document.getElementById("left").readOnly= false;
    document.getElementById("right").readOnly= false;
    document.getElementById("ballsToEat").readOnly= false;
    document.getElementById("color5").readOnly= false;
    document.getElementById("color15").readOnly= false;
    document.getElementById("color25").readOnly= false;
    document.getElementById("timeForGame").readOnly= false;
    document.getElementById("numOfMansterIn").readOnly= false;

}



