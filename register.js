var users =[{
    username:"k",
    password:"k ",
    fullname:"k k",
    email:"k@gmail.com",
    birthday:"14/01/1993"
}];


$(document).ready(function() {
	context = canvas.getContext("2d");

	
});
function register(){
    document.getElementById("first_window").style.display = "none";
    document.getElementById("register_window").style.display="block";}
    
function addUser(){
    let name = document.getElementById("name").value;
    //check if name exist
    const found = users.some(e1=>e1.username === name);
    if (found){
        "name already exist, try to login, or try another name"
    }
    let password = document.getElementById("psw").value;

    let name = document.getElementById("name");
    let name = document.getElementById("name");
    let name = document.getElementById("name");

}  



// var value = $("#password_reg").val();
// $.validator.addMethod("checkdigit", function(value) {
//   return /[0-9]/.test(value);
// });
// $.validator.addMethod("checkletter", function(value) {
//   return /[a-z]/.test(value);
// });
$("#register_window").on("pageinit",function(){
    $("registerform").validate({
    rules: 
    {
        password:
        {
            required: true,
            minlength:6,
            // checkdigit:true,
            // checkletter:true,

        }
       
    },       
    messages:{
        password:
        {
            // checkdigit:"Need at least 1 digit",
            // checkletter:"Need at least 1 letter",
            minlength:"Your password must be at least 6 characters long"
        }
    }  
    });
});
