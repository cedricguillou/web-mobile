window.onload = function() {

	var mailInput = document.getElementById("mail");

	mailInput.onfocus = function() {

		if ( mailInput.value == "e-mail" ) {
			mailInput.value = "";
		}

	}

	mailInput.onblur = function() {

		if ( mailInput.value == "") {
			mailInput.value = "e-mail";
		}
	})
	
}