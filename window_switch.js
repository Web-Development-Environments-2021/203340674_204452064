
function switchToLogin(){
    $('#windows').children().hide();
    $('#login_window').show();
}

function switchToRegister(){
    $('#windows').children().hide();
    $('#register_window').show();
}

function switchToGame(){
    $('#windows').children().hide();
    $('#game_window').show();
    $("#settings_window").show();
    $('#settingsbutton').hide();
    $('#randombutton').hide();
    $('#pForchooseKey').hide();
    $('#pForchooseBalls').hide();
    $('#pForchoosecolor').hide();
    $('#pForchoosetime').hide();
    $('#pForchoosemanster').hide();
    readOnlyStettings();
    Start();
}



function switchToWelcome(){
    $('#windows').children().hide();
    $('#first_window').show();
}
function switchDialogAboout(){
    $('#modal-dialog').show()
    //esc press
    $(document).on('keydown',function(e)
    {
        if(e.keyCode == 27)
        {
            $('#modal-dialog').hide();
        }
    })
    //X button
    $('#close').click(function()
    {
        $('#modal-dialog').hide()
    })
    $(document).on('mousedown',function(e)
    {
            $('#modal-dialog').hide();
        
    })
    


}

function switchTosettings(){
    $('#windows').children().hide();
    $('#settings_window').show();
}

// function openGemeOverWindow(){
//     $('#myForm').show();
// }

