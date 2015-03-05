$(function(){
		$(".circle").click(
			function(){
				//console.info($(".block2").position().top);

				$('html, body').animate({
			        scrollTop: $(".block2").position().top
			    }, 500);
			}
		)
		$(".block2").click(
			function(){
				//console.info($(".block2").position().top);

				$('html, body').animate({
			        scrollTop: 0
			    }, 500);
			}
		)

jQuery.extend(jQuery.validator.messages, {
        required: "Это поле необходимо заполнить.",
        remote: "Пожалуйста, введите правильное значение.",
        email: "Пожалуйста, введите корретный адрес электронной почты.",
        url: "Пожалуйста, введите корректный URL.",
        date: "Пожалуйста, введите корректную дату.",
        dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
        number: "Пожалуйста, введите число.",
        digits: "Пожалуйста, вводите только цифры.",
        creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
        equalTo: "Пожалуйста, введите такое же значение ещё раз.",
        accept: "Пожалуйста, выберите файл с правильным расширением.",
        maxlength: jQuery.validator.format("Пожалуйста, введите не больше {0} символов."),
        minlength: jQuery.validator.format("Пожалуйста, введите не меньше {0} символов."),
        rangelength: jQuery.validator.format("Пожалуйста, введите значение длиной от {0} до {1} символов."),
        range: jQuery.validator.format("Пожалуйста, введите число от {0} до {1}."),
        max: jQuery.validator.format("Пожалуйста, введите число, меньшее или равное {0}."),
        min: jQuery.validator.format("Пожалуйста, введите число, большее или равное {0}.")
});
		$("form").validate({

	       rules:{

	            email:{
	                required: true,
	                minlength: 4,
	                email:true,
	            },

	            phone:{
	                required: true,
	                minlength: 6,
	                maxlength: 16,
	                digits:true,
	            },
	       },

	       messages:{

	            email:{
	                required: "Это поле обязательно для заполнения",
	                minlength: "email должен быть минимум 4 символа",

	            },

	            phone:{
	                required: "Это поле обязательно для заполнения",
	                minlength: "телефон должен быть минимум 6 цифр",
	                maxlength: "телефон должен быть максимум 16 цифр",
	            },

	       }

	    });

	    $( ".form" ).submit(function( event ) {
		  
			if($('.error').length == 0)
		     {
		      alert( "Ваша заявка принята, форма заполнена верно" );
		     }
		  event.preventDefault();
		});

})