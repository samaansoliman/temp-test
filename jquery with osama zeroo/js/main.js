/*  global console, $  */

$(function () {

    'use strict';

    // calculate body padding top Depend on navbar Height

    $('body').css('paddingTop' , $('.navbar').innerHeight() );

    // scroll to element

    $('.navbar li a').click(function (e){

        e.preventDefault();

        $('html , body').animate({

            scrollTop: $('#' + $(this).data('scroll')).offset().top +1

        }, 1000);

    })


    // add active class on navbar link and remove siblings

    // مهم وفي شغل 

    $('.navbar li a').click(function () {

        $(this).addClass('active').parent().siblings().find('a').removeClass('active');

    });


    $(window).scroll(function () {

        // sync navbar links with sections


        $('.block').each(function () {

            if ($(window).scrollTop() > $(this).offset().top) {

                // console.log($(this).attr('id'));

                var blockID = $(this).attr('id')

                // $('.navbar a').removeClass('active');

                $('.navbar li a[data-scroll=" '+ blockID + '"]').addClass('active');

            }
        });
        

        // scroll to top button

        var scrollToTop = $('.scroll-to-tob')

        if ($(window).scrollTop() >= 1000 ) {

            if (scrollToTop.is(':hidden')) {

                scrollToTop.fadeIn('400');

            } 

        } else {

            scrollToTop.fadeOut('400');


        }

    });

        // click on scroll to tob go up == not work

        $('.scroll-to-tob').click(function (event) {

                event.preventDefault();
        
                $('html , body').animate({
        
                    scrollTop: 0
        
                }, 1000);

        });


        // popup

        $('.show-popup').click(function () {
            $('.popup').fadeIn();
        });


        $('.popup').click(function () {
            $(this).fadeOut();
        });


        $('.popup .inner').click(function (e) {
            e.stopPropagation();
        });


        $('.popup .close').click(function (e) {
            e.preventDefault();
            $('.popup').fadeOut();
        });










});

























