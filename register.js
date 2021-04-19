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
function registerButton(){
    document.getElementById("first_window").style.display = "none";
    document.getElementById("register_window").style.display="block";}

function addUser()
{
    let nameValid = false, pswValid = false, fullnameValid = false, emailValid = false;

    let nameF = document.getElementById("name").value;
    //check if name exist
    const found = users.some(e1=>e1.username === nameF);
    if (found){
        alert("name already exist, try to login, or try another name")
        if(confirm('Login')){
            loginfunc();
        }
        else if(confirm('try another name'))
            registerButton();
    }
    else{
        nameValid = true;

    }
    
    let passwordF = document.getElementById("psw").value;
    //check pass include numbers&letters + min length 6
    var minLength = 6, upper = /[A-Z]/, lower = /[a-z]/, digit = /[0-9]/;
        //var include = /^(?=.*[0-9])(?=.*[A-Za-z].{6,}$/;
    const validPsw = (passwordF.length>=minLength && (lower.test(passwordF) || upper.test(passwordF)) && digit.test(passwordF));
    if(!validPsw){
        alert("password must include letter and number and at least 6 characters")
    }
    else{
        pswValid = true;

    }
    
    let fullnameF = document.getElementById("fullname").value;
    if(digit.test(fullnameF)){
        alert("full name include only letters")}
    else{
        fullnameValid = true;
    }
    
    let emailF = document.getElementById("email").value;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(! re.test(String(emailF).toLowerCase())){
        alert("email address is invalid")
    }
    else{
        emailValid = true;
    }
    let bdF = document.getElementById("birthday").value;
    //add new user
    if(nameValid == true, pswValid == true, fullnameValid == true, emailValid == true)
    {
        users.push({username: nameF, password: passwordF,
                    fullname: fullnameF,email: emailF,birthday: bdF});
                    

    }
    else{ // back to first window
        document.getElementById("first_window").style.display = "block";
        document.getElementById("register_window").style.display="none";}

    }


}  



// var value = $("#password_reg").val();
// $.validator.addMethod("checkdigit", function(value) {
//   return /[0-9]/.test(value);
// });
// $.validator.addMethod("checkletter", function(value) {
//   return /[a-z]/.test(value);
// });
// $("#register_window").on("pageinit",function(){
//     $("registerform").validate({
//     rules: 
//     {
//         password:
//         {
//             required: true,
//             minlength:6,
//             // checkdigit:true,
//             // checkletter:true,

//         }
       
//     },       
//     messages:{
//         password:
//         {
//             // checkdigit:"Need at least 1 digit",
//             // checkletter:"Need at least 1 letter",
//             minlength:"Your password must be at least 6 characters long"
//         }
//     }  
//     });
// });
