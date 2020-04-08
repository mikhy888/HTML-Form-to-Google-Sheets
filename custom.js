/* form seleter and api sheet select */
var $form = $('form#c-form'),
    url = '[google sheet api url]';
    
    
/* serializing contact form */
$.fn.serializeObject = function() {
	var o = {};
	var a = this.serializeArray();
	$.each(a, function() {
		if (o[this.name]) {
			if (!o[this.name].push) {
				o[this.name] = [o[this.name]];
			}
			o[this.name].push(this.value || '');
		} else {
			o[this.name] = this.value || '';
		}
	});
	return o;
};

// email vallidation
function validateEmail($email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test( $email );
}

// number only inpu field
function setInputFilter(textbox, inputFilter) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
    textbox.addEventListener(event, function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  });
}

// number only input field init
setInputFilter(document.getElementById("intTextBox"), function(value) {
  return /^-?\d*$/.test(value); });
  
 //form validation and submission to gogole sheet
	$(".submit").click(function(){
	    $('.error').text("");
	    if( $('[name ="name"]').val() == "" ) {
	      $('[name ="name"]').next(".error").text("Please enter the name!");
	      return false;
	    } else if( $('[name ="email"]').val() == "" ) {
	      $('[name ="email"]').next(".error").text("Please enter the email!");
	      return false;
	    } else if( !validateEmail($('[name ="email"]').val()) ) {
	      $('[name ="email"]').next(".error").text("Please enter a valid email!");
	      return false;
	    } else if( $('[name ="phone"]').val() == "" ) {
	      $('[name ="phone"]').next('.error').text("Please enter mobile number!");
	      return false;
	    } else if(grecaptcha.getResponse() == "") {
	      $('.c-error').text("Please check captcha!");
	      return false;
	    }else {
	       
          var jqxhr = $.ajax({
            url: url,
            method: "GET",
            dataType: "json",
            data: $form.serializeObject()
          })
          .done(function(textStatus){
            if (textStatus.result ) {
                 return true;
            }
          });
          
	    }
  });

