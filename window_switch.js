
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
    $('#settings_window').css({top:'40%' , left:'65%'});
    $("#settings_window").show();
    $('#settingsbutton').hide();
    $('#resetButton').hide();
    $('#randombutton').hide();
    $('#pForchooseKey').hide();
    $('#pForchooseBalls').hide();
    $('#pForchoosecolor').hide();
    $('#pForchoosetime').hide();
    $('#pForchoosemanster').hide();
    $('#press').hide();
    readOnlyStettings();
    Start();
}



function switchToWelcome(){
    $('#windows').children().hide();
    $('#first_window').show();
}
function switchDialogAboout(){
 
    $('#modal-dialog').show()
    // esc press
    // $(document).on('keydown',function(e)
    // {
    //     if(e.keyCode == 27)
    //     {
    //         $('#modal-dialog').hide();
    //     }
    // })
    //X button
    // $('#close').click(function()
    // {
    //     $('#modal-dialog').hide()
    // })
    // window.onclick = function(event){
    //     if(event.target == document.getElementById('modal-dialog')){
    //         $('#modal-dialog').hide()
    //     }
    // }
    // $(document).on('mousedown',function(e)
    // {
    //         $('#modal-dialog').hide();
        
    // })
    
}
$(function(){
	window.onclick = function(event) {

		if (event.target == document.getElementById("modal-dialog")) {
            
			closedialog();
			switchToWelcome();

		}
	  }
	window.addEventListener('keyup', function(event) {
		// If  ESC key was pressed...
		if (event.keyCode == 27) {
			// try close your dialog
			closedialog();
			switchToWelcome();
		}
	});
})
function closedialog(){
    document.getElementById("modal-dialog").style.display = "none";
    switchToWelcome();
}


function switchTosettings(){
    $('#windows').children().hide();
    $('#settings_window').show();
}


