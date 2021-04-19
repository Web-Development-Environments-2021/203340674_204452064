var users =[{
    username:"k",
    password:"k",
    fullname:"k k",
    email:"k@gmail.com",
    birthday:"14/01/1993"
}];


$(document).ready(function() {
	context = canvas.getContext("2d");

	
});
function register(){
    document.getElementById("first_window").style.display = "none";
    document.getElementById("register_window").style.display="block";

}
// jQuery.valid.setDefaul({
//     debug: true, success:"valid"
// });
$("#registerform").validate({
    rules: {
        password:{
            minLength:6
            
        }

        }
    }
})