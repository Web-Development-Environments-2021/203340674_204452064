
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

    
    

}
