// var imported = document.createElement('script');
// imported.src = '/path/to/imported/script';
// document.head.appendChild(imported);

$(document).ready(function() {
	context = canvas.getContext("2d");

});

function login(){
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
    // var inputUser = document.getElementById("username").value;
    // var inputPass = document.getElementById("psw_login").value;

    // if(checkInDatabase(inputUser,inputPass)===true){
    if(checkInDatabase(5,5)===true){
        document.getElementById("login_window").style.display= "none";
        document.getElementById("game_window").style.display="block";
    }
    else{
        alert("Invalid user or password. please try again")
    }
}




