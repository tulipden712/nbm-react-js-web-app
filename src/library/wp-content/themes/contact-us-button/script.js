var jqueryNoConflict = jQuery.noConflict();
jqueryNoConflict(function($) {
    $(document).ready(function(){
        var contactUsButton = function() {
			$(window).scroll(function() {
				if ( $(this).scrollTop() > 800 ) {
					$('.button-contact-us').addClass('show');
				} else {
					$('.button-contact-us').removeClass('show');
				}
			});
	
			$('.button-contact-us').on('click', function() {
				/*$( "#aa-contact-us-form" ).dialog({
					resizable: false,
					draggable: false,
					modal: true,
					width: 'auto',
					open: function(){
						$("body").css("overflow", "hidden");
						try {
							$.fn.fullpage.setMouseWheelScrolling(false);
						} catch (error) {}
					},
					close: function(){
						$("body").css("overflow", "visible");
						try {
							$.fn.fullpage.setMouseWheelScrolling(true);
						} catch (error) {}
					}
				});*/
			});

			$('.aavn-dialog-close').click(function(){
				$('#aa-contact-us-form').dialog('close');
			});
        };
        
        contactUsButton();
    });
});