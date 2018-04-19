var jqueryNoConflict = jQuery.noConflict();
jqueryNoConflict(function($) {
    $(document).ready(function() {
        tooltips = ['Contact us', 'Location', 'Footer'];
        var initFullpage = function() {
            if ($(window).width() > 768 || $(window).width() < 321) {
                $('#footer-mobile .footer').appendTo('.footer-section');
                $('#location-mobile .contact-info').appendTo('.contact-us-content__detail__form');
                $('#footer-mobile, #location-mobile').appendTo('body');
            } else {
                $('#footer-mobile, #location-mobile').appendTo('#fullpage');
                $('.footer-section .footer').appendTo('#footer-mobile');
                $('.footer-section .contact-info').appendTo('#location-mobile');
            }
            $('#fullpage').fullpage({
                anchors: ['contact-us', 'location', 'footer'],
                navigation: true,
                navigationPosition: 'right',
                normalScrollElements: '.selectize-dropdown',
                // responsiveHeight: 500,
                responsiveWidth: 321,
                verticalCentered: false,
                normalScrollElements: '.mCustomScrollBox, .selectize-dropdown',
                navigationTooltips: tooltips,
                onLeave: function(index, nextIndex, direction) {
                    switch (index) {
                        case 1:
                            $('.contact-us').hide();
                            $('*').filter(function() {
                                return $(this).data('tooltipsterNs');
                            }).tooltipster('hide');
                            break;
                        default:
                            break;
                    }
                },
                afterLoad: function(anchorLink, index) {
                    $('.mobile-pagination > .section-name').text(tooltips[index - 1]);
                    $('.mobile-pagination .section-number').text(index + '/' + $('.fp-section').length);
                    $('.fixed-tooltip').text(tooltips[index - 1]);
                    $('.fp-section').length === 1 ? $('#fp-nav').hide() : $('#fp-nav').show(); 
                    switch (index) {
                        case 1:
                        $('.contact-us').show();
                            break;
                        default:
                            break;
                    }
                },
                afterResponsive: function(isResponsive) {
                    //$.fn.fullpage.destroy('all');
                },
                afterResize: function () {
                    $.fn.fullpage.setResponsive($.fn.isOverflow());
                }
            });
        }
        window.addEventListener('scroll', $.fn.blurHeader);
        // initFullpage()
        // $.fn.fullpage.setResponsive($.fn.isOverflow());
        
        // $(window).resize(function () {
        //     if($(document.activeElement).attr('type') === 'text' || $(document.activeElement).attr('id') === 'enquiry') return;
        //     $.fn.fullpage.destroy('all');
        //     initFullpage();
        //     $.fn.fullpage.setResponsive($.fn.isOverflow());
        // });
    });
});