// import {users} from './register.js';

$(document).ready(function() {
	context = canvas.getContext("2d");

});

function loginfunc(){
    document.getElementById("first_window").style.display= "none";
    document.getElementById("login_window").style.display="block";
}

function checkInDatabase(user,pass){
    for( let i= 0; i < users.length; i++){
        if(users[i].username=== user && users[i].password=== pass){
            return true;
        }
    }
}

function checkUserExist(){
    let inputUser = document.getElementById("username").value;
    let inputPass = document.getElementById("psw_login").value;

    if(checkInDatabase(inputUser,inputPass)){
        document.getElementById("login_window").style.display= "none";
        document.getElementById("game_window").style.display="block";
        Start();
    }
    else{
        alert("Invalid user or password. please try again");
    }
}



