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

//submitting to google sheet
var jqxhr = function() {
    $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: $form.serializeObject()
      });/*.success(function(value){
          if(value.result == 'success') {
              window.location = "[location url]";
          }
      });*/
}
  
 //form validation and submission to gogole sheet
$(document).ready(function(){
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
	        
		/*submitting for sending mail*/
		$.ajax({
		   type: "POST",
		   url: "ajaxsubmit.php",
		   data: $form.serializeObject(),
		   cache: false,
		   success: function(result){
		       jqxhr();
		       setTimeout(function(){
			window.location = "[location url]";    
		       },200);
		    }
		});
		    
          	return false;
         	
	    }
  });
	

});

