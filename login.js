$(document).ready(function() {
	context = canvas.getContext("2d");

});

function login(){
    document.getElementById("first_window").style.display= "none";
    document.getElementById("login_window").style.display="block";
}

function checkInDatabase(user,pass){
    for( let i= 0, i< database.length, i++){
        if(database[i].name== user && database[i].password= pass){
            return true;
        }
    }
}
function checkUserExist(){
    if(checkInDatabase===true){
        document.getElementById("login_window").style.display= "none";
        document.getElementById("game_window").style.display="block";
    }
    else{
        alert("Invalid user or password. please try again")
    }
}




