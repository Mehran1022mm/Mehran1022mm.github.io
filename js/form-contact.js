$(document).ready((function(){$("form#contact-form").submit((function(){$("form#contact-form .error").remove();var t=!1;if($(".requiredField").each((function(){if(""==jQuery.trim($(this).val())){var a=$(this).prev("label").text();$(this).parent().append('<span class="error">You forgot to enter your '+a+"</span>"),$(this).addClass("inputError"),t=!0}else if($(this).hasClass("email")){if(!/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(jQuery.trim($(this).val()))){a=$(this).prev("label").text();$(this).parent().append('<span class="error">You entered an invalid '+a+"</span>"),$(this).addClass("inputError"),t=!0}}})),!t)return $("form#contact-form input.submit").fadeOut("normal",(function(){$(this).parent().append("")})),$("#loader").show(),$.ajax({url:"contact.php",type:"POST",data:new FormData(this),contentType:!1,cache:!1,processData:!1,success:function(t){$("form#contact-form").slideUp("fast",(function(){$(this).before('<div class="success">Thank you. Your Email was sent successfully.</div>'),$("#loader").hide()}))}}),!1}))}));