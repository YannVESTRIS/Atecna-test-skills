//Constants
var strNomDefaultVal = "Votre nom",
strPrenomDefaultVal = "Votre prénom",
strEmailDefaultVal = "Votre adresse E-mail",
strDemandeDefaultVal = "Expliquez ici votre demande...",
strNomAttrName = "nom",
strPrenomAttrName = "prenom",
strEmailAttrName = "email",
strDemandeAttrName = "demande";
	
$(document).ready ( function () {
	//Set fields default values
	$("input[type='text'], textarea").each(function () {
		if ($(this).attr("name") === strNomAttrName) {
			$(this).val(strNomDefaultVal);
		}
		else if ($(this).attr("name") === strPrenomAttrName) {
			$(this).val(strPrenomDefaultVal);
		}
		else if ($(this).attr("name") === strEmailAttrName) {
			$(this).val(strEmailDefaultVal);
		}
		else if ($(this).attr("name") === strDemandeAttrName) {
			$(this).val(strDemandeDefaultVal);
		}		
	});
	
	//Hide form validation alerts
	$("form p.required").hide();
	
	//Emptying fields on focus
	$("input[type='text'], textarea").each(function () {
		$(this).focus(function () {
			if ($(this).val() === strNomDefaultVal ||
			$(this).val() === strPrenomDefaultVal ||
			$(this).val() === strEmailDefaultVal ||
			$(this).val() === strDemandeDefaultVal) {
				$(this).val('');
			}
		});
	});

	//Populate fields on blur
	$("input[type='text'], textarea").each(function () {
		if ($(this).val() === strNomDefaultVal) {
			$(this).blur (function () {
				if (!$(this).val()) {
					$(this).val(strNomDefaultVal);
				}
			});
		}
		else if ($(this).val() === strPrenomDefaultVal) {
			$(this).blur (function () {
				if (!$(this).val()) {
					$(this).val(strPrenomDefaultVal);
				}
			});
		}
		else if ($(this).val() === strEmailDefaultVal) {
			$(this).blur (function () {
				if (!$(this).val()) {
					$(this).val(strEmailDefaultVal);
				}
			});
		}	
		else if ($(this).val() === strDemandeDefaultVal) {
			$(this).blur (function () {
				if (!$(this).val()) {
					$(this).val(strDemandeDefaultVal);
				}
			});
		}			
	});
	
	//Form validation
	$("form").submit(function (event) {
		$("input[type='text'], textarea").each(function () {
			//Display alert if field value is default
			if ($(this).val() == strNomDefaultVal) {
				$(this).next().show();
				event.preventDefault();				
			}
			else if ($(this).val() == strPrenomDefaultVal) {
				$(this).next().show();
				event.preventDefault();				
			}
			else if ($(this).val() == strEmailDefaultVal) {
				$(this).next().show();
				event.preventDefault();				
			}
			else if ($(this).val() == strDemandeDefaultVal) {
				$(this).next().show();
				event.preventDefault();				
			}
		});
	});
	//Hide alert if user start typing
	$("input[type='text'], textarea").keyup(function () {
		$(this).next().hide();
	});
});
