var jqueryNoConflict = jQuery.noConflict();
jqueryNoConflict(function($) {
    $(document).ready(function(){
        $('.rotate-device__button-close').on('click',function(){
            $('.rotate-device').hide();
        });
    });
});