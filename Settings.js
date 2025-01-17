
const keys=[];

//Initializes all settings from the user
function settings(){
        // chooseKeys();
        chooseBalls();
        chooseColorBall();
        chooseTimePlay();
        chooseNumOfmanster();
        switchToGame();
}

//Initializes keys from the user to the game 
function ChoosekeyUp(){
    addEventListener('keydown',function upK(e){
        e.preventDefault();
        
        if(keys.includes(e.keyCode)){
            alert("Key used, select another key");
        }
        else{
            // if(keys[0] != undefined){
            //     keys[0] = undefined;
            // }
            
            keys[0] = e.keyCode;
            upKey = e.keyCode;
            up.value = e.key;
            document.getElementById("buttonDown").disabled= false;
        }
        removeEventListener('keydown', upK);
})}

function ChoosekeyDown(){
    addEventListener('keydown',function downK(e){
        e.preventDefault();
        if(keys.includes(e.keyCode)){
            alert("Key used, select another key");
        }
        else{
            // if(keys[1] != undefined){
            //     keys[1] = undefined;
            // }
            keys[1] = e.keyCode;
            downKey = e.keyCode;
            down.value = e.key;
            document.getElementById("buttonLeft").disabled= false;
        }
        removeEventListener('keydown', downK);
})}

function ChoosekeyLeft(){
    addEventListener('keydown',function leftK(e){
        e.preventDefault();
        if(keys.includes(e.keyCode)){
            alert("Key used, select another key");
        }
        else{
            // if(keys[2] != undefined){
            //     keys[2] = undefined;
            // }
            keys[2] = e.keyCode;
            leftkey = e.keyCode;
            left.value = e.key;
            document.getElementById("buttonRight").disabled= false;
        }
        removeEventListener('keydown', leftK);
})}

function ChoosekeyRight(){
    addEventListener('keydown',function rightK(e){
        e.preventDefault();
        if(keys.includes(e.keyCode)){
            alert("Key used, select another key");
        }
        else{
            // if(keys[3] != undefined){
            //     keys[3] = undefined;
            // }
            keys[3] = e.keyCode;
            rightKey = e.keyCode;
            right.value = e.key; 
        }
        removeEventListener('keydown', rightK);
})}


//Initializes number of balls/food for the game
function chooseBalls(){
    let foodInput = document.getElementById("ballsToEat").value;
    food_remain= foodInput;
    kindOfFood();
}

// Initializes the different of food/ball for the game
function kindOfFood(){
    food5 = Math.round(food_remain*60/100);
    // alert(food5);
    food15= Math.round(food_remain*30/100);
    // alert(food15);
    food25 = food_remain -food5-food15;
    // alert(food25);
}
// Initializes color for different ball/food
function chooseColorBall(){
    color5Point = document.getElementById("color5").value;
    color15Point = document.getElementById("color15").value;
    color25Point = document.getElementById("color25").value;
}

// Initializes time for the game
function chooseTimePlay(){
    let timeInput= document.getElementById("timeForGame").value;
    if (timeInput>=60){
        timeGame = timeInput; 
    }
    else{
        alert("minimum 60 Seconds");
    } 
}
  
// Initializes number of manster
function chooseNumOfmanster(){
    let mansterInput = document.getElementById("numOfMansterIn").value;
    if(mansterInput<=4 && mansterInput>=1){
        numOfManster= mansterInput;

    }
    else{
        alert("insert between 1-4");
    }
}

//Initializes all settings at random
function randomSettings(){
    upKey=38;
    downKey=40;
    rightKey=39;
    leftkey=37;
    food_remain = Math.floor(Math.random()*(90-50))+50;
    kindOfFood();
    timeGame= Math.floor(Math.random()*100)+60;
    numOfManster = Math.floor(Math.random()*(5-1))+1;
    // alert(numOfManster);
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

//Inserts values ​​into fields of text
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

// set the text read only
function readOnlyStettings(){
    // document.getElementById("up").readOnly= true;
    // document.getElementById("down").readOnly= true;
    // document.getElementById("left").readOnly= true;
    // document.getElementById("right").readOnly= true;
    document.getElementById("ballsToEat").readOnly= true;
    document.getElementById("color5").readOnly= true;
    document.getElementById("color15").readOnly= true;
    document.getElementById("color25").readOnly= true;
    document.getElementById("timeForGame").readOnly= true;
    document.getElementById("numOfMansterIn").readOnly= true;
    // document.getElementById("settings_window").children().readOnly= true;
}

//update the fields fot new game
function updateForNewGame(){
    orignalSettings();
    buttonAble();
    
}

function orignalSettings(){
    $('#settings_window').css({left:'28%',top:'20%'});
    $('#settingsbutton').show();
    $('#randombutton').show();
    $('#pForchooseKey').show();
    $('#press').show();
    // $('#pForchoosecolor').show();
    // $('#pForchoosetime').show();
    // $('#pForchoosemanster').show();
    $('#resetButton').show();
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

//music for game
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
  }

var counterForSetButtoml=0;

//check the value input of number of balls
function checkForBalls(){
    let tempNumFood = document.getElementById("ballsToEat").value;
    if(tempNumFood>=50 && tempNumFood <=90){
        counterForSetButtoml++;
    }
    if(counterForSetButtoml == 3){

        buttonAble();
    }
}

//check the value time input
function checkFortime(){
    let tempTime = document.getElementById("timeForGame").value;
    if(tempTime>=60){
        counterForSetButtoml++;
    }
    if(counterForSetButtoml == 3){
        buttonAble()
    }
}

//check the value manster input
function checkForManster(){
    let tempMunster = document.getElementById("numOfMansterIn").value;
    if(tempMunster>=1 && tempMunster<=4){
        counterForSetButtoml++;
    }
    if(counterForSetButtoml == 3){
        buttonAble()
    } 
}

//open the settings button if the value is correct
function buttonAble(){
    $('#settingsbutton').css({background:'#c9367a'});
    document.getElementById("settingsbutton").disabled =false;
}

//clear the text area 
function clearText(){
    document.getElementById("up").value = "";
    document.getElementById("down").value = "";
    document.getElementById("left").value = "";
    document.getElementById("right").value = "";
    document.getElementById("ballsToEat").value = "";
    document.getElementById("color5").value = "#rrggbb";
    document.getElementById("color15").value = "#rrggbb";
    document.getElementById("color25").value = "#rrggbb";
    document.getElementById("timeForGame").value = "";
    document.getElementById("numOfMansterIn").value = "";
    document.getElementById("settingsbutton").disabled=true;
    $('#settingsbutton').css({background:'gray'});
    counterForSetButtoml=0;
    orignalSettings();
}

// function chooseKeys(){
//     downKey = asciiNum(document.getElementById("down").value);
//     upKey= asciiNum(document.getElementById("up").value);
//     leftkey= asciiNum(document.getElementById("left").value);
//     rightKey = asciiNum(document.getElementById("right").value);
// }

// function asciiNum(num){
//     let key= num.charCodeAt(0);
//     if(key>90){
//         key= key-32;
//     }
//     return key;
// }

