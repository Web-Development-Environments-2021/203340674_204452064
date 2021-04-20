
function chooseKeys() {
    alert(downInput);
    let downInput = document.getElementById("downKey").value.charCodeAt(0);
    let upInput = document.getElementById("upKey").value.charCodeAt(0);
    let leftInput = document.getElementById("leftKey").value.charCodeAt(0);
    let rightInput = document.getElementById("rightKey").value.charCodeAt(0);
    upKey= upInput;
    downKey= downInput;
    rightKey= rightInput;
    leftkey= leftInput;
};

// function chooseBalls(){
//     food_remain = document.getElementById("ballsToEat").value; 
// }

// function chooseColorBall(){
//     color5Point = document.getElementById("color5").value;
//     color15Poitnt = document.getElementById("color15").value;
//     color25Point = document.getElementById("color25").value;
// }

// function chooseTimePlay(){
//     let timeInput= document.getElementById("timeGame").value;
//     if (timeInput>=60){
//         timeGame = timeInput; 
//     }
//     else{
//         alert("minimum 60 Seconds");
//     }
     
// }
    

// function chooseNumOfmanster(){
//     let mansterInput = document.getElementById("numOfManster").value;
//     if(mansterInput<4 && mansterInput>1){
//         NumOfManster= mansterInput;
//     }
//     else{
//         alert("insert between 1-4");
//     }
// }

// function randomDetails(){

// }