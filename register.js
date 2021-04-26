const users =[{
    username:"k",
    password:"k",
    fullname:"k k",
    email:"k@gmail.com",
    birthday:"14/01/1993"
}];


$(document).ready(function() {
	context = canvas.getContext("2d");

	
});

$(function() {

    $.validator.addMethod('userExist',function(value, element){
        return userNotExist(value);
    },'User name is already exist, please choose another name or login.')


    $.validator.addMethod('strongPassword' , function(value,element){
        return this.optional(element) || value.length>=6 && /\d/.test(value) && /[a-z]/i.test(value);
    
    }, 'Your password must be at least 6 characters long and contain one number and one char\'.')

    $.validator.addMethod( "lettersonly", function( value, element ) {
        return this.optional( element ) || /^[a-z\s]+$/i.test( value );
    }, "Letters only" )

    $("#register-form").validate({
        rules: {
            username:{
                required:true,
                userExist:true
            },
            email:{
                required: true,
                email:true
            },
            password:
            {
                required:true,
                strongPassword:true
            },
            fullname:{
                
                lettersonly:true
            },
            birthday:{
                required:true
            }


        },
        messages: {
            name:{
                required: "Please enter a user name",
               
            },
            email:
            {
                required: 'Please enter an email address.',
                email: 'Please enter a <em>valid</em> email address.'

            }
        }

    });
})
$(function() {
    $('#submit-button').prop('disabled',true);
    $('#password').keyup(function(){
        if ($(this).val() != ''){
            $('#submit-button').prop('disabled',false);
        }
    });
})

function addUser()
{
    if($('#register-form').valid()){
        users.push({
            username:$('#username').val(),
            password:$('#password').val(),
            fullname:$('#fullname').val(),
            email:$('#email').val(),
            birthday:new Date($('#birthday').val())
            

        });
        
        //remove the input fields
        $("#username").val("");
        $('#password').val("");
        $('#fullname').val("");
        $('#email').val("");
        $('#birthday').val("");
        switchTosettings();
        
        
    }

} 
//func return false if exist name
//if name is valid (there is no user with same name) return true
function userNotExist(newUser){
    for(var i=0; i < users.length; i++ ){
        if(users[i].username == newUser){
            return false;
        }
    }
    return true;
};



