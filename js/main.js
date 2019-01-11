/*=========================================

Template Name: Daizy - Personal Portfolio Template
Author: Theme_Choices
Version: 1.0
Design and Developed by: Theme_Choices

=========================================*/

(function($) {
    "use strict";

    var $window = $(window),
        $body = $('body');
		
	    /*=============================
                Sticky Header Background
    ==============================*/	
				
		$(window).on("scroll", function() {
			if($(window).scrollTop() > 50) {
				$(".home-header").addClass("home-header-new");
			} else {
				//remove the background property so it comes transparent again (defined in your css)
			   $(".home-header").removeClass("home-header-new");
			}
		});

    /*=============================
                Smoothscroll js
    ==============================*/
    $('.banner-btn').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 70
        }, 1000);
        event.preventDefault();
    });

    /*=============================
                PRELOADER JS
    ==============================*/

    $(window).on('load', function() {
        $('.preloader').fadeOut(1000);
    });

	
    /*=============================
            JQUERY FORM VALIDATION
    ==============================*/
    $("form").validate();

    /*==========================
            Back To Top
    ============================*/
    $(".scrollup").hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 400) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
    $('.scrollup').on('click', function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
	
		/*===================================
           Slider Items
     ====================================*/
    $(".carousel-single-item").owlCarousel({
        loop:true,
		center: true,
        nav:true,
        dots:true,
        autoplay:true,
        autoplayHoverPause:true,
		autoplayTimeout:2000,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		 responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }   
	});
	

    /*===================================
           Owl Carousel Works List
    ====================================*/
    $(".work-list").owlCarousel({
        loop: true,
		margin:20,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    /*=============================
            WOW js
    ==============================*/
    new WOW({
        mobile: false
    }).init();

    /*=============================
            MOBILE MENU
    ==============================*/

    $('nav#mobile-nav').meanmenu({
        siteLogo: "<a href='index.html'><img src='images/header-banner/header-logo.png' /></a>"
    });
	
	    /*=========================================
                jQuery Video magnific
    =======================================*/  
	
	    $('.video-play').each(function () {
        $(this).magnificPopup({
            type: 'iframe'
        });
        $.extend(true, $.magnificPopup.defaults, {
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: 'http://www.youtube.com/embed/%id%?autoplay=1'
                    }
                }
            }
        });
    });
	
	
})(jQuery);