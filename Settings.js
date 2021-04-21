
function chooseKeys(){
    downKey = asciiNum(document.getElementById("down").value);
    upKey= asciiNum(document.getElementById("up").value);
    leftkey= asciiNum(document.getElementById("left").value);
    rightKey = asciiNum(document.getElementById("right").value);
    alert("after");
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
    }
    else{
        alert("insert between 50-90"); 
    }
}

function chooseColorBall(){
    color5Point = document.getElementById("color5").value;
    color15Poitnt = document.getElementById("color15").value;
    color25Point = document.getElementById("color25").value;
    alert("good color")
}

function chooseTimePlay(){
    let timeInput= document.getElementById("timeGame").value;
    if (timeInput>=60){
        timeGame = timeInput; 
    }
    else{
        alert("minimum 60 Seconds");
    }
     
}
    

function chooseNumOfmanster(){
    let mansterInput = document.getElementById("numOfManster").value;
    if(mansterInput<=4 && mansterInput>=1){
        NumOfManster= mansterInput;
    }
    else{
        alert("insert between 1-4");
    }
}

// function randomDetails(){

// }